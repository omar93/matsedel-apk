// let settingsBtn = document.querySelector('#settings')
let menuBtn = document.querySelector('#menuBtn')
let menu = document.querySelector('#menu')
const week = require('week')
let expanded = false

let thisWeek = document.querySelector('#thisWeek')
let nextWeek = document.querySelector('#nextWeek')

thisWeek.textContent = 'Denna vecka'
nextWeek.textContent = 'Nästa vecka'

menuBtn.addEventListener('click', e => {
    if(!expanded) {
        menu.style.zIndex = 2
    } else {
        menu.style.zIndex = -2
    }
    expanded = !expanded

    let foodRows = document.querySelectorAll('food-row')
    for(let i = 0; i < 7; i++) {
        foodRows[i].classList.toggle('defaultView')
        foodRows[i].classList.toggle('adminView')
    } 
})

thisWeek.addEventListener('click', e=> [
    alert('lol')
])