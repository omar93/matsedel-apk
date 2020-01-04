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
  console.log(user)
  let userRef = db.collection('users').doc(user.uid)
  userRef.get().then(doc => {
    if (!doc.exists) {
      console.log('user not in database, adding user: ' + user.displayName)
      addUserToDB(user)
    }
    googleBtn.style.display = 'none'
  }).catch(error => console.log('add user to db error: ' + error))
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
async function addUserToDB(user) {
let member = await db.collection('users').doc('counter').get()
  db.collection('users').doc(user.uid).set({
    name: user.displayName,
    email: user.email,
    picture: user.photoURL,
    uid: user.uid,
  })
}