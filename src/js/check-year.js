const checkYearInputEl = document.querySelector('.check-year__input')
const checkYearBtnEl = document.querySelector('.check-year__btn')
const checkYearResultText = document.querySelector('.check-year__result')

checkYearBtnEl.addEventListener('click', () => {
    if (Number(checkYearInputEl.value) !== 0) {
        if (Number(checkYearInputEl.value) % 4 === 0) {
            console.log(Number(checkYearInputEl.value))
            checkYearResultText.textContent = 'Ви народилися у високосний рік!'
            checkYearResultText.classList.add('leap-year')
            checkYearResultText.classList.remove('not-leap-year')
        } else if (Number(checkYearInputEl.value) % 4 > 0) {
            checkYearResultText.textContent = 'Ви народилися не у високосний рік!'
            checkYearResultText.classList.add('not-leap-year')
            checkYearResultText.classList.remove('leap-year')
        }
    } else if (Number(checkYearInputEl.value) === NaN) {
        checkYearResultText.textContent = 'Введіть правильний рік народження'
        checkYearResultText.classList.remove('leap-year')
        checkYearResultText.classList.remove('not-leap-year')
    } else {
        checkYearResultText.textContent = 'Введіть правильний рік народження'
        checkYearResultText.classList.remove('leap-year')
        checkYearResultText.classList.remove('not-leap-year')
    }
    checkYearInputEl.value = ''
})