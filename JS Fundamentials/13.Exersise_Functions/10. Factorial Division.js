function factorialDivision(num1, num2) {
    let factoriel = 1
    factorial(num1)
    let firstNum = factoriel
    factoriel = 1
    factorial(num2)
    let secondNum = factoriel
    return console.log((firstNum / secondNum).toFixed(2))


    function factorial(number) {

        if (number <= 0) {
            return
        } else {
            factoriel *= number
            number--
            factorial(number)
        }
    }
}
factorialDivision(6, 2)