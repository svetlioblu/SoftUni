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
        Object.entries(data).forEach(el => {
            const addBook = e('tr', {}, '', e('td', {}, `${el[1].title}`), e('td', {}, `${el[1].author}`), e('td', {}, ``, e('button', { class: 'edit' }, `Edit`), e('button', { class: 'delete' }, `Delete`)))
            addBook.querySelector('.delete').addEventListener('click', (ev) => deleteBook(ev, el[0]))
            addBook.querySelector('.edit').addEventListener('click', (ev) => editBook(ev, el[0]))

            table.appendChild(addBook)
        })
    } else { alert(response.statusText) }
}
async function postBook(ev) {
    ev.preventDefault()
    console.log(document.querySelector('form button').textContent);
    if (document.querySelector('form button').textContent == 'Submit') {
        const title = document.getElementById('title')
        const author = document.getElementById('author')
        if (title.value == '' || author.value == '') {
            throw new Error('Invalid Input!')
        }

        const url =  'http://localhost:3030/jsonstore/collections/books'
        const method = 'POST'
        const options = {
            method,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ author: author.value, title: title.value })
        }
        const response = await fetch(url, options)
        author.value = ''
        title.value = ''
        if (!response.ok) {
            alert(response.statusText)
        }
    }
}
async function editBook(ev, id) {
    document.getElementsByTagName('h3')[0].textContent = 'Edit FORM'
    document.querySelector('form button').textContent = 'Save'
}
async function deleteBook(ev, id) {
    const url = 'http://localhost:3030/jsonstore/collections/books/' + id
    ev.target.parentNode.parentNode.remove()
    await fetch(url, { method: 'DELETE' })

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
