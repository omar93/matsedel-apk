// sets the container height to the display height after changing size
window.addEventListener('resize', e => setWindowSize)
function setWindowSize() {
    let windowHeigth = document.documentElement.clientHeight
    let container = document.getElementById('container')
    container.style.height = (windowHeigth)+'px'
}
setWindowSize() //calls it because of a delay on phone is it waits for the listener

let days = ['Mån','Tis','Ons','Tors','Fre','Lör','Sön']
let fullDays = ['Måndag','Tisdag','Onsdag','Torsdag','Fredag','Lördag','Söndag']
for (let i = 0; i < 7; i++) {

    /* Creates the day rows */
    let foodRow = document.createElement('food-row')
    foodRow.setAttribute('day', days[i])
    foodRow.setAttribute('id', i+1)
    document.querySelector('#main').appendChild(foodRow)

    /* Creates the day list */
    let option = document.createElement('option')
    option.textContent = fullDays[i]
    document.querySelector('#days').appendChild(option)
}