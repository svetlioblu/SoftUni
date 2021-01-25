function addItem() {
    let text = document.getElementById('newText').value
    let parent = document.getElementById('items')
    let li = document.createElement('li')
    li.textContent = text
    //.............
    let removeLink = document.createElement('a')
    let linkText = document.createTextNode('[Delete]')
    removeLink.appendChild(linkText)
    removeLink.href = '#'
    removeLink.addEventListener('click', deleteItem)
    li.appendChild(removeLink)
    parent.appendChild(li)
    document.getElementById('newText').value = ''
    function deleteItem() {
        li.remove()
    }
}