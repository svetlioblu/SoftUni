function computerStore(arr) {
    let sum = 0
    let customer = ''
    for (let line of arr) {
        if (line == 'special' || line == 'regular') {
            customer = line
            break
        }
        let currentPrice = Number(line)
        if (currentPrice <= 0) {
            console.log('Invalid price!')
            continue
        }
        sum += currentPrice
    }

    let tax = sum * 0.2
    let totalPrice = sum + tax
   
    if (customer === 'special') {
        totalPrice *= 0.9
    }

    if (totalPrice == 0) {
        return console.log(`Invalid order!`)
    }


    console.log(`Congratulations you've just bought a new computer!
Price without taxes: ${sum.toFixed(2)}$
Taxes: ${tax.toFixed(2)}$
-----------
Total price: ${totalPrice.toFixed(2)}$`)

}
computerStore([
    '1050', 
    '200', 
    '450',
    '2', 
    '18.50', 
    '16.86', 
    'special'
    ]
    

)