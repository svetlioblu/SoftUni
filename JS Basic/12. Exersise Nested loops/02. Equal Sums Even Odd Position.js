function equalSumsEvenOddPosition(input) {
    let start = Number(input.shift())
    let end = Number(input.shift())
    let result = ''
    let evenSum = 0
    let oddSum = 0

    for (let i = start; i <= end; i++) {
        let currentNumber = i + ''
        evenSum = 0
        oddSum = 0
        for (let y = 1; y <= 6; y++) {
            if (y % 2 == 0) {
                evenSum += +currentNumber[y - 1]
            } else {
                oddSum += +currentNumber[y - 1]
            }
        }
        if (evenSum === oddSum) {
            result += `${currentNumber} `
        }
    }
    console.log(result);
}
equalSumsEvenOddPosition([
    '299900',
    '300000'
])