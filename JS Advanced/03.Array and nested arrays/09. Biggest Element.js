function solve(arr) {
    let number = Number.NEGATIVE_INFINITY;

    for (let row of arr) {
        for (let col of row) {
            if (col > number) {
                number = col
            }
        };
    };
    return number
}
console.log(solve([
    [3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]]

));