function vacation(input) {
    let index = 0
    let spentMoney = 0
    let days = 0
    let excursionCost = Number(input[index])
    index++
    let dayMoney = Number(input[index])
    let savedMoney = dayMoney
    index++
    let action = input[index]
    index++
    let currentMoney = Number(input[index])
    index++

    while (savedMoney < excursionCost) {
        days += 1
        if (action === 'save') {
            savedMoney += currentMoney
            spentMoney = 0

        } else if (action === 'spend') {
            spentMoney += 1
            if (spentMoney == 5) {
                return console.log(`You can't save the money.\n${days}`)
            } else if (currentMoney >= savedMoney) {
                savedMoney = 0
            } else {
                savedMoney -= currentMoney
            }
        }
        action = input[index]
        index++
        currentMoney = Number(input[index])
        index++
    }
    console.log(`You saved the money for ${days} days.`)

}
vacation([
    '110',
    '60',
    'spend',
    '10',
    'save',
    '20',
    'spend',
    '10',
    'spend',
    '10',
    'spend',
    '10',
    'spend',
    '10',
    'spend',
    '10'
])