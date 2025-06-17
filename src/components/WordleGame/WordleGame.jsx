import React, { useState, useRef, useEffect } from 'react';
import './WordleGame.css';
import {palabras5Letras} from '../../Data/wordle'
import ModalResultado from '../ModalResultado/ModalResultado';



const Game = () => {
  const [attempts, setAttempts] = useState([]);
  const [intentos, setIntentos] = useState(0);
  const [currentInput, setCurrentInput] = useState('');
  const inputRef = useRef(null);

  const [palabraActual, setPalabraActual] = useState(getNuevaPalabra());
  const [palabrasRestantes, setPalabrasRestantes] = useState(
  palabras5Letras.filter(p => p.palabra !== palabraActual.palabra)
);
  const [juegoTerminado, setJuegoTerminado] = useState(false);
  const [mostrarModal, setMostrarModal] = useState(false);

  function getNuevaPalabra() {
    return palabras5Letras[Math.floor(Math.random() * palabras5Letras.length)];
  }


  const getLetterStatus = (word, guess) => {
    const wordArray = word.palabra.split("")
    guess= guess.toLowerCase();
    const status = Array(word.palabra.length).fill("absent");
    
    const usedIndexes = [];

    guess.split('').forEach((letter, i) => {
      console.log(wordArray[i])
      console.log(letter)
      if (letter === wordArray[i]) {
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

  const handleKeyDown = (e) => {
    if (e.key === 'Backspace') {
      setCurrentInput((prev) => prev.slice(0, -1));
    } else if (/^[a-zA-Z]$/.test(e.key)) {
      if (currentInput.length < 5) {
        setCurrentInput((prev) => prev + e.key.toUpperCase());
      }
    } else if (e.key === 'Enter') {
      if (currentInput.length === 5 && !juegoTerminado) {
      const result = getLetterStatus(palabraActual, currentInput);
      setAttempts([...attempts, { guess: currentInput, status: result }]);

      if (currentInput.toLowerCase() === palabraActual.palabra.toLowerCase()) {
        setJuegoTerminado(true);
        setMostrarModal(true);
      } else {
        const nuevosIntentos = intentos + 1;
        setIntentos(nuevosIntentos);

        if (nuevosIntentos >= 3) {
          // Juego terminado por fallar 3 veces
          setJuegoTerminado(true);
          setMostrarModal(true);
        } else {
          setCurrentInput('');
        }
      }
    }
  }
  }

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
      {palabraActual.pista &&(
        <p className="text-white">{palabraActual.pista} </p>
      )}

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
        {!juegoTerminado && (
          <div className="row gx-1 gy-1 mb-2">
          {[...Array(5)].map((_, idx) => (
            <div className="col p-0" key={idx}>
              <div className="text-box typing-box">
                {currentInput[idx] || ''}
              </div>
            </div>
          ))}
        </div>
        )}
      </div>

      {mostrarModal && (
        <ModalResultado
          palabra={palabraActual.palabra}
          descripcion={palabraActual.descripcion}
          esCorrecto={currentInput.toLowerCase() === palabraActual.palabra.toLowerCase()}
          intentos={intentos}
          onNext={() => {
            if (palabrasRestantes.length === 0) {
              alert("🎉 ¡Has completado todas las palabras!");
              return;
            }
            const siguiente = palabrasRestantes[Math.floor(Math.random() * palabrasRestantes.length)];
            setPalabraActual(siguiente);
            setPalabrasRestantes(palabrasRestantes.filter(p => p.palabra !== siguiente.palabra));
            setAttempts([]);
            setCurrentInput('');
            setIntentos(0);
            setJuegoTerminado(false);
            setMostrarModal(false);
          }}
          onMenu={() => {
            window.location.href = '/';
          }}
        />
      )}

     

    </div>


  );
};

export default Game;
