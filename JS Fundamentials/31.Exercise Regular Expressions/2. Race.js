function race(input) {
    let racers = {}
    input.shift().split(', ').forEach(element => {
        racers[element] = 0
    })
    let line = input.shift()
    while (line != 'end of race') {
        let name = line.match(/[A-Za-z]/g).join('')
        let distance = line.match(/\d/g).map(Number).reduce((a, b) => a + b)
        if (racers.hasOwnProperty(name)) {
            racers[name] += distance
        }
        line = input.shift()
    }
    let sorted = Object.entries(racers).sort((a, b) => b[1] - a[1]).slice(0, 3)

    console.log(`1st place: ${sorted[0][0]}`)
    console.log(`2nd place: ${sorted[1][0]}`)
    console.log(`3rd place: ${sorted[2][0]}`)

}
race([
    'George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race'
])