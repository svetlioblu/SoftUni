function attachEvents() {
    document.getElementById('submit').addEventListener('click', send)
    document.getElementById('refresh').addEventListener('click', refresh)

}
attachEvents();

async function send() {
    const author = document.getElementById('author').value
    const content = document.getElementById('content').value
    if (author == '' || content == '') {
        alert('Fields cannot be empty')
        throw new Error('Fields cannot be empty')
    }
    let options = {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ author, content })
    }
    const response = await fetch('http://localhost:3030/jsonstore/messenger', options)
    if (!response.ok) {
        alert(response.statusText)
    }

}
async function refresh() {
    const responce = await fetch('http://localhost:3030/jsonstore/messenger')
    if (responce.ok) {
        const textArea = document.getElementById('messages')
        const data = await responce.json()
        Object.values(data).forEach(msg => {
            textArea.textContent += `${msg.author}: ${msg.content}\n`
        })
    } else {
        alert(responce.statusText)
    }
}