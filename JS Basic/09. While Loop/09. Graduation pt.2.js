function graduationTwo(input) {
    let name = input.shift()
    let failed = 0
    let allYearsSum = 0
    let avg = 0
    let i = 0

    while (i <= 12) {
        let currentNumber = Number(input[i])
        if (currentNumber >= 4.00) {
            allYearsSum += currentNumber
        } else {
            failed += 1
            if (failed === 2) {
                return console.log(`${name} has been excluded at ${i} grade`)
            }
        }
        i++
    }
    avg = (allYearsSum / 12).toFixed(2)
    console.log(`${name} graduated. Average grade: ${avg}`)
}
graduationTwo([
    'Mimi',
    '5',
    '6',
    '5',
    '6',
    '5',
    '6',
    '6',
    '2',
    '3'
])
