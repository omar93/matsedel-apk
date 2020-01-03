const firebase = require('firebase')
const db = firebase.firestore()

const currentWeek = require('week')
const currentYear = require('year')

let date = (currentYear()+'-'+currentWeek()+2)

db.collection('weeks').doc(date).get().then(doc => {
    if(doc.exists) {
        let omar = doc.data().omar
        for(let day in omar) {
            console.log(day+':'+omar[day])
            let day = document.getElementById(day)
            console.log(day)
        }
    }
})

async function test() {
    // let doc = await db.collection('weeks').doc(date).get()
    // console.log('apa ' + doc.data())
    
    // for (let i = 0; i < 7; i++) {
    //     let row = document.getElementById(i + 1)
    //     setAttributes(row, {
    //         'mån': doc.data().omar.mån
    //     })
        
    //     for (let i = 0; i < 5; i++) {
            
    //         setAttributes(row, {
    //             'mån': doc.data().omar.mån
    //         })
    //     }
    // }
    
}
test()

function setAttributes (element, attributes) {
    for (let attr in attributes) {
      element.setAttribute(attr, attributes[attr])
    }
  }
