function sameNumbers(num) {
    let sum = 0
    let isEqual = true
    let temp = num % 10
    while (num) {
        let lastDigit = num % 10
        if (temp != lastDigit) {
            isEqual = false
        }
        temp = lastDigit
        sum += lastDigit
        num = num / 10
        num = Math.trunc(num)
    }
    if (isEqual) {
        console.log(`true`)
    } else {
        console.log(`false`)
    }
    console.log(sum)

}
sameNumbers(1234)