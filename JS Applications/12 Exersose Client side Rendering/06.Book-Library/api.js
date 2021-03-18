async function request(url, options) {
    try {
        const response = await fetch(url, options)
        if (response.ok == false) {
            const error = await response.json()
            alert(error.message)
            throw new Error(error.message)
        }
        const data = await response.json()
        return data
    } catch (error) {
        alert(error.message)
        throw error
    }
}
function getOptions(method, body) {
    let options = {
        method,
        headers: {}
    }
    let token = sessionStorage.getItem('authToken')
    if (token) {
        options.headers['X-Authorization'] = token
    }
    if (body) {
        options.headers['Content-Type'] = 'application/json'
        options.body = JSON.stringify(body)
    }
    return options
}

async function getAll(url) {
    return await request(url, getOptions('GET'))
}
async function getOne(urlId) {
    return await request(urlId, getOptions('GET'))
}
async function postCreate(url, data) {
    return await request(url, getOptions('POST', data))
}
async function putUpdate(urlId, data) {
    return await request(urlId, getOptions('PUT', data))
}
async function del(urlId) {
    return await request(urlId,getOptions('DELETE'))
}

export {
    getAll,
    getOne,
    postCreate,
    putUpdate,
    del
}