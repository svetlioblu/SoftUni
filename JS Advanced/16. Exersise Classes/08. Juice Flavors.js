function solve(params) {
    let collection = {}
    let bottles = {}
    for (let line of params) {
        let [product, qty] = line.split(' => ')
        qty = Number(qty)
        if (!collection[product]) {
            collection[product] = 0
        }
        collection[product] += qty
        if (collection[product] >= 1000) {
            bottles[product] = 0
        }
    }
    for (let key in collection) {
        if (bottles.hasOwnProperty(key)) {
            bottles[key] = Math.floor(collection[key] / 1000)
        }
    }
    let result = []
    for (let key in bottles) {
        result.push(`${key} => ${bottles[key]}`)
    }
    return result.join('\n')
}
console.log(solve(['Kiwi => 234',
'Pear => 2345',
'Watermelon => 3456',
'Kiwi => 4567',
'Pear => 5678',
'Watermelon => 6789']



));