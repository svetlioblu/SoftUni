import { html } from '../../node_modules/lit-html/lit-html.js'
import { getOne } from '../data/api.js'


let myPageTemplate = (data, checkLogged, checkLoggedName) => html`
<section id="user-profile-page" class="user-profile">
${(data.length != 0 ? html` <article class="user-info">
        <img id="user-avatar-url" alt="user-profile" src="/images/${checkLogged()}.png">
        <div class="user-content">
            <p>Username: ${checkLoggedName()}</p>
            <p>Email: ${sessionStorage.getItem('email')}</p>
            <p>My memes count: ${data.length}</p>
        </div>
    </article>` : '')}
   
    <h1 id="user-listings-title">User Memes</h1>
    <div class="user-meme-listings">
        ${(data.length != 0 ? data.map(itemTemplate) : html`<p class="no-memes">No memes in database.</p>`)}
    </div>
</section>`
let itemTemplate = (item) => html`
<div class="user-meme">
    <p class="user-meme-title">${item.title}e</p>
    <img class="userProfileImage" alt="meme-img" src="${item.imageUrl}">
    <a class="button" href="/details/${item._id}">Details</a>
</div>`
export async function myPage(ctx) {
    let ownerId = sessionStorage.getItem('userId')
    let data = await getOne(`http://localhost:3030/data/memes?where=_ownerId%3D%22${ownerId}%22&sortBy=_createdOn%20desc`)
     ctx.render(myPageTemplate(data, checkLogged, checkLoggedName))
}
function checkLogged() {
    let person = sessionStorage.getItem('email')
    let result = ''
    switch (person) {
        case 'peter@abv.bg':
            result = 'Male'
            break;
        case 'mary@abv.bg':
            result = 'Female'
            break;
        default:
            result = sessionStorage.getItem('gender')
    }
    return result
}
function checkLoggedName() {
    let person = sessionStorage.getItem('email')
    let result = ''
    switch (person) {
        case 'peter@abv.bg':
            result = 'Peter'
            break;
        case 'mary@abv.bg':
            result = 'Mary'
            break;
        default:
            result = sessionStorage.getItem('userName')
    }
    return result
}
