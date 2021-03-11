import { showHome } from "./homePage.js";

let main;
let section;

export function setLogIn(maintTarget, sectionTarget) {
    main = maintTarget
    section = sectionTarget
    section.querySelector('form').addEventListener('submit', onSubmit)
}

export function showLogIn() {
    main.innerHTML = ''
    main.appendChild(section)
}

async function signIn(email, password) {
    const url = 'http://localhost:3030/users/login'
    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
    }
    const response = await fetch(url, options)
    if (response.ok) {
        const data = await response.json()
        sessionStorage.setItem('AuthToken', data.accessToken)
        sessionStorage.setItem('Email', data.email)
        sessionStorage.setItem('Id', data._id)
        showHome()
    } else {
        const error = await response.json()
        alert(error.message)
    }
}
function onSubmit(ev) {
    ev.preventDefault()
    const formData = new FormData(ev.target)
    if (formData.get('email') != '' && formData.get('password') != '') {
        signIn(formData.get('email'), formData.get('password'))
        ev.target.reset()

    } else {
        alert('Empty Field')
    }
}