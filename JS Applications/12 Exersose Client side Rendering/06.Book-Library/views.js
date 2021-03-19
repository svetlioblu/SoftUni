import { html, render } from 'https://unpkg.com/lit-html?module'
import { del, getAll, postCreate } from './api.js'
const body = document.querySelector('body')
let isEdit = false

let pageTemplate = (isEdit) => html`<button id="loadBooks" @click=${onLoadBooks}>LOAD ALL BOOKS</button>
<table>
    <thead>
        <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Action</th>
        </tr>
    </thead>
    <tbody>

    </tbody>
</table>
${isEdit ? editFormTemplate() : addFormTemplate()}
`

let rowsTemplate = (data) => html`${data.map(row => {
    return html`<tr>
    <td>${row[1].author}</td>
    <td>${row[1].title}</td>
    <td>
        <button class="edit" data-id="${row[0]}">Edit</button>
        <button class="delete" data-id="${row[0]}">Delete</button>
    </td>
</tr>`})}`
let editFormTemplate = () => html`<form id="edit-form">
    <input type="hidden" name="id">
    <h3>Edit book</h3>
    <label>TITLE</label>
    <input type="text" name="title" placeholder="Title...">
    <label>AUTHOR</label>
    <input type="text" name="author" placeholder="Author...">
    <input type="submit" value="Save">
</form>`
let addFormTemplate = () => html`<form id="add-form" @submit=${onBookCreate}>
    <h3>Add book</h3>
    <label>TITLE</label>
    <input type="text" name="title" placeholder="Title...">
    <label>AUTHOR</label>
    <input type="text" name="author" placeholder="Author...">
    <input type="submit" value="Submit">
</form>`

export function start() {
    render(pageTemplate(isEdit), body)
}
function onBookCreate(ev) {
    ev.preventDefault()
    const formData = new FormData(ev.target)
    let title = formData.get('title')
    let author = formData.get('author')
    if (title == '' || author == '') {
        return alert('The fields cannot be Empty!')
    }
    postCreate('http://localhost:3030/jsonstore/collections/books', { author, title })
    ev.target.reset()
}

async function onLoadBooks() {
    const target = document.querySelector('tbody')
    let data = await getAll('http://localhost:3030/jsonstore/collections/books')
    render(rowsTemplate(Object.entries(data)), target)

    if (target.innerHTML != '') {
        target.addEventListener('click', onRowAction)
    }
}

function onRowAction(ev) {
    if (ev.target.className == 'delete') {
        del('http://localhost:3030/jsonstore/collections/books/' + ev.target.dataset.id)
        render(pageTemplate(isEdit), body)
    } else if (ev.target.className == 'edit') {
        isEdit = true
        render(pageTemplate(isEdit), body)
    }
}

