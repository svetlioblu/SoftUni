function storageCatalogue(input) {
    let storage = {}
    input.forEach(element => {
        let [product, price] = element.split(' : ')
        price = Number(price)
        storage[product] = price
    })
    let sortedStore = Object.entries(storage).sort((a, b) => a[0].localeCompare(b[0]))

    let current = 'a'
    let result = ''
    sortedStore.forEach(el => {
        if (current !== el[0][0]) {
            current = el[0][0]
            console.log(`${current}`)
        }
        console.log(`  ${el[0]}: ${el[1]}`)

    })
    //return sortedStore
}
console.log(storageCatalogue(
['Banana : 2',
'Rubic\'s Cube : 5',
'Raspberry P : 4999',
'Rolex : 100000',
'Rollon : 10',
'Rali Car : 2000000',
'Pesho : 0.000001',
'Barrel : 10']
));