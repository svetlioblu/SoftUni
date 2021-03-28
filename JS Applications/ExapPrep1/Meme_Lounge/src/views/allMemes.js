import { html } from '../../node_modules/lit-html/lit-html.js'
import { getAll } from '../data/api.js'

let allMemesPageTemplate = (data) => html`
<section id="meme-feed">
    <h1>All Memes</h1>
    <div id="memes">

        ${(data.length != 0 ? data.map(oneMemeTemplate) : html`<p class="no-memes">No memes in database.</p>`)}

    </div>
</section>
`
let oneMemeTemplate = (item) => html`
<div class="meme">
    <div class="card">
        <div class="info">
            <p class="meme-title">${item.title}</p>
            <img class="meme-image" alt="meme-img" src="${item.imageUrl}">
        </div>
        <div id="data-buttons">
            <a class="button" href="/details/${item._id}">Details</a>
        </div>
    </div>
</div>`

export async function allMemesPage(ctx) {
    let data = await getAll(`http://localhost:3030/data/memes?sortBy=_createdOn%20desc`)
    console.log(data);
    ctx.render(allMemesPageTemplate(data))
}