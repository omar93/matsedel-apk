const template = document.createElement('template')
template.innerHTML = `
<!--Start Message grid and layout-->
<style>
  :host {
    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 3fr 7fr;
    grid-template-areas:
    'day food'
    'day food'
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

</style>
<!--End Message grid and layout-->

<p id="day" class="text">
  <span>mån</span>
</p>

<p id="food" class="text">
  <span>Lax</span>
</p>

`
class FoodRow extends window.HTMLElement {
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
    // this._date.textContent = this._dateString()
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
