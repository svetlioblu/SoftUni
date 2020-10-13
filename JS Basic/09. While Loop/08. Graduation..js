function graduation(input) {
    let name = input.shift()
    let assessmentCount = 12
    let assessmentSum = 0
    let total = 0
    let i = 0

    while (i < assessmentCount) {
        let currentNumber = Number(input[i])
        assessmentSum += currentNumber
        i++
    }
    total = (assessmentSum / assessmentCount)
    if (total >= 4.00) {
        console.log(`${name} graduated. Average grade: ${total.toFixed(2)}`)
    }
}
graduation([
    'Ani',
    '5',
    '5.32',
    '6',
    '5.43',
    '5',
    '6',
    '5.5',
    '4.55',
    '5',
    '6',
    '5.56',
    '6'
])