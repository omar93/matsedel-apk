let settingsBtn = document.querySelector('#settings')
let menu = document.querySelector('#menu')
let expanded = false

settingsBtn.addEventListener('click', e => {
    if(!expanded) {
        menu.style.zIndex = 2
    } else {
        menu.style.zIndex = -2
    }
    expanded = !expanded
})