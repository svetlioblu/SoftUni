function lettersChangeNumbers(input) {
    input = input.split(' ').filter(x => x.length > 0)
    let result = []
    for (let line of input) {
        let tokens = line.split('')
        let letter1 = tokens.shift()
        let letter2 = tokens.pop()
        let number = Number(tokens.join(''))
        let temp = 0
        if (letter1 == letter1.toUpperCase()) {
            let code = letter1.charCodeAt()
            let position = code - 64
            temp = number / position
        } else {
            let code = letter1.toUpperCase().charCodeAt()
            let position = code - 64
            temp = number * position
        }
        if (letter2 == letter2.toUpperCase()) {
            let code = letter2.charCodeAt()
            let position = code - 64
            temp -= position
        } else {
            let code = letter2.toUpperCase().charCodeAt()
            let position = code - 64
            temp += position
        }
        result.push(temp)
    }
    result = result.reduce((a, b) => a + b)
    console.log(result.toFixed(2))
}
lettersChangeNumbers('a1A')