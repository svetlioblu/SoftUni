import { html, render } from 'https://unpkg.com/lit-html?module'
const article = document.querySelector('article')


let template = (data) => html`<div>
    <select id="menu">
        ${data.map(x => html`<option value="${x.id}">${x.option}</option>`)}
    </select>
</div>
<form @submit=${addItem}>
    <label for="itemText">
        Text:
    </label>
    <input type="text" id="itemText" />
    <input type="submit" value="Add">
</form>
`
update()

async function update() {
    let data = await getOptions()
    let result = template(data)
    render(result, article)
}
async function addItem(ev) {
    ev.preventDefault()
    let input = document.getElementById('itemText')
    if (input.value != '') {
        await postOption(input.value)
        input.value = ''
        update()
    } else {
        return alert('no Input')
    }
}
async function getOptions() {
    const url = 'http://localhost:3030/jsonstore/advanced/dropdown'
    const response = await fetch(url)
    const data = await response.json()
    let result = Object.entries(data).reduce((acc, [key, value]) => {

        acc.push({ id: key, option: value.text })
        return acc
    }, [])
    return result
}
async function postOption(data) {

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ text: data })
    }
    const response = await fetch('http://localhost:3030/jsonstore/advanced/dropdown', options)
    if (response.ok) {
        return await response.json()
    } else {
        alert(response.statusText)
    }
}
window.postOption = postOption
window.getOptions = getOptions
