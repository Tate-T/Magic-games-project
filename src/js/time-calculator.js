const inputEl = document.querySelector(".time-calculator__input");
const buttonEl = document.querySelector(".time-calculator__button");
const textEl = document.querySelector(".time-calculator__output-text");

buttonEl.addEventListener("click", (e) => {
  const day = Math.floor(Number(inputEl.value) / 1440);
  let hour = Math.floor((Number(inputEl.value) - day * 1440) / 60);
  let min = Number(inputEl.value) - day * 1440 - hour * 60;

  if (hour < 10) {
    hour = `0${hour}`;
  }

  if (min < 10) {
    min = `0${min}`;
  }

  if (day <= 0) {
    textEl.textContent = `${hour}:${min}`;
  } else {
    textEl.textContent = `${day} дн. ${hour}:${min}`;
  }
});
