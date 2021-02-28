function attachEvents() {
    let input = document.getElementById('location')
    const symbol = {
        sunny: '&#x2600;',
        "Partly sunny": '&#x26C5;',
        Overcast: '&#x2601;',
        Rain: '&#x2614',
        Degrees: '&#176;'
    }
    document.getElementById('submit').addEventListener('click', () => weather(input.value, symbol))

}

attachEvents();

async function weather(cityName, symbol) {
    const code = await getCode(cityName)
    const current = await getCurrentCondition(code)
    const upComing = await getUpComing(code)
    document.getElementById('forecast').style.display = 'block'

    let divFcast = e('div', { class: 'forecasts' })
    let span1 = e('span', { class: 'condition symbol' }, `${symbol[current.forecast.condition]}`)

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

function e(type, attribute, text, ...params) {
    let element = document.createElement(type)
    if (attribute != {} && attribute != undefined) {
        Object.entries(attribute).forEach(([name, value]) => {
            element.setAttribute(`${name}`, `${value}`)
        })
    }
    if (text != undefined && text != '') {
        element.innerHTML = text
    }
    if (params != undefined && params.length != 0) {
        params.forEach(e => {
            element.appendChild(e)
        })
    }
    return element
}