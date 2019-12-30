let settingsBtn = document.querySelector('#settings')

settingsBtn.addEventListener('click', e=> {
    let foodView = document.getElementById('main')
    let profileView = document.getElementById('profil')
    profileView.style.zIndex = 1
    foodView.style.zIndex = -1
})

let exitBtn = document.querySelector('#exit')

exitBtn.addEventListener('click', e=> {
    let foodView = document.getElementById('main')
    let profileView = document.getElementById('profil')
    profileView.style.zIndex = -1
    foodView.style.zIndex = 1
    settingsBtn.style.zIndex -2
})