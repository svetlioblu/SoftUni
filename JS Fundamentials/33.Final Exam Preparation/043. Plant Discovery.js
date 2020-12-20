function plantDiscovery(input) {
    let n = Number(input.shift())
    let plants = {}

    let actions = {
        Rate(plant, rating) {
            rating = Number(rating)
            plants[plant].rating += rating
            plants[plant].rateCounter++
        },
        Update(plant, newRarity) {
            newRarity = Number(newRarity)
            plants[plant].rarity = newRarity
        },
        Reset(plant) {
            plants[plant].rating = 0
        }
    }
    for (let i = 0; i < n; i++) {
        let [plant, rarity] = input.shift().split('<->')
        rarity = Number(rarity)
        if (!plants.hasOwnProperty(plant)) {
            plants[plant] = { rarity: 0, rating: 0, rateCounter: 0 }
        }
        plants[plant].rarity += rarity
    }
    let line = input.shift()
    while (line != 'Exhibition') {
        let [action, plant, value] = line.split(/(: | - )/g).filter(x => x != ': ' && x != ' - ')

        if (action != 'Rate' && action != 'Update' && action != 'Reset') {
           return console.log('error')
           
        }
        value = Number(value)
        actions[action](plant, value)
        line = input.shift()
    }
    for (let key of Object.keys(plants)) {
        plants[key].rating = (plants[key].rating / plants[key].rateCounter).toFixed(2)
    }
    console.log(`Plants for the exhibition:`)
    Object.entries(plants).sort(sortPlants).forEach(element => {
        console.log(`- ${element[0]}; Rarity: ${element[1].rarity}; Rating: ${element[1].rating}`)
    })

    function sortPlants([plantA, paramsA], [plantB, paramsB]) {
        return paramsB.rarity - paramsA.rarity || paramsB.rating - paramsA.rating
    }
}
plantDiscovery([
    '2',
    'Candelabra<->10',
    'Oahu<->10',
    'Rate: Oahu - 7',
    'Rate: Candelabra - 6',
    'Exhibition'
  ]
  
)