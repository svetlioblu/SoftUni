import { html } from '../../node_modules/lit-html/lit-html.js'
import { getAll } from '../data/api.js'

let myListningsPageTemplate = (data) => html`
<section id="my-listings">
    <h1>My car listings</h1>
    <div class="listings">
        ${data.map(carTemplate)}
        ${data.length != 0 ? '' : html`<p class="no-cars"> You haven't listed any cars yet.</p>`}
    </div>
</section>`
let carTemplate = (car) => html`
<div class="listing">
    <div class="preview">
        <img src="${car.imageUrl}">
    </div>
    <h2>${car.brand} ${car.model}</h2>
    <div class="info">
        <div class="data-info">
            <h3>Year: ${car.year}</h3>
            <h3>Price: ${car.price} $</h3>
        </div>
        <div class="data-buttons">
            <a href="/details/${car._id}" class="button-carDetails">Details</a>
        </div>
    </div>
</div>`
export async function myListningsPage(ctx) {
    let userId = sessionStorage.getItem('userId')
    let data = await getAll(`http://localhost:3030/data/cars?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`)
    ctx.render(myListningsPageTemplate(data))
}