function solve(arr) {
    let filtered = arr.filter((x, i) => i % 2 == 0).join(' ')
    return filtered
}
console.log(solve(['5']));