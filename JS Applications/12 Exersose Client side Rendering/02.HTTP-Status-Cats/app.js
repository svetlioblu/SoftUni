import { cats } from './catSeeder.js'
import { html, render } from 'https://unpkg.com/lit-html?module'
const target = document.getElementById('allCats')

let catTemplate = (data) => html`
<ul>
    ${data.map(catCardTempl)}
</ul>`
let catCardTempl = (cat) => html`<li>
    <img src="./images/${cat.imageLocation}.jpg" width="250" height="250" alt="Card image cap">
    <div class="info">
        <button @click=${onClick} class="showBtn">Show status code</button>
        <div class="status" style="display: none" id="${cat.id}">
            <h4>Status Code: ${cat.statusCode}</h4>
            <p>${cat.statusMessage}</p>
        </div>
    </div>
</li>`

update()
function update() {
    const template = catTemplate(cats)
    render(template, target)
}


function onClick(ev) {
    const status = ev.target.parentNode.querySelector('.status')
    if (status.style.display == 'none') {
        status.style.display = ''
        ev.target.textContent = 'Hide Status Code'
    } else {
        status.style.display = 'none'
        ev.target.textContent = 'Show Status Code'
    }

}
