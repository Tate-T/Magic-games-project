const btnOpenModalEl = document.querySelector('[data-open]')
const btnCloseModalEl = document.querySelector('[data-close]')
const modalEl = document.querySelector('.backdrop')
const footerInputEl = document.querySelector('.footer__input')
const requiredModalEl = document.querySelector('.required-modal')

btnOpenModalEl.addEventListener('click', () => {
    if (footerInputEl.value !== '' && footerInputEl.value.includes('@') === true) {
        modalEl.classList.remove('hide-modal')
    } else {
        requiredModalEl.classList.remove('transform')
        setTimeout(() => {
            requiredModalEl.classList.add('transform')
        }, 3500)
    }
    footerInputEl.value = ''
})
btnCloseModalEl.addEventListener('click', () => modalEl.classList.add('hide-modal'))
window.addEventListener('keydown', (e) => {
    if (e.code === 'Escape') {
        modalEl.classList.add('hide-modal')
    }
})