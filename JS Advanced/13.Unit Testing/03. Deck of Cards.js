function solve(arr) {
    let result = []
    for (let element of arr) {
        let suit = ''
        let face = ''
        if (element.length > 2) {
            face = element.slice(0, -1)
            suit = element.slice(-1)
            let card = cards(face, suit)
            result.push(card.toString())
        } else {
            face = element[0]
            suit = element[1]
            let card = cards(face, suit)
            result.push(card.toString())
        }
    }
    let isValid = result.filter(x => x.includes('Invalid'))
    if (isValid.length != 0) {
        console.log(isValid[0]);
    } else {
        console.log(result.join(' '))
    }
    function cards(face, suit) {
        let faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']
        let suits = {
            S: '\u2660',
            H: '\u2665 ',
            D: '\u2666 ',
            C: '\u2663'
        }
        if (!faces.includes(face) || !Object.keys(suits).includes(suit)) {
            return `Invalid card: ${face}${suit}`
        }

        return {
            face,
            suit,
            toString() {
                return `${face}${suits[suit]}`
            }
        }
    }
}
solve(['AS', '10D', 'KH', '2C'])