function attachEvents() {
    document.getElementById('btnLoadPosts').addEventListener('click', loadPosts)
    document.getElementById(`btnViewPost`).addEventListener('click', viewPosts)
}
attachEvents()

async function loadPosts() {
    const select = document.getElementById('posts')

    const url = `http://localhost:3030/jsonstore/blog/posts`
    const response = await fetch(url)
    if (response.ok == false || response.status != 200) {
        document.getElementById('post-body').textContent = 'Error'
        throw new Error('Error')
    }
    const data = await response.json()
    select.innerHTML = ''
    if (document.getElementById('posts').children.length == 0) {
        Object.entries(data).forEach(post => {
            let addOption = e('option', { value: `${post[0]}` }, `${post[1].title}`)
            select.appendChild(addOption)

        })
    }
    return data
}
async function viewPosts() {
    if (document.getElementById('posts').children.length > 0) {
        const postId = document.getElementById('posts').value
        const postTitle = document.getElementById('post-title')
        const postBody = document.getElementById('post-body')
        const postComments = document.getElementById('post-comments')
        const url = `http://localhost:3030/jsonstore/blog/comments`
        const response = await fetch(url)
        const data = await response.json()
        postComments.innerHTML = ''
        let allPosts = await loadPosts()
        let comments = Object.values(data).filter(x => x.postId == postId)
        postTitle.textContent = allPosts[postId].title
        postBody.textContent = allPosts[postId].body
        comments.forEach(el => {
            let comment = e('li', { id: `${el.id}` }, `${el.text}`)
            postComments.appendChild(comment)
        })

    }
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
