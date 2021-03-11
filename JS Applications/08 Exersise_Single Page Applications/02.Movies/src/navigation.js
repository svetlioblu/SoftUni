import { showHome } from './homePage.js'
import { showRegister } from './register.js'


export function navClick(ev) {
    ev.preventDefault()
    const link = {
        'movies': showHome,
        // logout
        // login
        'register': showRegister
    }
    //logic to display logged or not logged user
    if (ev.target.tagName == 'A') {
        let view = link[ev.target.id]
        view()
    }
}