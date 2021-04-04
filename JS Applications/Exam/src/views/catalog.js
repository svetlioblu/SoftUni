import { html } from '../../node_modules/lit-html/lit-html.js'
import { getAll } from '../data/api.js'

let catalogPageTemplate = (data) => html`
<section id="catalog-page" class="content catalogue">
    <h1>All Articles</h1>
    ${data.length == 0 ? html`<h3 class="no-articles">No articles yet</h3>` : data.map(articleTemplate)}
</section>`

let articleTemplate = (item) => html`
<a class="article-preview" href="/details/${item._id}">
    <article>
        <h3>Topic: <span>${item.title}</span></h3>
        <p>Category: <span>${item.category}</span></p>
    </article>
</a>`

export async function catalogPage(ctx) {
    let data = await getAll('http://localhost:3030/data/wiki?sortBy=_createdOn%20desc')
    ctx.render(catalogPageTemplate(data))
}