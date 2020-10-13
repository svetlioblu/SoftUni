function cruiseShip(input) {
    let cruiseType = input[0]
    let cabinType = input[1]
    let nightsCount = Number(input[2])
    let price = 0
    let result = 0
    switch (cruiseType) {
        case 'Mediterranean':
            switch (cabinType) {
                case 'standard cabin':
                    price = 27.50
                    break
                case 'cabin with balcony':
                    price = 30.20
                    break
                case 'apartment':
                    price = 40.50
                    break
            }
            break
        case 'Adriatic':
            switch (cabinType) {
                case 'standard cabin':
                    price = 22.99
                    break
                case 'cabin with balcony':
                    price = 25.00
                    break
                case 'apartment':
                    price = 34.99
                    break
            }
            break
        case 'Aegean':
            switch (cabinType) {
                case 'standard cabin':
                    price = 23.00
                    break
                case 'cabin with balcony':
                    price = 26.60
                    break
                case 'apartment':
                    price = 39.80
                    break
            }
            break
    }
    if (nightsCount > 7) {
        result = (price * 4) * nightsCount
        result *= 0.75
    } else {
       result = (price * 4) * nightsCount
    }
    console.log(`Annie's holiday in the ${cruiseType} sea costs ${result.toFixed(2)} lv.`)
    
}
cruiseShip([
'Mediterranean',
'cabin with balcony',
'12'
])