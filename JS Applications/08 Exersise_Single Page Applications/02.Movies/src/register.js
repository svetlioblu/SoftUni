import { showHome } from "./homePage.js";

let main;
let section;
export function setRegister(mainTarget, sectionTarget) {
    main = mainTarget
    section = sectionTarget
    const form = section.querySelector('form')
    form.addEventListener('submit', (ev) => {
        ev.preventDefault()
        const formData = new FormData(form)
        if (formData.get('email') == '' || formData.get('password') == '' || formData.get('repeatPassword') == '') {
            ev.target.reset()
            return alert('Misssing input')
        } else if (formData.get('password').length < 6) {
            return alert('Password should be more than 6 symbols')
        } else if (formData.get('password') != formData.get('repeatPassword')) {
            return alert('The passwords do not match')
        }
        assign(formData.get('email'), formData.get('password'))
        showHome()
    }

    )
}

export function showRegister() {
    main.innerHTML = ''
    main.appendChild(section)
    let email = sessionStorage.getItem('Email')
    if (email) {
        Array.from(document.getElementsByClassName('guest')).forEach(e => e.style.display = 'none')
        Array.from(document.getElementsByClassName('logged')).forEach(e => e.style.display = 'block')
        document.getElementById('home').textContent = `Welcome, ${email}`
    } else {
        Array.from(document.getElementsByClassName('logged')).forEach(e => e.style.display = 'none')
        Array.from(document.getElementsByClassName('guest')).forEach(e => e.style.display = 'block')
    }
}

async function assign(email, password) {
    const url = 'http://localhost:3030/users/register'
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
    } else {
        alert(response.statusText)
        throw new Error('Bad Register request')
    }
}
