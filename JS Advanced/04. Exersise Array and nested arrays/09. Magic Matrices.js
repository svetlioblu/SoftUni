function solve(matrix) {
    let sumRow = []
    let sumCol = []
    //sum rows
    matrix.forEach(element => {
        sumRow.push(element.reduce((a, b) => a + b))
    });
    
    //transponirane matrix
    let newArr = matrix[0].map((_, colIndex) => matrix.map(row => row[colIndex]))

    //sumcols
    newArr.forEach(element => {
        sumCol.push(element.reduce((a, b) => a + b))
    });
    const concatResults = sumRow.concat(sumCol)

    return concatResults.every(el => concatResults[0] === el) ? 'true' :'false'
}

console.log(solve([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]
));
console.log('----------------------------');

console.log(solve([
    [11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]]
));
console.log('----------------------------');
console.log(solve([
    [1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]]
));
