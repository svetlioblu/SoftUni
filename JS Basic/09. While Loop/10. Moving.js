function moving(input) {
    let width = Number(input.shift())
    let length = Number(input.shift())
    let hight = Number(input.shift())

    let space = (width * length) * hight

    let index = 0
    let box = input[index]
    index++

    let allBoxCount = 0

    while (box !== 'Done') {
        let currentBoxCount = Number(box)
        allBoxCount += currentBoxCount
        if (allBoxCount >= space) {
            let moreSpace = allBoxCount - space
            return console.log(`No more free space! You need ${moreSpace} Cubic meters more.`)
        }
        box = input[index]
        index++
    }
    let freeSpace = space - allBoxCount
    console.log(`${freeSpace} Cubic meters left.`)
}
moving([
    '10',
    '1',
    '2',
    '4',
    '6',
    'Done'
])