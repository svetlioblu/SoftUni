import { render } from '../node_modules/lit-html/lit-html.js'
import page from '../node_modules/page/page.mjs'
import { logOut } from './data/api.js'
import { homePage } from './views/home.js'
import { loginPage } from './views/login.js'
import { registerPage } from './views/register.js'
import { allListingsPage } from './views/allListings.js'
import { detailsPage } from './views/details.js'
import { createPage } from './views/createListing.js'
import { editPage } from './views/edit.js'
import { myListningsPage } from './views/myListnings.js'
import { searchPage } from './views/search.js'
const target = document.getElementById('site-content')
setNavigation()
page('/', decorateContext, homePage)
page('/login', decorateContext, loginPage)
page('/register', decorateContext, registerPage)
page('/All-Listings', decorateContext, allListingsPage)
page('/details/:id', decorateContext, detailsPage)
page('/create', decorateContext, createPage)
page('/edit/:id', decorateContext, editPage)
page('/My-Listings', decorateContext, myListningsPage)
page('/search', decorateContext, searchPage)
page.start()

function decorateContext(ctx, next) {
    ctx.render = (content) => render(content, target)
    ctx.setNavigation = setNavigation
    next()
}

function setNavigation() {
    let user = sessionStorage.getItem('username')
    if (user) {
        document.getElementById('guest').style.display = 'none'
        document.getElementById('profile').style.display = 'block'
        document.querySelector('#profile > a').textContent = `Welcome ${user}`
    } else {
        document.getElementById('guest').style.display = 'block'
        document.getElementById('profile').style.display = 'none'
    }
}

document.getElementById('logOutBtn').addEventListener('click', (ev) => {
    let confirmation = confirm('Are yo usure that want to LogOut?')
    logOut()
    setNavigation()
    page.redirect('/')
})