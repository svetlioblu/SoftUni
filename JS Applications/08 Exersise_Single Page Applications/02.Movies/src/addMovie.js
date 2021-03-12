import { showHome } from "./homePage.js";

let main;
let section;

export function setMoviePage(mainTarget, sectionTarget) {
    main = mainTarget
    section = sectionTarget
    section.querySelector('form').addEventListener('submit', onMovieSubmit)
}

export function showMoviePage() {
    main.innerHTML = ''
    main.appendChild(section)

}

function onMovieSubmit(ev) {
    ev.preventDefault()
    const formData = new FormData(ev.target)
    let isNoValid = [...formData.values()].some(x => x == '')
    if (isNoValid) {
        return alert('You have empty fields!')
    }
    let title = formData.get('title')
    let description = formData.get('description')
    let img = formData.get('imageUrl')
    let data = {
        title,
        description,
        img
    }
    ev.target.reset()
    postMovie(data)

}
async function postMovie(data) {
    const token = sessionStorage.getItem('AuthToken')

    const url = 'http://localhost:3030/data/movies'
    const options = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': token
        },
        body: JSON.stringify(data)
    }
    const responce = await fetch(url, options)
    if (responce.ok) {
        showHome()

    } else {
        let error = await responce.json()
        return alert(error.message)
    }
}