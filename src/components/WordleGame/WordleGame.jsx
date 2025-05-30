import React, { useState, useRef, useEffect } from 'react';
import './WordleGame.css';

const TARGET = 'PERRO';

const getLetterStatus = (word, guess) => {
  const status = Array(word.length).fill("absent");
  const wordArray = word.split('');
  const usedIndexes = [];

  guess.split('').forEach((letter, i) => {
    if (letter === word[i]) {
      status[i] = "correct";
      usedIndexes.push(i);
    }
  });

  guess.split('').forEach((letter, i) => {
    if (status[i] === "correct") return;

    const idx = wordArray.findIndex(
      (l, j) => l === letter && !usedIndexes.includes(j)
    );

    if (idx !== -1) {
      status[i] = "present";
      usedIndexes.push(idx);
    }
  });

  return status;
};

const Game = () => {
  const [attempts, setAttempts] = useState([]);
  const [currentInput, setCurrentInput] = useState('');
  const inputRef = useRef(null);

  const handleKeyDown = (e) => {
    if (e.key === 'Backspace') {
      setCurrentInput((prev) => prev.slice(0, -1));
    } else if (/^[a-zA-Z]$/.test(e.key)) {
      if (currentInput.length < 5) {
        setCurrentInput((prev) => prev + e.key.toUpperCase());
      }
    } else if (e.key === 'Enter') {
      if (currentInput.length === 5) {
        const result = getLetterStatus(TARGET, currentInput);
        setAttempts([...attempts, { guess: currentInput, status: result }]);
        setCurrentInput('');
      }
    }
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div
      className="container-fluid myWordle d-flex flex-column justify-content-center align-items-center min-vh-100"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      ref={inputRef}
    >
      <h2 className="text-white mb-4">Adivina la palabra</h2>

      <div className="game-grid">
        {/* Intentos anteriores */}
        {attempts.map((attempt, index) => (
          <div className="row gx-1 gy-1 mb-2" key={index}>
            {attempt.guess.split('').map((letter, idx) => (
              <div className="col p-0" key={idx}>
                <div className={`text-box ${attempt.status[idx]}`}>
                  {letter}
                </div>
              </div>
            ))}
          </div>
        ))}

        {/* Fila de entrada actual */}
        <div className="row gx-1 gy-1 mb-2">
          {[...Array(5)].map((_, idx) => (
            <div className="col p-0" key={idx}>
              <div className="text-box typing-box">
                {currentInput[idx] || ''}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Game;
