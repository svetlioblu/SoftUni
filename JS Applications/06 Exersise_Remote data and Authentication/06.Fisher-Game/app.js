async function attachEvents() {
    const token = sessionStorage.getItem('userToken')
    document.querySelector('button.load').addEventListener('click', (ev) => getCatches(token))
    if (token) {
        document.querySelector('button.add').disabled = false
        document.querySelector('#addForm').addEventListener('submit', (ev) => postCatches(ev, token))
    } else {
        document.querySelector('button.add').disabled = true
    }
}
attachEvents()

async function getCatches() {
    const url = 'http://localhost:3030/data/catches'
    const response = await fetch(url)
    if (response.ok == false) {
        let error = await response.json()
        return alert('There is no entries. Enter some values, before Load ')
    }
    const data = await response.json()
    let result = data.map(createElements)
    document.getElementById('main').innerHTML = `
    <legend>Catches</legend>
    ${result.join('\n')}
    `
    document.querySelectorAll('button').forEach(btn => btn.disabled = false)
}
async function postCatches(ev, token) {
    ev.preventDefault()
    const formData = new FormData(ev.target)
    const validation = [...formData.values(ev.target)].some(x => x == '')
    if (validation) {
        ev.target.reset()
        return alert('The fields cannot be Empty!')
    }
    let postData = [...formData.entries(ev.target)].reduce((acc, curr) => {
        acc[curr[0]] = curr[1]
        return acc
    }, {})
    const url = `http://localhost:3030/data/catches`
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': token
        },
        body: JSON.stringify(postData)
    }
    const response = await fetch(url, options)
    if (response.ok == false) {
        let error = await response.json()
        return alert(error.message)
    }
    const data = await response.json()

}

function createElements(element) {
    element = `<div class="catch">
 <label>Angler</label>
 <input type="text" class="angler" value="${element.angler}" />
 <hr>
 <label>Weight</label>
 <input type="number" class="weight" value="${element.weight}" />
 <hr>
 <label>Species</label>
 <input type="text" class="species" value="${element.species}" />
 <hr>
 <label>Location</label>
 <input type="text" class="location" value="${element.location}" />
 <hr>
 <label>Bait</label>
 <input type="text" class="bait" value="${element.bait}" />
 <hr>
 <label>Capture Time</label>
 <input type="number" class="captureTime" value="${element.captureTime}" />
 <hr>
 <button disabled class="update">Update</button>
 <button disabled class="delete">Delete</button>
</div>`
    return element
}

