function addItem() {
    let inputText = document.getElementById('newItemText').value
    let parent = document.getElementById('items')
    let newItem = document.createElement('li')
    newItem.appendChild(document.createTextNode(inputText))
    parent.appendChild(newItem)
    document.getElementById('newItemText').value = ''
}