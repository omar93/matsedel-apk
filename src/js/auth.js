const firebase = require('firebase')
const db = firebase.firestore()
let provider = new firebase.auth.GoogleAuthProvider()
let googleBtn = document.querySelector('#google')
let signoutBtn = document.querySelector('#signout_btn')
let container = document.querySelector('#container')

// checks if a user had signed in before so he dosen't
// have to do it everytime page refreshesh
firebase.auth().onAuthStateChanged(user => {
  if (user) { // if user signed in
    checkUserDB(user)
  } else {
    googleBtn.classList.remove('hide')
  }
})

// Checks if the user excists in the firebase db after signin
function checkUserDB(user) {

  // these 2 rows gives admin privilge, bad implementation, fix later but works for family
  if(user.email === 'omaralhamad93@gmail.com') {document.getElementById('hamhamBtn').classList.remove('hamham')}
  if(user.email === 'basma@optikab.se') {document.getElementById('hamhamBtn').classList.remove('hamham')}

  console.log(user.displayName,' signed in')
  //cheks user in db
  db.collection('users').doc(user.uid).get().then(doc => {
    if (!doc.exists) {
      console.log('user not in database, adding user: ' + user.displayName)
      addNewUser(user)
    }
    googleBtn.style.display = 'none'
  }).catch(error => console.log('add user to db error: ' + error))

  db.collection('suggestions').doc(user.uid).get().then(doc => {
    if (!doc.exists) {
      console.log('user doc not in database, adding user: ' + user.displayName)
      console.log('doc ID: ' + user.uid)
      addNewSuggetionsDoc(user)
    }
  })
}

// Google signin with popup window
googleBtn.addEventListener('click', e => {
  e.preventDefault()
  firebase.auth().signInWithRedirect(provider).then(function (result) {
    let user = result.user
    drawProfile(user)
  }).catch(function (error) {
    console.log('login error: ' + error)
  })
})

// user gets logged out when clicking this button
signoutBtn.addEventListener('click', e => {
  firebase.auth().signOut().then(() => {
    console.log('utloggad')
    googleBtn.style.display = 'block'
  }).catch(() => {
    console.log('signout error')
  })
})

// Adds the user to firebase db if he does not exist after signin
async function addNewUser(user) {
  db.collection('users').doc(user.uid).set({
    name: user.displayName,
    email: user.email,
    picture: user.photoURL,
    uid: user.uid,
  })
}

// Adds a new doc for suggestions for the new user
async function addNewSuggetionsDoc(user) {
  db.collection('suggestions').doc(user.uid).set({
    0: "",
    1: "",
    2: "",
    3: "",
    4: "",
    5: "",
    6:""
  })
}