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
let suggestions = {
    'mån': 'lax',
    'tis': 'lax',
    'ons': 'lax',
    'tor': 'lax',
    'fre': 'lax',
    'lör': 'lax',
    'sön': 'lax',
}

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
    console.log(date)
    db.collection('weeks').doc(date).get().then(doc => {
        if(doc.exists) {
            let map = doc.data().omar
            for(let key in map) {
            //console.log(map[key])
            }
            // db.collection('weeks').doc(date).set({suggestions})
        }
    })
})