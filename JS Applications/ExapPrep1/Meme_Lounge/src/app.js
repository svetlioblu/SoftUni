import { render } from '../node_modules/lit-html/lit-html.js'
import page from '../node_modules/page/page.mjs'
import { logOut } from './data/api.js'
import { homePage } from './views/home.js'
import { loginPage } from './views/login.js'
import { registerPage } from './views/register.js'
import * as api from '../src/data/api.js'
import { allMemesPage } from './views/allMemes.js'
import { deteilsPage } from './views/details.js'
import { createPage } from './views/create.js'
import { editPage } from './views/edit.js'
import { myPage } from './views/myProfile.js'
window.api = api
const target = document.querySelector('main')
setUpNavigation()
page('/', decorateContext, homePage)
page('/login', decorateContext, loginPage)
page('/register', decorateContext, registerPage)
page('/All Memes', decorateContext, allMemesPage)
page('/create', decorateContext, createPage)
page('/edit/:id', decorateContext, editPage)
page('/details/:id', decorateContext, deteilsPage)
page('/My Profile', decorateContext, myPage)
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
