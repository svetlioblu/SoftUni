function bitcoinMining(arr) {
    //1 Bitcoin	11949.16 lv.
    //1 g of gold	67.51 lv.
    const bitCoin = 11949.16
    const gold = 67.51
    let goldCount = 0
    let bitcoinCount = 0
    let firstDay = 0
    for (let i = 0; i < arr.length; i++) {

        if ((i + 1) % 3 === 0) {
            arr[i] *= 0.70
        }
        goldCount += gold * arr[i]
        if (goldCount >= bitCoin) {
            if (bitcoinCount === 0) {
                firstDay = i + 1
            }
            while (goldCount >= bitCoin) {
                bitcoinCount++
                goldCount -= bitCoin
            }
        }

    }
    console.log(`Bought bitcoins: ${bitcoinCount}`)
    if (firstDay != 0) { console.log(`Day of the first purchased bitcoin: ${firstDay}`) 
}
    console.log(`Left money: ${goldCount.toFixed(2)} lv.`)
}
bitcoinMining([3124.15, 504.212, 2511.124])