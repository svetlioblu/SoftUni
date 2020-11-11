function messaging(input) {
    let message = []
    let current = input.shift()
    while (current != 'end') {
        let token = current.split(' ')
        let action = token.shift()
        // token = token.map()
        switch (action) {
            case 'Chat':
                token.map(x => message.push(x))

                break
            case 'Delete':
                if (message.includes(token[0])) {
                    message = message.filter(x => x != token[0])
                }
                break
            case 'Edit':
                let edit = token[0]
                let editWith = token[1]
                message.splice(message.indexOf(edit), 1, editWith)
                break
            case 'Pin':
                let current = token[0]
                if (message.includes(current)) {
                    let temp = current
                    message.splice(message.indexOf(current), 1)
                    message.push(temp)
                }
                break
            case 'Spam':
                token.map(x => message.push(x))
                break
        }

        current = input.shift()
    }
    console.log(message.join('\n'))

}
messaging(["Chat John",
    "Spam Let's go to the zoo",
    "Edit zoo cinema",
    "Chat tonight",
    "Pin John",
    "end"])



