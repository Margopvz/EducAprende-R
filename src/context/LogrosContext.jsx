// src/context/LogrosContext.jsx
import { createContext, useContext, useEffect, useState } from 'react';
import api from '../services/api'; // Axios con token preconfigurado

const LogrosContext = createContext();

export const useLogros = () => useContext(LogrosContext);

export const LogrosProvider = ({ children }) => {
  const [logros, setLogros] = useState([]);
  const [loading, setLoading] = useState(true);

  // GET /logros
  const fetchLogros = async () => {
  try {
    const res = await api.get('/logros');
    setLogros(res.data);
  } catch (err) {
    console.error('❌ Error al obtener logros:', err);
  } finally {
    setLoading(false);
  }
};

useEffect(() => {
  fetchLogros();
}, []);

  // Evalúa logros ganados según aciertos
  const evaluarLogros = (asignatura, aciertos) => {
    return logros.filter(
      (logro) =>
        logro.asignatura === asignatura &&
        typeof logro.requiredAciertos === 'number' &&
        aciertos >= logro.requiredAciertos
    );
  };

  // POST /progreso
  const enviarProgreso = async ({ asignatura, aciertos, intentos }) => {
    try {
      const response = await api.post('/progreso', {
        asignatura,
        aciertos,
        intentos
      });

      return response.data; // { mensaje, logrosDesbloqueados }
    } catch (error) {
      console.error('❌ Error al enviar progreso:', error);
      throw error;
    }
  };

  return (
    <LogrosContext.Provider
      value={{ logros, loading, evaluarLogros, enviarProgreso, fetchLogros }}
    >
      {children}
    </LogrosContext.Provider>
  );
};
