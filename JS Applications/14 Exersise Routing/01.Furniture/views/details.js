import { html } from 'https://unpkg.com/lit-html?module'
import { del, getOne } from '../data/api.js'

let detailsPageTemplate = (data, isOwner, ctx) => html`
<div class="row space-top">
    <div class="col-md-12">
        <h1>Furniture Details</h1>
    </div>
</div>
<div class="row space-top">
    <div class="col-md-4">
        <div class="card text-white bg-primary">
            <div class="card-body">
                <img src="${data.img}" />
            </div>
        </div>
    </div>
    <div class="col-md-4">
        <p>Make: <span>${data.make}</span></p>
        <p>Model: <span>${data.model}</span></p>
        <p>Year: <span>${data.year}</span></p>
        <p>Description: <span>${data.description}</span></p>
        <p>Price: <span>${data.price}</span></p>
        <p>Material: <span>${data.material}</span></p>
        ${(isOwner ? html`<div>
            <a href=${`/edit/${data._id}`} class="btn btn-info">Edit</a>
            <a @click=${() => onDelete(ctx)} href="javascript:void(0)" class="btn btn-red">Delete</a>
        </div>
    </div>`: '')}

</div>`

export async function detailsPage(ctx) {
    let id = ctx.params.id
    let data = await getOne(`http://localhost:3030/data/catalog/` + id)
    ctx.render(detailsPageTemplate(data, data._ownerId == sessionStorage.getItem('userId'), ctx))
}
function onDelete(ctx) {
    let id = ctx.params.id
    del(`http://localhost:3030/data/catalog/` + id)
    ctx.page.redirect('/')
}