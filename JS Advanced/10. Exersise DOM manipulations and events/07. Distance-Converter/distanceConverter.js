function attachEventsListeners() {
    document.querySelector('body').addEventListener('click', onClick)
    let input = document.getElementById('inputDistance')
    let output = document.getElementById('outputDistance')
    let inputUnits = document.getElementById('inputUnits')
    let outputUnits = document.getElementById('outputUnits')

    function onClick(event) {
        let toMeters = {
            km: 1000,
            m: 1,
            cm: 0.01,
            mm: 0.001,
            mi: 1609.34,
            yrd: 0.9144,
            ft: 0.3048,
            in: 0.0254
        }
        if (event.target.id == 'convert') {
            output.value = Number(input.value) * toMeters[inputUnits.value] / toMeters[outputUnits.value]
        }
    }
}
// •	Multiply the incoming distance by the following conversion rates to convert to meter
// •	Divide to convert from meters to the required output unit

