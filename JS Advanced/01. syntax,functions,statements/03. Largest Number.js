function largestNumber(a, b, c) {
    let result = 0
    if (a > b && a > c) {
        result = a
    } else if (b > a && b > c) {
        result = b
    } else {
        result = c
    }
    console.log(`The largest number is ${result}.`)
}
largestNumber(-3, -5, -22.5)