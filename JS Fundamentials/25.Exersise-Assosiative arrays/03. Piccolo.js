function piccolo(input) {
    let parking = {}

    for (let line of input) {
        let [action, plate] = line.split(', ')
        if (action === 'IN') {
            parking[plate] = 1
        } else {
            delete parking[plate]
        }
    }

    if (Object.keys(parking).length <= 0) {
        return 'Parking Lot is Empty'
    } else {
        return Object.keys(parking).sort((a, b) => a.localeCompare(b))
            .join('\n')
    }

}
console.log(piccolo(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU']

))