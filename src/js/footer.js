const btnOpenModalEl = document.querySelector('[data-open]')
const btnCloseModalEl = document.querySelector('[data-close]')
const modalEl = document.querySelector('.backdrop')
const footerInputEl = document.querySelector('.footer__input')

btnOpenModalEl.addEventListener('click', () => {
    if (footerInputEl.value === '' || footerInputEl.value.includes('@') === false) {
        alert('Введіть правильну адресу')
    } else {
        modalEl.classList.remove('hide-modal')
    }
})
btnCloseModalEl.addEventListener('click', () => modalEl.classList.add('hide-modal'))
window.addEventListener('keydown', (e) => {
    if (e.code === 'Escape') {
        modalEl.classList.add('hide-modal')
    }
})