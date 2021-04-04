import { html } from '../../node_modules/lit-html/lit-html.js'

let searchPageTemplate = () => html`
<section id="search-page" class="content">
    <h1>Search</h1>
    <form id="search-form">
        <p class="field search">
            <input type="text" placeholder="Search by article title" name="search">
        </p>
        <p class="field submit">
            <input class="btn submit" type="submit" value="Search">
        </p>
    </form>
    <div class="search-container">
        <h3 class="no-articles">No matching articles</h3>
    </div>
</section>`
export async function searchPage(ctx) {
    ctx.render(searchPageTemplate())
}