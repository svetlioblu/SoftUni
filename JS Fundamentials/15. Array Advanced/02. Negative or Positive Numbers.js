function negativeOrPositiveNumbers(arr) {
    let result = []
    arr.map(x => x < 0 ? result.unshift(x) : result.push(x))

    return result.join('\n')
}
console.log(negativeOrPositiveNumbers([3, -2, 0, -1]))