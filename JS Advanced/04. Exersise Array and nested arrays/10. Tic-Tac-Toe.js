function solve(input) {
    let dashboard = [
        [false, false, false],
        [false, false, false],
        [false, false, false]
    ]

    let line = input.shift()
    let player = "X"
    let isWinner = false
    while (line) {

        let [row, col] = line.split(' ')
        row = +row
        col = +col

        if (!isThereFreeSlot(dashboard)) {
            return `The game ended! Nobody wins :(\n${printDashboard(dashboard)}`
        } else if (dashboard[row][col] != false) {
            console.log(`This place is already taken. Please choose another!`)
            line = input.shift()
            continue
        } else {
            dashboard[row][col] = player
        }
        if (verifyIfWin(dashboard, player)) {
            return `Player ${player} wins!\n${printDashboard(dashboard)}`
        }

        line = input.shift()
        player = player === "X" ? "O" : "X"
    }
    return `The game ended! Nobody wins :(\n${printDashboard(dashboard)}`

        function isThereFreeSlot(dashboard) {
            let isEnd = false
            for (let row of dashboard) {
                row.includes(false) ? isEnd = true : false
            }
            return isEnd
        }
    function printDashboard(dashboard) {
        let print = ``
        for (let row of dashboard) {

            print += row.join(`\t`) + '\n'
        }
        return print
    }
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

}
console.log(solve(["0 1",
"0 0",
"0 2", 
"2 0",
"1 0",
"1 1",
"1 2",
"2 2",
"2 1",
"0 0"]

));