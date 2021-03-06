import { html } from '../../node_modules/lit-html/lit-html.js'
import { register } from '../data/api.js'

let registerPageTemplate = (onSubmit) => html`
<section id="register">
    <form @submit=${onSubmit} id="register-form">
        <div class="container">
            <h1>Register</h1>
            <label for="username">Username</label>
            <input id="username" type="text" placeholder="Enter Username" name="username">
            <label for="email">Email</label>
            <input id="email" type="text" placeholder="Enter Email" name="email">
            <label for="password">Password</label>
            <input id="password" type="password" placeholder="Enter Password" name="password">
            <label for="repeatPass">Repeat Password</label>
            <input id="repeatPass" type="password" placeholder="Repeat Password" name="repeatPass">
            <div class="gender">
                <input type="radio" name="gender" id="female" value="female">
                <label for="female">Female</label>
                <input type="radio" name="gender" id="male" value="male" checked>
                <label for="male">Male</label>
            </div>
            <input type="submit" class="registerbtn button" value="Register">
            <div class="container signin">
                <p>Already have an account?<a href="/login">Sign in</a>.</p>
            </div>
        </div>
    </form>
</section>`


export async function registerPage(ctx) {
    ctx.render(registerPageTemplate(onSubmit))

    async function onSubmit(ev) {
        ev.preventDefault()
        const formData = new FormData(ev.target)
        let userName = formData.get('username')
        let email = formData.get('email')
        let password = formData.get('password')
        let repeatPass = formData.get('repeatPass')
        let gender = formData.get('gender')
        try {

            if (Array.from(formData.values()).some(x => x == '')) {
                throw new Error('All fields are required!')
            }
            if (password != repeatPass) {
                throw new Error('Passwords Dont match!')
            }
            await register(userName, email, password, gender)
            ev.target.reset()
            ctx.navUpdate()
            ctx.page.redirect('All Memes')
        } catch (error) {
            let errorTarget = document.querySelector('.notification')
            errorTarget.querySelector('span').textContent = error.message
            errorTarget.style.display = 'block'
            setTimeout(function () {
                errorTarget.style.display = 'none';
            }, 3000);
        }
    }
}