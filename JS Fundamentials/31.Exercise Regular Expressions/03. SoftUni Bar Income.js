function softUniIncome(input) {
    let customer = input.shift()
    let total = 0

    while (customer != 'end of shift') {
        let pattern = /%([A-Z][a-z]+)%[^\|\%\.\$]*?<([\w]+)>[^\|\%\.\$]*?\|(\d+)\|[^\|\%\.\$]*?(\d+(?:\.\d+)?)\$/g
        
        let match = pattern.exec(customer)
       
        if (match) {
            let name = match[1]
            let product = match[2]
            let quantity = Number(match[3])
            let price = Number(match[4])

            let totalPrice = quantity * price
            total += totalPrice
            console.log(`${name}: ${product} - ${totalPrice.toFixed(2)}`)
        }
        customer = input.shift()
    }
    console.log(`Total income: ${total.toFixed(2)}`)
}

softUniIncome([
    '%InvalidName%<Croissant>|2|10.3$',
    '%Peter%<Gum>1.3$',
    '%Maria%<Cola>|1|2.4',
    '%Valid%<Valid>valid|10|valid20$',
    'end of shift'
])
console.log('\n------------------------------------\n')
softUniIncome(
    ['%George%<Croissant>|2|10.3$',
        '%Peter%<Gum>|1|1.3$',
        '%Maria%<Cola>|1|2.4$',
        'end of shift'
    ]
)