import { render } from '../node_modules/lit-html/lit-html.js'
import page from '../node_modules/page/page.mjs'
import { homePage } from './views/home.js'
import * as api from './data/api.js'
window.api = api
const target = document.getElementById('site-content')
setNavigation()
page('/', decorateContext, homePage)
page.start()

function decorateContext(ctx, next) {
    ctx.render = (content) => render(content, target)
    ctx.setNavigation = setNavigation
    next()
}

function setNavigation() {
    let user = gsessionStorage.getItem('username')
    if (user) {
        document.getElementById('guest').style.display = 'none'
        document.getElementById('profile').style.display = 'block'
        document.querySelector('#profile > a').textContent=`Welcome ${user}`
    } else {
        document.getElementById('guest').style.display = 'block'
        document.getElementById('profile').style.display = 'none'
    }
}