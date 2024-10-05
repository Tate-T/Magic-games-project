const dino = document.getElementById('dino');
const cactus = document.getElementById('cactus');
let isJumping = false;
let isAlive = false;

cactus.style.display = 'none';

document.addEventListener('click', function() {
    if (!isAlive) {
        startGame();
    }

    if (!isJumping) {
        jump();
    }
});

function startGame() {
    isAlive = true;
    cactus.style.display = 'block'; 
    cactus.style.animation = 'moveCactus 2s infinite linear'; 
}

function jump() {
    if (!dino.classList.contains('jump')) {
        dino.classList.add('jump');
        isJumping = true;
        setTimeout(function() {
            dino.classList.remove('jump');
            isJumping = false;
        }, 500); 
    }
}

let collisionCheck = setInterval(function() {
    if (isAlive) { 
        let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue('top'));
        let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue('left'));

        if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
            alert('Game Over!');
            location.reload();
        }
    }
}, 10);
