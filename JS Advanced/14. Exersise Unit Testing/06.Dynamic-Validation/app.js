function validate() {
    let email = document.getElementById('email')
    let reg = /^[a-z]+@[a-z]+\.[a-z]+$/gm
    email.addEventListener('change', (e) => {
        if (!reg.test(email.value)) {
            email.setAttribute('class', 'error')
        } else {
            email.removeAttribute('class')
        }
    })
}