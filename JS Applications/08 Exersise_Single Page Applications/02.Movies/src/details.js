import { html, render } from 'https://unpkg.com/lit-html?module'
let main;
let section;
export function setDetails(mainTarget, sectionTarget) {
    main = mainTarget
    section = sectionTarget
    section.addEventListener('click', onDetails)
}

export function showDetails() {

}

function onDetails(ev) {
    if (ev.target.tagName == 'BUTTON') {
        if (!sessionStorage.getItem('Email')) {
            return alert('Log-In to see the movie details')
        }
        showDetails()
    }

}
async function createDetailsPage() {
    const url = 'http://localhost:3030/data/movies'
    const response = await fetch(url)
    if (response.ok) {
        const data = await response.json()
        detailsElement(data)
    } else {
        return alert(response.statusText)
    }
    let detailsElement = (data) => html`
<section id="movie-example">
    <div class="container">
        <div class="row bg-light text-dark">
            <h1>Movie title: Black Widow</h1>

            <div class="col-md-8">
                <img class="img-thumbnail" src="https://miro.medium.com/max/735/1*akkAa2CcbKqHsvqVusF3-w.jpeg"
                    alt="Movie">
            </div>
            <div class="col-md-4 text-center">
                <h3 class="my-3 ">Movie Description</h3>
                <p>Natasha Romanoff aka Black Widow confronts the darker parts of her ledger when a
                    dangerous
                    conspiracy
                    with ties to her past arises. Comes on the screens 2020.</p>
                <a class="btn btn-danger" href="#">Delete</a>
                <a class="btn btn-warning" href="#">Edit</a>
                <a class="btn btn-primary" href="#">Like</a>
                <span class="enrolled-span">Liked 1</span>
            </div>
        </div>
    </div>
</section>
`

}