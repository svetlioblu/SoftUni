async function solution() {
    await createElements()
}
async function createElements() {
    const url = `http://localhost:3030/jsonstore/advanced/articles/list`
    const response = await fetch(url)
    const data = await response.json()
    data.forEach(async (el) => {
        let currentElemenet = e('div', { class: 'accordion' }, '', e('div', { class: 'head' }, '', e('span', {}, `${el.title}`), e('button', { class: 'button', id: `${el._id}` }, 'More')))
        document.getElementById('main').appendChild(currentElemenet)

        let getDetails = await getContent(el._id)
        let details = e('div', { class: 'extra' }, '', e('p', {}, `${getDetails.content}`))
        currentElemenet.appendChild(details)
        document.getElementById(`${el._id}`).addEventListener('click', onClick)
    })

}
async function getContent(id) {
    let url = `http://localhost:3030/jsonstore/advanced/articles/details/${id}`
    let response = await fetch(url)
    let data = await response.json()
    return data
}
window.addEventListener('load', solution)
function onClick(e) {
    let currentEl = e.target.parentNode.parentNode.children[1]
    
    if (currentEl.style.display == '' || currentEl.style.display == 'none') {
        e.target.parentNode.parentNode.children[1].style.display = 'block'
        e.target.textContent = 'Less'
    } else {
        currentEl.style.display = 'none'
        e.target.textContent = 'More'
    }
}
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