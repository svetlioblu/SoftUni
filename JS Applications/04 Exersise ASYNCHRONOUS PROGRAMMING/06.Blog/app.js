function attachEvents() {
    document.getElementById('btnLoadPosts').addEventListener('click', loadPosts)
}
attachEvents();

async function loadPosts() {

        const select = document.getElementById('posts')
        const url = `http://localhost:3030/jsonstore/blog/posts`
        const response = await fetch(url)
        if(response.ok==false || response.status != 200) {
            document.getElementById('post-body').textContent='Error'
            throw new Error('Error')
        }
        const data = await response.json()
    Object.entries(data).forEach(post => {
        let addOption = e('option', { value: `${post[0]}` }, `${post[1].title}`)
        select.appendChild(addOption)
    })
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

// postkey {
//     body: {postBody},
//     id: {postId},
//     title: {postTitle} 
//   }
