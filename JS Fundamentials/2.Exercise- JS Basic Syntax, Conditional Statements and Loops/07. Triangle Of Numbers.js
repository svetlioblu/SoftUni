function triangleOfNumbers(number) {
    let currentLine = ''
    for (let i = 1; i <= number; i++) {
        for (let y = 1; y <= i; y++) {
            currentLine += i + ' '
        }
        console.log(currentLine.trim())

        currentLine = ''
    }
}
triangleOfNumbers(6)