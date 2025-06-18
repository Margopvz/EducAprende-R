import { useEffect, useState, useContext } from 'react';
import { AuthContext } from "../../context/AuthContext";
import './Progreso.css';

function Progreso() {
  const { user } = useContext(AuthContext); // suscritos al contexto para acceder a los datos del usuario

  return (
    <main className="progreso-container">
      <section className="user-section">
        <h1>Bienvenid@, {user?.name || '...'}</h1>
      </section>

      {/* Logros */}
      <section className="logros-section">
        <div className="logros-header">
          <h2>Logros</h2>
          <span>Progreso</span>
        </div>
        <div className="progress-bar-bg">
          <div className="progress-bar-fill" style={{ width: '0%' }}></div>
        </div>
        <p className="progress-text">0%</p>
      </section>

      {/* Recompensas */}
      <section className="icon-section">
        <h3>Recompensas</h3>
        <div className="icon-grid">
          <img src="/src/assets/img/Medallas.jpg" alt="Medalla" />
          <img src="/src/assets/img/Moneda.jpg" alt="Moneda" />
          <img src="/src/assets/img/Trofeo.jpg" alt="Trofeo" />
          <img src="/src/assets/img/Candado.jpg" alt="Candado" />
        </div>
      </section>

      {/* Insignias */}
      <section className="icon-section">
        <h3>Insignias</h3>
        <div className="icon-grid">
          <img src="/src/assets/img/Sol.jpg" alt="Sol" />
          <img src="/src/assets/img/Libro.jpg" alt="Libro" />
          <img src="/src/assets/img/Ampolleta.jpg" alt="Ampolleta" />
          <img src="/src/assets/img/Estrellas.jpg" alt="Estrellas" />
        </div>
      </section>
    </main>
  );
}

export default Progreso;