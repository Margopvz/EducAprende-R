// File: src/pages/QuestionCard.jsx
import React from 'react';
import './QuestionCard.css';

export default function QuestionCard({ pregunta, opciones, respuestaCorrecta, imagen, onSelect, seleccion }) {
  return (
    <div className="card">
      {imagen && <img src={imagen} alt="ilustración" className="imagen-pregunta" />}
      <p className="pregunta">{pregunta}</p>
      <div className="opciones">
        {opciones.map((op, idx) => (
          <button
            key={idx}
            className={`boton ${seleccion && op === seleccion && op !== respuestaCorrecta ? 'incorrecta' : ''}`}
            onClick={() => onSelect(op, respuestaCorrecta)}
            disabled={!!seleccion}
          >
            {op}
          </button>
        ))}
      </div>
    </div>
  );
}

QuestionCard.propTypes = {
  pregunta: PropTypes.string.isRequired,
  opciones: PropTypes.arrayOf(PropTypes.string).isRequired,
  respuestaCorrecta: PropTypes.string.isRequired,
  imagen: PropTypes.string,
  onSelect: PropTypes.func.isRequired,
  seleccion: PropTypes.string,
};