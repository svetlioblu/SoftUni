function godzillavsKong(arg1, arg2, arg3) {
    let budget = Number(arg1)
    let statists = Number(arg2)
    let clothStatistsPrice = Number(arg3)
    let sum = statists * clothStatistsPrice
    let bonus = 0

    budget = budget - budget * 0.10

    if (statists > 150) {
        sum = sum - sum * 0.10
    }

    if (sum > budget) {
        let calculation = sum - budget
        console.log("Not enough money!")
        console.log(`Wingard needs ${calculation.toFixed(2)} leva more.`)

    } else if (sum <= budget) {
        let calculation = budget - sum
        console.log("Action!")
        console.log(`Wingard starts filming with ${calculation.toFixed(2)} leva left.`)
    }
}
godzillavsKong('9587.88', '222', '55.68')