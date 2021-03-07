async function attachEvents() {
    document.querySelector('button.load').addEventListener('click', getCatches)
}
attachEvents()

async function getCatches() {
    const url = 'http://localhost:3030/data/catches'
    const response = await fetch(url)
    if (response.ok==false) {
        let error = await response.json()
        return alert(error.message)
    }
    const data = await response.json()
    let result = data.map(createElements)
    document.getElementById('main').innerHTML=`
    <legend>Catches</legend>
    ${result.join('\n')}
    `
   
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

