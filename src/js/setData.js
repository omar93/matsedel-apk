const firebase = require('firebase')
const db = firebase.firestore()
const currentWeek = require('week')
const currentYear = require('year')
let submit = document.querySelector('#submit')
let food = document.querySelector('#foodList')
let addon = document.querySelector('#addonList')
let day = document.querySelector('#days')
let date = currentYear() + '-' + (currentWeek() + 2)

firebase.auth().onAuthStateChanged(user => {
    if (user) {
        setMap(user)
    }
})

async function setMap(user) {
    let doc = await db.collection('users').doc(user.uid).get()
    let userNick = doc.data().nick
    connectToDB(userNick)
}

function connectToDB(userNick) {
    // sätter nästa vecka
    submit.addEventListener('click', e => {
        let row = document.getElementById(1)

        let food = document.querySelector('#foodList')
        let addon = document.querySelector('#addonList')
        let days = document.querySelector('#days')
        let day = days[days.selectedIndex]

        // console.log(food.value, addon.value, day.textContent)

        db.collection('weeks').doc(date).get().then(doc => {
            if (doc.exists) {
                let map = doc.data()
                for (let key in map) {
                    if (key === userNick) {
                        let DBdays = map[key]
                        for(let key in DBdays) {
                            if(key === day.textContent) {
                                DBdays[key] = food.value + ' med ' + addon.value
                                // console.log(DBdays[key])
                                // console.log('key: ',key,'\nday: ',day.textContent)
                                db.collection('weeks').doc(date).update({
                                    [userNick]:DBdays
                                })
                            }
                        }
                        // db.collection('weeks').doc(date).update(userNick)
                        // console.log(userNick)
                        // console.log(food.value, addon.value, day.textContent)
                    }
                }
            }
        })
    })
}