function attachEventsListeners() {
    let main = document.querySelector('main')
    let days = document.getElementById('days')
    let hours = document.getElementById('hours')
    let minutes = document.getElementById('minutes')
    let seconds = document.getElementById('seconds')
    main.addEventListener('click', onClick)

    function onClick(event) {
        if (event.target.defaultValue == 'Convert') {

            if (days.value != '') {
                let current = Number(days.value)
                hours.value = 24 * current
                minutes.value = 1440 * current
                seconds.value = 86400 * current
            } else if (hours.value != '') {
                let current = Number(hours.value)
                days.value = current / 24
                minutes.value = current * 60
                seconds.value = current * 60 * 60
            } else if (minutes.value != '') {
                let current = Number(minutes.value)
                days.value = (current / 60) / 24
                hours.value = current / 60
                seconds.value = current * 60
            } else if (seconds.value != '') {
                let current = Number(seconds.value)
                days.value = (current / 60 / 60) / 24
                hours.value = current / 60 / 60
                minutes.value = current / 60
            }
        }
    }
}