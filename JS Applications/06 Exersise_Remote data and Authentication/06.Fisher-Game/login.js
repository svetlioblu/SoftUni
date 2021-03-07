document.getElementById('logIn').addEventListener('submit', onSubmit)

async function onSubmit(ev) {
    ev.preventDefault()
    const url = `http://localhost:3030/users/login`
    const formData = new FormData(ev.target)
    const validation = [...formData.values(ev.target)].some(x => x == '')
    if (validation) {
        ev.target.reset()
        return alert('The fields cannot be Empty!')
    }
    const email = formData.get('email')
    const password = formData.get('password')
    
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