const token = sessionStorage.getItem('userToken')
async function attachEvents() {
    document.querySelector('button.load').addEventListener('click', getCatches)
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
    if (token) {
        document.querySelectorAll('button').forEach(btn => btn.disabled = false)
        document.querySelector('#main').addEventListener('click', modifyCatches)
    } else {
        document.querySelectorAll('button').forEach(btn => btn.disabled = true)
    }
}
async function postCatches(ev) {
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
    getCatches()
}
function modifyCatches(ev) {
    if (ev.target.className == 'update') {

    } else if (ev.target.className == 'delete') {
        const el = ev.target.parentNode
        deleteCatches(el, el.id)
    }
}
async function deleteCatches(el, id) {
    const url = `http://localhost:3030/data/catches/` + id
    const response = await fetch(url, { method: 'DELETE', headers: { 'X-Authorization': token }})
    if (!response.ok) {
        return alert(response.statusText)
    }
    el.remove()
}


function createElements(element) {
    element = `<div class="catch" id="${element._id}">
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

