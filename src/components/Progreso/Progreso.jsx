import { useEffect, useState } from 'react';
import './Progreso.css';

function Progreso() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem('token');

      try {
        const res = await fetch('http://localhost:3000/perfil', {
          method: 'GET',
          headers: { 'Authorization': token }
        });

        const data = await res.json();

        if (res.ok) {
          setUser(data.data);
        } else {
          setError(data.message || 'Error al obtener usuario');
        }
      } catch (err) {
        console.error(err);
        setError('Error de conexión');
      }
    };

    fetchUser();
  }, []);

  if (error) return <p className="text-danger text-center mt-4">{error}</p>;

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
          <div className="progress-bar-fill" style={{ width: '65%' }}></div>
        </div>
        <p className="progress-text">65%</p>
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