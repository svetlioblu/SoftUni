function operationsBetweenNumbers(arg1, arg2, arg3) {
    let N1 = Number(arg1)
    let N2 = Number(arg2)
    let operator = arg3
    let result = 0
    let evenOdd = 'odd'

    switch (operator) {
        case '+':
            result = N1 + N2
            break
        case '-':
            result = N1 - N2
            break
        case '*':
            result = N1 * N2
            break
        case '/':
            if (N2 === 0) {
                return console.log(`Cannot divide ${N1} by zero`)

            } else {
                result = N1 / N2
            }
            break
        case '%':
            if (N2 === 0) {
                return console.log(`Cannot divide ${N1} by zero`)

            } else {
                result = N1 % N2
            }
            break
    }
    if (operator === '+' || operator === '-' || operator === '*') {
        if (result % 2 === 0) {
            evenOdd = 'even'
        }
        console.log(`${N1} ${operator} ${N2} = ${result} - ${evenOdd}`)
    } else if (operator === '/'){
       console.log(`${N1} ${operator} ${N2} = ${result.toFixed(2)}`)
    } else {
       console.log(`${N1} ${operator} ${N2} = ${result}`)

    }
}

operationsBetweenNumbers('10', '0', '%')