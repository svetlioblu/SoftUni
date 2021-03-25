import { html } from '../../node_modules/lit-html/lit-html.js'
import { loadTemplate } from './common/loadTemplate.js';

let logInPageTemplate = (onSubmit, errorMsg) => html`
<section id="login">
    <article class="narrow">
        <header class="pad-med">
            <h1>Login</h1>
        </header>
        <form @submit=${onSubmit} id="login-form" class="main-form pad-large">
            ${(errorMsg ? html`<div class="error">${errorMsg}</div>` : '')}
            <label>E-mail: <input type="text" name="email"></label>
            <label>Password: <input type="password" name="password"></label>
            <input class="action cta" type="submit" value="Sign In">
        </form>
        <footer class="pad-small">Don't have an account? <a href="/register" class="invert">Sign up here</a>
        </footer>
    </article>
</section>`




export async function logInPage(ctx) {
    ctx.render(logInPageTemplate(onSubmit))

    async function onSubmit(ev) {
        ev.preventDefault()
        const formData = new FormData(ev.target)
        let email = formData.get('email')
        let password = formData.get('password')
        try {
            if (email == '' || password == '') {
                throw new Error('All fields are required!')``
            } else if (!email.includes('@')) {
                throw new Error('Invalid Email Input!')
            }
        } catch (error) {
            ctx.render(logInPageTemplate(onSubmit, error.message))
        }
    }
}

