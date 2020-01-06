const firebase = require('firebase')
const auth = firebase.auth()
const db = firebase.firestore()
let provider = new firebase.auth.GoogleAuthProvider()
let signoutBtn = document.querySelector('#signout_btn')
let container = document.querySelector('#container')

let form = document.querySelector('#form')
let email = document.querySelector('#email')
let password = document.querySelector('#password')

let signinBtn = document.querySelector('#siginBtn')
let newAccBtn = document.querySelector('#newAcc')

// checks if a user had signed in before so he dosen't
// have to do it everytime page refreshesh
firebase.auth().onAuthStateChanged(user => {
  if (user) { // if user signed in
    console.log('inne')
    console.log(user.uid)
    checkUserDB(user)
  } else {
    showForm()
  }
})

signinBtn.addEventListener('click', e=> {
  e.preventDefault()
  auth.signInWithEmailAndPassword(email.value,password.value)
})

newAcc.addEventListener('click', e=> {
  e.preventDefault()
  auth.createUserWithEmailAndPassword(email.value,password.value)
})

// Checks if the user excists in the firebase db after signin
function checkUserDB(user) {
  hideForm()
  console.log('email: ', user.email)
  // these 2 rows gives admin privilge, bad implementation, fix later but works for family
  if(user.email === 'omar93@hotmail.se') {document.getElementById('hamhamBtn').style.display = 'block'}
  if(user.email === 'basma@optikab.se') {document.getElementById('hamhamBtn').style.display = 'block'}

  // console.log(user.displayName,' signed in')
  //cheks user in db
  db.collection('users').doc(user.uid).get().then(doc => {
    if (!doc.exists) {
      console.log('user not in database, adding user: ' + user.uid)
      addNewUser(user)
    }
    
  }).catch(error => console.log('add user to db error: ' + error))

  db.collection('suggestions').doc(user.uid).get().then(doc => {
    if (!doc.exists) {
      console.log('user doc not in database, adding user: ' + user.displayName)
      console.log('doc ID: ' + user.uid)
      addNewSuggetionsDoc(user)
    }
  })
}

// user gets logged out when clicking this button
signoutBtn.addEventListener('click', e => {
  firebase.auth().signOut().then(() => {
    console.log('signed out')
    showForm()
  }).catch(() => {
    console.log('signout error')
  })
})



// Adds the user to firebase db if he does not exist after signin
async function addNewUser(user) {
  db.collection('users').doc(user.uid).set({
    email: user.email,
    uid: user.uid
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

function showForm() {
  form.classList.remove('hide')
  signinBtn.classList.remove('hide')
  newAcc.classList.remove('hide')
}

function hideForm() {
  form.classList.add('hide')
  signinBtn.classList.add('hide')
  newAcc.classList.add('hide')
}