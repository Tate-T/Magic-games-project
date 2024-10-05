const chooseScientistBtnArr = document.querySelectorAll('.choose-scientist__text-button')
const chooseScientisImgArr = document.querySelectorAll('.choose-scientist__img-box')
const chooseScientisItemArr = document.querySelectorAll('.choose-scientist__img-item')
// const chooseScientisListArr = document.querySelector('.choose-scientist__img-list')
const chooseScientisInfoArr = document.querySelectorAll('.choose-scientist__img-info')

chooseScientistBtnArr[0].addEventListener('click', () => {
    chooseScientisImgArr.forEach(a => {
        a.classList.add('box-hidden')
    })
    chooseScientisImgArr[1].classList.remove('box-hidden')
    chooseScientisImgArr[11].classList.remove('box-hidden')
    chooseScientisImgArr[8].classList.remove('box-hidden')
    chooseScientisImgArr[9].classList.remove('box-hidden')
})


// const arrCopy = [...chooseScientisImgArr]
// const copyTestInfo = [...chooseScientisInfoArr]
// const infoCopy = []
// // const infoCopy = [...chooseScientisInfoArr]
// copyTestInfo.sort((currentEl, nextEl)=> {
//     currentEl.textContent - nextEl.textContent})
//     console.log(copyTestInfo[0].textContent)
// const test = []

// chooseScientistBtnArr[1].addEventListener('click', () => {
//     // chooseScientisImgArr.forEach(a => {
//     //     a.classList.add('box-hidden')
//     // })

//     console.log(arrCopy)
//     // infoCopy.sort((currentEl, nextEl) => {
//     // })
//     console.log(infoCopy)
//     // arrCopy.filter()


// })
// // console.log(infoCopy[1].textContent)

// chooseScientistBtnArr[2].addEventListener('click', () => {
// })

chooseScientistBtnArr[3].addEventListener('click', () => {
    chooseScientisImgArr.forEach(a => {
        a.classList.add('box-hidden')
    })
    chooseScientisImgArr[4].classList.remove('box-hidden')
})

chooseScientistBtnArr[4].addEventListener('click', () => {
    chooseScientisImgArr.forEach(a => {
        a.classList.add('box-hidden')
    })
    chooseScientisImgArr[2].classList.remove('box-hidden')
    chooseScientisImgArr[3].classList.remove('box-hidden')
})

chooseScientistBtnArr[5].addEventListener('click', () => {
    chooseScientisImgArr.forEach(a => {
        a.classList.add('box-hidden')
    })
    chooseScientisImgArr[5].classList.remove('box-hidden')
})

chooseScientistBtnArr[6].addEventListener('click', () => {
    chooseScientisImgArr.forEach(a => {
        a.classList.remove('box-hidden')
    })
    chooseScientisImgArr[1].classList.add('box-hidden')
    chooseScientisImgArr[0].classList.add('box-hidden')
    chooseScientisImgArr[3].classList.add('box-hidden')
})

chooseScientistBtnArr[7].addEventListener('click', () => {
    chooseScientisImgArr.forEach(a => {
        a.classList.add('box-hidden')
    })
    chooseScientisImgArr[0].classList.remove('box-hidden')
    chooseScientisImgArr[9].classList.remove('box-hidden')
})

chooseScientistBtnArr[8].addEventListener('click', () => {
    chooseScientisImgArr.forEach(a => {
        a.classList.add('box-hidden')
    })
    chooseScientisImgArr[6].classList.remove('box-hidden')
    chooseScientisImgArr[11].classList.remove('box-hidden')
    chooseScientisImgArr[4].classList.remove('box-hidden')
})