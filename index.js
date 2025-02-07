let result = document.querySelector(".result");
let num1 = 0;
let num2 = 0;
let operatorType = null;
let shouldReset = false;

const handleBtnClick = (num) => {
  if (result.innerHTML === "0" || shouldReset) {
    result.innerHTML = num;
    shouldReset = false;
  } else {
    if (num === "." && result.innerHTML.includes(".")) return;
    result.innerHTML += num;
  }
};

const handleOperationClick = (op) => {
  num1 = parseFloat(result.innerHTML);
  result.innerHTML = "0";
  operatorType = op;
  shouldReset = true;
};

const handleCalculate = () => {
  num2 = parseFloat(result.innerHTML);

  if (operatorType === "divide" && num2 === 0) {
    result.innerHTML = "ERROR";
    shouldReset = true;
    return;
  }

  let calculation;

  switch (operatorType) {
    case "add":
      calculation = num1 + num2;
      break;
    case "subtract":
      calculation = num1 - num2;
      break;
    case "multiply":
      calculation = num1 * num2;
      break;
    case "divide":
      calculation = num1 / num2;
      break;
  }

  // Round only if necessary
  result.innerHTML = Number.isInteger(calculation)
    ? calculation
    : parseFloat(calculation.toFixed(5));
};

const handleClear = () => {
  num1 = 0;
  num2 = 0;
  operatorType = null;
  result.innerHTML = "0";
};

const handleBackspace = () => {
  if (result.innerHTML.length === 1 || shouldReset) {
    result.innerHTML = "0";
    shouldReset = false;
  } else {
    result.innerHTML = result.innerHTML.slice(0, -1);
  }
};
