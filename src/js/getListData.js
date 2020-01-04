const firebase = require('firebase')
const db = firebase.firestore()

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