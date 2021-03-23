import { html } from 'https://unpkg.com/lit-html?module'
import { postCreate } from '../data/api.js'

let createTemplate = (ctx) => html`<div class="row space-top">
    <div class="col-md-12">
        <h1>Create New Furniture</h1>
        <p>Please fill all fields.</p>
    </div>
</div>
<form @submit=${(ev)=> onSubmit(ev, ctx)}>
    <div class="row space-top">
        <div class="col-md-4">
            <div class="form-group">
                <label class="form-control-label" for="new-make">Make</label>
                <input class="form-control valid" id="new-make" type="text" name="make">
            </div>
            <div class="form-group has-success">
                <label class="form-control-label" for="new-model">Model</label>
                <input class="form-control" id="new-model" type="text" name="model">
            </div>
            <div class="form-group has-danger">
                <label class="form-control-label" for="new-year">Year</label>
                <input class="form-control" id="new-year" type="number" name="year">
            </div>
            <div class="form-group">
                <label class="form-control-label" for="new-description">Description</label>
                <input class="form-control" id="new-description" type="text" name="description">
            </div>
        </div>
        <div class="col-md-4">
            <div class="form-group">
                <label class="form-control-label" for="new-price">Price</label>
                <input class="form-control" id="new-price" type="number" name="price">
            </div>
            <div class="form-group">
                <label class="form-control-label" for="new-image">Image</label>
                <input class="form-control" id="new-image" type="text" name="img">
            </div>
            <div class="form-group">
                <label class="form-control-label" for="new-material">Material (optional)</label>
                <input class="form-control" id="new-material" type="text" name="material">
            </div>
            <input type="submit" class="btn btn-primary" value="Create" />
        </div>
    </div>
</form>
</div>
`
export async function createPage(ctx) {
    ctx.render(createTemplate(ctx))
}
function onSubmit(ev, ctx) {
    ev.preventDefault()
    let make = document.getElementById('new-make')
    let model = document.getElementById('new-model')
    let year = document.getElementById('new-year')
    let description = document.getElementById('new-description')
    let price = document.getElementById('new-price')
    let img = document.getElementById('new-image')
    let material = document.getElementById('new-material')
    let isValid = true
    let validation = {
        make: () => {
            if (make.value.length < 4) {
                make.classList.remove('is-valid')
                make.classList.add('is-invalid')
                isValid = false
            } else {
                make.classList.remove('is-invalid')
                make.classList.add('is-valid')
                isValid = true
            }
        },
        model: () => {
            if (model.value.length < 4) {
                model.classList.remove('is-valid')
                model.classList.add('is-invalid')
                isValid = false
            } else {
                model.classList.remove('is-invalid')
                model.classList.add('is-valid')
                isValid = true
            }
        },
        year: () => {
            let current = Number(year.value)
            if (current < 1950 || current > 2050) {
                year.classList.remove('is-valid')
                year.classList.add('is-invalid')
                isValid = false
            } else {
                year.classList.remove('is-invalid')
                year.classList.add('is-valid')
                isValid = true
            }
        },
        description: () => {
            if (description.value.length < 10) {
                description.classList.remove('is-valid')
                description.classList.add('is-invalid')
                isValid = false
            } else {
                description.classList.remove('is-invalid')
                description.classList.add('is-valid')
                isValid = true
            }
        },
        price: () => {
            let current = Number(price.value)
            if (current <= 0) {
                price.classList.remove('is-valid')
                price.classList.add('is-invalid')
                isValid = false
            } else {
                price.classList.remove('is-invalid')
                price.classList.add('is-valid')
                isValid = true
            }
        },
        img: () => {
            if (img.value == '') {
                img.classList.remove('is-valid')
                img.classList.add('is-invalid')
                isValid = false
            } else {
                img.classList.remove('is-invalid')
                img.classList.add('is-valid')
                isValid = true
            }
        }
    }
    let fields = Array.from(document.querySelectorAll('form input'))
    for (let field of fields) {
        if (field.name != 'material' && field.value != 'Create') {
            validation[field.name]()
        }
    }
    if (isValid == false) {
        return alert('Fielads are Empty or Invalid')
    }
    let allValues = { make: make.value, model: model.value, year: year.value, description: description.value, price: price.value, img: img.value }
    if (material.value != '') {
        allValues["material"] = material.value
    }
    postCreate('http://localhost:3030/data/catalog', allValues)
    ctx.page.redirect('/')
}