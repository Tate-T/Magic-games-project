const goLeft = document.querySelector("#left-btn");
const goRight = document.querySelector("#right-btn");
const team = document.querySelectorAll(".our-team__item");
let currentCard = 0;
goLeft.addEventListener("click", () =>{
    if(currentCard > 0){
        team[currentCard].classList.remove("active-card");
        currentCard--;
        team[currentCard].classList.add("active-card");
    }
    if(currentCard === 0) goLeft.classList.add("hidden-btn");
    goRight.classList.remove("hidden-btn");
})
goRight.addEventListener("click", () =>{
    if(currentCard < team.length-1){
        team[currentCard].classList.remove("active-card");
        currentCard++;
        team[currentCard].classList.add("active-card");
    }
    if(currentCard === team.length-1) goRight.classList.add("hidden-btn");
    goLeft.classList.remove("hidden-btn");
})