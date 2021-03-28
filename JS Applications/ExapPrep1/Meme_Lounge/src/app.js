import { render } from '../node_modules/lit-html/lit-html.js'
import page from '../node_modules/page/page.mjs'
import { logOut } from './data/api.js'
import { homePage } from './views/home.js'
import { loginPage } from './views/login.js'
import { registerPage } from './views/register.js'
import * as api from '../src/data/api.js'
window.api = api
const target = document.querySelector('main')
setUpNavigation()
page('/', decorateContext, homePage)
page('/login', decorateContext, loginPage)
page('/register', decorateContext, registerPage)

page.start()

function decorateContext(ctx, next) {
    ctx.render = (content) => render(content, target)
    ctx.navUpdate = setUpNavigation
    next()
}

function setUpNavigation() {
    let email = sessionStorage.getItem('email')
    if (email) {
        document.querySelector('.guest').style.display = 'none'
        document.querySelector('.user').style.display = 'block'
        document.querySelector('.user .profile > span').textContent = `Welcome, ${email}`
    } else {
        document.querySelector('.guest').style.display = 'block'
        document.querySelector('.user').style.display = 'none'
    }
}

document.getElementById('logOut').addEventListener('click', async (ev) => {

    await logOut()
    page.redirect('/')
})
