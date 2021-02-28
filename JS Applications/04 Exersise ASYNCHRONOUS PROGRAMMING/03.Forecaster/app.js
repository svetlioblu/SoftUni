function attachEvents() {
    let input = document.getElementById('location')
    const symbol = {
        Sunny: '&#x2600;',
        "Partly sunny": '&#x26C5;',
        Overcast: '&#x2601;',
        Rain: '&#x2614',
        Degrees: '&#176;'
    }
    document.getElementById('submit').addEventListener('click', () => weather(input.value, symbol))
}

attachEvents();

async function weather(cityName, symbol) {

    document.getElementById('forecast').style.display = 'block'
    if (document.querySelector('#current').children[1]) { document.querySelector('#current').children[1].remove() }
    if (document.querySelector('#upcoming').children[1]) { document.querySelector('#upcoming').children[1].remove() }
    const code = await getCode(cityName)
    const current = await getCurrentCondition(code)
    const upComing = await getUpComing(code)

    const CurrentHtml = e('div', { class: 'forecasts' }, '', e('span', { class: 'condition symbol' }, `${symbol[current.forecast.condition]}`), e('span', { class: 'condition' }, '', e('span', { class: 'forecast-data' }, `${current.name}`), e('span', { class: 'forecast-data' }, `${current.forecast.high}${symbol.Degrees}/${current.forecast.low}${symbol.Degrees}`), e('span', { class: 'forecast-data' }, `${current.forecast.condition}`)))

    document.querySelector('#current').appendChild(CurrentHtml)

    const upComingHtml = e('div', { class: 'forecast-info' }, '', e('span', { class: 'upcoming' }, '', e('span', { class: 'symbol' }, `${symbol[upComing.forecast[0].condition]}`), e('span', { class: 'forecast-data' }, `${upComing.forecast[0].high}${symbol.Degrees}/${upComing.forecast[0].low}${symbol.Degrees}`), e('span', { class: 'forecast-data' }, `${upComing.forecast[0].condition}`)), e('span', { class: 'upcoming' }, '', e('span', { class: 'symbol' }, `${symbol[upComing.forecast[1].condition]}`), e('span', { class: 'forecast-data' }, `${upComing.forecast[1].high}${symbol.Degrees}/${upComing.forecast[1].low}${symbol.Degrees}`), e('span', { class: 'forecast-data' }, `${upComing.forecast[1].condition}`)), e('span', { class: 'upcoming' }, '', e('span', { class: 'symbol' }, `${symbol[upComing.forecast[2].condition]}`), e('span', { class: 'forecast-data' }, `${upComing.forecast[2].high}${symbol.Degrees}/${upComing.forecast[2].low}${symbol.Degrees}`), e('span', { class: 'forecast-data' }, `${upComing.forecast[2].condition}`)))

    document.querySelector('#upcoming').appendChild(upComingHtml)

}

async function getCode(city) {
    try {
        document.querySelector('#current>div').textContent = 'Current conditions'
        document.querySelector('#upcoming>div').textContent = 'Three-day forecast'
        const url = `http://localhost:3030/jsonstore/forecaster/locations`
        const responce = await fetch(url)
        const data = await responce.json()
        return data.find(x => x.name.toLowerCase() == city.toLowerCase()).code
    } catch (error) {
        document.querySelector('#current>div').textContent = 'Error'
        document.querySelector('#upcoming>div').textContent = 'Error'

       
    }
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