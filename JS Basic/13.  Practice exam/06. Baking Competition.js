function bakingCompetition(input) {
    let playerCount = Number(input.shift())
    let allSold = 0
    let collectedSum = 0
    let cookies = 0
    let cakes = 0
    let waffles = 0
    for (let i = 0; i < playerCount; i++) {
        let playerName = input.shift()
        let product = input.shift()
        let productCount = Number(input.shift())
        cookies = 0
        cakes = 0
        waffles = 0
        while (product !== 'Stop baking!') {
            allSold += productCount
            switch (product) {
                case 'cookies':
                    cookies += productCount
                    collectedSum += productCount * 1.50
                    break
                case 'cakes':
                    cakes += productCount
                    collectedSum += productCount * 7.80
                    break
                case 'waffles':
                    waffles += productCount
                    collectedSum += productCount * 2.30
                    break
            }
            product = input.shift()
            if (product === 'Stop baking!') {
                break
            }
            productCount = Number(input.shift())
        }
        console.log(`${playerName} baked ${cookies} cookies, ${cakes} cakes and ${waffles} waffles.`)

    }
    console.log(`All bakery sold: ${allSold}`)
    console.log(`Total sum for charity: ${collectedSum.toFixed(2)} lv.`)
}
bakingCompetition([
    '3',
    'Iva',
    'cookies',
    '5',
    'cakes',
    '3',
    'Stop baking!',
    'George',
    'cakes',
    '7',
    'waffles',
    '2',
    'Stop baking!',
    'Ivan',
    'cookies',
    '6',
    'Stop baking!'
])