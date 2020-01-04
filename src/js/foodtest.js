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
            //console.log('sub ', subMap) // subMap är mappen för varje person t.ex mamma {}
            for (let day in subMap) {
                let currentDay = document.getElementById(day)
                //console.log('key ',key) //key är namnet & det används som attribute i webcpomonent, ändra?
                currentDay.setAttribute(key, subMap[day])
            }
        }
    }
})

//byter view på main raderna
settings.addEventListener('click', e=> {
    let f = document.querySelectorAll('food-row')
    for(let i = 0; i < 7; i++) {
        f[i].classList.toggle('defaultView')
        f[i].classList.toggle('adminView')
    } 
})