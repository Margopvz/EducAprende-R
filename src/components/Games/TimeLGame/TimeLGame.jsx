import React, { useState, useEffect, useRef } from 'react';
import './TimeLGame.css';
import confetti from 'canvas-confetti';
import { timelinePairs } from '../../../Data/timelineData'; 
import correctMP3 from '../../../assets/sounds/correct.mp3';
import wrongMP3 from '../../../assets/sounds/wrong.mp3'; 
import successMP3 from '../../../assets/sounds/success.mp3';

const TimeLGame = () => {
  const [leftItems, setLeftItems] = useState([]);
  const [rightItems, setRightItems] = useState([]);
  const [matches, setMatches] = useState({});
  const [selectedLeft, setSelectedLeft] = useState(null);
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);
  const [timeLeft, setTimeLeft] = useState(300);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [gameWon, setGameWon] = useState(false);
  const [showTryAgain, setShowTryAgain] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const intervalRef = useRef(null);

  const correctSound = useRef(new Audio(correctMP3));
  const wrongSound = useRef(new Audio(wrongMP3));
  const successSound = useRef(new Audio(successMP3));

  useEffect(() => {
    if (gameStarted && !gameOver) {
      intervalRef.current = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            clearInterval(intervalRef.current);
            setGameOver(true);
            setShowTryAgain(true);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(intervalRef.current);
  }, [gameStarted, gameOver]);

  useEffect(() => {
    if (Object.keys(matches).length === timelinePairs.length) {
      clearInterval(intervalRef.current);
      setGameWon(true);
      setGameOver(true);
      if (soundEnabled) successSound.current.play();
      confetti();

      if (300 - timeLeft <= 60) {
        setScore(prev => prev + 200);
      }
    }
  }, [matches]);

  const shuffleArray = array => [...array].sort(() => Math.random() - 0.5);

  const startGame = () => {
    setLeftItems(shuffleArray(timelinePairs));
    setRightItems(shuffleArray(timelinePairs.map(item => item.date)));
    setMatches({});
    setSelectedLeft(null);
    setScore(0);
    setLives(3);
    setTimeLeft(300);
    setGameOver(false);
    setGameWon(false);
    setGameStarted(true);
    setShowTryAgain(false);
  };

  const restartGame = () => startGame();

  const handleLeftClick = id => {
    if (gameOver) return;
    setSelectedLeft(id);
  };

  const handleRightClick = date => {
    if (gameOver || selectedLeft === null) return;

    const selectedEvent = leftItems.find(item => item.id === selectedLeft);
    if (selectedEvent.date === date) {
      setMatches(prev => ({ ...prev, [selectedLeft]: date }));
      setScore(prev => prev + 100);
      if (soundEnabled) correctSound.current.play();
      setSelectedLeft(null);
    } else {
      if (soundEnabled) wrongSound.current.play();
      setLives(prev => {
        const newLives = prev - 1;
        if (newLives === 0) {
          setGameOver(true);
          setShowTryAgain(true);
          clearInterval(intervalRef.current);
        }
        return newLives;
      });

      const element = document.getElementById(`left-${selectedLeft}`);
      if (element) {
        element.classList.add('shake', 'bg-danger');
        setTimeout(() => element.classList.remove('shake', 'bg-danger'), 500);
      }
    }
  };

  const toggleSound = () => {
    setSoundEnabled(prev => !prev);
  };

  return (
    <div className="timeline-game">
      <div className="header">
        <h2>
          <i className={`bi ${soundEnabled ? 'bi-volume-up-fill' : 'bi-volume-mute-fill'} mx-2`} onClick={toggleSound} />
          Historiconexión: Nivel 1
        </h2>
        <div className="info-bar">
          <span> 🏆 Puntaje: {score}</span>
          <span> ❤️ Vidas: {lives}</span>
          <span> ⏱️ Tiempo: {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}</span>
        </div>
      </div>

      {!gameStarted ? (
        <div className="start-container">
          <button className="btn btn-warning btn-lg start-button" onClick={startGame}>
            Iniciar Juego
          </button>
        </div>
      ) : (
        <div className="game-board">
          {/* Columna de eventos */}
          <div className="column events">
            {leftItems.map(item => (
              <div
                key={item.id}
                id={`left-${item.id}`}
                className={`item-box ${
                  matches[item.id] ? 'matched-event' :
                  selectedLeft === item.id ? 'selected' : ''
                }`}
                onClick={() => handleLeftClick(item.id)}
              >
                {item.event}
              </div>
            ))}
          </div>

          {/* Columna de fechas */}
          <div className="column years">
            {rightItems.map((date, index) => {
              const isMatched = Object.values(matches).includes(date);
              return (
                <div
                  key={index}
                  className={`item-box ${isMatched ? 'matched' : ''}`}
                  onClick={() => handleRightClick(date)}
                >
                  {date}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {gameOver && (
        <div className="end-message-box text-center mt-4">
          {gameWon ? (
            <h3 className="text-dark">🥳 ¡Felicidades! Pasaste al segundo nivel 🥳</h3>
          ) : (
            <h3 className="text-white">¡Se acabó el tiempo! 🙁</h3>
          )}
          <button className="btn btn-warning mt-2 restart-button" onClick={restartGame}>
            Reiniciar Juego
          </button>
          {showTryAgain && !gameWon && (
            <p className="mt-3 fs-5">🤩 Vuelve a intentarlo 🤩</p>
          )}
        </div>
      )}
    </div>
  );
};

export default TimeLGame;