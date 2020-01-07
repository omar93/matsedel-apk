const firebase = require('firebase')
const db = firebase.firestore()

//Listens to changes and updates the "squares"
db.collection('suggestions').onSnapshot(snapshot => {
    let i = 0;
    snapshot.forEach(doc => {
        let map = doc.data()
        // console.log('ok', map, ' id ', doc.id)
        for (let key in map) {
            let allFoodRows = document.querySelectorAll('food-row')
            for (let j = 0; j < allFoodRows.length; j++) {
                let row = allFoodRows[j]
                let slotAttr = 'slot' + i
                let currentFood = map[j]
                // console.log('mat: ',currentFood)
                let theKeyWithIndex = 'slot' + key
                if (theKeyWithIndex === slotAttr) {
                    if (currentFood === undefined) { currentFood = '' }
                    row.setAttribute(slotAttr, currentFood)
                }
            }
        }
        i++;
    })
})