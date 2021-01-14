function solve(arr) {
    arr = arr.sort((a, b) => a - b)
    return arr.slice(Math.floor(arr.length / 2))
}
console.log(solve([4, 7, 2, 5, 8, 10, 12]));