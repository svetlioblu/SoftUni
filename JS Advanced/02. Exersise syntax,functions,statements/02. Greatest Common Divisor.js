function greatestCommonDivisor(x, y) {
    let resultX = []
    let resultY = []

    for (let i = 0; i <= x; i++) {
        if (x % i == 0) {
            resultX.push(i)
        }
    }

    for (let i = 0; i <= y; i++) {
        if (y % i == 0 && resultX.includes(i)) {
            resultY.push(i)
        }
    }
    console.log(resultY[resultY.length - 1]);

}
greatestCommonDivisor(2154, 458)