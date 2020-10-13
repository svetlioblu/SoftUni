function fishingBoat(arg1, arg2, arg3) {
    let groupBudget = Number(arg1)
    let season = arg2
    let fishmanCount = Number(arg3)

    let result = 0

    switch (season) {
        case 'Spring':
            result = 3000
            if (fishmanCount <= 6) {
                result -= result * 0.10
            } else if (fishmanCount > 6 && fishmanCount <= 11) {
                result -= result * 0.15
            } else {
                result -= result * 0.25

            }
            break
        case 'Summer':
            result = 4200
            if (fishmanCount <= 6) {
                result -= result * 0.10
            } else if (fishmanCount > 6 && fishmanCount <= 11) {
                result -= result * 0.15
            } else {
                result -= result * 0.25

            }
            break
        case 'Autumn':
            result = 4200
            if (fishmanCount <= 6) {
                result -= result * 0.10
            } else if (fishmanCount > 6 && fishmanCount <= 11) {
                result -= result * 0.15
            } else {
                result -= result * 0.25

            }
            break
        case 'Winter':
            result = 2600
            if (fishmanCount <= 6) {
                result -= result * 0.10
            } else if (fishmanCount > 6 && fishmanCount <= 11) {
                result -= result * 0.15
            } else {
                result -= result * 0.25

            }
            break
    }
    if (fishmanCount % 2 === 0 && season !== 'Autumn') {
        result -= result * 0.05
    }
    if (groupBudget >= result) {
        let sum = groupBudget - result
        console.log(`Yes! You have ${sum.toFixed(2)} leva left.`)
    } else {
        let sum = result - groupBudget
        console.log(`Not enough money! You need ${sum.toFixed(2)} leva.`)

    }
}
fishingBoat('2000', 'Winter', '13')