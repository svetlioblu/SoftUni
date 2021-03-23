import { html } from 'https://unpkg.com/lit-html?module'
import { getAll } from '../data/api.js'


let MyPublicationsTemplate = (data) => html`<div class="row space-top">
    <div class="col-md-12">
        <h1>My Furniture</h1>
        <p>This is a list of your publications.</p>
    </div>
</div>
<div class="row space-top">${data.map(itemTemplate)}</div>`

let itemTemplate = (item) => html`
<div class="col-md-4">
    <div class="card text-white bg-primary">
        <div class="card-body">
            <img src='${item.img}' />
            <p>${item.description}</p>
            <footer>
                <p>Price: <span>${item.price} $</span></p>
            </footer>
            <div>
                <a href=${`/details/${item._id}`} class="btn btn-info">Details</a>
            </div>
        </div>
    </div>
</div>`
export async function myPublicationPage(ctx) {
    let data = await getAll(`http://localhost:3030/data/catalog?where=_ownerId%3D%22${sessionStorage.getItem('userId')}%22`)
    ctx.render(MyPublicationsTemplate(data))
}