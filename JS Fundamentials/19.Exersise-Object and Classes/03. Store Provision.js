function storeProvision(arrOne, arrTwo) {
    let localStore = arrOne
    let orders = arrTwo
    let list = {}

    for (let i = 0; i < localStore.length; i += 2) {
        list[localStore[i]] = Number(localStore[i + 1])

    }
    for (let i = 0; i < orders.length; i += 2) {
        list.hasOwnProperty(orders[i]) ? list[orders[i]] += Number(orders[i + 1]) : list[orders[i]] = Number(orders[i + 1])
    }
   
    for (let key of Object.keys(list)) {
console.log(`${key} -> ${list[key]}`)

    }

}
storeProvision([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
],
    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
)