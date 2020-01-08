/**
 * Toggles the different views with help of classes in javascipt
 */

let menuBtn = document.querySelector('#menuBtn')
let menu = document.querySelector('#menu')
const week = require('weeknumber')

let thisSpan = document.createElement('span')
let nextSpan = document.createElement('span')

let main = document.querySelector('#main')
let main2 = document.querySelector('#main2')

let thisWeek = document.querySelector('#thisWeek')
let nextWeek = document.querySelector('#nextWeek')

thisSpan.textContent = `Vecka: ${week.weekNumber()}`
thisWeek.appendChild(thisSpan)

nextSpan.textContent = `Vecka: ${week.weekNumber()+1}`
nextWeek.appendChild(nextSpan)

let printText = document.querySelector('.printText')

// For mobile, toggles the menu section
menuBtn.addEventListener('click', e => {
    main.classList.add('hiddenPhone')
    main2.classList.add('hiddenPhone')
    menu.classList.remove('hiddenPhone')
    hideAdminView()
})

// The admin button that toggles the admin view 
hamhamBtn.addEventListener('click', e=> {
    main.classList.remove('hidden')
    main2.classList.add('hidden')
    menu.classList.add('hiddenPhone')

    main.classList.remove('hiddenPhone')
    main2.classList.remove('hiddenPhone')
    showAdminView()
})


thisWeek.addEventListener('click', e=> {
    main.classList.remove('hidden')
    main2.classList.add('hidden')
    menu.classList.add('hiddenPhone')

    main.classList.remove('hiddenPhone')
    main2.classList.remove('hiddenPhone')
    hideAdminView()
})

nextWeek.addEventListener('click', e=> {
    main.classList.add('hidden')
    main2.classList.remove('hidden')
    menu.classList.add('hiddenPhone')

    main.classList.remove('hiddenPhone')
    main2.classList.remove('hiddenPhone')
    hideAdminView()
})

function showAdminView() {
    let foodRows = document.querySelectorAll('food-row')
    for(let i = 0; i < 7; i++) {
        foodRows[i].classList.add('adminView')
        foodRows[i].classList.remove('defaultView')
    }
}

function hideAdminView() {
    let foodRows = document.querySelectorAll('food-row')
    for(let i = 0; i < 7; i++) {
        foodRows[i].classList.remove('adminView')
        foodRows[i].classList.add('defaultView')
    }
}