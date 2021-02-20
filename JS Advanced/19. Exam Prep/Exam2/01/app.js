function solution() {
    const addInput = document.getElementsByTagName('input')[0]
    const addBtn = document.getElementsByTagName('button')[0]
    const listGifts = document.getElementsByTagName('section')[1].querySelector('ul')
    addBtn.addEventListener('click', add)
    listGifts.addEventListener('click', dispatch)




    function add() {
        if (addInput.value != '') {
            listGifts.appendChild(element('li'))
            addInput.value = ''
            let allGifts = Array.from(listGifts.querySelectorAll('li')).sort((a, b) => {
                return a.textContent.localeCompare(b.textContent)
            })
            allGifts.forEach(e => listGifts.appendChild(e))
        }
    }
    function dispatch(e) {
        if (e.target.id == 'sendButton') {
            const sentGifts = document.getElementsByTagName('section')[2].querySelector('ul')
            const li = document.createElement('li')
            li.setAttribute('class', 'gift')
            li.textContent = e.target.parentNode.childNodes[0].textContent
            sentGifts.appendChild(li)
            e.target.parentNode.remove()
        } else if (e.target.id == 'discardButton') {
            const sentGifts = document.getElementsByTagName('section')[3].querySelector('ul')
            const li = document.createElement('li')
            li.setAttribute('class', 'gift')
            li.textContent = e.target.parentNode.childNodes[0].textContent
            sentGifts.appendChild(li)
            e.target.parentNode.remove()
        }
    }

    function element(type) {
        const e = document.createElement(type)
        e.setAttribute('class', 'gift')
        e.textContent = addInput.value
        const btnSend = document.createElement('button')
        btnSend.setAttribute('id', 'sendButton')
        btnSend.textContent = 'Send'
        e.appendChild(btnSend)
        const btnDiscard = document.createElement('button')
        btnDiscard.setAttribute('id', 'discardButton')
        btnDiscard.textContent = 'Discard'
        e.appendChild(btnDiscard)
        return e
    }
}