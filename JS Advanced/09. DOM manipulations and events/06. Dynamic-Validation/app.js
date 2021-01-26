function validate() {
    let field = document.getElementById('email')
    field.addEventListener('change', onChange)
    function onChange(ev) {
        let reg = /^[a-z]+@[a-z]+\.[a-z]+$/
        let validate = (reg).test(ev.target.value)
        if (!validate) {
            ev.target.className = 'error'
        } else {
            ev.target.className = ''
        }
    }
}