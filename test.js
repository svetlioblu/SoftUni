let dashboard = [
    ['X', 'X', false],
    ['X', 'X', 'X'],
    ['Xd', 'X', false]
]

let player = 'X'

function verifyIfWin(dashboard, player) {

    let primary = []
    let secondary = []
    let middle = []
    let firstRow = []
    let lastRow = []
    let firstCol = []
    let middleCol = []
    let lastCol = []
    for (let i = 0; i < dashboard.length; i++) {
        primary.push(dashboard[i][i])
        secondary.push(dashboard[i][dashboard.length - i - 1])
        firstRow.push(dashboard[0][i])
        middle.push(dashboard[1][i])
        lastRow.push(dashboard[2][i])
        firstCol.push(dashboard[i][0])
        middleCol.push(dashboard[i][1])
        lastCol.push(dashboard[i][2])

    }
    if (primary.every(el => el === player) || secondary.every(el => el === player) || middle.every(el => el === player) || firstRow.every(el => el === player) || lastRow.every(el => el === player) || firstCol.every(el => el === player) || middleCol.every(el => el === player) || lastCol.every(el => el === player)) {
        return true
    } else {
        return false
    }

}



console.log(verifyIfWin(dashboard, player))