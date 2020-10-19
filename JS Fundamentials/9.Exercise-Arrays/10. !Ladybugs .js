function ladybugs(arr) {
    let fieldLength = arr[0]
    let hasBugs = arr[1].split(' ')
    let field = []
    let actions = arr.slice(2)
    let direction = ''
    // make the field
    for (let i = 0; i < fieldLength; i++) {
        field[i] = 0
    }
    for (let bugPlace of hasBugs) {
        field[Number(bugPlace)] = 1
    }

    // check each action the real direction to move
    for (let i = 0; i < actions.length; i++) {
        let currentAction = actions[i].split(' ')
        if (Math.sign(Number(currentAction[2])) === 1 && currentAction[1] === 'right') {
            direction = 'right'
        } else if (Math.sign(Number(currentAction[2])) === -1 && currentAction[1] === 'right') {
            direction = 'left'
        } else if (Math.sign(Number(currentAction[2])) === 1 && currentAction[1] === 'left') {
            direction = 'left'
        } else if (Math.sign(Number(currentAction[2])) === -1 && currentAction[1] === 'left')
            direction = 'right'

        if (direction === 'right') {
            field[Number(currentAction[0])] = 0
            if (field[Math.abs(Number(currentAction[2])) + Math.abs(Number(currentAction[0]))] === 0) {
                field[Math.abs(Number(currentAction[2])) + Math.abs(Number(currentAction[0]))] = 1
            } else {
                for (let j = Math.abs(Number(currentAction[2])) + Math.abs(Number(currentAction[0])); j < field.length; j++) {
                    if (field[j] === 0) {
                        field[j] = 1
                    }
                }
            }
        } else if (direction === 'left') {
            field[Number(currentAction[0])] = 0
            if (field[Math.abs(Number(currentAction[2]) - Number(currentAction[0]))] === 0) {
                field[Math.abs(Number(currentAction[2]) - Number(currentAction[0]))] = 1
            } else {
                for (let j = Math.abs(Number(currentAction[2]) - Number(currentAction[0])); j >= 0; j--) {
                    if (field[j] === 0) {
                        field[j] = 1
                    }
                }
            }
        }


    }



    console.log(field.join(' '))

}


ladybugs([3, '0 1',
    '0 right 1',
    '2 right 1'
]
)