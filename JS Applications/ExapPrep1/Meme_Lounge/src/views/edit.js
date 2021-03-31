import { html } from '../../node_modules/lit-html/lit-html.js'
import { getOne, putUpdate } from '../data/api.js'

let editPageTemplate = (data, onSubmit) => html`
<section id="edit-meme">
    <form @submit=${onSubmit} id="edit-form">
        <h1>Edit Meme</h1>
        <div class="container">
            <label for="title">Title</label>
            <input id="title" type="text" placeholder="Enter Title" name="title" .value="${data.title}">
            <label for="description">Description</label>
            <textarea id="description" placeholder="Enter Description" name="description" .value="${data.description}">
                </textarea>
            <label for="imageUrl">Image Url</label>
            <input id="imageUrl" type="text" placeholder="Enter Meme ImageUrl" name="imageUrl"
                .value="${data.imageUrl}">
            <input type="submit" class="registerbtn button" value="Edit Meme">
        </div>
    </form>
</section>
`

export async function editPage(ctx) {
    let id = ctx.params.id
    let data = await getOne(`http://localhost:3030/data/memes/` + id)
    ctx.render(editPageTemplate(data, onSubmit))

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
            await putUpdate(`http://localhost:3030/data/memes/${id}`, { title, description, imageUrl })
            ctx.page.redirect(`/details/${id}`)

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