const firebase = require('firebase')
const db = firebase.firestore()
let submit = document.querySelector('#submit')
let food = document.querySelector('#foodList')
let addon = document.querySelector('#addonList')
let dayList = document.querySelector('#days')
let day = document.querySelector('#days')

//userCheck
firebase.auth().onAuthStateChanged(user => {
    if (user) { connectToDB(user) }
})

//sets the click function listener
async function connectToDB(user) {
    // console.log(user.uid)
    submit.addEventListener('click', async e => {

        let dayOption = days[days.selectedIndex]
        let day = dayOption.getAttribute('id')

        //The food string data with & without an addon
        let foodString = food.value + ' med ' + addon.value
        if (addon.value === '') { foodString = food.value }
        console.log('day: ' [day],' mat: ', foodString)
        
        //Resets fields
        food.value = ''
        addon.value = ''
        days.selectedIndex = 0


        //Updates the field for the selected day in the db
        db.collection('suggestions').doc(user.uid).set({
            [day]: foodString
        }, { merge: true })
    })
}