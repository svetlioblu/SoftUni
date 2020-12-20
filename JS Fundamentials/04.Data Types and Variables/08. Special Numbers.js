function specialNumbers(number) {
    for (let i = 1; i <= number; i++) {
        let sum = 0
        let currentNumber = i
        while (currentNumber > 0) {
            sum += currentNumber % 10
            currentNumber = Math.trunc(currentNumber / 10)
        }
        if (sum === 5 || sum === 7 || sum === 11) {
            console.log(`${i} -> True`)
        } else {
            console.log(`${i} -> False`)

        }
    }

}
specialNumbers(15)