function simpleCalculator(numOne, numTwo, operator) {
    switch (operator) {
        case 'multiply':
            let multiply = (numOne, numTwo) => numOne * numTwo
            return console.log(multiply(numOne, numTwo))
            break
        case 'divide':
            let divide = (numOne, numTwo) => numOne / numTwo
            return console.log(divide(numOne, numTwo))
            break
        case 'add':
            let add = (numOne, numTwo) => numOne + numTwo
            return console.log(add(numOne, numTwo))
            break
        case 'subtract':
            let subtract = (numOne, numTwo) => numOne - numTwo
            return console.log(subtract(numOne, numTwo))
            break

    }
}
simpleCalculator(50,
    13,
    'subtract'
    )