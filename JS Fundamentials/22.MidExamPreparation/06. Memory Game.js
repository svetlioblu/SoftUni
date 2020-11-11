function memoryGame(input) {
    let sequence = input.shift().split(' ')
    let command = input.shift()
    let moves = 1
    while (command != 'end') {
        let [index1, index2] = command.split(' ')
        if (sequence.length == 0) {
            return console.log(`You have won in ${moves - 1} turns!`)
        }
        if (index1 == index2 || sequence[Number(index1)] == undefined || sequence[Number(index2)] == undefined) {
            let middleIndex = Number.parseInt(sequence.length / 2)
            sequence.splice(middleIndex, 0, `-${moves}a`, `-${moves}a`)
            moves++
            console.log(`Invalid input! Adding additional elements to the board`)
            command = input.shift()
            continue
        }
        if (sequence[Number(index1)] != sequence[Number(index2)]) {
            console.log(`Try again!`)
            moves++
            command = input.shift()
            continue
        }
        let current = sequence[Number(index1)]
        sequence.splice(Number(index1), 1)
        sequence.splice(sequence.indexOf(current), 1)
        moves++
        console.log(`Congrats! You have found matching elements - ${current}!`)

        command = input.shift()
    }
    if (sequence.length != 0) {
        console.log(`Sorry you lose :(\n${sequence.join(' ')}`)
    } else {
        console.log(`You have won in ${moves - 1} turns!`)
    }


}
memoryGame([
    "1 1 2 2 3 3 4 4 5 5",
    "1 0",
    "-1 0",
    "1 0",
    "1 0",
    "1 0",
    "end"
]

)