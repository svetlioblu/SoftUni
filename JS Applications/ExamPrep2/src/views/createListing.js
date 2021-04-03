import { html } from '../../node_modules/lit-html/lit-html.js'
import { postCreate } from '../data/api.js'

let createPageTemplate = (onSubmit) => html`
<section id="create-listing">
    <div class="container">
        <form @submit=${onSubmit} id="create-form">
            <h1>Create Car Listing</h1>
            <p>Please fill in this form to create an listing.</p>
            <hr>

            <p>Car Brand</p>
            <input type="text" placeholder="Enter Car Brand" name="brand">

            <p>Car Model</p>
            <input type="text" placeholder="Enter Car Model" name="model">

            <p>Description</p>
            <input type="text" placeholder="Enter Description" name="description">

            <p>Car Year</p>
            <input type="number" placeholder="Enter Car Year" name="year">

            <p>Car Image</p>
            <input type="text" placeholder="Enter Car Image" name="imageUrl">

            <p>Car Price</p>
            <input type="number" placeholder="Enter Car Price" name="price">

            <hr>
            <input type="submit" class="registerbtn" value="Create Listing">
        </form>
    </div>
</section>`
export async function createPage(ctx) {
    ctx.render(createPageTemplate(onSubmit))
    async function onSubmit(ev) {
        ev.preventDefault()
        const formData = new FormData(ev.target)
        let brand = formData.get('brand')
        let model = formData.get('model')
        let description = formData.get('description')
        let year = Number(formData.get('year'))
        let imageUrl = formData.get('imageUrl')
        let price = Number(formData.get('price'))
        if (Array.from(formData.values()).some(entry => entry == '')) {
            return alert('All fields are required!')
        }
        if (year < 0 || price < 0) {
            return alert('Year and Price should be positive!')
        }
        await postCreate('http://localhost:3030/data/cars', { brand, model, description, year, imageUrl, price })
        ev.target.reset()
        ctx.page.redirect('All-Listings')
    }
}