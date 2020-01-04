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
    // console.log('uid', user.uid)
    let userNick = doc.data().nick
    connectToDB(userNick)
}

async function connectToDB(userNick) {
    // sätter nästa vecka
    let originalMap = await db.collection('weeks').doc(date).get()
    console.log(originalMap.data())
//    let momMap = await db.collection('weeks').doc(date).set({
//        originalMap: originalMap
//    }, {merge:true})
    
    submit.addEventListener('click', e => {
        // console.log('cliked')

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
                                if(addon.value === '') {
                                    DBdays[key] = food.value
                                } else {
                                    DBdays[key] = food.value + ' med ' + addon.value
                                }
                                // console.log(DBdays[key])
                                // console.log('key: ',key,'\nday: ',day.textContent)
                                // console.log('nick: ' , [userNick], '\nvad: ', DBdays)
                                db.collection('weeks').doc(date).set({
                                    [userNick]:DBdays
                                }, {merge: true})
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