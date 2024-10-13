const field = document.querySelector(".football__box");
const ball = document.querySelector(".football__img");
const firstScore = document.querySelector(".football__first-score");
const secondScore = document.querySelector(".football__second-score");
let firstNumber = 0;
let secondNumber = 0;
let firstOutputNumber = 0;
let secondOutputNumber = 0;

function goal() {
  ball.style.top = "82px";
  ball.style.left = "340px";
}

function outputFirst() {
  firstScore.textContent = firstOutputNumber;
}

function outputSecond() {
  secondScore.textContent = secondOutputNumber;
}

function ballThrow() {
  field.addEventListener("click", (event) => {
    let fieldCords = field.getBoundingClientRect();
    let ballCords = {
      top:
        event.clientY -
        fieldCords.top -
        field.clientTop -
        ball.clientHeight / 2,
      left:
        event.clientX -
        fieldCords.left -
        field.clientLeft -
        ball.clientWidth / 2,
    };

    if (ballCords.top < 0) {
      ballCords.top = 0;
    }

    if (ballCords.left < 0) {
      ballCords.left = 0;
    }

    if (ballCords.left + ball.clientWidth > field.clientWidth) {
      ballCords = field.clientWidth - ball.clientWidth;
    }

    if (ballCords.top + ball.clientHeight > field.clientHeight) {
      ballCords.top = field.clientHeight - ball.clientHeight;
    }

    ball.style.left = ballCords.left + "px";
    ball.style.top = ballCords.top + "px";

    if (ballCords.left <= 40 && ballCords.top <= 101 && ballCords.top >= 69) {
      firstNumber = firstNumber + 1;
      setTimeout(goal, 1000);
    }

    if (ballCords.top >= 65 && ballCords.top <= 105 && ballCords.left >= 637) { 
      secondNumber = secondNumber + 1;
      setTimeout(goal, 1000)
    }

    if (firstNumber < 10) {
      firstOutputNumber = `0${firstNumber}`;
    } else { 
      firstOutputNumber = `${firstNumber}`;
    }

    if (secondNumber < 10) {
      secondOutputNumber = `0${secondNumber}`;
    } else{ 
      secondOutputNumber = `${secondNumber}`;
    }

    setTimeout(outputFirst, 1000);
    setTimeout(outputSecond, 1000);
  });
}

ballThrow();
