import { html } from '../../node_modules/lit-html/lit-html.js'
import { logIn } from '../data/api.js'

let loginPageTemplate = (onSubmit) => html`
<section id="login">
    <form @submit=${onSubmit} id="login-form">
        <div class="container">
            <h1>Login</h1>
            <label for="email">Email</label>
            <input id="email" placeholder="Enter Email" name="email" type="text">
            <label for="password">Password</label>
            <input id="password" type="password" placeholder="Enter Password" name="password">
            <input type="submit" class="registerbtn button" value="Login">
            <div class="container signin">
                <p>Dont have an account?<a href="/register">Sign up</a>.</p>
            </div>
        </div>
    </form>
</section>`

export async function loginPage(ctx) {
    ctx.render(loginPageTemplate(onSubmit))

    async function onSubmit(ev) {
        ev.preventDefault()
        const formData = new FormData(ev.target)
        const email = formData.get('email')
        const password = formData.get('password')
        if (email == '' || password == '') {
            return alert('All fields are required!')
        }
        await logIn(email, password)
        ctx.navUpdate()
        ctx.page.redirect('/All Memes')
    }
}