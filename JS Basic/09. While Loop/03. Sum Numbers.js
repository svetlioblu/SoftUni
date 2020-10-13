function sumNumbers(input) {
    let i = 0
    let sum = 0

    while (i < input.length) {
        if (input[i] !== 'Stop') {
            let currentNum = Number(input[i])
            sum += currentNum        }
        i++
    }
    console.log(sum)
}
sumNumbers(['10', '20', '30', '45','Stop'])