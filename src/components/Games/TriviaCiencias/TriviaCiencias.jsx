/* TriviaCiencias.jsx */
import React, { useState, useEffect, useRef } from 'react';
import preguntas from '../../../Data/preguntasCiencias';
import QuestionCard from './QuestionCard'; // ruta correcta según tu proyecto
import './TriviaCiencias.css';

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
  const [xp, setXp] = useState(0);
  const [level, setLevel] = useState(1);
  const [levelUpMessage, setLevelUpMessage] = useState(null);

  const [selectedOption, setSelectedOption] = useState(null);
  const [feedback, setFeedback] = useState(null);
  const timeoutRef = useRef(null);

  const levelThresholds = Array.from({ length: 30 }, (_, i) => 5 * Math.pow(2, i));

  const gainXp = (amount) => {
    setXp((prevXp) => {
      let newXp = prevXp + amount;
      let currentLevel = level;
      let message = null;

      while (currentLevel - 1 < levelThresholds.length && newXp >= levelThresholds[currentLevel - 1]) {
        newXp -= levelThresholds[currentLevel - 1];
        currentLevel += 1;
        message = `🎉 ¡Felicidades! Alcanzaste el nivel ${currentLevel}`;
      }

      if (currentLevel !== level) {
        setLevel(currentLevel);
        setLevelUpMessage(message);
      }

      return newXp;
    });
  };

  useEffect(() => {
    setQuestions(shuffleArray(preguntas));
  }, []);

  const restartGame = () => {
    setQuestions(shuffleArray(preguntas));
    setCurrentIndex(0);
    setScore(0);
    setShowScore(false);
    setLevelUpMessage(null);
    setXp(0);
    setLevel(1);
    setSelectedOption(null);
    setFeedback(null);
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  const handleAnswer = (option) => {
    if (selectedOption !== null) return; // Ya respondió, ignorar

    const currentQuestion = questions[currentIndex];
    const isCorrect = option === currentQuestion.correcta;
    setSelectedOption(option);

    if (isCorrect) {
      setFeedback('¡Respuesta correcta! 🎉');
      setScore(prev => prev + 1);
      gainXp(0.5);
    } else {
      setFeedback(`Respuesta incorrecta. La respuesta correcta es: "${currentQuestion.correcta}".`);
    }

    // Avanzar automáticamente tras 1.5 segundos
    timeoutRef.current = setTimeout(() => {
      setSelectedOption(null);
      setFeedback(null);
      timeoutRef.current = null;

      const next = currentIndex + 1;
      if (next < questions.length) {
        setCurrentIndex(next);
      } else {
        setShowScore(true);
      }
    }, 1500);
  };

  if (!questions.length) return <div className="loading">Cargando juego...</div>;

  const current = questions[currentIndex];
  const currentThreshold = levelThresholds[level - 1] || 0;

  return (
    <div className="game-container">
      {!showScore ? (
        <>
          <div className="xp-bar-container">
            <span className="xp-label">XP:</span>
            <progress className="xp-progress" value={xp} max={currentThreshold}></progress>
            <span className="level-label">Nivel: {level}</span>
          </div>

          {levelUpMessage && (
            <div className="level-alert">
              {levelUpMessage}
            </div>
          )}

          <QuestionCard
            pregunta={current.pregunta}
            opciones={current.opciones}
            respuestaCorrecta={current.correcta}
            onSelect={handleAnswer}
            selectedOption={selectedOption}
            imagen={current.img}
            seleccion={selectedOption}
          />

          {feedback && (
            <div className={`feedback ${feedback.startsWith('¡Respuesta correcta') ? 'correct' : 'incorrect'}`}>
              {feedback}
            </div>
          )}
        </>
      ) : (
        <div className="score-wrapper">
          <h2 className="score-text">¡Tu puntaje: {score} de {questions.length}!</h2>
          <p className="xp-text">Experiencia acumulada en este nivel: {xp.toFixed(1)} XP</p>
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

