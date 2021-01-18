function solve(arr) {
    let result = []
    let sorted = arr.sort((a, b) => a - b)
    let copySorted = sorted.slice()
    sorted.forEach((_, i) => {
        if (i % 2 == 0) {
            result.push(copySorted.shift())
        } else { result.push(copySorted.pop()) }
    });

    return result
}
console.log(solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56, 15]));