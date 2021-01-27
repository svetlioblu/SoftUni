function addItem() {
    let dropDown = document.getElementById('menu')
    let text = document.getElementById('newItemText').value
    let value = document.getElementById('newItemValue').value

    let option = document.createElement('option')
    let attribute = document.createAttribute('value')
    attribute.value = value
    option.setAttributeNode(attribute)
    option.textContent = text
    dropDown.appendChild(option)
    document.getElementById('newItemText').value= ''
    document.getElementById('newItemValue').value = ''
}