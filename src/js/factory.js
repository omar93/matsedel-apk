// sets the container height to the display height after changing size
window.addEventListener('resize', e => setWindowSize)
function setWindowSize() {
    let windowHeigth = document.documentElement.clientHeight
    let container = document.getElementById('container')
    container.style.height = (windowHeigth) + 'px'
}
setWindowSize() //calls it because of a delay on phone is it waits for the listener

let days = ['mån', 'tis', 'ons', 'tor', 'fre', 'lör', 'sön']
let fullDays = ['Måndag', 'Tisdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lördag', 'Söndag']

// creates the 7 rows for this weeks food and its displayed in the main section
for (let i = 0; i < 7; i++) {
    
    /* Creates the day rows */
    let foodRow = document.createElement('food-row')
    foodRow.setAttribute('day', days[i])
    foodRow.setAttribute('dayNumber', i)
    foodRow.setAttribute('id', days[i])
    for (let j = 0; j < 5; j++) {
        foodRow.setAttribute('slot' + j, '')
    }
    document.querySelector('#main').appendChild(foodRow)

    /* Creates the day list */
    let option = document.createElement('option')
    option.textContent = fullDays[i]
    option.setAttribute('id', i)
    document.querySelector('#days').appendChild(option)
}

// creates the 7 rows for next weeks food and its hidden in the main2 section
for (let i = 0; i < 7; i++) {
    /* Creates the day rows */
    let foodRow = document.createElement('food-row')
    foodRow.setAttribute('day', days[i])
    foodRow.setAttribute('dayNumber', i)
    foodRow.setAttribute('id', days[i+10])
    foodRow.classList.add('secondary')
    for (let j = 0; j < 5; j++) {
        foodRow.setAttribute('slot' + j, '')
    }
    document.querySelector('#main2').appendChild(foodRow)
}