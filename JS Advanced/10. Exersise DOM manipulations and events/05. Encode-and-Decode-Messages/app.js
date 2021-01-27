function encodeAndDecodeMessages() {
    let textAreaSend = document.querySelectorAll('textarea')[0]
    let textAreaReceived = document.querySelectorAll('textarea')[1]
    let buttonSend = document.getElementsByTagName('button')[0]
    let buttonReceived = document.getElementsByTagName('button')[1]
    let actions = {
        encript: (value) => {
            value = value.split('').map(x => String.fromCharCode(x.charCodeAt() + 1)).join('')
            textAreaReceived.value = value
            textAreaSend.value = ''
        },
        decript: (value) => {
            value = value.split('').map(x => String.fromCharCode(x.charCodeAt() - 1)).join('')
            textAreaReceived.value = value
        }
    }
    buttonSend.addEventListener('click', () => {
        if (textAreaSend.value != '') {
            actions.encript(textAreaSend.value)
        }
    })
    buttonReceived.addEventListener('click', () => {
        actions.decript(textAreaReceived.value)
    })
}