function lastKnumbersSequance(n, k) {
    let result = [1]
    for (let i = 1; i < n; i++) {
        let currentK = result.slice(-k)
        let sum = 0
        for (let current of currentK) {
            sum += current
        }
        result.push(sum)
    }
    return result.join(' ')
}
console.log(lastKnumbersSequance(6, 3))