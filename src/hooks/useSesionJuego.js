import { useState, useEffect } from 'react';

/**
 * @param {string} asignatura - Ej: "matematicas", "historia"
 */
export default function useSesionJuego(asignatura) {
  const storageKey = `sesionActual_${asignatura}`;

  const [intentos, setIntentos] = useState(0);
  const [aciertos, setAciertos] = useState(0);
  const [enCurso, setEnCurso] = useState(true);

  // Cargar sesión guardada al montar el componente
  useEffect(() => {
    const sesionGuardada = JSON.parse(localStorage.getItem(storageKey));
    if (sesionGuardada?.enCurso) {
      setIntentos(sesionGuardada.intentos || 0);
      setAciertos(sesionGuardada.aciertos || 0);
      setEnCurso(true);
    } else {
      iniciarSesion();
    }
  }, [storageKey]);

  const guardarSesion = ({ nuevoIntento = 0, nuevoAcierto = 0 } = {}) => {
    const nuevaSesion = {
      asignatura,
      intentos: intentos + nuevoIntento,
      aciertos: aciertos + nuevoAcierto,
      enCurso: true,
    };

    localStorage.setItem(storageKey, JSON.stringify(nuevaSesion));
    setIntentos(nuevaSesion.intentos);
    setAciertos(nuevaSesion.aciertos);
  };

  const iniciarSesion = () => {
    const nueva = {
      asignatura,
      intentos: 0,
      aciertos: 0,
      enCurso: true,
    };

    localStorage.setItem(storageKey, JSON.stringify(nueva));
    setIntentos(0);
    setAciertos(0);
    setEnCurso(true);
  };

  const finalizarSesion = () => {
    localStorage.removeItem(storageKey);
    setEnCurso(false);
  };

  return {
    intentos,
    aciertos,
    enCurso,
    guardarSesion,
    finalizarSesion,
    reiniciarSesion: iniciarSesion,
  };
}
