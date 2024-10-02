const field = document.querySelector(".football__box");
const ball = document.querySelector(".football__img");

field.onclick = function (event) {
  let fieldCords = this.getBoundingClientRect();
  let ballCords = {
    top:
      event.clientY - fieldCords.top - field.clientTop - ball.clientHeight / 2,
    left:
      event.clientX - fieldCords.left - field.clientLeft - ball.clientWidth / 2,
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
};
