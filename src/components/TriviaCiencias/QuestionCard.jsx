
import React from 'react';
import PropTypes from 'prop-types';
import './QuestionCard.css';

export default function QuestionCard({ pregunta, opciones, respuestaCorrecta, onSelect }) {
  return (
    <div className="questionCard">
      <p className="pregunta">{pregunta}</p>
      <div className="opciones">
        {opciones.map((op, idx) => (
          <button
            key={idx}
            className="boton"
            onClick={() => onSelect(op === respuestaCorrecta)}
          >
            {op}
          </button>
        ))}
      </div>
    </div>
  );
}


