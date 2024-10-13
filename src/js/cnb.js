const stone = document.getElementById("stone");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const results = document.getElementById("results");
const checkResult = document.getElementById("checkResult");
const reload = document.getElementById("reload");
const peopleScoreEl = document.getElementById("peopleScore"); 
const botScoreEl = document.getElementById("botScore"); 

let userChoice = null; 
let peopleScore = 0;    
let botScore = 0;      

reload.addEventListener("click", () => {
    peopleScoreEl.textContent = 0;
    botScoreEl.textContent = 0;
    peopleScore = 0;
    botScore = 0;
});

function clearActiveClasses() {
  stone.classList.remove("cnb__images-active");
  paper.classList.remove("cnb__images-active");
  scissors.classList.remove("cnb__images-active");
}

stone.addEventListener("click", () => {
  userChoice = 1;
  clearActiveClasses();
  stone.classList.add("cnb__images-active"); 
});

paper.addEventListener("click", () => {
  userChoice = 2;
  clearActiveClasses(); 
  paper.classList.add("cnb__images-active");
});

scissors.addEventListener("click", () => {
  userChoice = 3;
  clearActiveClasses(); 
  scissors.classList.add("cnb__images-active");
});

function playGame(botAnswer) {
  let resultMessage;

  if (userChoice === botAnswer) {
    results.style.color = 'black';
    resultMessage = "Нічия!";
  } else if (
    (userChoice === 1 && botAnswer === 3) ||
    (userChoice === 2 && botAnswer === 1) ||
    (userChoice === 3 && botAnswer === 2)
  ) {
    peopleScore++;
    peopleScoreEl.textContent = peopleScore;
    resultMessage = "Ви виграли раунд!";
    results.style.color = 'green';
  } else {
    botScore++;
    botScoreEl.textContent = botScore;
    results.style.color = 'red';
    resultMessage = "Комп'ютер виграв раунд!";
  }

  results.textContent = resultMessage;
}

checkResult.addEventListener("click", () => {
  if (userChoice !== null) {
    results.style.opacity = "1";
    
    let botAnswer = Math.floor(Math.random() * 3) + 1;
    playGame(botAnswer);
    
  } else {
    alert("Для початку виберіть один з предметів!");
  }
});
