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
    let isValidInput = false
    const formdata = new FormData(ev.target)
    const inputValues = formdata.getAll('data')
    inputValues.filter(x => x != '').length >= 5 && !isNaN(inputValues[0]) ? isValidInput = true : alert('All fields are required');
    if (isValidInput) {
        console.log('0k');
        let data = {
            ID: inputValues[0],
            firstName: inputValues[1],
            lastName: inputValues[2],
            facultyNumber: inputValues[3],
            grade: inputValues[4]
        }
        const url = 'http://localhost:3030/jsonstore/collections/students'
        const options = {
            method: 'POST',
            headers:{'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        }
        await fetch(url, options)
        document.querySelector('tbody').innerHTML = ''
        getStudents()
    }

}