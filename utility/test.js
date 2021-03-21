/*let str = 'The Rose Valley (Bulgaria) is located just south of the Balkan Mountains (Kazanlak).The most common oil-bearing rose found in the valley is the pink-petaled Damask rose (Rosa damascena Mill).'
let reg = /\((.+?)\)/g
    let result = []
    let match = reg.exec(str)
    while(match) {
        result.push(match[1])
        match = reg.exec(str)
    }
    console.log(result);*/
//------------

/*function e(type, attribute, text, ...params) {
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
}*/

//--------------
//import { html, render } from 'https://unpkg.com/lit-html?module'