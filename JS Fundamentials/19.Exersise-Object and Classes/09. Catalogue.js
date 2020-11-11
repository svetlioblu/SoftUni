function catalogue(arr) {
    let holderObject = {}
    let sortedObject = {}
    for (let line of arr) {
        let [productName, productPrice] = line.split(` : `)
        holderObject[productName] = productPrice
    }
    holderObject = Object.entries(holderObject)
        .sort((a, b) => a[0].localeCompare(b[0]))
        .forEach(element => sortedObject[element[0]] = Number(element[1]))


    let startSection = "a"
    Object.keys(sortedObject).forEach(e => {

        if (e[0] !== startSection) {
            console.log(e[0])
            startSection = e[0]
        }

        console.log(`  ${e}: ${sortedObject[e]}`)

    })

}
catalogue([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
]
)