function accountBalance(input) {
    let payment = Number(input.shift())
    let i = 0
    let sum = 0
    let total = 0

    while (i < payment) {


        if (input[i] < 0) {
            return console.log(`Invalid operation!\nTotal: ${total.toFixed(2)}`)
        } else {
            let currentNumber = Number(input[i])
            total += currentNumber
            console.log(`Increase: ${currentNumber.toFixed(2)}`)
        }

        i++
    }
    console.log(`Total: ${total.toFixed(2)}`);

}
accountBalance(['5', '120', '45.55', '-150'])