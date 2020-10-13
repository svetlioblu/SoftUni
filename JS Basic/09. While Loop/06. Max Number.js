function maxNumber(input) {
    let currentBiggest = -1000
    let cycles = Number(input.shift())
    let i = 0
    while (i < cycles) {
        let number = Number(input[i])
        if (number > currentBiggest) {
            currentBiggest = number
        }
        i++
    }
    console.log(currentBiggest)

}
maxNumber(['2', '-1', '-2'])
//console.log(-2 < -1);
