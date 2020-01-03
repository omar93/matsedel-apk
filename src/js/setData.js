const firebase = require('firebase')
const db = firebase.firestore()

const currentWeek = require('week')
const currentYear = require('year')

let submit = document.querySelector('#submit')
let food = document.querySelector('#foodList')
let addon = document.querySelector('#addonList')
let day = document.querySelector('#days')

// Nästa vecka
let date = currentYear() + '-' + (currentWeek()+2)

// sätter nästa vecka
submit.addEventListener('click', e => {
    let row = document.getElementById(1)
    row.classList.add('admin')
    e.preventDefault()
    let food = document.querySelector('#foodList')
    let addon = document.querySelector('#addonList')
    let days = document.querySelector('#days')
    let day = days[days.selectedIndex]
    food.value = ''
    addon.value = ''
    db.collection('weeks').doc(date).set({
        1: food.value + ' med ' + addon.value
    })
})