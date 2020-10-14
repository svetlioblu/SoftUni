function calculator(numberOne, operator, NumberTwo) {
    let result = 0
    switch (operator) {
        case '+':
            result = numberOne + NumberTwo
            break
        case '-':
            result = numberOne - NumberTwo
            break
        case '*':
            result = numberOne * NumberTwo
            break
        case '/':
            result = numberOne / NumberTwo
            break
        case '%':
            result = numberOne % NumberTwo
            break
    }
    console.log(result.toFixed(2));

}
calculator(25.5,
    '-',
    3    
)