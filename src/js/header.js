const body = document.querySelector("body");
const modeBtn = document.querySelector(".header__mode-btn");
const modeList = document.querySelector(".header__mode-list");
const modeArrow = document.querySelector(".header__mode-svg");
const numMode = document.querySelector("#numeric-mode");
const gameMode = document.querySelector("#game-mode");
const introMode = document.querySelector("#introductory-mode");
const introModeEl = document.querySelectorAll(".acquaintance");
const numModeEL = document.querySelectorAll(".numerical");
const gameModeEl = document.querySelectorAll(".game");
const themeBtn = document.querySelector("#theme-checkbox");
const main = document.querySelector(".main")

modeBtn.addEventListener("click", () =>{
    modeArrow.classList.toggle("reverse-arrow");
    modeList.classList.toggle("hidden-mode-list");
    for (let i = 0; i < numModeEL.length; i++){
        numModeEL[i].style = "display: block";
    }
    for (let i = 0; i < introModeEl.length; i++){
        introModeEl[i].style = "display: block";
    }
    for (let i = 0; i < gameModeEl.length; i++){
        gameModeEl[i].style = "display: block";
    }
})

numMode.addEventListener("click", () =>{
    for (let i = 0; i < numModeEL.length; i++){
        numModeEL[i].style = "display: block";
    }
    for (let i = 0; i < introModeEl.length; i++){
        introModeEl[i].style = "display: none";
    }
    for (let i = 0; i < gameModeEl.length; i++){
        gameModeEl[i].style = "display: none";
    }
    modeList.classList.toggle("hidden-mode-list");
    modeArrow.classList.toggle("reverse-arrow");
})
introMode.addEventListener("click", () =>{
    for (let i = 0; i < numModeEL.length; i++){
        numModeEL[i].style = "display: none";
    }
    for (let i = 0; i < introModeEl.length; i++){
        introModeEl[i].style = "display: block";
    }
    for (let i = 0; i < gameModeEl.length; i++){
        gameModeEl[i].style = "display: none";
    }
    modeList.classList.toggle("hidden-mode-list");
    modeArrow.classList.toggle("reverse-arrow");
})
gameMode.addEventListener("click", () =>{
    for (let i = 0; i < numModeEL.length; i++){
        numModeEL[i].style = "display: none";
    }
    for (let i = 0; i < introModeEl.length; i++){
        introModeEl[i].style = "display: none";
    }
    for (let i = 0; i < gameModeEl.length; i++){
        gameModeEl[i].style = "display: block";
    }
    modeList.classList.toggle("hidden-mode-list");
    modeArrow.classList.toggle("reverse-arrow");
})

let theme = 0;
themeBtn.addEventListener("click", () => {
    if (theme == 0) {
        document.documentElement.style.setProperty('--black', '#fff');
        document.documentElement.style.setProperty('--white', 'rgb(28, 28, 28)');
        body.style.backgroundColor = 'rgb(55,55,55)'; 
        main.style.backgroundColor = 'rgb(55,55,55)'; 
        theme = 1;
    } else {
        document.documentElement.style.setProperty('--black', '#000');
        document.documentElement.style.setProperty('--white', '#fff');
        body.style.backgroundColor = ''; 
        main.style.backgroundColor = ''; 
        theme = 0;
    }
});