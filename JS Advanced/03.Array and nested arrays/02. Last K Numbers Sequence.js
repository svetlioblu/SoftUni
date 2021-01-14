function solve(n, k) {
    let result = [1]
    for (let i = 1; i < n; i++) {
        let takePreviousK = result.slice(-k)
        result.push(takePreviousK.reduce((a, b) => a + b))

    }
    return result
}
console.log(solve(8, 2));