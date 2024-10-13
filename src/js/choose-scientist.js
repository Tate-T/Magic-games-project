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

chooseScientistBtnArr[1].addEventListener('click', () => {
    chooseScientisImgArr.forEach(a => {
        a.classList.remove('box-hidden')
    })
    const arrCopy = [...chooseScientisImgArr]
    const testArr = []
    testArr[0] = arrCopy[8]
    testArr[1] = arrCopy[0]
    testArr[2] = arrCopy[2]
    testArr[3] = arrCopy[11]
    testArr[4] = arrCopy[1]
    testArr[5] = arrCopy[4]
    testArr[6] = arrCopy[7]
    testArr[7] = arrCopy[10]
    testArr[8] = arrCopy[3]
    testArr[9] = arrCopy[6]
    testArr[10] = arrCopy[5]
    testArr[11] = arrCopy[9]
    chooseScientisItemArr.forEach((el, indx) => {
        el.append(testArr[indx])
    })
})

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