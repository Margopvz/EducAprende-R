import { LOGROS } from '../../../src/Data/achievements.js'
import User from '../models/User.js';

const updateProgress = async (req, res) => {
  const userId = req.user._id;
  const { asignatura, aciertos, intentos, logrosDesbloqueados = [] } = req.body;

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

    // Agregar logros nuevos si no los tiene
    logrosDesbloqueados.forEach(idLogro => {
      const yaLoTiene = user.achievements.some(l => l.id === idLogro);
      if (!yaLoTiene) {
        const logroCompleto = LOGROS.find(l => l.id === idLogro);
        if (logroCompleto) {
          if (logroCompleto) {
            user.achievements.push({
              id: logroCompleto.id,
              date: new Date()
            });
          }
        }
      }
    });

    await user.save();

    res.status(200).json({ mensaje: 'Progreso actualizado', user });
  } catch (error) {
    console.error('Error al actualizar progreso:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

module.exports = {
  updateProgress,
}