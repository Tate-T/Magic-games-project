const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");
const gameContainer = document.getElementById("gameContainer");
const lossCounter = document.getElementById("lossCounter");

let isJumping = false;
let isAlive = false;
let lossesCount = 0; 

cactus.style.display = "none"; 

gameContainer.addEventListener("click", function () {
  if (!isAlive) {
    startGame();
  }

  if (!isJumping && isAlive) {
    jump();
  }
});

function startGame() {
  isAlive = true;
  cactus.style.display = "block"; 
  cactus.style.left = ""; 
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

let collisionCheck = setInterval(checkCollision, 10);

function checkCollision() {
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
}

function gameOver() {
  clearInterval(collisionCheck);
  isAlive = false; 
  cactus.style.animation = "none"; 

  lossesCount++; 
  lossCounter.innerText = lossesCount; 

  const modal = document.querySelector(".google-hi-backdrop");
  modal.classList.remove("google-hi-modal-hidden");

  const modalBtn = document.querySelector(".google-hi-modal__submit");
  const closeHiModal = document.querySelector(".google-hi-modal__close");

  closeHiModal.addEventListener("click", function () {
    modal.classList.add("google-hi-modal-hidden");
    resetGame();
  });

  modalBtn.addEventListener("click", function () {
    modal.classList.add("google-hi-modal-hidden");
    resetGame();
  });
}

function resetGame() {
  isAlive = false;
  isJumping = false;

  cactus.style.display = "none"; 
  cactus.style.animation = "none"; 

  dino.classList.remove("jump");

  
  cactus.style.left = "100%"; 
}
