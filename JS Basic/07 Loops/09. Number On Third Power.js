function numberOnThirdPower(arg) {
    let num = Number(arg)
    let currentNumber = 0
    let currentNumberPowerdThree = 0
    for (let i = 1; i <= num; i++) {
        if (num % 2 === 0 && i % 2 === 0) {
            currentNumber = i
            currentNumberPowerdThree = (i * i) * i
            console.log(`Current number: ${currentNumber}. Cube: ${currentNumberPowerdThree}`)

        } else if (num % 2 !== 0 && i % 2 !== 0) {
            currentNumber = i
            currentNumberPowerdThree = (i * i) * i
            console.log(`Current number: ${currentNumber}. Cube: ${currentNumberPowerdThree}`)
        }
    }

}
numberOnThirdPower('5')