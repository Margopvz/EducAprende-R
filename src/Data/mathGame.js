const OPERATORS = ['+', '-', '*', '/'];

export function generateRandomNumber() {
  return Math.floor(Math.random() * 10) + 1;
}

export function generateExpression() {
  const operators = ['+', '-', '*', '/'];
  const shuffledOperators = shuffleArray(operators);

  // Elegimos la posición donde irá la división
  const divisionIndex = shuffledOperators.indexOf('/');

  // Creamos los 5 números
  const numbers = [];

  for (let i = 0; i < 5; i++) {
    if (i === divisionIndex) {
      // División exacta: generar divisor y multiplicar por entero
      const divisor = generateRandomNumber();
      const quotient = generateRandomNumber();
      const dividend = divisor * quotient;
      numbers.push(dividend);
      numbers.push(divisor);
      i++; // Ya agregamos dos números
    } else {
      numbers.push(generateRandomNumber());
    }
  }

  // Construimos la expresión
  let expression = `${numbers[0]}`;
  for (let i = 0; i < 4; i++) {
    expression += ` ${shuffledOperators[i]} ${numbers[i + 1]}`;
  }

  return expression;
}



// Función auxiliar para barajar un array (Fisher-Yates)
function shuffleArray(array) {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}



export function evaluateExpression(expr) {
  try {
    const result = eval(expr);
    return parseFloat(result.toFixed(2));
  } catch {
    return null;
  }
}

export function formatTime(seconds) {
  const min = String(Math.floor(seconds / 60)).padStart(2, '0');
  const sec = String(seconds % 60).padStart(2, '0');
  return `${min}:${sec}`;
}
