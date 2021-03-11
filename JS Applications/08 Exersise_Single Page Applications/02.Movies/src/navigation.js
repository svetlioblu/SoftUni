import { showHome } from './homePage.js'
import { showLogIn } from './login.js'
import { logOut } from './logOut.js'
import { showRegister } from './register.js'
const token = sessionStorage.getItem('AuthToken')
const email = sessionStorage.getItem('Email')
const id = sessionStorage.getItem('id')

export function navClick(ev) {
    ev.preventDefault()
    const link = {
        'movies': showHome,
        'logout': logOut,
        'login': showLogIn,
        'register': showRegister
    }
    //logic to display logged or not logged user
    if (ev.target.tagName == 'A') {
        let view = link[ev.target.id]
        view()
    }
}