function spiralMatrix(numOne, numTwo) {
    let startCol = 0
    let endCol = numOne - 1
    let startRow = 0
    let endRow = numTwo - 1
    let counter = 1
    let result = []
    for (let i = 0; i < numOne; i++) {
        result[i] = []
    }
    while (startCol <= endCol && startRow <= endRow) {
        // fill the first row 
        for (let i = startCol; i <= endCol; i++) {
            result[startRow][i] = counter
            counter++
        }
        startRow++
        //fil the end right column
        for (let j = startRow; j <= endRow; j++) {
            result[j][endCol] = counter
            counter++
        }
        endCol--
        for (let i = endCol; i >= startCol; i--) {
            result[endRow][i] = counter
            counter++
        }
        endRow--
        for (let j = endRow; j >= startRow; j--) {
            result[j][startCol] = counter
            counter++
        }
        startCol++
    }

    for (let i = 0; i < result.length; i++) {
        console.log(result[i].join(' '))

    }

}
spiralMatrix(3, 3)