import page from "//unpkg.com/page/page.mjs"
import { render } from 'https://unpkg.com/lit-html?module'
import { dashboardPage } from "./views/dashboard.js"
import { loginPage } from "./views/login.js"

const target = document.querySelector('.container')
page('/', renderMiddleWare, dashboardPage)
page('/dashboard', renderMiddleWare, dashboardPage)
page('/login', renderMiddleWare, loginPage)
//page('/details/:id', renderMiddleWare, detailsPage)



nav()
page.start()
function renderMiddleWare(ctx, next) {
    ctx.render = (content) => render(content, target)
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