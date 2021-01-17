function solve(arr) {
    let result = []
    let sorted = arr.sort((a, b) => a - b)
    sorted.forEach((element, i) => {
        if (i % 2 == 0) {
            result.unshift(element)
        } else { result.push(element) }
    });

    return result
}
console.log(solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));