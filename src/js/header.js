const body = document.querySelector("body");
const modeBtn = document.querySelector(".header__mode-btn");
const modeList = document.querySelector(".header__mode-list");
const modeArrow = document.querySelector(".header__mode-svg");
const numMode = document.querySelector("#numeric-mode");
const gameMode = document.querySelector("#game-mode");
const introMode = document.querySelector("#introductory-mode");
const themeBtn = document.querySelector("#theme-checkbox");

modeBtn.addEventListener("click", () =>{
    modeArrow.classList.toggle("reverse-arrow");
    modeList.classList.toggle("hidden-mode-list");
})