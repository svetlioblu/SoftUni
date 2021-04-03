import { html } from '../../node_modules/lit-html/lit-html.js'
import { logIn } from '../data/api.js'

let loinPageTemplate = (onSubmit) => html`
<section id="login">
    <div class="container">
        <form @submit=${onSubmit} id="login-form" action="#" method="post">
            <h1>Login</h1>
            <p>Please enter your credentials.</p>
            <hr>

            <p>Username</p>
            <input placeholder="Enter Username" name="username" type="text">

            <p>Password</p>
            <input type="password" placeholder="Enter Password" name="password">
            <input type="submit" class="registerbtn" value="Login">
        </form>
        <div class="signin">
            <p>Dont have an account?
                <a href="/register">Sign up</a>.
            </p>
        </div>
    </div>
</section>`

export async function loginPage(ctx) {
    ctx.render(loinPageTemplate(onSubmit))
    async function onSubmit(ev) {
        ev.preventDefault()
        const formData = new FormData(ev.target)
        let username = formData.get('username')
        let password = formData.get('password')
        if (username == '' || password == '')
            return alert('All Fields are required')

        await logIn(username, password)
        ev.target.reset()
        ctx.setNavigation()
        ctx.page.redirect('All-Listings')
    }
}