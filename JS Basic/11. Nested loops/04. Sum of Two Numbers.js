function sumOfTwoNumbers(input) {
    let start = Number(input.shift())
    let end = Number(input.shift())
    let magicNumber = Number(input.shift())
    let combinations = 0

    for (let i = start; i <= end; i++) {
        for (let y = start; y <= end; y++) {
            combinations++
            let surchResult = i + y
            if (surchResult === magicNumber) {
                return console.log(`Combination N:${combinations} (${i} + ${y} = ${magicNumber})`)
            }
        }
    }
    console.log(`${combinations} combinations - neither equals ${magicNumber}`)
}
sumOfTwoNumbers([
    '88',
    '888',
    '2000'
])