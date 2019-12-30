const template = document.createElement('template')
template.innerHTML = `
<!--Start Message grid and layout-->
<style>
  :host {
    background-color:gold;
    border: 1px solid black;
    font-size: 120%;
    display: grid;
    grid-template-rows: repeat(2, 50%);
    grid-template-columns: 10% 90%;
    grid-template-areas:
    'day food'
    'date food2';
}
#day {grid-area: day;}
#date {grid-area: date;}
#food {grid-area: food;}
#food2 {grid-area: food2;}

.dayDate {
  text-align: center; 
  overflow: hidden;
}

.foodText {
  margin-left: 10%;
}

</style>
<!--End Message grid and layout-->


                <p id="day" class="dayText dayDate">måndag</p>
                <p id="date" class="dateText dayDate">33</p>
                <p id="food" class="foodText">mat1</p>
                <p id="food2" class="foodText">mat2</p>


`
class FoodSearch extends window.HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
    this.shadowRoot.appendChild(template.content.cloneNode(true))
    this._container = this.shadowRoot.querySelector('#container')
    this._day = this.shadowRoot.querySelector('#day')
    this._food = this.shadowRoot.querySelector('#food')
    this._pic = this.shadowRoot.querySelector('#pic')
    this._date = this.shadowRoot.querySelector('#date')
  }

  static get observedAttributes() { return ['food', 'day', 'pic','font'] }

  attributeChangedCallback(attr, oldVal, newVal) {
    if (attr === 'food') { this._food.textContent = newVal }
    if (attr === 'day') { this._day.textContent = newVal }
    if (attr === 'font') { this._day.classList.add(newVal) }
    //if (attr === 'pic') { this._pic.style.backgroundImage = `url(${newVal})` }
  }

  connectedCallback() {
    this._date.textContent = this._dateString()
  }

  disconnectedCallback() {
    // console.log('mat borttagen')
  }

  _dateString() {
    let date = new Date()
    let year = date.getFullYear()
    let month = date.getMonth()
    let day = date.getDay()
    return `${year}/${month}/${day}`
  }
}

window.customElements.define('food-search', FoodSearch)
module.exports = FoodSearch
