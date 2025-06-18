const Achievement = require("../models/Achievement");
const User = require("../models/User");

const updateProgress = async (req, res) => {
  console.log('REQ.USER:', req.user); // ⬅️ Esto te dice si el middleware funcionó

  const userId = req.userId;
  const { asignatura, aciertos, intentos } = req.body;

  try {
    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ error: 'Usuario no encontrado' });

    // Actualizar progreso por asignatura
    const progreso = user.progresoPorAsignatura[asignatura] || {
      respuestasCorrectas: 0,
      totalIntentos: 0
    };

    progreso.respuestasCorrectas += aciertos;
    progreso.totalIntentos += intentos;
    user.progresoPorAsignatura[asignatura] = progreso;

    // Buscar logros desde la base de datos
    const logrosBD = await Achievement.find({ game: asignatura });
    console.log(logrosBD)
    const nuevosLogros = [];

    for (const logro of logrosBD) {
      const yaLoTiene = user.achievements.some(l => l.id === logro.id.toString());
      const cumple =user.progresoPorAsignatura[asignatura].respuestasCorrectas >= logro.requiredAciertos;

      if (!yaLoTiene && cumple) {
        user.achievements.push({
          id: logro.id,
          date: new Date()
        });
        nuevosLogros.push(logro); // enviar al frontend
      }
    }

    await user.save();

    res.status(200).json({
      mensaje: 'Progreso actualizado',
      logrosDesbloqueados: nuevosLogros
    });
  } catch (error) {
    console.error('Error al actualizar progreso:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

const getLogros = async (req, res) => {
  try {
    const logros = await Achievement.find();
    res.status(200).json(logros);
  } catch (error) {
    console.error('Error al obtener logros:', error);
    res.status(500).json({ error: 'Error al obtener logros' });
  }
};

module.exports = {
  updateProgress,
  getLogros
};
