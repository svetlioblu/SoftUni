function lotaryStatistics(arg) {
    let num = Number(arg)
    let odds = 1
    let evens = 0
    let ooddsOn7 = 0
    let numbersDeviding100 = 0
    for (let i = 1; i <= num; i++) {
        if (i % 2 !== 0 && i % 10 === 7) {
            ooddsOn7 += 1
        } else if (i % 2 === 0) {
            evens += 1
        } else if (i % 2 !== 0  && i < 10) {
            odds += 1
        }

        if (100 % i === 0) {
            numbersDeviding100 += 1
        }

    }
    console.log((odds / num * 100).toFixed(2)+'%')
    console.log((evens / num * 100).toFixed(2)+'%')
    console.log((ooddsOn7 / num * 100).toFixed(2)+'%')
    console.log((numbersDeviding100 / num * 100).toFixed(2)+'%')

}
lotaryStatistics('35')