import { showLogIn } from "./login.js"

export async function logOut() {
    let token = sessionStorage.getItem('AuthToken')
    const confirmation = confirm('Are you sure?')
    if (confirmation) {
        const url = 'http://localhost:3030/users/logout'
        const options = {
            method: "GET",
            headers: { 'X-Authorization': token }
        }
        const response = await fetch(url, options)
        if (response.ok == false) {
            const error = await response.json()
            return alert(error.message)
        } else {
            sessionStorage.clear()
            showLogIn()
        }
    }
}

