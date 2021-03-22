import page from "//unpkg.com/page/page.mjs"
import { render } from 'https://unpkg.com/lit-html?module'
import { dashboardPage } from "./dashboard.js"
import { loginPage } from "./login.js"

const target = document.querySelector('.container')
page('/', renderMiddleWare, dashboardPage)
page('/dashboard', renderMiddleWare, dashboardPage)
page('/login', renderMiddleWare, loginPage)


page.start()
nav()
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