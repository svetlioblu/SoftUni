import { html } from '../../node_modules/lit-html/lit-html.js'
import { until } from '../../node_modules/lit-html/directives/until.js'
import { getAll } from '../data/api.js'
import { loadTemplate } from './common/loadTemplate.js'

//pageTemplate
let browseTeamTemplate = (data, isLogged) => html`
<section id="browse">

    <article class="pad-med">
        <h1>Team Browser</h1>
    </article>
    ${(isLogged ? html` <article class="layout narrow">
        <div class="pad-small"><a href="#" class="action cta">Create Team</a></div>
    </article>`: '')}

    ${data.map(teamTemplate)}
</section>`

//Single TeamTemplate
let teamTemplate = (team) => html`
<article class="layout">
    <img src="${team.logoUrl}" class="team-logo left-col">
    <div class="tm-preview">
        <h2>${team.name}</h2>
        <p>${team.description}</p>
        <span class="details">? Members</span>
        <div><a href="/details/${team._id}" class="action">See details</a></div>
    </div>
</article>`

export async function browseTeamPage(ctx) {
    let token = sessionStorage.getItem('authToken')
    let data = await getAll('http://localhost:3030/data/teams')
    ctx.render(until(populateTemplate(token), loadTemplate()))
}

async function populateTemplate(token) {
    let data = await getAll('http://localhost:3030/data/teams')
    return browseTeamTemplate(data, token)
}