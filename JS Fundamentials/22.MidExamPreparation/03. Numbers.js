function numbers(numbers) {
    let arr = numbers.split(' ').map(Number)
    let sum = arr.reduce((a, b) => a + b)
    let average = sum / arr.length
    arr = arr.filter(x => x > average)
        .sort((a, b) => b - a)
        .slice(0, 5)
        .join(' ')

    arr == '' ? console.log('No') : console.log(arr)

}
numbers('1')