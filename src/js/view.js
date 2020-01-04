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

    let foodRows = document.querySelectorAll('food-row')
    for(let i = 0; i < 7; i++) {
        foodRows[i].classList.toggle('defaultView')
        foodRows[i].classList.toggle('adminView')
    } 
})