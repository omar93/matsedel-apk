// sets the container height to the display height after changing size
window.addEventListener('resize', e => setWindowSize)
function setWindowSize() {
    let windowHeigth = document.documentElement.clientHeight
    let container = document.getElementById('container')
    container.style.height = (windowHeigth)+'px'
}
setWindowSize() //calls it because of a delay on phone is it waits for the listener

let days = ['Mån','Tis','Ons','Tors','Fre','Lör','Sön']
for (let i = 0; i < 7; i++) {
    let foodRow = document.createElement('food-row')
    foodRow.setAttribute('day', days[i])
    document.querySelector('#main').appendChild(foodRow)
}