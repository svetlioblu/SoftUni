function neighborhoods(input) {
    let neighborPlaces = input.shift().split(', ')
    let list = {}
    for (let line of input) {
        let [location, name] = line.split(' - ')

        if (list.hasOwnProperty(location)) {
            list[location].push(name)
        } else if (neighborPlaces.includes(location)) {
            list[location] = [name]
            neighborPlaces = neighborPlaces.filter(x => x != location)
        }
    }
    if (neighborPlaces.length != 0) {
        neighborPlaces.forEach(element => {
            list[element] = []
        })
    }
    let sortedList = {}

    Object.entries(list)
        .sort((a, b) => b[1].length - a[1].length)
        .map(x => sortedList[x[0]] = x[1])

    for (let key in sortedList) {
        console.log(`${key}: ${sortedList[key].length}`)
        sortedList[key].forEach(element => console.log(`--${element}`)
        )
    }
}
neighborhoods(['Abbey Street, Herald Street, Bright Mews',
    'Bright Mews - Garry',
    'Bright Mews - Andrea',
    'Invalid Street - Tommy',
    'Abbey Street - Billy']
)