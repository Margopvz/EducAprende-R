import React, { useState, useCallback } from 'react';
import './SopaDeLetras.css';

const SopaDeLetras = () => {
  // Matriz 7x7
  const [letras] = useState([
    ['H', 'O', 'M', 'E', 'R', 'O', 'L'],
    ['O', 'B', 'R', 'E', 'A', 'D', 'E'],
    ['R', 'I', 'V', 'E', 'R', 'L', 'M'],
    ['R', 'A', 'T', 'M', 'O', 'O', 'N'],
    ['E', 'S', 'U', 'N', 'S', 'U', 'N'],
    ['S', 'A', 'L', 'U', 'T', 'E', 'S'],
    ['B', 'O', 'O', 'K', 'S', 'A', 'Y']
  ]);

  const [palabrasCorrectas] = useState([
    "HOME", "BREAD", "RIVER", "MOON", "SUN", "SALUTE", "BOOKS"
  ]);

  const [seleccionadas, setSeleccionadas] = useState([]);
  const [encontradas, setEncontradas] = useState([]);
  const [mensaje, setMensaje] = useState('');

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
    SALUTE: "Gestos al encontrarse con alguien",
    BOOKS: "Fuente de conocimiento y entretenimiento"
  };

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
      setMensaje("Intenta de nuevo");
      resetearSeleccion();
    }
  }, [seleccionadas, letras, palabrasCorrectas, encontradas, resetearSeleccion]);

  const handleClickCelda = (fila, col) => {
    if (estadoCeldas[fila][col].correct) return;

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

  return (
    <div className="sopa-de-letras-container">
      <h2 className="titulo">Sopa de Letras</h2>

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
                      celdaState.correct ? 'correct' : ''
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
            disabled={seleccionadas.length === 0}
            className="boton-verificar"
          >
            Verificar
          </button>
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

      <div className="instrucciones">
        <p>Selecciona letras contiguas y haz clic en "Verificar"</p>
      </div>
    </div>
  );
};

export default SopaDeLetras;