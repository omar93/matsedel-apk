const template = document.createElement('template')
template.innerHTML = `
<!--Start Message grid and layout-->
<style>
:host {
  display:grid;
  grid-template-areas: 
  'day food food'
  'date food2 food2';
  border: 2px solid black;
}

.dayDate { margin-left: 20px; }
.dayDate {text-align: left;}
.foodText { margin-left: 10px; }

#day {grid-area: day;}
#date {grid-area: date; margin-left:13px;}
#food {grid-area: food;}
#food2 {grid-area: food2;}

</style>

  <p id="day" class="dayDate">Måndag</p>
  <p id="date" class="dayDate">2019/07/13</p>
  <p id="food" class="foodText">Lax med potatismos & dillsås</p>
  <p id="food2" class="foodText">Flygande jakob med pasta</p>

`
class FoodRow extends window.HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
    this.shadowRoot.appendChild(template.content.cloneNode(true))
    this._container = this.shadowRoot.querySelector('#container')
    this._day = this.shadowRoot.querySelector('#day')
    this._food = this.shadowRoot.querySelector('#food')
    this._food2 = this.shadowRoot.querySelector('#food2')
    this._pic = this.shadowRoot.querySelector('#pic')
    this._date = this.shadowRoot.querySelector('#date')
  }

  static get observedAttributes() { return ['food', 'day','font'] }

  attributeChangedCallback(attr, oldVal, newVal) {
    if (attr === 'food') { this._food.textContent = newVal }
    if (attr === 'day') { this._day.textContent = newVal }
  }

  connectedCallback() {
    this._date.textContent = this._dateString()
  }

  disconnectedCallback() {
  }

  _dateString() {
    let date = new Date()
    let year = date.getFullYear()
    let month = date.getMonth()
    let day = date.getDay()
    return `${year}/${month}/${day}`
  }
}

window.customElements.define('food-row', FoodRow)
module.exports = FoodRow
