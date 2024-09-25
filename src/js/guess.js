const textEl = document.querySelector(".guess__output-text");
const buttonEl = document.querySelector(".guess__button");
const inputEL = document.querySelector(".guess__input");

const number = Math.floor(Math.random() * (10 - 1) + 1);

buttonEl.addEventListener("click", (e) => {
  if (Number(inputEL.value) > 10) {
    textEl.textContent = "Будь ласка, введіть число від 1 до 10!";
    textEl.classList.remove("green-color");
    textEl.classList.add("red-color");
  } else {
    if (number === Number(inputEL.value)) {
      textEl.textContent = `Вітаю, ви вгадали число! ${number}`;
      textEl.classList.remove("red-color");
      textEl.classList.add("green-color");
    } else {
      textEl.textContent = `Ви програли, комп’ютер загадав ${number}`;
      textEl.classList.remove("green-color");
      textEl.classList.add("red-color");
    }
  }
});
