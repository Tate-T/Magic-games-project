const checkYearInputEl = document.querySelector('.check-year__input')
const checkYearBtnEl = document.querySelector('.check-year__btn')
const checkYearResultText = document.querySelector('.check-year__result')

checkYearBtnEl.addEventListener('click', () => {
    if (Number(checkYearInputEl.value) % 4 === 0) {
        checkYearResultText.textContent = 'Ви народилися у високосний рік!'
        checkYearResultText.classList.add('leap-year')
        checkYearResultText.classList.remove('not-leap-year')
    } else if (Number(checkYearInputEl.value) % 4 > 0) {
        checkYearResultText.textContent = 'Ви народилися не у високосний рік!'
        checkYearResultText.classList.add('not-leap-year')
        checkYearResultText.classList.remove('leap-year')
    }
})
// if (a === NaN) {
//     checkYearResultText.textContent = 'Ви ввели не рік, спробуйте знову'
//     checkYearResultText.classList.remove('leap-year')
//     checkYearResultText.classList.remove('not-leap-year')
//     console.log(',kz')
// }