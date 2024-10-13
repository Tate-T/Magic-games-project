const plusBtn = document.getElementById("plus");
const minusBtn = document.getElementById("minus");
const multiplyBtn = document.getElementById("multiply");
const divideBtn = document.getElementById("divide");

const firstNumber = document.getElementById("firstNumber");
const secondNumber = document.getElementById("secondNumber");

const cnbResultEl = document.getElementById("cnbResultEl");
const checkResultBtnEl = document.getElementById("cnbCheckResult");

let currentOperation = null;

function clearActive() {
  plusBtn.classList.remove("calculator__active");
  minusBtn.classList.remove("calculator__active");
  multiplyBtn.classList.remove("calculator__active");
  divideBtn.classList.remove("calculator__active");
}

function plusBtnClick() {
  clearActive();
  plusBtn.classList.add("calculator__active");
  currentOperation = "plus";
}

function minusBtnClick() {
  clearActive();
  minusBtn.classList.add("calculator__active");
  currentOperation = "minus";
}

function multiplyBtnClick() {
  clearActive();
  multiplyBtn.classList.add("calculator__active");
  currentOperation = "multiply";
}

function divideBtnClick() {
  clearActive();
  divideBtn.classList.add("calculator__active");
  currentOperation = "divide";
}

plusBtn.addEventListener("click", plusBtnClick);
minusBtn.addEventListener("click", minusBtnClick);
multiplyBtn.addEventListener("click", multiplyBtnClick);
divideBtn.addEventListener("click", divideBtnClick);

checkResultBtnEl.addEventListener("click", function () {
  let num1 = parseFloat(firstNumber.value);
  let num2 = parseFloat(secondNumber.value);
  firstNumber.value = "";
  secondNumber.value = "";

  if (isNaN(num1) || isNaN(num2)) {
    cnbResultEl.value = "Введіть коректні числа!";
    return;
  }

  switch (currentOperation) {
    case "plus":
      cnbResultEl.value = num1 + num2;
      break;
    case "minus":
      cnbResultEl.value = num1 - num2;
      break;
    case "multiply":
      cnbResultEl.value = num1 * num2;
      break;
    case "divide":
      if (num2 === 0) {
        cnbResultEl.value = "На 0 ділити не можна!";
        return;
      }
      cnbResultEl.value = num1 / num2;
      break;
    default:
      cnbResultEl.value = "Операція не вибрана!";
  }
});
