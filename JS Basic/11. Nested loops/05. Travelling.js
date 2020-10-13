function travelling(input) {
    let sum = 0
    index = 0
    let destination = input[index]
    index++
    let budget = Number(input[index])
    index++
    while (destination != 'End') {

        while (sum <= budget) {
            sum += Number(input[index])
            index++
        }
        console.log(`Going to ${destination}!`)
        sum = 0
        destination = input[index]
        index++
        budget = input[index]
        index++
    }
}
travelling([
    'France',
    '2000',
    '300',
    '300',
    '200',
    '400',
    '190',
    '258',
    '360',
    'Portugal',
    '1450',
    '400',
    '400',
    '200',
    '300',
    '300',
    'Egypt',
    '1900',
    '1000',
    '280',
    '300',
    '500',
    'End'
])