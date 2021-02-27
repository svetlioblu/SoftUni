async function getInfo() {
    const input = document.getElementById('stopId')
    const buses = document.getElementById('buses')
    try {
        let busInfo = await getBusInfo(input.value, buses)
        document.getElementById('stopName').textContent = busInfo.name
        Object.entries(busInfo.buses).forEach(([id, time]) => {
            const li = document.createElement('li')
            li.textContent = `Bus ${id} arrives in ${time}`
            buses.appendChild(li)
        })
    } catch (error) {
        document.getElementById('stopName').textContent = 'Error'
    }
}

async function getBusInfo(stop, buses) {

    const url = `http://localhost:3030/jsonstore/bus/businfo/${stop}`
    const responce = await fetch(url)
    const data = await responce.json()
    buses.innerHTML = ''
    return data

}