(function () {
    document.getElementsByTagName('form')[0].addEventListener('submit', postBook)
}())

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