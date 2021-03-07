function attachEvents() {
    document.getElementById('submit').addEventListener('click', send)
    document.getElementById('refresh').addEventListener('click', refresh)
refresh()
}
attachEvents();


async function refresh() {
    const responce = await fetch('http://localhost:3030/jsonstore/messenger')
    if (responce.ok) {
        const textArea = document.getElementById('messages')
        const data = await responce.json()
        textArea.textContent = ''
        Object.values(data).forEach(msg => {
            textArea.textContent += `${msg.author}: ${msg.content}\n`
        })
    } else {
        alert(responce.statusText)
    }
}
async function send() {
    const author = document.getElementById('author')
    const content = document.getElementById('content')
    if (author.value == '' || content.value == '') {
        return alert('Fields cannot be empty')
    }
    let options = {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ author: author.value, content: content.value })
    }
    const response = await fetch('http://localhost:3030/jsonstore/messenger', options)
    author.value = ''
    content.value = ''
    if (!response.ok) {
        alert(response.statusText)
    }

}