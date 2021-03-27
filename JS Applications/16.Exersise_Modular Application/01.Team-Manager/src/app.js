import { render } from '../node_modules/lit-html/lit-html.js'
import page from '../node_modules/page/page.mjs'
import { browseTeamPage } from './views/browseTeam.js'
import { homePage } from './views/home.js'
import { logInPage } from './views/login.js'
import * as api from '../src/data/api.js'
window.api = api
const target = document.querySelector('main')
navigation()
page('/', contextDecoration, homePage)
page('/login', contextDecoration, logInPage)

page('/browseTeam', contextDecoration, browseTeamPage)

page.start()
function contextDecoration(ctx, next) {
    ctx.render = (content) => render(content, target)
    ctx.nav = navigation
    next()
}

function navigation() {
    let token = sessionStorage.getItem('authToken')
    if (token) {
        Array.from(document.querySelectorAll('.guest')).forEach(e => e.style.display = 'none')
        Array.from(document.querySelectorAll('.logged')).forEach(e => e.style.display = 'block')
    } else {
        Array.from(document.querySelectorAll('.guest')).forEach(e => e.style.display = 'block')
        Array.from(document.querySelectorAll('.logged')).forEach(e => e.style.display = 'none')
    }
}