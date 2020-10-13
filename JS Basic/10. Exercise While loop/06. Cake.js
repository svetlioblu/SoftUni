function cake(input) {
    let cakeWidth = Number(input.shift())
    let cakeLength = Number(input.shift())

    let cakeArea = cakeWidth * cakeLength
    let takenCake = 0

    let index = 0
    let takenCakePeaces = input[index]
    index++
    while (takenCakePeaces !== 'STOP') {
        takenCake += Number(takenCakePeaces)
        if (takenCake > cakeArea) {
            let morePeaces = takenCake - cakeArea
            return console.log(`No more cake left! You need ${morePeaces} pieces more.`)

        }
        takenCakePeaces = input[index]
        index++
    }
    let leftpeaces = cakeArea - takenCake
    console.log(`${leftpeaces} pieces are left.`)

}
cake([
'10',
'2',
'2',
'4',
'6',
'STOP'
])