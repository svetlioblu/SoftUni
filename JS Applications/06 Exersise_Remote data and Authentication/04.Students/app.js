import { e } from './DOM.js'
const submit = document.querySelector('input[type="submit"]')
const form = document.querySelector('form')
form.addEventListener('submit', onSubmit)
getStudents()
async function getStudents() {
    const url = 'http://localhost:3030/jsonstore/collections/students'
    const response = await fetch(url)
    if (response.ok) {
        const data = await response.json()
        Object.values(data).sort((a, b) => a.ID - b.ID).forEach(element => {
            const row = e('tr', {}, '', e('td', {}, `${element.ID}`), e('td', {}, `${element.firstName}`), e('td', {}, `${element.lastName}`), e('td', {}, `${element.facultyNumber}`), e('td', {}, `${element.grade}`))
            document.querySelector('tbody').appendChild(row)
        })
    } else { alert(response.statusText) }
}

async function onSubmit(ev) {
ev.preventDefault()
const formdata = new FormData(ev.target)
console.log(formdata);

console.log(ID);
}