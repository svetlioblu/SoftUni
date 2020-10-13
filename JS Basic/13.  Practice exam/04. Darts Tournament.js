function dartsTournament(input) {
    let startPoints = Number(input.shift())
    let section = input.shift()
    let currentPoints = Number(input.shift())
    let movesCount = 0

    while (startPoints >= 0) {
        movesCount++
        switch (section) {
            case 'number section':
                startPoints -= currentPoints
                break
            case 'double ring':
                startPoints -= currentPoints * 2
                break
            case 'triple ring':
                startPoints -= currentPoints * 3
                break
            case 'bullseye':
                return console.log(`Congratulations! You won the game with a bullseye in ${movesCount} moves!`)
        }
        if (startPoints === 0) {
            return console.log(`Congratulations! You won the game in ${movesCount} moves!`)
        }
        section = input.shift()
        currentPoints = Number(input.shift())
    }
    console.log(`Sorry, you lost. Score difference: ${Math.abs(startPoints)}.`)
}
dartsTournament([
'75',
'triple ring',
'17',
'number section',
'16',
'triple ring',
'13',
'double ring',
'10'
])