const firebase = require('firebase')
const db = firebase.firestore()

const currentWeek = require('week')
const currentYear = require('year')

let date = (currentYear()+'-'+currentWeek()+2)
let days = ['mån','tis','ons','tor','fre','lör','sön']

db.collection('weeks').doc(date).get().then(doc => {
    if(doc.exists) {
        let map = {
            omar: doc.data().omar,
            ali: doc.data().ali,
            ahmed: doc.data().ahmed,
            mamma: doc.data().mamma,
            pappa: doc.data().pappa
        }
            for(let key in map) {
                let subMap = map[key]
                console.log('**********NAME**********')
                console.log(key)    //person name
                console.log(subMap) //person map
                console.log('_______________________')
                for(let day in subMap) {
                    let currentDay = document.getElementById(day)
                    console.log(day)    //day
                    console.log(subMap[day])    //foood
                    console.log('-------------------')
                    currentDay.setAttribute(key,subMap[day])
                }
            }
    }
})