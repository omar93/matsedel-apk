const firebase = require('firebase')
const db = firebase.firestore()
const week = require('weeknumber')
const year = require('year')

let thisWeek = week.weekNumber()
let nextWeek = week.weekNumber()
let thisYear = year()

let date = `${thisYear}-${thisWeek+1}`

let chosenFood = ''
let day = ''

console.log('date:',date)

const template = document.createElement('template')
template.innerHTML = `
<!--Start Message grid and layout-->
<style>
:host(.defaultView) > #adminBox {display:none;}
:host(.defaultView) > #submit {display:none;}
:host(.defaultView) {
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 3fr 7fr;
  grid-template-areas:
  'day food'
  'day food'
}

:host(.adminView) > #adminBox {display:flex;}
:host(.adminView) > #submit {display:block;}
:host(.adminView) > #food {display:none;}
:host(.adminView) {
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 60px 1fr;
  grid-template-areas:
  'day adminBox';
}

#adminBox {
  flex-dieaction:row;
  align-items: center;
  justify-content: center;
}

#adminBox > span {
  width: 100%;
  height:100%;
  border: #f9d0ff solid 1px;
  font-size: 20px;
  text-align:center;
  line-height: 30px;
}

#food {
  grid-area:food;
  margin-left:25px;
}
#day {
  grid-area: day;
  margin-left:20%;
}

.text {
  font-size: 25px;
  line-height: 30px;
}

span {
  border-radius: .5em;
  height: 100%;
  width: 100%;
} 


.active {background-color: #f9d0ff;}
@media only screen and (max-width: 900px) {

  .text {
    font-size: 18px;
    line-height: 30px;
  }

  #adminBox > span {
    width: 100%;
    height:100%;
    border: #f9d0ff solid 1px;
    font-size: 8px;
    line-height: 20px;
  }

  .box {
    {background-color: #f9d0ff;}
  }

  #adminBox {
    font-size:10px;
  }

  span {
    border-radius: 0;
    height: 100%;
    width: 20%;
    word-wrap: break-all;
    font-size:10px;
  }
}
</style>
<!--End Message grid and layout-->

<p id="day" class="text">
  <span></span>
</p>

<p id="food" class="text">
  <span></span>
</p>

<div id="adminBox">
  <span id="slot0" class="box"></span>
  <span id="slot1" class="box"></span>
  <span id="slot2" class="box"></span>
  <span id="slot3" class="box"></span>
  <span id="slot4" class="box"></span>
</div>
`
class FoodRow extends window.HTMLElement {
  constructor() {
    super()
    this.classList.add('defaultView')
    this.attachShadow({ mode: 'open' })
    this.shadowRoot.appendChild(template.content.cloneNode(true))
    this._day = this.shadowRoot.querySelector('#day')
    this._food = this.shadowRoot.querySelector('#food')
    this._pic = this.shadowRoot.querySelector('#pic')
    this._date = this.shadowRoot.querySelector('#date')

    this._slot0 = this.shadowRoot.querySelector('#slot0')
    this._slot1 = this.shadowRoot.querySelector('#slot1')
    this._slot2 = this.shadowRoot.querySelector('#slot2')
    this._slot3 = this.shadowRoot.querySelector('#slot3')
    this._slot4 = this.shadowRoot.querySelector('#slot4')
  }

  _setListeners() {
    

    this._slot0.addEventListener('click', e => {
      e.target.classList.toggle('active')
      chosenFood = e.target.textContent
      let day = this.getAttribute('day')
      db.collection('weeks').doc(date).set({ [day]: chosenFood },{merge:true})
    })

    this._slot1.addEventListener('click', e => {
      e.target.classList.toggle('active')
      chosenFood = e.target.textContent
      let day = this.getAttribute('day')
      db.collection('weeks').doc(date).set({ [day]: chosenFood },{merge:true})
    })

    this._slot2.addEventListener('click', e => {
      e.target.classList.toggle('active')
      chosenFood = e.target.textContent
      let day = this.getAttribute('day')
      db.collection('weeks').doc(date).set({ [day]: chosenFood },{merge:true})
    })

    this._slot3.addEventListener('click', e => {
      e.target.classList.toggle('active')
      chosenFood = e.target.textContent
      let day = this.getAttribute('day')
      db.collection('weeks').doc(date).set({ [day]: chosenFood },{merge:true})
    })

    this._slot4.addEventListener('click', e => {
      e.target.classList.toggle('active')
      chosenFood = e.target.textContent
      let day = this.getAttribute('day')
      db.collection('weeks').doc(date).set({ [day]: chosenFood },{merge:true})
    })
  }
  _dateString() {
    let date = new Date()
    let year = date.getFullYear()
    let month = date.getMonth()
    let day = date.getDay()
    return `${year}/${month}/${day}`
  }
  static get observedAttributes() { return ['food', 'day', 'slot0', 'slot1', 'slot2', 'slot3', 'slot4'] }

  attributeChangedCallback(attr, oldVal, newVal) {
    if (attr === 'food') { this._food.textContent = newVal }
    if (attr === 'slot0') { this._slot0.textContent = newVal }
    if (attr === 'slot1') { this._slot1.textContent = newVal }
    if (attr === 'slot2') { this._slot2.textContent = newVal }
    if (attr === 'slot3') { this._slot3.textContent = newVal }
    if (attr === 'slot4') { this._slot4.textContent = newVal }
    if (attr === 'day') { this._day.textContent = newVal }
  }

  connectedCallback() {
    day = this.getAttribute('day')
    this._setListeners()
  }

  disconnectedCallback() {
  }
}

window.customElements.define('food-row', FoodRow)
module.exports = FoodRow
