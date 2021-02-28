function attachEvents() {
    let input = document.getElementById('location')
    document.getElementById('submit').addEventListener('click', () => weather(input.value))

}

attachEvents();

async function weather(cityName) {
    const code = await getCode(cityName)
    const current = await getCurrentCondition(code)
    const upComing = await getUpComing(code)
    document.getElementById('forecast').style.display = 'block'

    

}

async function getCode(city) {
    const url = `http://localhost:3030/jsonstore/forecaster/locations`
    const responce = await fetch(url)
    const data = await responce.json()
    return data.find(x => x.name.toLowerCase() == city.toLowerCase()).code
}
async function getCurrentCondition(code) {
    let url = `http://localhost:3030/jsonstore/forecaster/today/${code}`
    const response = await fetch(url)
    const data = await response.json()
    return data
}
async function getUpComing(code) {
    let url = `http://localhost:3030/jsonstore/forecaster/upcoming/${code}`
    const response = await fetch(url)
    const data = await response.json()
    return data
}

function e(type, attribute, text) {
    let element = document.createElement(type)
    if (attribute != {} && attribute != undefined) {
        Object.entries(attribute).forEach(([name, value]) => {
            element.setAttribute(`${name}`, `${value}`)
        })
        if (text) {
            element.textContent = text
        }
    }
    return element
}