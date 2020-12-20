function destinationMapper(input) {
    let reg = /([=\/])[A-Z][a-zA-Z]{2,}\1/g
    let count = []
    let match = input.match(reg)
    if (match) {
        match = match.map(x => {
            x = x.substring(1, x.length - 1)
            count.push(x.length)
            return x
        })
        count = count.reduce((a, b) => a + b)
        console.log(`Destinations: ${match.join(`, `)}`)
        console.log(`Travel Points: ${count}`)
    } else {
        console.log(`Destinations:`)
        console.log(`Travel Points: 0`)
    }

}
destinationMapper('=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=')