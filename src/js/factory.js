// sets the container height to the display height after changing size
window.addEventListener('resize', e => setWindowSize)
function setWindowSize() {
    let windowHeigth = document.documentElement.clientHeight
    let container = document.getElementById('container')
    container.style.height = (windowHeigth)+'px'
}
setWindowSize() //calls it because of a delay on phone is it waits for the listener

let days = ['mån','tis','ons','tor','fre','lör','sön']
let fullDays = ['Måndag','Tisdag','Onsdag','Torsdag','Fredag','Lördag','Söndag']
for (let i = 0; i < 7; i++) {

    /* Creates the day rows */
    let foodRow = document.createElement('food-row')
    foodRow.setAttribute('day', days[i])
    foodRow.setAttribute('id', days[i])
    document.querySelector('#main').appendChild(foodRow)

    /* Creates the day list */
    let option = document.createElement('option')
    option.textContent = days[i]
    document.querySelector('#days').appendChild(option)
}