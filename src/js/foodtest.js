const firebase = require('firebase')
const db = firebase.firestore()

const currentWeek = require('week')
const currentYear = require('year')

let settings = document.querySelector('#settings')

let date = (currentYear() + '-' + currentWeek() + 2)
let days = ['mån', 'tis', 'ons', 'tor', 'fre', 'lör', 'sön']

// sätter maträtterna i rutoan som mamma kan välja?
db.collection('weeks').doc(date).get().then(doc => {
    if (doc.exists) {
        let map = {
            omar: doc.data().omar,
            ali: doc.data().ali,
            ahmed: doc.data().ahmed,
            mamma: doc.data().mamma,
            pappa: doc.data().pappa
        }
        // console.log(map)
        for (let key in map) {
            let subMap = map[key]
            for (let day in subMap) {
                let currentDay = document.getElementById(day)
                currentDay.setAttribute(key, subMap[day])
            }
        }
    }
})

settings.addEventListener('click', e=> {
    let f = document.querySelectorAll('food-row')
    for(let i = 0; i < 7; i++) {
        f[i].classList.toggle('defaultView')
        f[i].classList.toggle('adminView')
    } 
})