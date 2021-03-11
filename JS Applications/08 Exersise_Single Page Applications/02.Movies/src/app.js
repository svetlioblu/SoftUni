import { setUpHome, showHome } from './homePage.js'
import { setRegister } from './register.js'
import { navClick } from './navigation.js'
import { setLogIn } from './login.js'
const main = document.getElementById('main')
const homepage = document.getElementById('home-page')
const navigation = document.querySelector('nav')
const registerForm = document.querySelector('#form-sign-up')
const logInSection = document.getElementById('form-login')
let email = sessionStorage.getItem('Email')
if (email) {
    Array.from(document.getElementsByClassName('guest')).forEach(e => e.style.display = 'none')
    Array.from(document.getElementsByClassName('logged')).forEach(e => e.style.display = 'block')
    document.getElementById('home').textContent = `Welcome, ${email}`
} else {
    Array.from(document.getElementsByClassName('logged')).forEach(e => e.style.display = 'none')
    Array.from(document.getElementsByClassName('guest')).forEach(e => e.style.display = 'block')
}

navigation.addEventListener('click', navClick)
setUpHome(main, homepage)
showHome()
setRegister(main, registerForm)
setLogIn(main, logInSection)
