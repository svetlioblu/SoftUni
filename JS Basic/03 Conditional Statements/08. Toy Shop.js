function toyShop(arg1, arg2, arg3, arg4, arg5, arg6) {

    let excursionCost = Number(arg1)
    let puzzles = Number(arg2)
    let talkingDolls = Number(arg3)
    let bearToy = Number(arg4)
    let minions = Number(arg5)
    let camions = Number(arg6)
    let toiesCount = puzzles + talkingDolls + bearToy + minions + camions
    let result

    puzzles = puzzles * 2.60
    talkingDolls = talkingDolls * 3
    bearToy = bearToy * 4.10
    minions = minions * 8.20
    camions = camions * 2
    let sum = puzzles + talkingDolls + bearToy + minions + camions
    let bonusForItemsCount = (sum * 25 / 100)
    // can be sum * 0.75

    if (toiesCount >= 50) {
        result = sum - bonusForItemsCount
        result = result - (result * 10 / 100)

    } else {
        result = sum - (sum * 10 / 100)

    }

    if (result >= excursionCost) {
        let left = result - excursionCost
        console.log(`Yes! ${left.toFixed(2)} lv left.`)

    } else {
        let left = excursionCost - result
        console.log(`Not enough money! ${left.toFixed(2)} lv needed.`)
    }

}
toyShop('40.8', '20', '25', '30', '50', '10')