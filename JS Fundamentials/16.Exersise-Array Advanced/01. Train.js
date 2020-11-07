function train(input) {
    let train = input.shift().split(' ').map(Number)
    let maxCapacity = Number(input.shift())

    for (let element of input) {
        if (element.includes('Add')) {
            element = element.split(' ')
            train.push(Number(element[1]))
        } else {
            let newPassengers = Number(element)
            let index = 0
            for (let wagon of train) {
                if ((wagon + newPassengers) <= maxCapacity) {
                    train[index] = wagon + newPassengers
                    break
                }
                index++
            }
            
            //train.map(x => (x + newPassengers) <= maxCapacity ? x + newPassengers : x)
        }
    }

    return train.join(' ')
}
console.log(train(['0 0 0 10 2 4',
'10',
'Add 10',
'10',
'10',
'10',
'8',
'6']

))