const firebase = require('firebase')
const db = firebase.firestore()

db.collection('suggestions').get().then(snapshot => {
    let i = 0;
    snapshot.forEach(doc => {
        let map = doc.data()
        for (let key in map) {
            console.log('--------------------------------'+i) // 0-6, 0-1
            let allFoodRows = document.querySelectorAll('food-row')
            for(let j = 0; j < allFoodRows.length; j++) {
                let row = allFoodRows[j]
                console.log('the row active ', row)
                console.log('DB DATA:', )
                console.log('key: ', key)
                console.log('the food:', map[key])
                
                let attributeInFoodRow = 'slot'+i
                console.log('current active attr: ',attributeInFoodRow)
                let theActiveFoodWeAreLookingAt = map[j]
                console.log('active food: ',theActiveFoodWeAreLookingAt)
                let theKeyWithIndex = 'slot'+key
                console.log('interesting key: ', theKeyWithIndex)

                if(theKeyWithIndex === attributeInFoodRow) {
                    row.setAttribute(attributeInFoodRow, theActiveFoodWeAreLookingAt)
                }
                
                // if(par1 === par2) {
                //     row.setAttribute(par1,map[key])
                //     console.log('par1: ' , par1, ' par2: ', par2)
                // }
            }
           
        }
        i++;
    })
})