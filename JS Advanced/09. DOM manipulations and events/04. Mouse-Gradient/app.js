function attachGradientEvents() {
    let gradient = document.getElementById('gradient')
    gradient.addEventListener('mousemove', gradientMove)
    gradient.addEventListener('mouseout', gradientOut)

    function gradientMove(event) {
        // event.offsetX -> the location X of the event within the element width only
        //event.target.clientWidth -> the element defind static width in px
        //e.g  30 / 400
        let power = event.offsetX / (event.target.clientWidth - 1)
        // take current percent
        power = Math.trunc(power * 100)
        document.getElementById(`result`).textContent = power + '%'
    }
    function gradientOut(event) {
        document.getElementById(`result`).textContent = ''
    }
}