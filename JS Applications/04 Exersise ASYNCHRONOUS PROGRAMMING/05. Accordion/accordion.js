async function solution() {
    await createElements()
    //await getContent()

}
async function createElements() {
    let ids = []
    const url = `http://localhost:3030/jsonstore/advanced/articles/list`
    const response = await fetch(url)
    const data = await response.json()
    data.forEach(el => {
        let currentElemenet = e('div', { class: 'accordion' }, '', e('div', { class: 'head' }, '', e('span', {}, `${el.title}`), e('button', { class: 'button', id: `${el._id}` }, 'More')))
        document.getElementById('main').appendChild(currentElemenet)
        ids.push(el._id)
    })
    ids.forEach(e => {
        let content = getContent(e)
        console.log(content);
    })
    // let details = e('div', { class: 'extra' }, '', e('p', {}, `${extendDetails.content}`))
    // currentElemenet.appendChild(details)
}
async function getContent(id) {
    let url = `http://localhost:3030/jsonstore/advanced/articles/details/${id}`
    let response = await fetch(url)
    let data = await response.json()
    return data
}
window.addEventListener('load', solution)
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