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
  grid-template-columns: 1fr 8fr 1fr;
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
  <span id="1" class="ruta"></span>
  <span id="2" class="ruta"></span>
  <span id="3" class="ruta"></span>
  <span id="4" class="ruta"></span>
  <span id="5" class="ruta"></span>
</div>
<button id="submit">Submit</button>


`
class FoodRow extends window.HTMLElement {
  constructor() {
    super()
    this.classList.add('adminView')
    this.classList.add('ruta')
    this.attachShadow({ mode: 'open' })
    this.shadowRoot.appendChild(template.content.cloneNode(true))
    this._day = this.shadowRoot.querySelector('#day')
    this._food = this.shadowRoot.querySelector('#food')
    this._pic = this.shadowRoot.querySelector('#pic')
    this._date = this.shadowRoot.querySelector('#date')

    this._id1 = this.shadowRoot.getElementById(1)
    this._id2 = this.shadowRoot.getElementById(2)
    this._id3 = this.shadowRoot.getElementById(3)
    this._id4 = this.shadowRoot.getElementById(4)
    this._id5 = this.shadowRoot.getElementById(5)

    this._submit = this.shadowRoot.querySelector('#submit')
  }

  static get observedAttributes() { return ['food', 'day', 'pic','font'] }

  attributeChangedCallback(attr, oldVal, newVal) {
    if (attr === 'food') { this._food.textContent = newVal }
    if (attr === 'day') { this._day.textContent = newVal }
    if (attr === '1') { this._id1.textContent = newVal }
    if (attr === '2') { this._id2.textContent = newVal }
    if (attr === '3') { this._id3.textContent = newVal }
    if (attr === '4') { this._id4.textContent = newVal }
    if (attr === '5') { this._id5.textContent = newVal }

    // if (attr === 'font') { this._day.classList.add(newVal) }
    //if (attr === 'pic') { this._pic.style.backgroundImage = `url(${newVal})` }
  }

  connectedCallback() {
    // this._date.textContent = this._dateString()
    this._setListeners()
  }

  disconnectedCallback() {
  }

  _setListeners() {
    this._id1.addEventListener('click', e => {
      let row = e.target
      let id = row.id
      let x = document.getElementById(id)
      console.log(x)
      let active = this.shadowRoot.querySelectorAll('.active')
      let current = active[0]
      if (active.length >= 1) {
        console.log(current)
        current.classList.remove('active')
      } else {
        this.classList.add('active')
      }
    })
    this._id2.addEventListener('click', this._getFoodText)
    this._id3.addEventListener('click', this._getFoodText)
    this._id4.addEventListener('click', this._getFoodText)
    this._id5.addEventListener('click', this._getFoodText)   
    this._submit.addEventListener('click', e=> {
      let active = this.shadowRoot.querySelectorAll('.active')
      // if(active.length > 0) {
      //   active[0].classList.remove('active')
      //   console.log(active)
      // }

    })  
  }

  _getFoodText(e) {



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
