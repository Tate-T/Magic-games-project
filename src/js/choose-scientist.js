const chooseScientistBtnArr = document.querySelectorAll('.choose-scientist__text-button')
const chooseScientisImgArr = document.querySelectorAll('.choose-scientist__img-box')
const chooseScientisItemArr = document.querySelectorAll('.choose-scientist__img-item')
const chooseScientisInfoArr = document.querySelectorAll('.choose-scientist__img-info')
const allSecEl = document.querySelector('.choose-scientist')

chooseScientistBtnArr[0].addEventListener('click', () => {
    chooseScientisImgArr.forEach(a => {
        a.classList.add('box-hidden')
    })
    chooseScientisImgArr[0].classList.remove('box-hidden')
    chooseScientisImgArr[3].classList.remove('box-hidden')
    chooseScientisImgArr[6].classList.remove('box-hidden')
    chooseScientisImgArr[7].classList.remove('box-hidden')
    chooseScientisImgArr[8].classList.remove('box-hidden')
    chooseScientisImgArr[9].classList.remove('box-hidden')
    chooseScientisImgArr[10].classList.remove('box-hidden')
    chooseScientisImgArr[11].classList.remove('box-hidden')
})

// chooseScientistBtnArr[1].addEventListener('click', () => {
//     chooseScientisImgArr.forEach(a => {
//         a.classList.remove('box-hidden')
//     })
//     const arrCopy = [...chooseScientisImgArr]
//     arrCopy.sort((nextEl,currentEl) => {
        
//     })
//     chooseScientisItemArr.forEach((el, indx) => {
//         el.append(arrCopy[indx])
//     })
// })

chooseScientistBtnArr[2].addEventListener('click', () => {
    chooseScientisImgArr.forEach(a => {
        a.classList.remove('box-hidden')
    })
    const arrCopy = [...chooseScientisImgArr]
    arrCopy.sort((nextEl, currentEl) => (Number(currentEl.getAttribute('dead')) - Number(currentEl.getAttribute('born'))) - (Number(nextEl.getAttribute('dead')) - Number(nextEl.getAttribute('born'))))
    chooseScientisItemArr.forEach((el, indx) => {
        el.append(arrCopy[indx])
    })
})

chooseScientistBtnArr[3].addEventListener('click', () => {
    chooseScientisImgArr.forEach(a => {
        a.classList.add('box-hidden')
    })

    chooseScientisImgArr[7].classList.remove('box-hidden')
})

chooseScientistBtnArr[4].addEventListener('click', () => {
    chooseScientisImgArr.forEach(a => {
        a.classList.add('box-hidden')
    })
    chooseScientisImgArr[1].classList.remove('box-hidden')
    chooseScientisImgArr[2].classList.remove('box-hidden')
})

chooseScientistBtnArr[5].addEventListener('click', () => {
    chooseScientisImgArr.forEach(a => {
        a.classList.add('box-hidden')
    })
    chooseScientisImgArr[3].classList.remove('box-hidden')
    chooseScientisImgArr[5].classList.remove('box-hidden')
})

chooseScientistBtnArr[6].addEventListener('click', () => {
    chooseScientisImgArr.forEach(a => {
        a.classList.remove('box-hidden')
    })
    chooseScientisImgArr[8].classList.add('box-hidden')
    chooseScientisImgArr[0].classList.add('box-hidden')
})

chooseScientistBtnArr[7].addEventListener('click', () => {
    chooseScientisImgArr.forEach(a => {
        a.classList.add('box-hidden')
    })
    chooseScientisImgArr[1].classList.remove('box-hidden')
    chooseScientisImgArr[8].classList.remove('box-hidden')
})

chooseScientistBtnArr[8].addEventListener('click', () => {
    chooseScientisImgArr.forEach(a => {
        a.classList.add('box-hidden')
    })
    chooseScientisImgArr[2].classList.remove('box-hidden')
    chooseScientisImgArr[11].classList.remove('box-hidden')
})