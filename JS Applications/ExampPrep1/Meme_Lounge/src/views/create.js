import { html } from '../../node_modules/lit-html/lit-html.js'
import { postCreate } from '../data/api.js'

let createPageTemplate = (onSubmit) => html`<section id="create-meme">
    <form @submit=${onSubmit} id="create-form">
        <div class="container">
            <h1>Create Meme</h1>
            <label for="title">Title</label>
            <input id="title" type="text" placeholder="Enter Title" name="title">
            <label for="description">Description</label>
            <textarea id="description" placeholder="Enter Description" name="description"></textarea>
            <label for="imageUrl">Meme Image</label>
            <input id="imageUrl" type="text" placeholder="Enter meme ImageUrl" name="imageUrl">
            <input type="submit" class="registerbtn button" value="Create Meme">
        </div>
    </form>
</section>`


export async function createPage(ctx) {
    ctx.render(createPageTemplate(onSubmit))

    async function onSubmit(ev) {
        ev.preventDefault()
        const formData = new FormData(ev.target)
        let title = formData.get('title')
        let description = formData.get('description')
        let imageUrl = formData.get('imageUrl')
        try {

            if (Array.from(formData.values()).some(x => x == '')) {
                throw new Error('All fields are required!')
            }
            await postCreate('http://localhost:3030/data/memes', { title, description, imageUrl })
            ev.target.reset()
            ctx.navUpdate()
            ctx.page.redirect('/All Memes')
        } catch (error) {
            let errorTarget = document.querySelector('.notification')
            errorTarget.querySelector('span').textContent = error.message
            errorTarget.style.display = 'block'
            setTimeout(function () {
                errorTarget.style.display = 'none';
            }, 3000);
        }
    }
}
