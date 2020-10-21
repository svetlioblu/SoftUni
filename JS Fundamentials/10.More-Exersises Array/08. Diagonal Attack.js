function diagonalAttack(arr) {
    let matrix = []
    //make/fill the matrix
    for (let i = 0; i < arr.length; i++) {
        matrix[i] = arr[i].split(' ').map(Number)
    }

    let matrixPrint = matrix.slice()
    let sumLeftDiagonal = 0
    let sumRightDiagonal = 0
    // colect the left diagonal
    for (let i = 0; i < matrix.length; i++) {
        for (let j = i; j <= i; j++) {
            sumLeftDiagonal += matrix[i][j]

        }
    }
    // colect the right diagonal
    for (let i = 0; i < matrix.length; i++) {
        sumRightDiagonal += matrix[i][matrix.length - 1 - i]
    }
    // check if are equal and take action accoridngly
    if (sumLeftDiagonal === sumRightDiagonal) {
        // TO DO

    } else {
        for (let i = 0; i < matrixPrint.length; i++) {
            console.log(matrixPrint[i].join(' '))

        }


    }
}
diagonalAttack(['1 1 1', '1 1 1', '1 1 0'])