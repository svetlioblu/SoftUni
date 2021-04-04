import { render } from '../node_modules/lit-html/lit-html.js'
import page from '../node_modules/page/page.mjs'
import { logOut } from './data/api.js'
import { catalogPage } from './views/catalog.js'
import { createPage } from './views/create.js'
import { detailsPage } from './views/details.js'
import { editPage } from './views/edit.js'
import { homePage } from './views/home.js'
import { loginPage } from './views/login.js'
import { registerPage } from './views/register.js'
import { searchPage } from './views/search.js'

const target = document.getElementById('main-content')
setNavigation()

page('/', decorateContext, homePage)
page('/login', decorateContext, loginPage)
page('/register', decorateContext, registerPage)
page('/catalog', decorateContext, catalogPage)
page('/details/:id', decorateContext, detailsPage)
page('/edit/:id', decorateContext, editPage)
page('/create', decorateContext, createPage)
page('/search', decorateContext, searchPage)
page.start()

function decorateContext(ctx, next) {
    ctx.render = (content) => render(content, target)
    ctx.setNavigation = setNavigation
    next()
}

function setNavigation() {

    if (sessionStorage.getItem('email')) {
        document.getElementById('guest').style.display = 'none'
        document.getElementById('user').style.display = 'block'
    } else {
        document.getElementById('guest').style.display = 'block'
        document.getElementById('user').style.display = 'none'
    }
}

document.getElementById('logOutBtn').addEventListener('click', () => {
    logOut()
    setNavigation()
    page.redirect('/')
})