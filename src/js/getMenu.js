const firebase = require('firebase')
const db = firebase.firestore()
const year = require('year')
const week = require('weeknumber')

let thisWeek = week.weekNumber()
let nextWeek = week.weekNumber()+1

let thisYear = year()

let date = `${thisYear}-${thisWeek}`
let date2 = `${thisYear}-${thisWeek+1}`

// Gets this weeks food with listener
db.collection('weeks').doc(date).onSnapshot(doc => {
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

// Gets next weeks food with listener
db.collection('weeks').doc(date2).onSnapshot(doc => {
    if (doc.exists) {
        let allRows = document.getElementsByClassName('next')
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