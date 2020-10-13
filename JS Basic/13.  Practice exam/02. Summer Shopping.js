function summerShopping(input) {

    let budget = Number(input[0])
    let towel = Number(input[1])
    let discount = Number(input[2])

    let umbrella = towel * (2 / 3)
    let filipFlops = umbrella * 0.75
    let bag = (towel + filipFlops) * (1 / 3)
    let sum = towel + umbrella + filipFlops + bag
    let applyDiscount = sum - sum * discount / 100
    let change = budget - applyDiscount


    if (budget >= applyDiscount) {
        console.log(`Annie's sum is ${applyDiscount.toFixed(2)} lv. She has ${change.toFixed(2)} lv. left.`)

    } else {
        let neededSum = applyDiscount - budget
        console.log(`Annie's sum is ${applyDiscount.toFixed(2)} lv. She needs ${neededSum.toFixed(2)} lv. more.`)
    }
}
summerShopping([
    '40',
    '15',
    '5'
])