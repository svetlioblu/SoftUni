import { html } from '../../node_modules/lit-html/lit-html.js'
import { getOne, putUpdate } from '../data/api.js'

let editPageTemplate = (data, onSubmit) => html`
<section id="edit-page" class="content">
    <h1>Edit Article</h1>

    <form @submit=${onSubmit} id="edit" action="#" method="">
        <fieldset>
            <p class="field title">
                <label for="title">Title:</label>
                <input type="text" name="title" id="title" placeholder="Enter article title" .value=${data.title}>
            </p>

            <p class="field category">
                <label for="category">Category:</label>
                <input type="text" name="category" id="category" placeholder="Enter article category"
                    .value=${data.category}>
            </p>
            <p class="field">
                <label for="content">Content:</label>
                <textarea name="content" id="content" .value=${data.content}></textarea>
            </p>

            <p class="field submit">
                <input class="btn submit" type="submit" value="Save Changes">
            </p>

        </fieldset>
    </form>
</section>`

export async function editPage(ctx) {
    let id = ctx.params.id
    let data = await getOne(`http://localhost:3030/data/wiki/` + id)
    ctx.render(editPageTemplate(data, onSubmit))

    async function onSubmit(ev) {
        ev.preventDefault()
        const formData = new FormData(ev.target)
        let title = formData.get('title')
        let category = formData.get('category')
        let content = formData.get('content')

        if (title == '' || category == '' || content == '') {
            return alert('All fields are required!')
        }
        if (category != 'JavaScript' && category != 'C#' && category != 'Java' && category != 'Python') {
            return alert('Categoty is not correct!')
        }
        await putUpdate(`http://localhost:3030/data/wiki/` + id, { title, category, content })
        ctx.page.redirect(`/details/${id}`)
    }
}