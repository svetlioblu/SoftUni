import { html } from '../../node_modules/lit-html/lit-html.js'
import { getOne } from '../data/api.js'


let myPageTemplate = (data, gender, userName) => html`
<section id="user-profile-page" class="user-profile">
    <article class="user-info">
        <img id="user-avatar-url" alt="user-profile" src="/images/${gender}.png">
        <div class="user-content">
            <p>Username: ${userName}</p>
            <p>Email: ${sessionStorage.getItem('email')}</p>
            <p>My memes count: ${data.length}</p>
        </div>
    </article>

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
    let gender = sessionStorage.getItem('gender')
    let userName = sessionStorage.getItem('userName')
    ctx.render(myPageTemplate(data, gender, userName))
}
