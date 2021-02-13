function solve() {
    let addBtn = document.querySelector('.form-control> button')
    let nameField = document.querySelector('input[name="lecture-name"]')
    let dateField = document.querySelector('input[name="lecture-date"]')
    let moduleField = document.querySelector('select')
    let training = document.querySelector('.modules')

    addBtn.addEventListener('click', onClick)


    function onClick(e) {
        e.preventDefault()
        if (nameField.value == '' || dateField.value == '' || moduleField.value == moduleField.options[0].value) {
            return
        }
        //all module
        let moduleDiv = document.createElement('div')
        moduleDiv.setAttribute('Class', 'module')
        let h3 = document.createElement('h3')
        h3.textContent = `${moduleField.value}-module`.toLocaleUpperCase()
        moduleDiv.appendChild(h3)
        let ul = document.createElement('ul')
        moduleDiv.appendChild(ul)
        let li = document.createElement('li')
        li.setAttribute('Class', 'flex')
        let h4 = document.createElement('h4')
        h4.textContent = dateField.value
        li.appendChild(h4)
        let delBtn = document.createElement('button')
        delBtn.setAttribute('Class', 'red')
        delBtn.textContent = 'Del'
        li.appendChild(delBtn)
        ul.appendChild(li)

        training.appendChild(moduleDiv)

    }

};