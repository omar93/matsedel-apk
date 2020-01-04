const firebase = require('firebase')
const db = firebase.firestore()
const currentWeek = require('week')
const currentYear = require('year')
let date = currentYear() + '-' + (currentWeek() + 2)

let chosenFood = ''
let day = ''

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
  grid-template-columns: 1fr 9fr;
  grid-template-areas:
  'day adminBox submit';
}

#adminBox {
  flex-dieaction:row;
  align-items: center;
  justify-content: center;
}

#adminBox > span {
  width: 100%;
  height:100%;
  border: 1px solid black;
  font-size: 20px;
  text-align:center;
  line-height: 30px;
}

#food {
  grid-area:food;
  margin-left:20px;
}
#day {
  grid-area: day;
  margin-left:20%;
}

.text {
  font-size: 25px;
  line-height: 30px;
}

#submit {
  border-radius: .5em;
  margin: 10px;
  box-shadow:
  -7px -7px 7px 0 rgba(255,255,255,1),
  7px 7px 7px 0 rgba(0,0,0,.03);
  height: 80%;
  width: 80%;
}

.active {background-color: red;}
@media only screen and (max-width: 900px) {
  .text {
    font-size: 18px;
    line-height: 30px;
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
  <span id="omar"></span>
  <span id="ali"></span>
  <span id="ahmed"></span>
  <span id="mamma"></span>
  <span id="pappa"></span>
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
    this._omar = this.shadowRoot.querySelector('#omar')
    this._ali = this.shadowRoot.querySelector('#ali')
    this._ahmed = this.shadowRoot.querySelector('#ahmed')
    this._mamma = this.shadowRoot.querySelector('#mamma')
    this._pappa = this.shadowRoot.querySelector('#pappa')
  }

  _setListeners() {

    this._omar.addEventListener('click', e => {
      e.target.classList.toggle('active')
      chosenFood = e.target.textContent
      let day = this.getAttribute('day')
      db.collection('weeks').doc(date).update({ [day]: chosenFood })
    })

    this._ali.addEventListener('click', e => {
      e.target.classList.toggle('active')
      chosenFood = e.target.textContent
      let day = this.getAttribute('day')
      db.collection('weeks').doc(date).update({ [day]: chosenFood })
    })

    this._ahmed.addEventListener('click', e => {
      e.target.classList.toggle('active')
      chosenFood = e.target.textContent
      let day = this.getAttribute('day')
      db.collection('weeks').doc(date).update({ [day]: chosenFood })
    })

    this._mamma.addEventListener('click', e => {
      e.target.classList.toggle('active')
      chosenFood = e.target.textContent
      let day = this.getAttribute('day')
      db.collection('weeks').doc(date).update({ [day]: chosenFood })
    })

    this._pappa.addEventListener('click', e => {
      e.target.classList.toggle('active')
      chosenFood = e.target.textContent
      let day = this.getAttribute('day')
      db.collection('weeks').doc(date).update({ [day]: chosenFood })
    })
  }
  _dateString() {
    let date = new Date()
    let year = date.getFullYear()
    let month = date.getMonth()
    let day = date.getDay()
    return `${year}/${month}/${day}`
  }
  static get observedAttributes() { return ['food', 'day', 'omar', 'ali', 'ahmed', 'mamma', 'pappa'] }

  attributeChangedCallback(attr, oldVal, newVal) {
    if (attr === 'food') { this._food.textContent = newVal }
    if (attr === 'omar') { this._omar.textContent = newVal }
    if (attr === 'ali') { this._ali.textContent = newVal }
    if (attr === 'ahmed') { this._ahmed.textContent = newVal }
    if (attr === 'mamma') { this._mamma.textContent = newVal }
    if (attr === 'pappa') { this._pappa.textContent = newVal }
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
