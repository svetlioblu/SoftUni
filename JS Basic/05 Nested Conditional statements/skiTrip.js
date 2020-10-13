function skiTrip(arg1, arg2, arg3) {
    let days = Number(arg1)
    let room = arg2
    let assessment = arg3
    let discount = 0
    let result = 0
    days -= 1

    switch (room) {
        case 'room for one person':
            result = days * 18.00
            break
        case 'apartment':
            if (days < 10) {
                result = (days * 25.00)
                discount = result * 0.30
                result -= discount
            } else if (days >= 10 && days < 15) {
                result = (days * 25.00)
                discount = result * 0.35
                result -= discount
            } else {
                result = (days * 25.00)
                discount = result * 0.50
                result -= discount
            }
            break
        case 'president apartment':
            if (days < 10) {
                result = (days * 35.00)
                discount = result * 0.10
                result -= discount
            } else if (days >= 10 && days < 15) {
                result = (days * 35.00)
                discount = result * 0.15
                result -= discount
            } else {
                result = (days * 35.00)
                discount = result * 0.20
                result -= discount
            }
            break

    }
    if (assessment === 'positive') {
        result += result * 0.25
    } else {
        result -= result * 0.10
    }
    console.log(result.toFixed(2))


}

skiTrip('2', 'apartment', 'positive')