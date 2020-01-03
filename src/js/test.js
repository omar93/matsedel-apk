const firebase = require('firebase')
const db = firebase.firestore()
const currentWeek = require('week')
const currentYear = require('year')

let date = `${currentYear}-${currentWeek}`

// .collection('')