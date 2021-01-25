function deleteByEmail() {
    let inputEmail = document.querySelector('input[name="email"]').value
    let emails = document.querySelectorAll('#customers tbody tr td:nth-child(2)')
    let isResult = false
    for(let el of emails) {

        if (inputEmail === el.textContent) {
            isResult = true
            el.parentElement.remove()
            document.querySelector('input[name="email"]').value = ''
        }

    }
    if (inputEmail == '') {
        document.getElementById('result').textContent = `error`

    } else if (!isResult) {
        document.getElementById('result').textContent = `Not found.`
        document.querySelector('input[name="email"]').value = ''
        isResult = false
    }
}