import { towns } from './towns.js'
import { html, render } from 'https://unpkg.com/lit-html?module'

const target = document.querySelector('body')
let townsTemplate = (town) => html`
<article>
   <div id="towns">
   </div>
   <input type="text" id="searchText" />
   <button @click=${search}>Search</button>
   <div id="result">
      <ul>
         ${town.map(x => html`<li>${x}</li>`)}
      </ul>
      <span></span>
   </div>
</article>`

update()
const searchInput = document.getElementById('searchText')
function update() {
   render(townsTemplate(towns), target)
}
function search() {
   let match = 0
   if (searchInput.value != '') {
      Array.from(document.querySelectorAll('ul li')).map(x => {
         if (x.textContent.toLowerCase().includes(searchInput.value.toLowerCase())) {
            x.className = 'active'
            match += 1
            return x
         } else {
            x.className = ''
            return x
         }
      })
      searchInput.value = ''
   }
   document.querySelector('span').textContent = `${match} matches found`
}
