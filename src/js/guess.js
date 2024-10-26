const textEl = document.querySelector(".guess__output-text");
const buttonEl = document.querySelector(".guess__button");
const inputEL = document.querySelector(".guess__input");
const modalEl = document.querySelector(".guess__modal");
const modalTextEl = document.querySelector(".guess__modal-text");
let number = Math.floor(Math.random() * (10 - 1) + 1);

buttonEl.addEventListener("click", (e) => {
  if (number === Number(inputEL.value)) {
    textEl.textContent = `Вітаю, ви вгадали число! ${number}`;
    textEl.classList.remove("red-color");
    textEl.classList.add("green-color");
  } else if (Number(inputEL.value) > 10) {
    textEl.textContent = "Будь ласка, введіть число від 1 до 10!";
    textEl.classList.remove("green-color");
    textEl.classList.add("red-color");

    modalTextEl.textContent = "Введіть число від 1 до 10!";
    modalEl.classList.remove("guess__transform");
    setTimeout(() => {
      modalEl.classList.add("guess__transform");
    }, 4000);
    inputEL.value = "";
  } else if (isNaN(Number(inputEL.value)) === true) {
    textEl.textContent = "Будь ласка, введіть число!";
    textEl.classList.remove("green-color");
    textEl.classList.add("red-color");

    modalTextEl.textContent = "Введіть число!";
    modalEl.classList.remove("guess__transform");
    setTimeout(() => {
      modalEl.classList.add("guess__transform");
    }, 4000);
    inputEL.value = "";
  } else {
    textEl.textContent = `Ви програли, комп’ютер загадав ${number}`;
    textEl.classList.remove("green-color");
    textEl.classList.add("red-color");
  }

  inputEL.value = "";
  number = Math.floor(Math.random() * (10 - 1) + 1);
});
