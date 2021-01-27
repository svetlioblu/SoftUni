function lockedProfile() {
    let buttons = Array.from(document.getElementsByTagName('button'))
    buttons.forEach(el => el.addEventListener('click', onClick))

    function onClick(event) {
        let lock = event.target.parentNode.querySelector('input[value="lock"]')

        if (!lock.checked) {
            if (event.target.parentNode.querySelector('div').style.display == '') {
                event.target.parentNode.querySelector('div').style.display = 'block'
                event.target.textContent = 'Hide it'
            } else {
                event.target.parentNode.querySelector('div').style.display = ''
                event.target.textContent = 'Show more'
            }
        }
    }
}