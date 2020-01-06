// let settingsBtn = document.querySelector('#settings')
let menuBtn = document.querySelector('#menuBtn')
let menu = document.querySelector('#menu')
const week = require('weeknumber')
let expanded = false

let thisSpan = document.createElement('span')
let nextSpan = document.createElement('span')

let thisWeek = document.querySelector('#thisWeek')
let nextWeek = document.querySelector('#nextWeek')

thisSpan.textContent = week.weekNumber()
thisWeek.appendChild(thisSpan)

nextSpan.textContent = week.weekNumber()+1
nextWeek.appendChild(nextSpan)

// For mobile, toggles the menu section
menuBtn.addEventListener('click', e => {
    if(!expanded) {
        menu.style.zIndex = 0
    } else {
        menu.style.zIndex = -2
    }
    expanded = !expanded 
})

// The admin button that toggles the admin view 
hamhamBtn.addEventListener('click', e=> {
    let foodRows = document.querySelectorAll('food-row')
    for(let i = 0; i < 7; i++) {
        foodRows[i].classList.toggle('defaultView')
        foodRows[i].classList.toggle('adminView')
    }
})


thisWeek.addEventListener('click', e=> {
    let main = document.querySelector('#main')
    main.classList.remove('secondary')

    let main2 = document.querySelector('#main2')
    main2.classList.add('secondary')

    let menu = document.querySelector('#menu')
    menu.style.zIndex = -3
})

nextWeek.addEventListener('click', e=> {
    let main = document.querySelector('#main')
    main.classList.add('secondary')

    let main2 = document.querySelector('#main2')
    main2.classList.remove('secondary')

    let menu = document.querySelector('#menu')
    menu.style.zIndex = -3
})