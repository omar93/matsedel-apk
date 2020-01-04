const firebase = require('firebase')
const db = firebase.firestore()
const currentWeek = require('week')
const currentYear = require('year')
let days = ['mån', 'tis', 'ons', 'tor', 'fre', 'lör', 'sön']
let date = currentYear() + '-' + (currentWeek() + 2)
let date2 = currentYear() + '-' + (currentWeek() + 3)

// Hämtar nästa veckas mat
db.collection('weeks').doc(date).get().then(doc => {
    if (doc.exists) {
        let allRows = document.querySelectorAll('food-row')
        let map = doc.data()
        for (let i = 0; i < 7; i++) {
            let day = allRows[i].getAttribute('day')
            for (let key in map) {
                if (day === key) {
                    allRows[i].setAttribute('food', map[key])
                }
            }
        }
    }
})