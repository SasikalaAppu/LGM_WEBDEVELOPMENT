let displayValue = '';

function appendKey(key) {
  displayValue += key;
  document.getElementById('displayScreen').value = displayValue;
}

function calculate() {
  try {
    const result = evaluateExpression(displayValue);
    displayValue = result.toString();
    document.getElementById('displayScreen').value = displayValue;
  } catch (error) {
    document.getElementById('displayScreen').value = 'Error';
  }
}

function evaluateExpression(expression) {
  const numbers = expression.split(/[\+\-\*\/]/).map(parseFloat);
  const operators = expression.match(/[\+\-\*\/]/g);

  let result = numbers[0];

  for (let i = 0; i < operators.length; i++) {
    const operator = operators[i];
    const number = numbers[i + 1];

    switch (operator) {
      case '+':
        result += number;
        break;
      case '-':
        result -= number;
        break;
      case '*':
        result *= number;
        break;
      case '/':
        if (number !== 0) {
          result /= number;
        } else {
          throw new Error('Division by zero');
        }
        break;
      default:
        break;
    }
  }

  return result;
}

function clearScreen() {
  displayValue = '';
  document.getElementById('displayScreen').value = '';
}
