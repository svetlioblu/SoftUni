function focus() {
    let fields = document.querySelectorAll('input[type="text"]')
    for (let input of fields) {
        input.addEventListener('focus', onFocus)
        input.addEventListener('blur', onBlur)
    }
    function onFocus(ev) {
        ev.target.parentNode.className = 'focused'
    }
    function onBlur(ev) {
        ev.target.parentNode.className = ''
    }
}