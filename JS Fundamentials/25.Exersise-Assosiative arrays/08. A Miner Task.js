function minerTask(input) {
    let list = {}
    for (let i = 0, j = 1; i < input.length; i += 2, j += 2) {
        if (list.hasOwnProperty(input[i])) {
            list[input[i]] += Number(input[j])
        } else {
            list[input[i]] = Number(input[j])
        }
    }
    for (let key in list) {
        console.log(`${key} -> ${list[key]}`)

    }
}


minerTask([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'
]

)