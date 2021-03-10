let main;
let section;
let container;

export async function setUpHome(mainTarget, sectionTarget) {

    main = mainTarget;
    section = sectionTarget;
    container = section.querySelector('.card-deck.d-flex.justify-content-center')

}

export async function showHome() {
    main.innerHTML = ''
    main.appendChild(section)
    let movies = await getCards()
    let cards = createCards(movies)
    const fragment = document.createDocumentFragment()
    cards.forEach(element => fragment.appendChild(element))
    container.innerHTML = ''
    container.appendChild(fragment)
}

async function getCards() {
    const url = 'http://localhost:3030/data/movies'
    const response = await fetch(url)
    if (response.ok) {
        const data = await response.json()
        return data
    } else {
        alert(response.statusText)
    }
}

function createCards(movies) {
    let cards = movies.map(card)

    function card(card) {
        let element = document.createElement('div')
        element.className = 'card mb-4'
        element.innerHTML = ` 
        <img class="card-img-top" src="${card.img}"
            alt="Card image cap" width="400">
        <div class="card-body">
            <h4 class="card-title">${card.title}</h4>
        </div>
        <div class="card-footer">
            
        <button id ="${card._id} "type="button" class="btn btn-info">Details</button>
            
        `
        card = element
        return card
    }
    return cards
}