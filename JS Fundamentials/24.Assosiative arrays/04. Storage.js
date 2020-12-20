function storage(input) {
    let silo = {}

    for (let line of input) {
        let [product, qty] = line.split(' ')
        qty = Number(qty)
        if (silo.hasOwnProperty(product)) {
            silo[product] += qty
        } else {
            silo[product] = qty
        }
    }
    for(let key in silo) {
        console.log(`${key} -> ${silo[key]}`)
    }

}
storage(['tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40']
)