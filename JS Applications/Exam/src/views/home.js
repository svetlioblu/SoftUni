import { html } from '../../node_modules/lit-html/lit-html.js'
import { getAll } from '../data/api.js'

let homePageTemplate = (data) => html`
<section id="home-page" class="content">
    <h1>Recent Articles</h1>
    <section class="recent js">
        <h2>JavaScript</h2>
        ${(data.find(x => x.category == 'JavaScript') && data.find(x => x.category == 'JavaScript').content!='') ? articleTemplate(data.find(x => x.category == 'JavaScript')) : html`
        <h3 class="no-articles">No articles yet</h3>`}
    </section>
    <section class="recent csharp">
        <h2>C#</h2>
        ${(data.find(x => x.category == 'C#') && data.find(x => x.category == 'C#').content!='') ? articleTemplate(data.find(x => x.category == 'C#')) : html`
        <h3 class="no-articles">No articles yet</h3>`}
    </section>
    <section class="recent java">
        <h2>Java</h2>
        ${(data.find(x => x.category == 'Java') && data.find(x => x.category == 'Java').content!='') ? articleTemplate(data.find(x => x.category == 'Java')) : html`
        <h3 class="no-articles">No articles yet</h3>`}
    </section>
    <section class="recent python">
        <h2>Python</h2>
        ${(data.find(x => x.category == 'Python') && data.find(x => x.category == 'Python').content!='') ? articleTemplate(data.find(x => x.category == 'Python')) : html`
        <h3 class="no-articles">No articles yet</h3>`} 
    </section>
</section>`
let articleTemplate = (item) => html`<article>
    <h3>${item.title}</h3>
    <p>${item.content}</p>
    <a href="/details/${item._id}" class="btn details-btn">Details</a>
</article>`

export async function homePage(ctx) {
    ctx.setNavigation()
    let data = await getAll(`http://localhost:3030/data/wiki?sortBy=_createdOn%20desc&distinct=category`)
    ctx.render(homePageTemplate(data))
}