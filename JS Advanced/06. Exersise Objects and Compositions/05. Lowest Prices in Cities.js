function solve(params) {
    let obj = {}
    for (let line of params) {
        let [town, product, price] = line.split(' | ')
        price = Number(price)
        if (obj[product]) {
            if (obj[product][0] > price) {
                obj[product][0] = price
                obj[product][1] = town
            }
        } else {

            obj[product] = [price, town]
        }
    }
    let result = []
    for (let item in obj) {
        result.push(`${item} -> ${obj[item][0]} (${obj[item][1]})`)
    }
    return result.join('\n')
}
console.log(solve(['Sample Town | Sample Product | 1000',
'Sample Town | Orange | 2',
'Sample Town | Peach | 1',
'Sofia | Orange | 3',
'Sofia | Peach | 2',
'New York | Sample Product | 1000.1',
'New York | Burger | 10']

));