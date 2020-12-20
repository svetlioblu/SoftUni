function legendaryFarming(input) {
    let items = {
        shards: ['Shadowmourne', 0],
        fragments: ['Valanyr', 0],
        motes: ['Dragonwrath', 0],
        junk: {}
    }
    let income = input.split(' ')
    for (let i = 1; i <= income.length; i += 2) {

        let quantity = Number(income[i - 1])
        let incomeTolowerCase = income[i].toLowerCase()
        if (items.hasOwnProperty(incomeTolowerCase)) {
            items[incomeTolowerCase][1] += quantity
            if (items[incomeTolowerCase][1] >= 250) {
                console.log(`${items[incomeTolowerCase][0]} obtained!`)
                items[incomeTolowerCase][1] -= 250
                break
            }
        } else {
            if (!items.junk.hasOwnProperty(incomeTolowerCase)) {
                items.junk[incomeTolowerCase] = quantity
                continue
            }
            items.junk[incomeTolowerCase] += quantity
        }
    }
    let sorted = Object.entries(items).sort((a, b) => {
        let qtyA = a[1][1]
        let qtyB = b[1][1]
        if (qtyA == qtyB) {
            return a[0].localeCompare(b[0])
        }
        return qtyB - qtyA
    })
    sorted[3][1] = Object.entries(sorted[3][1]).sort((a, b) => {
        return a[0].localeCompare(b[0])
    })

    for (let line of sorted) {
        if (line[0] == 'junk') {
            line[1].forEach(element => {
                console.log(`${element[0]}: ${element[1]}`)
            })
            break
        }
        console.log(`${line[0]}: ${line[1][1]}`)
    }

}
legendaryFarming('123 silver 6 shards 8 shards 5 motes 9 fangs 75 motes 103 MOTES 8 Shards 86 Motes 7 stones 19 silver')