function numberPyramid(input) {
    let num = Number(input.shift())
    let counterLine = ''
    let isBigger = false
    let current = 1
    for (let i = 1; i <= num; i++) {
        for (let y = 1; y <= i; y++) {
            if (current > num) {
                isBigger = true
                break
            }
            counterLine += `${current} `
            current++
        }
        console.log(counterLine)
        counterLine = ''
        if (isBigger) {
            break
        }

    }

}
numberPyramid(['7'])