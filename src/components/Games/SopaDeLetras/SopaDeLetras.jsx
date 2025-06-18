import React, { useState, useCallback, useEffect } from 'react';
import './SopaDeLetras.css';

const SopaDeLetras = () => {
  // Matriz 6x6
  const [letras] = useState([
    ['H', 'O', 'M', 'E', 'R', 'O'],
    ['B', 'R', 'E', 'A', 'D', 'E'],
    ['R', 'I', 'V', 'E', 'R', 'L'],
    ['M', 'O', 'O', 'N', 'S', 'A'],
    ['S', 'U', 'N', 'S', 'U', 'N'],
    ['S', 'A', 'L', 'U', 'T', 'E']
  ]);

  // Palabras a encontrar
  const [palabrasCorrectas] = useState([
    "HOME", "BREAD", "RIVER", "MOON", "SUN", "SALUTE"
  ]);

  const [seleccionadas, setSeleccionadas] = useState([]);
  const [encontradas, setEncontradas] = useState([]);
  const [mensaje, setMensaje] = useState('');
  const [intentos, setIntentos] = useState(3);
  const [juegoTerminado, setJuegoTerminado] = useState(false);
  const [mostrarAlerta, setMostrarAlerta] = useState(false);
  const [mensajeAlerta, setMensajeAlerta] = useState('');
  const [tipoAlerta, setTipoAlerta] = useState(''); // 'ganado' o 'perdido'

  const [estadoCeldas, setEstadoCeldas] = useState(
    letras.map(fila => fila.map(() => ({
      selected: false,
      correct: false
    })))
  );

  const pistas = {
    HOME: "Lugar donde vives",
    BREAD: "Alimento básico hecho de harina",
    RIVER: "Corriente natural de agua",
    MOON: "Satélite natural de la Tierra",
    SUN: "Astro que ilumina nuestro día",
    SALUTE: "Gestos al encontrarse con alguien"
  };

  // Obtener palabras no encontradas
  const palabrasNoEncontradas = palabrasCorrectas.filter(
    palabra => !encontradas.includes(palabra)
  );

  // Mostrar alerta final
  const mostrarAlertaFinal = (ganado) => {
    setJuegoTerminado(true);
    setTipoAlerta(ganado ? 'ganado' : 'perdido');
    
    if (ganado) {
      setMensajeAlerta('¡Felicidades! Has encontrado todas las palabras');
    } else {
      setMensajeAlerta('¡Se acabaron los intentos!');
    }
    
    setMostrarAlerta(true);
  };

  // Cerrar alerta
  const cerrarAlerta = () => {
    setMostrarAlerta(false);
  };

  // Verificar si se ganó el juego
  useEffect(() => {
    if (encontradas.length === palabrasCorrectas.length && palabrasCorrectas.length > 0) {
      mostrarAlertaFinal(true);
    }
  }, [encontradas, palabrasCorrectas.length]);

  const resetearSeleccion = useCallback(() => {
    setEstadoCeldas(prev => {
      const nuevoEstado = [...prev];
      seleccionadas.forEach(([fila, col]) => {
        nuevoEstado[fila][col] = { ...nuevoEstado[fila][col], selected: false };
      });
      return nuevoEstado;
    });
    setSeleccionadas([]);
  }, [seleccionadas]);

  const verificarPalabra = useCallback(() => {
    if (juegoTerminado) return;

    const palabraFormada = seleccionadas
      .map(([fila, col]) => letras[fila][col])
      .join('');

    if (palabrasCorrectas.includes(palabraFormada)) {
      if (!encontradas.includes(palabraFormada)) {
        setEstadoCeldas(prev => {
          const nuevoEstado = [...prev];
          seleccionadas.forEach(([fila, col]) => {
            nuevoEstado[fila][col] = { ...nuevoEstado[fila][col], correct: true, selected: false };
          });
          return nuevoEstado;
        });

        setMensaje(`¡Correcto! ${palabraFormada}`);
        setEncontradas(prev => [...prev, palabraFormada]);
      } else {
        setMensaje("Ya encontraste esta palabra");
        resetearSeleccion();
      }
    } else {
      const nuevosIntentos = intentos - 1;
      setIntentos(nuevosIntentos);
      
      if (nuevosIntentos <= 0) {
        mostrarAlertaFinal(false);
      } else {
        setMensaje(`Incorrecto. Te quedan ${nuevosIntentos} intentos`);
      }
      resetearSeleccion();
    }
  }, [seleccionadas, letras, palabrasCorrectas, encontradas, resetearSeleccion, intentos, juegoTerminado]);

  const handleClickCelda = (fila, col) => {
    if (estadoCeldas[fila][col].correct || juegoTerminado) return;

    if (estadoCeldas[fila][col].selected) {
      const nuevasSeleccionadas = seleccionadas.filter(
        ([f, c]) => !(f === fila && c === col)
      );
      setSeleccionadas(nuevasSeleccionadas);
      setEstadoCeldas(prev => {
        const nuevoEstado = [...prev];
        nuevoEstado[fila][col] = { ...nuevoEstado[fila][col], selected: false };
        return nuevoEstado;
      });
      return;
    }

    setSeleccionadas([...seleccionadas, [fila, col]]);
    setEstadoCeldas(prev => {
      const nuevoEstado = [...prev];
      nuevoEstado[fila][col] = { ...nuevoEstado[fila][col], selected: true };
      return nuevoEstado;
    });
  };

  const reiniciarJuego = () => {
    setSeleccionadas([]);
    setEncontradas([]);
    setMensaje('');
    setIntentos(3);
    setJuegoTerminado(false);
    setMostrarAlerta(false);
    setEstadoCeldas(
      letras.map(fila => fila.map(() => ({
        selected: false,
        correct: false
      })))
    );
  };

  return (
    <div className="sopa-de-letras-container">
      <h2 className="titulo">Sopa de Letras</h2>
      
      <div className="contador-intentos">
        Intentos restantes: {intentos}
      </div>

      <div className="contenido-juego">
        <div className="sopa-container">
          <table id="sopa">
            <tbody>
              {letras.map((fila, i) => (
                <tr key={`fila-${i}`}>
                  {fila.map((letra, j) => {
                    const celdaState = estadoCeldas[i][j];
                    const claseCelda = [
                      'celda',
                      celdaState.selected ? 'selected' : '',
                      celdaState.correct ? 'correct' : '',
                      juegoTerminado ? 'juego-terminado' : ''
                    ].join(' ').trim();

                    return (
                      <td
                        key={`celda-${i}-${j}`}
                        className={claseCelda}
                        onClick={() => handleClickCelda(i, j)}
                      >
                        {letra}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>

          <button
            onClick={verificarPalabra}
            disabled={seleccionadas.length === 0 || juegoTerminado}
            className="boton-verificar"
          >
            Verificar
          </button>
          
          {(juegoTerminado || encontradas.length === palabrasCorrectas.length) && (
            <button
              onClick={reiniciarJuego}
              className="boton-reiniciar"
            >
              Reiniciar Juego
            </button>
          )}
        </div>

        <div className="pistas-container">
          <h3>Pistas:</h3>
          <ul className="palabras-lista">
            {palabrasCorrectas.map((palabra, index) => (
              <li
                key={index}
                className={`palabra-item ${encontradas.includes(palabra) ? 'encontrada' : ''}`}
              >
                {pistas[palabra]}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="encontradas-container">
        <h3>Palabras encontradas ({encontradas.length}/{palabrasCorrectas.length}):</h3>
        <ul className="palabras-lista">
          {encontradas.map((palabra, index) => (
            <li key={index} className="palabra-item encontrada">
              {palabra}
            </li>
          ))}
        </ul>
      </div>

      {mensaje && <p className={`mensaje ${encontradas.includes(mensaje.replace(/¡Correcto! /, '')) ? 'exito' : 'error'}`}>{mensaje}</p>}

      {/* Alerta final mejorada */}
      {mostrarAlerta && (
        <div className="alerta-final">
          <div className={`alerta-contenido ${tipoAlerta}`}>
            <h3>{mensajeAlerta}</h3>
            
            {tipoAlerta === 'ganado' ? (
              <div className="resultado-final">
                <p className="felicitacion">¡Excelente trabajo! 🎉</p>
                <p>Has encontrado todas las palabras:</p>
                <ul className="palabras-encontradas">
                  {encontradas.map((palabra, index) => (
                    <li key={index}>{palabra}: {pistas[palabra]}</li>
                  ))}
                </ul>
              </div>
            ) : (
              <div className="resultado-final">
                <p className="mensaje-perdida">¡Sigue practicando! 💪</p>
                
                {encontradas.length > 0 && (
                  <>
                    <p>Palabras que encontraste:</p>
                    <ul className="palabras-encontradas">
                      {encontradas.map((palabra, index) => (
                        <li key={index}>{palabra}: {pistas[palabra]}</li>
                      ))}
                    </ul>
                  </>
                )}
                
                {palabrasNoEncontradas.length > 0 && (
                  <>
                    <p>Palabras que faltaron:</p>
                    <ul className="palabras-no-encontradas">
                      {palabrasNoEncontradas.map((palabra, index) => (
                        <li key={index}>{palabra}: {pistas[palabra]}</li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            )}
            
            <button onClick={reiniciarJuego} className="boton-alerta">
              Jugar de nuevo
            </button>
          </div>
        </div>
      )}

      <div className="instrucciones">
        <p>Selecciona letras contiguas y haz clic en "Verificar"</p>
        <p>Tienes 3 intentos para palabras incorrectas</p>
      </div>
    </div>
  );
};

export default SopaDeLetras;