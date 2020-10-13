function specialNumbers(input) {
    let number = Number(input.shift())
    let counter = 0
    let result = ''
    for (let i = 1111; i <= 9999; i++) {
        counter = 0
        let currentNumber = i + ''
        for (let y = 0; y < 4; y++) {
            // console.log(currentNumber[y])
            if (number % Number(currentNumber[y]) === 0) {
                counter += 1
            }
        }
        if (counter === 4) {
            result += `${i} `
        }
    }
    console.log(result)
}


specialNumbers([
    '16'
])