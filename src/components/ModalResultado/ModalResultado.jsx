// src/components/ModalResultado.jsx
import React from 'react';
import './ModalResultado.css';

const ModalResultado = ({ palabra, descripcion, esCorrecto, intentos, onNext, onMenu }) => {
  return (
    <div className="modal-backdrop">
      <div className="modal-card">
        <h3 className="modal-title">
          {esCorrecto ? '✅ ¡Correcto!' : '❌ Incorrecto'}
        </h3>

        <p><strong>Palabra:</strong> {palabra}</p>
        <p>{descripcion}</p>

        {!esCorrecto && (
          <p><strong>Intentos:</strong> {intentos}</p>
        )}

        <div className="modal-buttons">
          <button className="btn btn-success" onClick={onNext}>
            {esCorrecto ? 'Siguiente palabra' : 'Intentar de nuevo'}
          </button>
          <button className="btn btn-secondary" onClick={onMenu}>Menú principal</button>
        </div>
      </div>
    </div>
  );
};

export default ModalResultado;
