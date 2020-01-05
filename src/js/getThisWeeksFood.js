const firebase = require('firebase')
const db = firebase.firestore()
const week = require('week')
const year = require('year')

let thisWeek = parseInt(week())
let nextWeek = parseInt(week())+1
let thisYear = year()

let date = `${thisYear}-${thisWeek}`

// Hämtar veckans mat
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