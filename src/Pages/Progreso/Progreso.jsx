import { useEffect, useState, useContext } from 'react';
import { AuthContext } from "../../context/AuthContext";
import { useLogros } from '../../context/LogrosContext';
import './Progreso.css';

function Progreso() {
  const { user } = useContext(AuthContext); // suscritos al contexto para acceder a los datos del usuario
  const { logros, fetchLogros } = useLogros(); //  ya está disponible desde el context
  const logrosObtenidos = user?.achievements?.map(a => a.id) || [];
  const porcentaje = logros.length > 0
  ? Math.round((logrosObtenidos.length / logros.length) * 100)
  : 0;
  const primerosLogros = logros.slice(0, 4);
  const segundosLogros = logros.slice(4, 8); // asegúrate de tener al menos 8 logros


    useEffect(() => {
      fetchLogros();
  }, []);

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
          <div className="progress-bar-fill" style={{ width: `${porcentaje}%` }}></div>
        </div>
        <p className="progress-text">{porcentaje}%</p>
      </section>

     {/* Recompensas */}
      <section className="icon-section">
        <h3>Recompensas</h3>
        <div className="icon-grid">
          {primerosLogros.map((logro, index) => {
            const conseguido = logrosObtenidos.includes(logro.id);
            return (
            <>
              <div className="logro-wrapper">
                <img
                  key={index}
                  src={logro.image}
                  alt={logro.name}
                  title={logro.name}
                  style={{ opacity: conseguido ? 1 : 0.4 }}
                />
                <div className="tooltip">{logro.description}</div>
              </div>
            </>
            );
          })}
        </div>
      </section>

      {/* Insignias */}
      <section className="icon-section">
        <h3>Insignias</h3>
        <div className="icon-grid">
          {segundosLogros.map((logro, index) => {
            const conseguido = logrosObtenidos.includes(logro.id);
            return (
              <>
              <div className="logro-wrapper">
                <img
                  key={index}
                  src={logro.image}
                  alt={logro.name}
                  title={logro.name}
                  style={{ opacity: conseguido ? 1 : 0.4 }}
                />
                <div className="tooltip">{logro.description}</div>
              </div>
              </>
            );
          })}
        </div>
      </section>

    </main>
  );
}

export default Progreso;