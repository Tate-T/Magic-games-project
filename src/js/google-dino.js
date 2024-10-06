const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");
const gameContainer = document.getElementById("gameContainer");
let isJumping = false;
let isAlive = false;

cactus.style.display = "none";

gameContainer.addEventListener("click", function () {
  if (!isAlive) {
    startGame();
  }

  if (!isJumping) {
    jump();
  }
});

function startGame() {
  isAlive = true;
  cactus.style.display = "block";
  cactus.style.animation = "moveCactus 2s infinite linear";
  collisionCheck = setInterval(checkCollision, 10);
}

function jump() {
  if (!dino.classList.contains("jump")) {
    dino.classList.add("jump");
    isJumping = true;
    setTimeout(function () {
      dino.classList.remove("jump");
      isJumping = false;
    }, 500);
  }
}

let collisionCheck = setInterval(function () {
    if (isAlive) {
      let dinoTop = parseInt(
        window.getComputedStyle(dino).getPropertyValue("top")
      );
      let cactusLeft = parseInt(
        window.getComputedStyle(cactus).getPropertyValue("left")
      );
  
      if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
        gameOver(); 
      }
    }
  }, 10);
  
  function gameOver() {
    clearInterval(collisionCheck);
    const modal = document.querySelector(".google-hi-backdrop");
    modal.classList.remove("google-hi-modal-hidden"); 
    const modalBtn = document.querySelector(".google-hi-modal__submit");
    const closeHiModal = document.querySelector(".google-hi-modal__close");
    closeHiModal.addEventListener("click", function () {
      modal.classList.add("google-hi-modal-hidden");
      location.reload(); 
    });
    modalBtn.addEventListener("click", function () {
        modal.classList.add("google-hi-modal-hidden");
        location.reload(); 
      });
  }