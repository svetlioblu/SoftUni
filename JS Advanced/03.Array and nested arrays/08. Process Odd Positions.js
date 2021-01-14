function solve(arr) {
    let filtered =arr.filter((x, i) => i % 2 != 0)
    .map(x => x * 2).reverse()
    return filtered
}
console.log(solve([10, 15, 20, 25]));