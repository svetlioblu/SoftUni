import { html } from '../../node_modules/lit-html/lit-html.js'
import { del, getOne } from '../data/api.js'

let detailsPageTemplate = (data, isOwner, onDelete) => html`
<section id="details-page" class="content details">
    <h1>${data.title}</h1>

    <div class="details-content">
        <strong>Published in category ${data.category}</strong>
        <p>${data.content}</p>
        <div class="buttons">
            ${isOwner ? html`<a @click=${onDelete} href="javascript:void(0)" class="btn delete">Delete</a>
            <a href="/edit/${data._id}" class="btn edit">Edit</a>` : ''}
            <a href="/" class="btn edit">Back</a>
        </div>
    </div>
</section>`


export async function detailsPage(ctx) {
    let id = ctx.params.id
    let data = await getOne(`http://localhost:3030/data/wiki/` + id)
    let isOwner = sessionStorage.getItem('userId') && data._ownerId == sessionStorage.getItem('userId')
    ctx.render(detailsPageTemplate(data, isOwner, onDelete))

    async function onDelete() {
        await del(`http://localhost:3030/data/wiki/` + id)
        ctx.page.redirect('/')
    }
}