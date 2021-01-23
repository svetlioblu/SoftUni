function toggle() {
    let button = document.querySelector('span.button').textContent
    let hidden = document.getElementById('extra')
    if (button == 'More') {
        hidden.style.display = 'block'
        document.querySelector('span.button').textContent = 'Less'
    } else {
        hidden.style.display = 'none'
        document.querySelector('span.button').textContent = 'More'
    }

}