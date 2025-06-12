/* File: src/pages/gameciencias.jsx */
import React, { useState, useEffect } from 'react';
import QuestionCard from './QuestionCard';
import preguntas from '../../Data/preguntasCiencias';
import './TriviaCiencias.css';

// Función para desordenar arrays
function shuffleArray(array) {
  return array
    .map(item => ({ item, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ item }) => item);
}

export default function GameCiencias({ onBack }) {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  // -- Lógica de experiencia y niveles --
  const [xp, setXp] = useState(0); // XP acumulada, persiste entre rondas
  const [level, setLevel] = useState(0); // Usuario empieza en nivel 0
  const levelThresholds = Array.from({ length: 30 }, (_, i) => 5 * Math.pow(2, i));

  const updateLevel = (xpValue) => {
    let newLevel = 0;
    for (let i = 0; i < levelThresholds.length; i++) {
      if (xpValue >= levelThresholds[i]) newLevel = i + 1;
    }
    setLevel(newLevel);
  };
  // -- Fin lógica de experiencia y niveles --

  // Mezcla inicial de preguntas
  useEffect(() => {
    setQuestions(shuffleArray(preguntas));
  }, []);

  // Reinicia preguntas e índice, conserva XP y nivel
  const restartGame = () => {
    setQuestions(shuffleArray(preguntas));
    setCurrentIndex(0);
    setScore(0);
    setShowScore(false);
  };

  const handleAnswer = (isCorrect) => {
    // Cada respuesta da 0.5 XP
    setXp(prev => {
      const newXp = prev + 0.5;
      updateLevel(newXp);
      return newXp;
    });
    if (isCorrect) setScore(prev => prev + 1);
    const next = currentIndex + 1;
    if (next < questions.length) {
      setCurrentIndex(next);
    } else {
      setShowScore(true);
    }
  };

  if (!questions.length) return <div className="loading">Cargando juego...</div>;
  const current = questions[currentIndex];

  return (
    <div className="game-container">
      {!showScore ? (
        <QuestionCard
          pregunta={current.pregunta}
          opciones={current.opciones}
          respuestaCorrecta={current.correcta}
          onSelect={handleAnswer}
        />
      ) : (
        <div className="score-wrapper">
          <h2 className="score-text">¡Tu puntaje: {score} de {questions.length}!</h2>
          <p className="xp-text">Experiencia: {xp.toFixed(1)} XP</p>
          <p className="level-text">Nivel alcanzado: {level}</p>
          <div className="actions">
            <button className="boton-retry" onClick={restartGame}>Jugar de nuevo</button>
            <button className="boton-back" onClick={onBack}>Volver al menú</button>
          </div>
        </div>
      )}
    </div>
  );
}
