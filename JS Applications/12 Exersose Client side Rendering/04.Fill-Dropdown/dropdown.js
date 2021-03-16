import { html, render } from 'https://unpkg.com/lit-html?module'
const article = document.querySelector('article')
let template = (data) => html`<div>
    <select id="menu">
        ${data.map(x => html`<option value="${x.id}">${x.option}</option>`)}
    </select>
</div>
<form>
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
function addItem() {
    console.log('TODO:...');
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
