const modal = document.querySelector(".hi-backdrop");
const closeHiModal = document.querySelector(".hi-modal__close");
const submitName = document.querySelector(".hi-modal__submit");
const username = document.querySelector("#username");
const hiUser = document.querySelector("#header__name");
let nameResult;

closeHiModal.addEventListener("click", ()=>{
    modal.classList.add("hi-modal-hidden");
})
username.addEventListener("change", ()=>{
    nameResult = username.value;
})
submitName.addEventListener("click", ()=>{
    if(nameResult) hiUser.textContent = nameResult;
    console.log(nameResult);
    modal.classList.add("hi-modal-hidden");
})