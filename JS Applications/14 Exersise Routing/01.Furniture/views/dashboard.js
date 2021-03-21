import { html, render } from 'https://unpkg.com/lit-html?module'

let dashboardTemplate = () => html`
<h1>Test dashboard</h1>`

export async function dashboardPage(ctx) {
    // const data = make fetch
    ctx.render(dashboardTemplate())
}