import { html } from '../../node_modules/lit-html/lit-html.js'
import { getAll } from '../data/api.js'
import { oneMemeTemplate } from './common/itemTemplate.js'

let allMemesPageTemplate = (data) => html`
<section id="meme-feed">
    <h1>All Memes</h1>
    <div id="memes">

        ${(data.length != 0 ? data.map(oneMemeTemplate) : html`<p class="no-memes">No memes in database.</p>`)}

    </div>
</section>
`
export async function allMemesPage(ctx) {
    let data = await getAll(`http://localhost:3030/data/memes?sortBy=_createdOn%20desc`)
    ctx.render(allMemesPageTemplate(data))
}