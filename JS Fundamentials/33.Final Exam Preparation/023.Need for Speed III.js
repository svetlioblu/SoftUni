function needForSpeed(input) {
    let n = input.shift()
    let cars = {}
    let actions = {
        Drive(car, distance, fuel) {
            distance = Number(distance)
            fuel = Number(fuel)
            if (cars[car].fuel < fuel) {
                console.log(`Not enough fuel to make that ride`)
            } else {
                cars[car].mileage += distance
                cars[car].fuel -= fuel
                console.log(`${car} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`)
            }
            if (cars[car].mileage >= 100000) {
                console.log(`Time to sell the ${car}!`)
                delete cars[car]
            }
        },
        Refuel(car, fuel) {
            fuel = Number(fuel)
            let refil = 0
            if (cars[car].fuel + fuel > 75) {
                refil = (75 + fuel) - (cars[car].fuel + fuel)
                cars[car].fuel = 75
            } else {
                cars[car].fuel += fuel
                refil = fuel
            }
            console.log(`${car} refueled with ${refil} liters`)
        },
        Revert(car, kilometers) {
            kilometers = Number(kilometers)
            if (cars[car].mileage - kilometers <= 10000) {
                cars[car].mileage = 10000
            } else {
                cars[car].mileage -= kilometers
                console.log(`${car} mileage decreased by ${kilometers} kilometers`)
            }
        }
    }
    for (let i = 0; i < n; i++) {
        let [car, mile, energy] = input.shift().split('|')

        cars[car] = { mileage: Number(mile), fuel: Number(energy) }

    }
    let command = input.shift()
    while (command != 'Stop') {
        let [action, car, kilometers, fuel] = command.split(' : ')

        actions[action](car, kilometers, fuel)
        command = input.shift()
    }
    Object.entries(cars).sort(sortCars).forEach(element => {
        console.log(`${element[0]} -> Mileage: ${element[1].mileage} kms, Fuel in the tank: ${element[1].fuel} lt.`)
    })


    function sortCars([carNameA, paramsA], [carNameB, paramsB]) {
        return paramsB.mileage - paramsA.mileage || carNameA.localeCompare(carNameB)
    }
}
needForSpeed([
    '3',
    'Audi A6|38000|62',
    'Mercedes CLS|11000|35',
    'Volkswagen Passat CC|45678|5',
    'Drive : Audi A6 : 543 : 47',
    'Drive : Mercedes CLS : 94 : 11',
    'Drive : Volkswagen Passat CC : 69 : 8',
    'Refuel : Audi A6 : 50',
    'Revert : Mercedes CLS : 500',
    'Revert : Audi A6 : 30000',
    'Stop'
]

)