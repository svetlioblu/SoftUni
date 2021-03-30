const host = 'http://localhost:3030'
async function request(url, options) {
    try {
        const response = await fetch(url, options)
        if (response.ok == false) {
            const error = await response.json()
            throw new Error(error.message)
        }
        try {
            const data = await response.json()
            return data
        } catch (err) {
            return response
        }
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
    return await request(urlId, getOptions('DELETE'))
}
async function logIn(email, password) {
    const result = await postCreate(host + '/users/login', { email, password })
    sessionStorage.setItem('email', result.email)
    sessionStorage.setItem('authToken', result.accessToken)
    sessionStorage.setItem('userId', result._id)
    sessionStorage.setItem('userName', result.userName)
    sessionStorage.setItem('gender', result.gender)
    return result
}
async function register(userName, email, password, gender) {
    const result = await postCreate(host + '/users/register', { userName, email, password, gender})
    sessionStorage.setItem('userName', result.userName)
    sessionStorage.setItem('email', result.email)
    sessionStorage.setItem('authToken', result.accessToken)
    sessionStorage.setItem('gender', result.gender)
    sessionStorage.setItem('userId', result._id)
    return result
}
async function logOut() {
    const result = await getOne(host + '/users/logout')
    sessionStorage.clear()
    return result
}

export {
    getAll,
    getOne,
    postCreate,
    putUpdate,
    del,
    logIn,
    register,
    logOut
}