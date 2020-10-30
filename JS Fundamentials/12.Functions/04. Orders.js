function orders(product, quantity) {
    switch (product) {
        case 'water':
            return console.log((quantity * 1.00).toFixed(2))
            break
        case 'coffee':
            return console.log((quantity * 1.50).toFixed(2))
            break
        case 'coke':
            return console.log((quantity * 1.40).toFixed(2))
            break
        case 'snacks':
            return console.log((quantity * 2.00).toFixed(2))
            break
    }
}
orders('coffee', 2)