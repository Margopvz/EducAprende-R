import { useState, useEffect } from 'react';
import './MathGame.css'
import { generateExpression, evaluateExpression, formatTime } from '../../../Data/mathGame';
import useSesionJuego from '../../../hooks/useSesionJuego';


export default function MathGame() {
  const [showAlert, setShowAlert] = useState(false);
  const [correctAnswer, setCorrectAnswer] = useState(null);
  const [expression, setExpression] = useState(generateExpression());
  const [userAnswer, setUserAnswer] = useState('');
  const [score, setScore] = useState(0);
  const [attempt, setAttempt] = useState(0);
  const [timeLeft, setTimeLeft] = useState(15); // 3 minutos

    const {
    guardarSesion
  } = useSesionJuego("matematicas");

  const terminarJuego = () => {
    guardarSesion({
      nuevoIntento: attempt,
      nuevoAcierto: score
    });

    console.log(score)
    console.log(attempt)
    if (score >= 3) {
      console.log("más de 3 aciertos!")
    }

  };


  useEffect(() => {
    if (timeLeft <= 0) {
      terminarJuego(); 
      return;
    }
    const timer = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

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



 


  return (
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
        <h3>🛑 Tiempo terminado</h3>
      )}

      <div className="score">Correctas: {score}</div>
    </div>
  );
}
 