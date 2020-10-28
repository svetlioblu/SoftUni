function printNthElement(arr) {
    let step = Number(arr[arr.length - 1])
    let result = ''
    for (let i = 0; i < arr.length-1; i += step) {
        result += arr[i] + ' '
    }
    console.log(result)
    
}
printNthElement(['1', '2', '3', '4', '5', '6'])