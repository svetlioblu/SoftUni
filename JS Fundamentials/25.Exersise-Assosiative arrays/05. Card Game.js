function cardGame(input) {
    let list = {}

    for (let line of input) {
        let [name, cards] = line.split(': ')
        cards = cards.split(', ')

        if (list.hasOwnProperty(name)) {
            cards.forEach(element => {
                list[name].push(element)
            })
        } else {
            list[name] = cards
        }
    }
    for (let key in list) {
        let temp = list[key].slice()
        list[key] = temp.filter((c, index) => {
            return temp.indexOf(c) === index
        }).map(x => {
                    if (x.length > 2) {
                        return 10 * cardType(x[2])
                    } else {
                        return cardPower(x[0]) * cardType(x[1])
                    }
                })
                .map(Number)
                .reduce((a, b) => a + b)
                console.log(`${key}: ${list[key]}`)           
    }
    
    function cardPower(card) {
        switch (card) {
            case 'J':
                card = 11
                break
            case 'Q':
                card = 12
                break
            case 'K':
                card = 13
                break
            case 'A':
                card = 14
                break
        }
        return card
    }
    function cardType(card) {
        switch (card) {
            case 'S':
                card = 4
                break
            case 'H':
                card = 3
                break
            case 'D':
                card = 2
                break
            case 'C':
                card = 1
                break
        }
        return card
    }
}
cardGame([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
]
)