function processOddNumbers(arr) {
    let result = arr.filter((x, i) => i % 2 != 0)
        .map(x => x * 2)
        .reverse()


   return result.join(' ')

}
console.log(processOddNumbers([10, 15, 20, 25]))