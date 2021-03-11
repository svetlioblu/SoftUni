import { setUpHome, showHome } from './homePage.js'
import { setRegister } from './register.js'
import { navClick } from './navigation.js'
const main = document.getElementById('main')
const homepage = document.getElementById('home-page')
const navigation = document.querySelector('nav')
const registerForm = document.querySelector('#form-sign-up')
navigation.addEventListener('click', navClick)
setUpHome(main, homepage)
showHome()
setRegister(main, registerForm)
