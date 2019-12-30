for (let i = 0; i < 7; i++) {
    let div = document.createElement('div')

    div.classList.add('inside')
    div.classList.add('foodGrid')

    let day = document.createElement('p')
    day.classList.add('dayText')
    day.classList.add('dayDate')
    day.textContent = 'monday'

    let date = document.createElement('p')
    date.classList.add('dateText')
    date.classList.add('dayDate')
    date.textContent = '2020/01/01'

    let food = document.createElement('p')
    food.setAttribute('id', 'food')
    food.classList.add('foodText')
    food.textContent = 'lax med mos'

    let food2 = document.createElement('p')
    food2.setAttribute('id', 'food2')
    food2.classList.add('foodText')
    food2.textContent = 'korv me mos'

    div.appendChild(day)
    div.appendChild(date)
    div.appendChild(food)
    div.appendChild(food2)

    document.querySelector('#main').appendChild(div)
}


let windowHeigth = document.documentElement.clientHeight

let container = document.getElementById('container')

container.style.height = (windowHeigth)+'px'


/*
    let div = document.createElement('div')
    div.classList.add('inside')
    div.classList.add('foodGrid')

    let day = document.createElement('p')
    day.classList.add('dayText')
    day.classList.add('dayDate')
    day.textContent = 'monday'

    let date = document.createElement('p')
    date.classList.add('dateText')
    date.classList.add('dayDate')
    date.textContent = '2020/01/01'

    let food = document.createElement('p')
    food.setAttribute('id', 'food')
    food.classList.add('foodText')
    food.textContent = 'lax med mos'

    let food2 = document.createElement('p')
    food2.setAttribute('id', 'food2')
    food2.classList.add('foodText')
    food2.textContent = 'korv me mos'

*/