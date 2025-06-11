import React, { useState, useEffect } from 'react';
import './mathGame.css';
import { generateExpression, evaluateExpression, formatTime } from './utils';


export default function MathGame() {
  const [expression, setExpression] = useState(generateExpression());
  const [userAnswer, setUserAnswer] = useState('');
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(180); // 3 minutos

  useEffect(() => {
    if (timeLeft <= 0) return;
    const timer = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const correct = evaluateExpression(expression);
    if (correct !== null && parseFloat(userAnswer).toFixed(2) === correct.toFixed(2)) {
      setScore(prev => prev + 1);
    }
    setUserAnswer('');
    setExpression(generateExpression());
  };

  return (
    <div className="math-container">
      <h2>Juego de Matemáticas</h2>
      <div className="timer">⏰ {formatTime(timeLeft)}</div>
      <div className="expression">{expression}</div>

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
