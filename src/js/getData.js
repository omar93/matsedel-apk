const firebase = require('firebase')
const db = firebase.firestore()

const currentWeek = require('week')
const currentYear = require('year')
let days = ['mån', 'tis', 'ons', 'tor', 'fre', 'lör', 'sön']

// Denna vecka
let date = currentYear() + '-' + (currentWeek() + 2)
// Nästa vecka
let date2 = currentYear() + '-' + (currentWeek() + 3)

// Hämtar listornas innehåll
let dbs = ['food', 'addon']
for (let i = 0; i < 2; i++) {
    let current = dbs[i]
    db.collection(current).get().then(snapshot => {
        snapshot.forEach(doc => {
            let option = document.createElement('option')
            if (current === 'food') {
                option.textContent = doc.data().food
            } else {
                option.textContent = doc.data().addon
            }
            document.getElementById(current).appendChild(option)
        })
    })
}

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

// Hämtar nästa veckas mat
// db.collection('weeks').doc(date).get().then(doc => {
//     if (doc.exists) {
//         let allRows = document.querySelectorAll('food-row')
//         let map = doc.data()
//         for (let i = 0; i < 7; i++) {
//             let day = allRows[i].getAttribute('day')
//             for (let key in map) {
//                 if (day === key) {
//                     allRows[i].setAttribute('food', map[key])
//                 }
//             }
//         }

//     }
// })