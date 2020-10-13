function cleverLily(arg1, arg2, arg3) {
    let liliAge = Number(arg1)
    let washmashinePrice = Number(arg2)
    let toyPrice = Number(arg3)
    let evenBdayCount = 0
    let toysCount = 0
    let evenBday = 0
    let toys = 0
    let totalSum = 0



    for (let i = 1; i <= liliAge; i++) {
        if (i % 2 === 0) {
            evenBdayCount += 1
            evenBday += 10.00 * evenBdayCount
            evenBday -= 1.00
        } else {
            toysCount += 1
        }
    }
    toys = toysCount * toyPrice
    totalSum = evenBday + toys
    if (washmashinePrice <= totalSum) {
        let moneyLeft = totalSum - washmashinePrice
        console.log(`Yes! ${moneyLeft.toFixed(2)}`)

    } else {
        let moneyLeft = washmashinePrice - totalSum
        console.log(`No! ${moneyLeft.toFixed(2)}`)

    }
}
cleverLily('21', '1570.98', '3')