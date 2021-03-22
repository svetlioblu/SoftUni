import { html } from 'https://unpkg.com/lit-html?module'
import { logIn } from '../data/api.js';

let loginPageTemplate = (ctx) => html`
<div class="row space-top">
    <div class="col-md-12">
        <h1>Login User</h1>
        <p>Please fill all fields.</p>
    </div>
</div>
<form @submit=${(ev) => onSubmit(ev, ctx)}>
    <div class="row space-top">
        <div class="col-md-4">
            <div class="form-group">
                <label class="form-control-label" for="email">Email</label>
                <input class="form-control" id="email" type="text" name="email">
            </div>
            <div class="form-group">
                <label class="form-control-label" for="password">Password</label>
                <input class="form-control" id="password" type="password" name="password">
            </div>
            <input type="submit" class="btn btn-primary" value="Login" />
        </div>
    </div>
</form>`
export async function loginPage(ctx) {
    ctx.render(loginPageTemplate(ctx))
}
function onSubmit(ev, ctx) {
    ev.preventDefault()
    const formData = new FormData(ev.target)
    let email = formData.get('email')
    let password = formData.get('password')
    if (email == '' || password == '') {
        return alert('The fileds are empty')
    }
    logIn(email, password)
    ev.target.reset()
    ctx.page.redirect('/')
}