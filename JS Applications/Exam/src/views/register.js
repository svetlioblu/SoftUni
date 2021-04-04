import { html } from '../../node_modules/lit-html/lit-html.js'
import { register } from '../data/api.js'

let registerPageTemplate = (onSubmit) => html`
<section id="register-page" class="content auth">
    <h1>Register</h1>

    <form @submit=${onSubmit} id="register" action="#" method="">
        <fieldset>
            <blockquote>Knowledge is not simply another commodity. On the contrary. Knowledge is never used up.
                It
                increases by diffusion and grows by dispersion.</blockquote>
            <p class="field email">
                <label for="register-email">Email:</label>
                <input type="email" id="register-email" name="email" placeholder="maria@email.com">
            </p>
            <p class="field password">
                <label for="register-pass">Password:</label>
                <input type="password" name="password" id="register-pass">
            </p>
            <p class="field password">
                <label for="register-rep-pass">Repeat password:</label>
                <input type="password" name="rep-pass" id="register-rep-pass">
            </p>
            <p class="field submit">
                <input class="btn submit" type="submit" value="Register">
            </p>
            <p class="field">
                <span>If you already have profile click <a href="/">here</a></span>
            </p>
        </fieldset>
    </form>
</section>`

export async function registerPage(ctx) {

    ctx.render(registerPageTemplate(onSubmit))

    async function onSubmit(ev) {
        ev.preventDefault()
        let formData = new FormData(ev.target)
        let email = formData.get('email')
        let password = formData.get('password')
        let repass = formData.get('rep-pass')
        if (email == '' || password == '' || repass == '') {
            return alert('All fields are required!')
        }
        if (repass != password) {
            return alert('The passwords do not match!')
        }
        await register(email, password)
        ev.target.reset()
        ctx.setNavigation()
        ctx.page.redirect('/')
    }
}