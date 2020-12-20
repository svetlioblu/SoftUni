function travelTime(input) {
    let travells = {}
    for (let line of input) {
        let [country, town, cost] = line.split(` > `)
        cost = Number(cost)
        if (travells.hasOwnProperty(country)) {
            let destinations = travells[country]
            if (destinations.hasOwnProperty(town)) {
                if (cost < destinations[town]) {
                    destinations[town] = cost
                }
            } else {
                destinations[town] = cost
            }

        } else {
            travells[country] = {
                [town]: cost
            }
        }

    }
    travells = Object.entries(travells)
        .sort((a, b) => a[0].localeCompare(b[0]))
    travells = travells.map(x => {
        x[1] = Object.entries(x[1]).sort((a, b) => a[1] - b[1])
        return x
    })
    
    for (let line of travells) {
        let result = `${line[0]} -> `
        for (let key of line[1]) {
            result += `${key[0]} -> ${key[1]} `
    }
        console.log(result)
    }
}
travelTime([
    "Bulgaria > Sopot > 800",
    "Bulgaria > Sofia > 200",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 500","Bulgaria > trqvna > 900",
]
)