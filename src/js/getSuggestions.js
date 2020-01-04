const firebase = require('firebase')
const db = firebase.firestore()

db.collection('suggestions').get().then(snapshot => {
    let allFoodRows = document.querySelectorAll('food-row')
    for (let i = 0; i < allFoodRows.length; i++) {
        
        currentDay = allFoodRows[i] //börjar med måndag, slutar med söndag
        snapshot.forEach(doc => {
            // console.log('day: ',currentDay) //kommer skriva ut 2 ggr pga att det bara finns 2st doc
            // här krävs en loop pga att day & food är 2 arrays
            
            let day = Object.keys(doc.data())
            let food = Object.values(doc.data())
            
            for(let i = 0; i < day.length; i++) {
                // console.log(day[i])
                // currentDay.setAttribute('test'+i, food[i])
                // måste döpa om dagarna i db till annat, mån-sön är i fel ordning
                // kanske 0-6 hade varit optimalare, sen i food.js kalla alltributen för typ:
                // suggestion+i så blire typ i rad o rätt ordning för om man tar "första" när de heter
                // mån-sön så e typ sön först i db men mån först i raderna o vi vill ha måndagens mat högst upp.
            }
            //currentDay.setAttribute(day, food)
        })
    }
})

/**
 * hämta rad 1, fyll den med 5 måndagar, så för varje rad loopar vi alla doc o hämtar måndagar
 * hämta rad 2, fyll den med 5 tisdagar, så för varje rad loopar vi alla doc o hämtar tisdagar
 * 
 * kanske ska varje attribute vara en dag? t.ex: mån="lax" tis="soppa" 'day' finns som attribute
 * id="mån" finns men inte dagarna i sig! bra lösning det ska jag göra 100%
 */


// db.collection('suggestions').get().then(snapshot => {
//     let allFoodRows = document.querySelectorAll('food-row')
//     let i = 0;
//     snapshot.forEach(doc => {
//         let foodRow = allFoodRows[i]
//         console.log('DBDoc nr ',i)
//         console.log('food-Row: ',foodRow.getAttribute('day'))
//         let foodDay = Object.keys(doc.data())
//         let food = Object.values(doc.data())
//         console.log('day ',foodDay)
//         console.log('food ',food)
//         console.log(doc.data())
//         console.log('-------------------------------------------------------------------------------------')
//         i++;
//     })
// })
