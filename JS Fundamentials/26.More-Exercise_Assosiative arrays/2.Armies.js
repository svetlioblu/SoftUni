function armies(input) {
    let list = {}

    for (let line of input) {
        if (line.includes('arrives')) {
            line = line.split(' ')
            line.pop()
            line = line.join(' ')
            list[line] = {}
        } else if (line.includes(': ')) {
            let [leaderName, armyAll] = line.split(': ')
            if (list.hasOwnProperty(leaderName)) {
                let [armyName, armyCount] = armyAll.split(', ')
                armyCount = Number(armyCount)
                list[leaderName][armyName] = armyCount
            }
        } else if (line.includes(' + ')) {
            let [army, count] = line.split(' + ')
            count = Number(count)
            for (let key in list) {
                if (list[key].hasOwnProperty(army)) {
                    list[key][army] += count
                }
            }
        } else if (line.includes('defeated')) {
            line = line.split(' ')
            line.pop()
            line = line.join(' ')
            if (list.hasOwnProperty(line)) {
                delete list[line]
            }
        }
    }
    let sorted = Object.entries(list).sort(sortLeaders)

    for (let line of sorted) {
        line[1] = Object.entries(line[1]).sort((a, b) => b[1] - a[1])
        let allArmiesCount = 0
        line[1].forEach(element => allArmiesCount += Number(element[1]))

        console.log(`${line[0]}: ${allArmiesCount}`)
        line[1].forEach(el => console.log(`>>> ${el[0]} - ${el[1]}`))
    }

    function sortLeaders(a, b) {
        let leadOne = Object.values(a[1]).reduce((a, b) => a + b)
        let leadTwo = Object.values(b[1]).reduce((a, b) => a + b)
        return leadTwo - leadOne
    }
 
}
armies(['Rick Burr arrives', 'Fergus: Wexamp, 30245', 'Rick Burr: Juard, 50000', 'Findlay arrives', 'Findlay: Britox, 34540', 'Wexamp + 6000', 'Juard + 1350', 'Britox + 4500', 'Porter arrives', 'Porter: Legion, 55000', 'Legion + 302', 'Rick Burr defeated', 'Porter: Retix, 3205'])