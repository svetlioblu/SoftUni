function partyTime(input) {
    let list = {
        vip: [],
        regular: []
    }
    let person = input.shift()
    while (person != 'PARTY') {
        if (!isNaN(person[0])) {
            list.vip.push(person)
        } else {
            list.regular.push(person)
        }
        person = input.shift()
    }
    for (let comming of input) {
        if (list.vip.includes(comming)) {
            list.vip.splice(list.vip.indexOf(comming), 1)
        } else if (list.regular.includes(comming)) {
            list.regular.splice(list.regular.indexOf(comming), 1)
        }
    }
    let count = list.vip.length +list.regular.length
    console.log(count)
    list.vip.forEach(el=> console.log(el))
    list.regular.forEach(el=> console.log(el))

}
partyTime(['7IK9Yo0h',
'9NoBUajQ',
'Ce8vwPmE',
'SVQXQCbc',
'tSzE5t0p',
'PARTY',
'9NoBUajQ',
'Ce8vwPmE',
'SVQXQCbc'
]

)