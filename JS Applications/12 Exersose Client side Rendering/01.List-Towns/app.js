import { html, render } from 'https://unpkg.com/lit-html?module'
const target = document.getElementById('root')
let input = document.getElementById('towns')
const loadBtn = document.getElementById('btnLoadTowns')

let templateSection = (data) => html`
<ul>
    ${data.map(x => html`<li>${x}</li>`)}
</ul>`
loadBtn.addEventListener('click', onLoad)
function onLoad(ev) {
    ev.preventDefault()
    let data = input.value.split(', ').map(x => x.trim())
console.log(data);
    let result = templateSection(data)
    render(result, target)
}
