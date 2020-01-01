let settingsBtn = document.querySelector('#settings')
let profile = document.querySelector('#profile')
let expanded = false

settingsBtn.addEventListener('click', e => {
    if(!expanded) {
        profile.style.zIndex = 2
    } else {
        profile.style.zIndex = -2
    }
    expanded = !expanded
})