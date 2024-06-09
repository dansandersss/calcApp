export const handlePress = (
  value,
  showResult,
  setCurrentValue,
  setExpression,
  setResult,
  setShowResult
) => {
  if (showResult) {
    setCurrentValue(value);
    setExpression(value);
    setResult("");
    setShowResult(false);
  } else {
    setCurrentValue((prevValue) => prevValue + value);
    setExpression((prevExpression) => prevExpression + value);
  }
};

export const handleClear = (
  setExpression,
  setResult,
  setShowResult,
  setCurrentValue
) => {
  setExpression("");
  setResult("");
  setShowResult(false);
  setCurrentValue("");
};

export const handleCut = (
  showResult,
  setResult,
  result,
  setCurrentValue,
  currentValue,
  setExpression,
  setShowResult
) => {
  if (showResult) {
    setResult("");
    setCurrentValue(result.slice(0, -1));
    setShowResult(false);
  } else {
    const newValue = currentValue.slice(0, -1);
    setCurrentValue(newValue);
    setExpression(newValue);
  }
};

export const handleResult = (
  currentValue,
  setResult,
  setExpression,
  setCurrentValue,
  setShowResult
) => {
  try {
    let expression = currentValue;

    const evaluateExpressionInBrackets = (str) => {
      let bracketsRegExp = /\(([^()]+)\)/g;
      let result = str.replace(bracketsRegExp, (match, innerExpression) => {
        return evaluateExpression(innerExpression);
      });
      return result;
    };

    const evaluateExpression = (str) => {
      str = evaluateExpressionInBrackets(str);
      let [number1, operator, number2] = str.split(/([+\-*/])/);

      number1 = parseFloat(number1);
      number2 = parseFloat(number2);

      switch (operator) {
        case "+":
          return number1 + number2;
        case "-":
          return number1 - number2;
        case "*":
          return number1 * number2;
        case "/":
          return number1 / number2;
        default:
          return "Invalid expression";
      }
    };

    let newResult = evaluateExpression(expression);

    setResult(newResult.toString());
    setExpression(currentValue);
    setCurrentValue(newResult.toString());
    setShowResult(true);
  } catch (error) {
    setResult("Error");
  }
};

export const handleFactorial = (currentValue, setCurrentValue) => {
  const n = parseInt(currentValue);
  if (n === 0 || n === 1) {
    setCurrentValue("1");
  } else {
    let resultFactorial = 1;
    for (let i = 2; i <= n; i++) {
      resultFactorial *= i;
    }
    setCurrentValue(resultFactorial.toString());
  }
};

export const handleExponentiation = (currentValue, setCurrentValue) => {
  const n = parseInt(currentValue);
  const resultExponentiation = Math.pow(n, 2);
  setCurrentValue(resultExponentiation.toString());
};

export const handleCos = (currentValue, setCurrentValue) => {
  const n = parseFloat(currentValue);
  const radians = n * (Math.PI / 180);
  const result = Math.cos(radians);
  setCurrentValue(result.toString());
};

export const handleExponent = (setCurrentValue) => {
  const result = Math.E;
  setCurrentValue(result.toString());
};

export const handleSquare = (currentValue, setCurrentValue) => {
  const n = parseFloat(currentValue);
  if (isNaN(n)) {
    setCurrentValue("Invalid input");
  } else {
    const result = Math.sqrt(n);
    setCurrentValue(result.toString());
  }
};

export const handleCubing = (currentValue, setCurrentValue) => {
  const n = parseInt(currentValue);
  const resultExponentiation = Math.pow(n, 3);
  setCurrentValue(resultExponentiation.toString());
};

export const handleSin = (currentValue, setCurrentValue) => {
  const n = parseFloat(currentValue);
  const radians = n * (Math.PI / 180);
  const result = Math.sin(radians);
  setCurrentValue(result.toString());
};

export const handlePi = (setCurrentValue) => {
  const result = Math.PI;
  setCurrentValue(result.toString());
};
