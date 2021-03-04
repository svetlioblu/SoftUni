(function () {
    document.getElementsByTagName('form')[0].addEventListener('submit', postBook)
    document.getElementById('loadBooks').addEventListener('click', getBooks)

}())
async function getBooks() {

    const url = 'http://localhost:3030/jsonstore/collections/books'
    const response = await fetch(url)
    if (response.ok) {
        const data = await response.json()


    } else { alert(response.statusText) }

    console.log(data)
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

/* <tr>
                <td>Game of Thrones</td>
                <td>George R. R. Martin</td>
                <td>
                    <button>Edit</button>
                    <button>Delete</button>
                </td>
            </tr> */