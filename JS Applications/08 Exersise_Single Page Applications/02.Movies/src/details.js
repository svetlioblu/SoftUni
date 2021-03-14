//import { html, render } from 'https://unpkg.com/lit-html?module'
let main;
let section;
let id = ''
let owner = ''
export function setDetails(mainTarget, sectionTarget) {
    main = mainTarget
    section = sectionTarget
    section.addEventListener('click', onDetails)
}

export async function showDetails() {
    const detailsPage = await createDetailsPage(id)

    main.innerHTML = ''
    main.appendChild(detailsPage)
    detailsPage.querySelector('#controls').addEventListener('click', onConstrolClick)
}

function onDetails(ev) {
    if (ev.target.tagName == 'BUTTON') {
        if (!sessionStorage.getItem('Email')) {
            id = ''
            return alert('Log-In to see the movie details')
        }
        id = ev.target.dataset.cardid
        owner = ev.target.dataset.ownerid
        showDetails()
    }
}
async function createDetailsPage(id) {
    const url = 'http://localhost:3030/data/movies/' + id
    const response = await fetch(url)
    if (response.ok) {
        const data = await response.json()

        return detailsElement(data)
    } else {
        return alert(response.statusText)
    }
    async function detailsElement(data) {
        const element = document.createElement('section')
        element.setAttribute(`id`, `movie-${data.title}`)

        let ownerBtns = ''
        if (owner == sessionStorage.getItem('Id')) {
            ownerBtns = `<a class="btn btn-danger" href="javascript:void(0)">Delete</a>
            <a class="btn btn-warning" href="javascript:void(0)">Edit</a>`
        } else {
            if (await checkIfAlreadyLiked()) {
                ownerBtns = `<span id="liked" class="enrolled-span">Liked ${await likeCount()}</span>`
            } else {
                ownerBtns = `<a class="btn btn-primary" href="javascript:void(0)">Like</a>`
            }
        }

        element.innerHTML = `
        <div class="container">
            <div class="row bg-light text-dark">
                <h1>Movie title: ${data.title}</h1>
    
                <div class="col-md-8">
                    <img class="img-thumbnail" src="${data.img}" alt="Movie">
                </div>
                <div class="col-md-4 text-center">
                    <h3 class="my-3 ">Movie Description</h3>
                    <p>${data.description}</p>
                    <div id="controls">
                    ${ownerBtns}
                    <span style="display:none"id="liked" class="enrolled-span">Liked 0</span>
                    </div>
                </div>
            </div>
        </div>
    `

        return element
    }
}

async function onConstrolClick(ev) {
    if (ev.target.className == 'btn btn-warning') {


    } else if (ev.target.className == 'btn btn-danger') {
        console.log('danger');

    } else if (ev.target.className == 'btn btn-primary') {
        const url = 'http://localhost:3030/data/likes'
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-Authorization': sessionStorage.getItem('AuthToken')
            },
            body: JSON.stringify({ movieId: id, email: sessionStorage.getItem('Email') })
        }
        const response = await fetch(url, options)
        if (!response.ok) {
            return alert(response.statusText)
        }
        ev.target.style.display = 'none'
        const likeCountElement = ev.target.parentNode.querySelector('#liked')
        likeCountElement.textContent = `Liked ${await likeCount()}`
        likeCountElement.style.display = 'block'
    }
}
async function likeCount() {
    let movieLikesUrl = `http://localhost:3030/data/likes`
    const responce = await fetch(movieLikesUrl)
    const data = await responce.json()
    return Array.from(data).filter(x => x.movieId == id).length
}
async function checkIfAlreadyLiked() {
    let movieLikesUrl = `http://localhost:3030/data/likes`
    const responce = await fetch(movieLikesUrl)
    const data = await responce.json()
    return Array.from(data).some(x => (x.email == sessionStorage.getItem('Email') && x.movieId == id))
}