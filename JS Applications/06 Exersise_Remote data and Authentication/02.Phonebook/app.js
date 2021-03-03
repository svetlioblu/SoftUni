function attachEvents() {
    document.getElementById('btnLoad').addEventListener('click', load)
    document.getElementById('btnCreate').addEventListener('click', create)


}

attachEvents();

async function load() {
    const phonebookUl = document.getElementById('phonebook')
    const url = 'http://localhost:3030/jsonstore/phonebook'
    const responce = await fetch(url)
    if (responce.ok) {
        const data = await responce.json()
        phonebookUl.innerHTML = ''
        Object.values(data).forEach(el => {
            const phoneRecord = e('li', {}, `${el.person}: ${el.phone}`, e('button', {}, 'Delete'))
            phoneRecord.querySelector('button').addEventListener('click', (ev) => { deleteItem(ev, el._id) })
            phonebookUl.appendChild(phoneRecord)
        })
    } else {
        alert(responce.statusText)
    }

}

async function deleteItem(event, id) {
    event.target.parentNode.remove()
    const url = 'http://localhost:3030/jsonstore/phonebook/' + id
    const responce = await fetch(url, { method: 'delete' })
    if (!responce.ok) {
        alert(responce.statusText)
    }
}
async function create() {
    const person = document.getElementById('person')
    const phone = document.getElementById('phone')

    if (person.value == '' || phone.value == '' || isNaN(phone.value)) {
        throw new Error('Invalid Input')
    }
    const url = `http://localhost:3030/jsonstore/phonebook`
    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ person: person.value, phone: phone.value })
    }
    const responce = await fetch(url, options)
    person.value = ''
    phone.value = ''
    if (!responce.ok) {
        alert(responce.statusText)
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