const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");
const gameContainer = document.getElementById("gameContainer");
const lossCounter = document.getElementById("lossCounter");
const scoreDisplay = document.getElementById("scoreDisplay");

let isJumping = false;
let isAlive = false;
let lossesCount = 0; 
let score = 0; 
let collisionCheck;
let scoreTimer;

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
  score = 0; 
  scoreDisplay.innerText = score;
  cactus.style.display = "block"; 
  cactus.style.animation = "moveCactus 2s infinite linear"; 

  collisionCheck = setInterval(checkCollision, 10); 
  scoreTimer = setInterval(updateScore, 100);
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

function updateScore() {
  if (isAlive) {
    score++; 
    scoreDisplay.innerText = score; 
  }
}

function gameOver() {
  clearInterval(collisionCheck);
  clearInterval(scoreTimer); 
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

  score = 0; 
  scoreDisplay.innerText = score; 
  
  cactus.style.left = "100%"; 
}

const style = document.createElement('style');
style.innerHTML = `
@keyframes moveCactus {
  0% { left: 100%; }
  100% { left: -50px; }
}
`;
document.head.appendChild(style);