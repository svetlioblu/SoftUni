function limitationGame(input) {
    let msg = input.shift()
    let line = input.shift()
    while (line != 'Decode') {
        let [action, paramA, paramB] = line.split('|')
        switch (action) {
            case 'Move':
                paramA = Number(paramA)
                msg = msg.substring(paramA) + msg.substring(0, paramA)
                break
            case 'Insert':
                paramA = Number(paramA)
                msg = msg.substring(0, paramA) + paramB + msg.substring(paramA)
                break
            case 'ChangeAll':
                msg = msg.split(paramA).join(paramB)
                break
        }

        line = input.shift()
    }
    console.log(`The decrypted message is: ${msg}`)
}
limitationGame([
    'owyouh',
    'Move|2',
    'Move|3',
    'Insert|3|are',
    'Insert|9|?',
    'Decode'
  ]
)