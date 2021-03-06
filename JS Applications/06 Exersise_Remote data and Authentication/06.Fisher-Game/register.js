
(function () {

    document.getElementById('register').addEventListener('submit', postRegister)

}())

async function postRegister(ev) {
    ev.preventDefault()
    const url = `http://localhost:3030/users/register`
    const formData = new FormData(ev.target)
    const validation = [...formData.values(ev.target)].some(x => x == '')
    if (validation) {
        ev.target.reset()
        return alert('The fields cannot be Empty!')
    }
    const email = formData.get('email')
    const password = formData.get('password')
    const rePass = formData.get('rePass')
    if (password != rePass) {
        return alert('The passwords do not Match')
    }
    const options = {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
    }
    const response = await fetch(url, options)
    if (response.ok == false) {
        return alert(response.statusText)
    }
    const data = await response.json()
    sessionStorage.setItem('userToken', data.accessToken)
    window.location.href = "index.html"
}