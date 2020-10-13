function lettersSum(arg1, arg2, arg3) {
    let productName = arg1
    let coefficient = Number(arg2)
    let budget = Number(arg3)
    // "a", "e", "i", "o", "u" и "y".
    let result = 0
    let price = 0

    for (let i = 0; i <= productName.length - 1; i++) {
        switch (productName[i]) {
            case 'a':
            case 'e':
            case 'i':
            case 'o':
            case 'u':
            case 'y':
                result += 3
                break
            default:
                result += 1
        }
    }
    price = result * coefficient
    if (budget < price) {
        console.log(`Cannot buy ${productName}. Product value: ${price.toFixed(2)}`)
    } else {
        let moneyLeft = budget - price
        console.log(`${productName} bought. Money left: ${moneyLeft.toFixed(2)}`)

    }
}
lettersSum('milk', '1.4', '8')