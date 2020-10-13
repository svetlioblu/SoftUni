function journey(arg1, arg2) {
    let budget = Number(arg1)
    let season = arg2
    let country = ''
    let place = ''
    let result = 0

    if (budget <= 100) {
        country = 'Bulgaria'
        switch (season) {
            case 'summer':
                result = budget * 0.30
                place = 'Camp'
                break
            case 'winter':
                result = budget * 0.70
                place = 'Hotel'
                break
        }
    } else if (budget <= 1000) {
        country = 'Balkans'
        switch (season) {
            case 'summer':
                result = budget * 0.40
                place = 'Camp'
                break
            case 'winter':
                result = budget * 0.80
                place = 'Hotel'
                break
        }

    } else {
        country = 'Europe'
        result = budget * 0.90
        place = 'Hotel'

    }
    console.log(`Somewhere in ${country}`)
    console.log(`${place} - ${result.toFixed(2)}`)
}

journey('1500', 'summer')