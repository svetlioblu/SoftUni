function e(type, attribute, text, ...params) {
    let element = document.createElement(type)
    if (attribute != {} && attribute != undefined) {
        Object.entries(attribute).forEach(([name, value]) => {
            element.setAttribute(`${name}`, `${value}`)
        })
    }
    if (text != undefined && text != '') {
        element.innerHTML = text
    }
    if (params != undefined && params.length != 0) {
        params.forEach(e => {
            element.appendChild(e)
        })
    }
    return element
}
//--------------
import {html, render} from 'https://unpkg.com/lit-html?module'
import{html,render} from './node_modules/lit-html/lit-html.js'

import page from "//unpkg.com/page/page.mjs"
import page from './node_modules/page/page.mjs'