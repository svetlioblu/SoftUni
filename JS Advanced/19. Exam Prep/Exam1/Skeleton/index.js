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
        let formatedTime = `${nameField.value} - ${dateField.value.replace(/-/g, '/').replace(/T/g, ' - ')}`
        let currentModules = Array.from(document.querySelectorAll('.module'))
        let isModule = false
        if (currentModules.length != 0) {
            currentModules.forEach(el => {
                if (el.firstChild.textContent == `${moduleField.value}-module`.toLocaleUpperCase()) {
                    isModule = true
                    let li = document.createElement('li')
                    li.setAttribute('Class', 'flex')
                    let h4 = document.createElement('h4')
                    h4.textContent = formatedTime
                    li.appendChild(h4)
                    let delBtn = document.createElement('button')
                    delBtn.setAttribute('Class', 'red')
                    delBtn.textContent = 'Del'
                    li.appendChild(delBtn)
                    el.querySelector('ul').appendChild(li)
                    //check existing elements and sort

                    Array.from(el.querySelectorAll('li')).sort((a, b) => {
              
                        let matchA = a.querySelector('h4').textContent.substring(a.querySelector('h4').textContent.indexOf(' ')+3).replace(/\//g, '-').replace(/ - /g, 'T')
                        let matchB = b.querySelector('h4').textContent.substring(b.querySelector('h4').textContent.indexOf(' ')+3).replace(/\//g, '-').replace(/ - /g, 'T')
                       
                        return matchA.localeCompare(matchB)
                    })
                        .forEach(elelement => {
                            el.querySelector('ul').appendChild(elelement)
                        })
                }
            })

        }
        if (isModule == false) {
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
            h4.textContent = formatedTime
            li.appendChild(h4)
            let delBtn = document.createElement('button')
            delBtn.setAttribute('Class', 'red')
            delBtn.textContent = 'Del'
            li.appendChild(delBtn)
            ul.appendChild(li)
            training.appendChild(moduleDiv)
        }

    }

    training.addEventListener('click', function (e) {
        if (e.target.className == 'red') {
            let module = e.target.parentNode.parentNode
            let currentModule = Array.from(module.children)
            e.target.parentNode.remove()
            currentModule.pop()
            if (currentModule.length == 0) {
                module.parentNode.remove()
            }
        }
    })
}