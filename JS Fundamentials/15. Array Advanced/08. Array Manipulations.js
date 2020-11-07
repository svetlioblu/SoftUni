function arrayManipulations(input) {
    let arr = input.shift().split(' ').map(Number)

    for (let element of input) {
        let commandRead = element.split(' ')
        let action = commandRead.shift()
        switch (action) {
            case 'Add':
                arr.push(Number(commandRead.shift()))
                break
            case 'Remove':
                let remove = Number(commandRead.shift())
                arr = arr.filter(x => x != remove)
                break
            case 'RemoveAt':
                let start = Number(commandRead.shift())
                arr.splice(start, 1)
                break
            case 'Insert':
                let number = Number(commandRead.shift())
                let position = Number(commandRead.shift())
                arr.splice(position, 0, number)
                break
        }
    }

    return arr.join(' ')
}
console.log(arrayManipulations(['4 19 2 53 6 43',
    'Add 3',
    'Remove 2',
    'RemoveAt 1', 
    'Insert 8 3'
]

))