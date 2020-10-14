function spiceMustFlow(startingYield) {
    let currentYield = startingYield
    let spiceAmountStorage = 0
    let days = 0

    while (currentYield >= 100) {


        spiceAmountStorage += currentYield
        currentYield -= 10
        spiceAmountStorage -= 26
        days++
    }
    spiceAmountStorage -= 26
    if (spiceAmountStorage < 0) {
        spiceAmountStorage = 0
    }
    console.log(days)
    console.log(spiceAmountStorage)
}
spiceMustFlow(111)