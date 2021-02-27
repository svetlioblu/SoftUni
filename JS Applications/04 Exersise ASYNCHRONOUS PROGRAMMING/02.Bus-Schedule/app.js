function solve() {
    const info = document.getElementById('info')
    const departBtn = document.getElementById('depart')
    const arriveBtn = document.getElementById('arrive')
    let currentStop = ''
    let nextStop = {
        name: 'depot',
        next: '0361'
    }

    async function depart() {
        try {
            let url = `http://localhost:3030/jsonstore/bus/schedule`
            const responce = await fetch(url)
            const data = await responce.json()
            info.textContent = `Next stop ${nextStop.name}`
            currentStop = nextStop.name
            nextStop = data[nextStop.next]
            departBtn.disabled = true
            arriveBtn.disabled = false
        } catch (error) {
            info.textContent = `Error`
            departBtn.disabled = true
            arriveBtn.disabled = true
        }
    }

    function arrive() {
        info.textContent = `Arriving at ${currentStop}`
        departBtn.disabled = false
        arriveBtn.disabled = true
    }

    return {
        depart,
        arrive
    };
}

let result = solve();