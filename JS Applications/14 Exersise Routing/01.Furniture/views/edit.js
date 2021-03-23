import { html } from 'https://unpkg.com/lit-html?module'
import { getOne, putUpdate } from '../data/api.js'

let editPageTemplate = (data, ctx) => html`
<div class="row space-top">
    <div class="col-md-12">
        <h1>Edit Furniture</h1>
        <p>Please fill all fields.</p>
    </div>
</div>
<form @submit=${(ev) => onSubmit(ev, ctx)}>
    <div class="row space-top">
        <div class="col-md-4">
            <div class="form-group">
                <label class="form-control-label" for="new-make">Make</label>
                <input class="form-control" id="new-make" type="text" name="make" .value="${data.make}">
            </div>
            <div class="form-group has-success">
                <label class="form-control-label" for="new-model">Model</label>
                <input class="form-control" id="new-model" type="text" name="model" .value="${data.model}">
            </div>
            <div class="form-group has-danger">
                <label class="form-control-label" for="new-year">Year</label>
                <input class="form-control" id="new-year" type="number" name="year" .value="${data.year}">
            </div>
            <div class="form-group">
                <label class="form-control-label" for="new-description">Description</label>
                <input class="form-control" id="new-description" type="text" name="description"
                    .value="${data.description}">
            </div>
        </div>
        <div class="col-md-4">
            <div class="form-group">
                <label class="form-control-label" for="new-price">Price</label>
                <input class="form-control" id="new-price" type="number" name="price" .value="${data.price}">
            </div>
            <div class="form-group">
                <label class="form-control-label" for="new-image">Image</label>
                <input class="form-control" id="new-image" type="text" name="img" .value="${data.img}">
            </div>
            <div class="form-group">
                <label class="form-control-label" for="new-material">Material (optional)</label>
                <input class="form-control" id="new-material" type="text" name="material" .value="${data.material}">
            </div>
            <input type="submit" class="btn btn-info" value="Edit" />
        </div>
    </div>
</form>`
export async function editPage(ctx) {
    let id = ctx.params.id
    const data = await getOne(`http://localhost:3030/data/catalog/` + id)
    ctx.render(editPageTemplate(data, ctx))
}
function onSubmit(ev, ctx) {
    ev.preventDefault()
    let isValid = true
    let id = ctx.params.id
    const formData = new FormData(ev.target)
    let modified = Array.from(formData.entries()).reduce((acc, [key, value]) => {
        if (value == '' && key != 'material') {
            isValid = false
        }
        acc[key] = value
        return acc
    }, {})

    if (isValid == false) {
        return alert('There are empty Required fields!')
    }
    putUpdate(`http://localhost:3030/data/catalog/` + id, modified)
    ctx.page.redirect('/')
}