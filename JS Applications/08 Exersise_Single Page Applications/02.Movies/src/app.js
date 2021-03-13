import { setUpHome, showHome } from './homePage.js'
import { setRegister } from './register.js'
import { navClick } from './navigation.js'
import { setLogIn } from './login.js'
import { setMoviePage } from './addMovie.js'
//import { setDetails } from './details.js'
const main = document.getElementById('main')
const homepage = document.getElementById('home-page')
const navigation = document.querySelector('nav')
const registerForm = document.querySelector('#form-sign-up')
const logInSection = document.getElementById('form-login')
const addMovieSection = document.getElementById('add-movie')
//const sectionMovieCardsHome = document.querySelector('.card-deck.d-flex.justify-content-center')
navigation.addEventListener('click', navClick)
setUpHome(main, homepage)
showHome()
setRegister(main, registerForm)
setLogIn(main, logInSection)
setMoviePage(main, addMovieSection)

