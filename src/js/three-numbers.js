const firstNumber = document.querySelector("#first-number");
const secondNumber = document.querySelector("#second-number");
const thirdNumber = document.querySelector("#third-number");
const resultMax = document.querySelector(".three-numbers__result");

let firstRes = "";
let secondRes = "";
let thirdRes = "";
const maxNumber = function(a, b, c){
    if(a != "" && b != "" && c != "") return(Math.max(a, b, c));
    else return("(число)");
}
firstNumber.addEventListener("input", ()=>{
    firstRes = firstNumber.value;
    resultMax.textContent = maxNumber(firstRes, secondRes, thirdRes);
})
secondNumber.addEventListener("input", ()=>{
    secondRes = secondNumber.value;
    resultMax.textContent = maxNumber(firstRes, secondRes, thirdRes);
})
thirdNumber.addEventListener("input", ()=>{
    thirdRes = thirdNumber.value;
    resultMax.textContent = maxNumber(firstRes, secondRes, thirdRes);
})
