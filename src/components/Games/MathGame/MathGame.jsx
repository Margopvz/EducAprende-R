import { useState, useEffect } from 'react';
import { useLogros } from '../../../context/LogrosContext';
import './MathGame.css'
import { generateExpression, evaluateExpression, formatTime } from '../../../Data/mathGame';


export default function MathGame() {
  const { evaluarLogros, enviarProgreso } = useLogros();

  const [showAlert, setShowAlert] = useState(false);
  const [correctAnswer, setCorrectAnswer] = useState(null);
  const [expression, setExpression] = useState(generateExpression());
  const [userAnswer, setUserAnswer] = useState('');
  const [attempt, setAttempt] = useState(0);
  const [score, setScore] = useState(() => {
    const guardado = localStorage.getItem('mathGame_aciertos');
    return parseInt(guardado) > 0 ? parseInt(guardado) : 0;
  });
  const [timeLeft, setTimeLeft] = useState(() => {
    const guardado = localStorage.getItem('mathGame_tiempo');
    return parseInt(guardado) > 0 ? parseInt(guardado) : 180;
  }); // 3 minutos
const [logroDesbloqueado, setLogroDesbloqueado] = useState(null);



  const handleFinish = async () => {
    try {
      const resultado = await enviarProgreso({
        asignatura: 'matematicas',
        aciertos: score,
        intentos: attempt
      });

      console.log('✅ Resultado:', resultado);
      // Puedes mostrar un modal o notificación con resultado.logrosDesbloqueados
    } catch (err) {
      alert('Ocurrió un error al guardar tu progreso', err);
    }
  };

  useEffect(() => {
    if (timeLeft <= 0) {
      handleFinish();
      return;
    }
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        const tiempoNuevo = prev - 1;
        localStorage.setItem('mathGame_tiempo', tiempoNuevo);
        return tiempoNuevo;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  // Se guardan tiempo y aciertos en caso de recargar
  useEffect(() =>{
    localStorage.setItem('mathGame_aciertos', score)
     const nuevosLogros = evaluarLogros('matematicas', score);

  if (nuevosLogros.length > 0 && !logroDesbloqueado) {
    const logroNuevo = nuevosLogros.find(
      (l) => l.requiredAciertos === score // muestra solo el que acaba de desbloquear
    );

    if (logroNuevo) {
      setLogroDesbloqueado(logroNuevo); // Mostrar la alerta
      enviarProgreso({ asignatura: 'matematicas', aciertos: score, intentos: attempt });
    }
  }
  }, [score])

  const handleSubmit = (e) => {
    e.preventDefault();
    const correct = evaluateExpression(expression);
    setAttempt(attempt+1)
    if (correct !== null && parseFloat(userAnswer).toFixed(2) === correct.toFixed(2)) {
      setScore(prev => prev + 1);
      
      setShowAlert(false); // Oculta alerta si estaba visible
    } else {
      setCorrectAnswer(correct);
      setShowAlert(true);
    }
    setUserAnswer('');
    setExpression(generateExpression());
};

const reiniciarJuego = () => {
  setTimeLeft(180);
  setScore(0);
  localStorage.removeItem('mathgame_tiempo');
  localStorage.removeItem('mathgame_aciertos');
}

 


  return (
      <>
        <button
          className="terminar-btn d-none d-xl-block"
          onClick={handleFinish}
        >
          ⬅ Terminar juego
        </button>
      {logroDesbloqueado && (
  <div className="logro-alert">
    <img src={logroDesbloqueado.image} alt={logroDesbloqueado.name} />
    <div>
      <h3>🏆 ¡Logro desbloqueado!</h3>
      <p><strong>{logroDesbloqueado.name}</strong></p>
      <p>{logroDesbloqueado.description}</p>
    </div>
    <button onClick={() => setLogroDesbloqueado(null)}>Cerrar</button>
  </div>
)}

    <div className="math-container">
      <h2>Juego de Matemáticas</h2>
      <div className="timer">⏰ {formatTime(timeLeft)}</div>
      <div className="expression">{expression}</div>
      {showAlert && (
      <div className="alert">
        ❌ ¡Ups! La respuesta correcta era <strong>{correctAnswer}</strong>

        🧮 Recuerda respetar el <strong>orden de las operaciones</strong>:

        <em>Multiplicación (*) y División (/) van antes que Suma (+) y Resta (-)</em>
      </div>
)}
      {timeLeft > 0 ? (
        <form onSubmit={handleSubmit}>
          <input
            type="number"
            step="1"
            value={userAnswer}
            onChange={(e) => setUserAnswer(e.target.value)}
            required
            autoFocus
          />
          <button type="submit">Enviar</button>
        </form>
      ) : (
        <>
        <h3>🛑 Tiempo terminado</h3>
        <button type='button' onClick={reiniciarJuego}>Reiniciar juego</button>
        </>
      )}

      <div className="score">Correctas: {score}</div>
    </div>
    </>
  );
}
 