function pirates(input) {
    let cities = {}
    let currentCity = input.shift()
    while (currentCity != 'Sail') {
        let [city, pop, money] = currentCity.split('||')
        pop = Number(pop)
        money = Number(money)
        if (!cities.hasOwnProperty(city)) {

            cities[city] = { population: pop, gold: money }
        } else {
            cities[city].population += pop
            cities[city].gold += money
        }
        currentCity = input.shift()
    }
    let actions = {
        Plunder(town, params) {
            [ppl, money] = params
            ppl = Number(ppl)
            money = Number(money)
            console.log(`${town} plundered! ${money} gold stolen, ${ppl} citizens killed.`)
            cities[town].population -= ppl
            cities[town].gold -= money
            if (cities[town].population <= 0 || cities[town].gold <= 0) {
                delete cities[town]
                console.log(`${town} has been wiped off the map!`)
            }
        },
        Prosper(town, params) {
            [money] = params
            money = Number(money)
            if (money < 0) {
                console.log(`Gold added cannot be a negative number!`)
            } else {
                cities[town].gold += money
                console.log(`${money} gold added to the city treasury. ${town} now has ${cities[town].gold} gold.`)
            }
        }
    }

    let command = input.shift()
    while (command != 'End') {
        let [activity, town, ...params] = command.split('=>')
        let action = actions[activity]
        action(town, params)
        command = input.shift()
    }
    let cityCount = Object.keys(cities).length
    if (cityCount > 0) {
        console.log(`Ahoy, Captain! There are ${cityCount} wealthy settlements to go to:`)
        let sorted = Object.entries(cities)
        .sort(sortCity)
        .forEach(element => {
          console.log(`${element[0]} -> Population: ${element[1].population} citizens, Gold: ${element[1].gold} kg`)  
        })
       
    } else {
        console.log(`Ahoy, Captain! All targets have been plundered and destroyed!`)
    }

    function sortCity([townA, paramsA], [townB, paramsB]) {
        return (paramsB.gold - paramsA.gold) || (townA.localeCompare(townB))
    }

}
pirates([
    'Nassau||95000||1000',
    'San Juan||930000||1250',
    'Campeche||270000||690',
    'Port Royal||320000||1000',
    'Port Royal||100000||2000',
    'Sail',
    'Prosper=>Port Royal=>-200',
    'Plunder=>Nassau=>94000=>750',
    'Plunder=>Nassau=>1000=>150',
    'Plunder=>Campeche=>150000=>690',
    'End'
  ]
    
)