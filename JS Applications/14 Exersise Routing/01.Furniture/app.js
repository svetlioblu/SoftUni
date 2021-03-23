import page from "//unpkg.com/page/page.mjs"
import { render } from 'https://unpkg.com/lit-html?module'
import { dashboardPage } from "./views/dashboard.js"
import { loginPage } from "./views/login.js"
import { registerPage } from "./views/register.js"
import { logOut } from "./data/api.js"
import { createPage } from "./views/create.js"
import { myPublicationPage } from "./views/myPublications.js"
import { detailsPage } from "./views/details.js"
import { editPage } from "./views/edit.js"

const target = document.querySelector('.container')
page('/', renderMiddleWare, dashboardPage)
page('/dashboard', renderMiddleWare, dashboardPage)
page('/login', renderMiddleWare, loginPage)
page('/register', renderMiddleWare, registerPage)
page('/create', renderMiddleWare, createPage)
page('/myPublications', renderMiddleWare, myPublicationPage)
page('/details/:id', renderMiddleWare, detailsPage)
page('/edit/:id', renderMiddleWare, editPage)

nav()
page.start()
function renderMiddleWare(ctx, next) {
    ctx.render = (content) => render(content, target)
    ctx.updateNav = nav
    next()
}

export function nav() {
    const loggedUser = document.getElementById('user')
    const guestUser = document.getElementById('guest')
    const token = sessionStorage.getItem('authToken')
    if (token) {
        guestUser.style.display = 'none'
        loggedUser.style.display = 'inline-block'
    } else {
        guestUser.style.display = 'inline-block'
        loggedUser.style.display = 'none'
    }
}
document.getElementById('logoutBtn').addEventListener('click', () => {
    let confirmation = confirm('Are you sure?')
    if (confirmation) {
        logOut()
        page.redirect('/')
    }
})