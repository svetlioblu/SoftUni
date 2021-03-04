(function () {
    document.getElementsByTagName('form')[0].addEventListener('submit', postBook)
    document.getElementById('loadBooks').addEventListener('click', getBooks)

}())
async function getBooks() {
    const table = document.getElementsByTagName('tbody')[0]
    const url = 'http://localhost:3030/jsonstore/collections/books'
    const response = await fetch(url)
    if (response.ok) {
        const data = await response.json()
        table.innerHTML = ''
        Object.values(data).forEach(el => {
            const addBook = e('tr', {}, '', e('td', {}, `${el.title}`), e('td', {}, `${el.author}`), e('td', {}, ``, e('button', { class: 'edit' }, `Edit`), e('button', { class: 'delete' }, `Delete`)))
            table.appendChild(addBook)
        })
        table.addEventListener('click', dispatcher)
    } else { alert(response.statusText) }

}
async function postBook(ev) {
    ev.preventDefault()
    const title = document.getElementById('title')
    const author = document.getElementById('author')
    if (title.value == '' || author.value == '') {
        throw new Error('Invalid Input!')
    }
    const url = 'http://localhost:3030/jsonstore/collections/books'
    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ author: author.value, title: title.value })
    }
    const response = await fetch(url, options)
    // const data = await response.json()
    // console.log(data);
    author.value = ''
    title.value = ''
    if (!response.ok) {
        alert(response.statusText)
    }

}
async function deleteBook() {

}
function dispatcher(ev) {
    if (ev.target.className == 'edit') {

    } else if (ev.target.className == 'dlete') {

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
