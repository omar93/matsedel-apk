const firebase = require('firebase')
const db = firebase.firestore()

const currentWeek = require('week')
const currentYear = require('year')

// Denna vecka
let date = currentYear() + '-' + (currentWeek() + 1)

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
        for (let i = 1; i < 8; i++) {
            let foodRow = document.getElementById(i)
            foodRow.setAttribute('food', doc.data()[i])
        }
    }
})