import page from "//unpkg.com/page/page.mjs"
import { render } from 'https://unpkg.com/lit-html?module'
import * as api from './api.js'
import { dashboardPage } from "./dashboard.js"
window.api = api
const target = document.querySelector('.container')
page('/dashboard',renderMiddleWare, dashboardPage)
page.start()

function renderMiddleWare(ctx, next) {
    ctx.render = (content) => render(content, target)
    next()
}