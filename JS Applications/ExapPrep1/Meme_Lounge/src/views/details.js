import { html } from '../../node_modules/lit-html/lit-html.js'
import { del, getOne } from '../data/api.js'

let detailsPageTemplate = (data, isOwner, onDelete) => html`
<section id="meme-details">
    <h1>Meme Title:${data.title}

    </h1>
    <div class="meme-details">
        <div class="meme-img">
            <img alt="meme-alt" src="${data.imageUrl}">
        </div>
        <div class="meme-description">
            <h2>Meme Description</h2>
            <p>
                ${data.description}
            </p>
            ${(isOwner ? html` <a class="button warning" href="/edit/${data._id}">Edit</a>
            <button @click=${onDelete} class="button danger">Delete</button>` : '')}
        </div>
    </div>
</section>
`


export async function deteilsPage(ctx) {
    let id = ctx.params.id
    let loggedOwner = sessionStorage.getItem('userId')
    let data = await getOne(`http://localhost:3030/data/memes/` + id)
    ctx.render(detailsPageTemplate(data, loggedOwner == data._ownerId, onDelete))
    async function onDelete() {
        await del(`http://localhost:3030/data/memes/${id}`)
        ctx.page.redirect('/All Memes')
    }
}
