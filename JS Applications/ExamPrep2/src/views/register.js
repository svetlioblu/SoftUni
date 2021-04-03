import { html } from '../../node_modules/lit-html/lit-html.js'
import { register } from '../data/api.js'

let registerPageTemplate = (onSubmit) => html`
<section id="register">
    <div class="container">
        <form @submit=${onSubmit} id="register-form">
            <h1>Register</h1>
            <p>Please fill in this form to create an account.</p>
            <hr>

            <p>Username</p>
            <input type="text" placeholder="Enter Username" name="username" required>

            <p>Password</p>
            <input type="password" placeholder="Enter Password" name="password" required>

            <p>Repeat Password</p>
            <input type="password" placeholder="Repeat Password" name="repeatPass" required>
            <hr>

            <input type="submit" class="registerbtn" value="Register">
        </form>
        <div class="signin">
            <p>Already have an account?
                <a href="/login">Sign in</a>.
            </p>
        </div>
    </div>
</section>`
export async function registerPage(ctx) {
    ctx.render(registerPageTemplate(onSubmit))

    async function onSubmit(ev) {
        ev.preventDefault()
        let formData = new FormData(ev.target)
        let username = formData.get('username')
        let password = formData.get('password')
        let rePass = formData.get('repeatPass')
        if (username == '' || password == '' || rePass == '') {
            return alert(`All fields are required!`)
        }
        if (rePass != password) {
            return alert('Passwords Do not match!')
        }
        await register(username, password)
        ctx.setNavigation()
        ev.target.reset()
        ctx.page.redirect('All-Listings')
    }
}