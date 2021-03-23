import { html } from 'https://unpkg.com/lit-html?module'
import { register } from '../data/api.js'
const validation = {
    onEmail: (ev) => {
        if (ev.target.value.length > 3 && ev.target.value.includes('@')) {
            ev.target.classList.remove('is-invalid')
            ev.target.classList.add('is-valid')
        } else {
            ev.target.classList.remove('is-valid')
            ev.target.classList.add('is-invalid')
        }
    },
    onPass: (ev) => {
        if (ev.target.value.length > 1) {
            ev.target.classList.remove('is-invalid')
            ev.target.classList.add('is-valid')
        } else {
            ev.target.classList.remove('is-valid')
            ev.target.classList.add('is-invalid')
        }
    },
    onRePass: (ev) => {

        if (document.getElementById('password').value == ev.target.value) {
            ev.target.classList.remove('is-invalid')
            ev.target.classList.add('is-valid')
        } else {
            ev.target.classList.remove('is-valid')
            ev.target.classList.add('is-invalid')
        }
    }
}
let registerTemplate = (ctx) => html`
<div class="container">
    <div class="row space-top">
        <div class="col-md-12">
            <h1>Register New User</h1>
            <p>Please fill all fields.</p>
        </div>
    </div>
    <form @submit=${(ev)=> onSubmit(ev, ctx)}>
        <div class="row space-top">
            <div class="col-md-4">
                <div class="form-group">
                    <label class="form-control-label" for="email">Email</label>
                    <input @change=${validation.onEmail} class="form-control is-invalid" id="email" type="text"
                        name="email">
                </div>
                <div class="form-group">
                    <label class="form-control-label" for="password">Password</label>
                    <input @change=${validation.onPass} class="form-control is-invalid" id="password" type="password"
                        name="password">
                </div>
                <div class="form-group">
                    <label class="form-control-label" for="rePass">Repeat</label>
                    <input @change=${validation.onRePass} class="form-control is-invalid" id="rePass" type="password"
                        name="rePass">
                </div>
                <input type="submit" class="btn btn-primary" value="Register" />
            </div>
        </div>
    </form>
</div>`
export async function registerPage(ctx) {

    ctx.render(registerTemplate(ctx))

}

function onSubmit(ev, ctx) {
    ev.preventDefault()
    const formData = new FormData(ev.target)
    let email = formData.get('email')
    let password = formData.get('password')
    let rePass = formData.get('rePass')
    if (email == '' || password == '') {
        return alert('All fields are required!')
    } else if (rePass != password) {
        return alert('passwords dont match!')
    }
    register(email, password)
    ev.target.reset()
    ctx.page.redirect('/')
}