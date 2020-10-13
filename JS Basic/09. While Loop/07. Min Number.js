function minNumber(input) {
    let cycles = Number(input.shift())
    let result = 1000
    let i = 0
    while (i < cycles) {
        let currentNumber = Number(input[i])
        if (currentNumber < result) {
            result = currentNumber
        }
        i++
    }
    console.log(result)
    
}
minNumber(['2', '-1', '-2'])