function tradeCommissions(arg1, arg2) {
    let city = arg1
    let sells = Number(arg2)
    let result = 0

    switch (city) {
        case 'Sofia':
            if (sells >= 0 && sells <= 500) {
                result += sells * 0.05
            } else if (sells > 500 && sells <= 1000) {
                result += sells * 0.07
            } else if (sells > 1000 && sells <= 10000) {
                result += sells * 0.08
            } else if (sells > 10000) {
                result += sells * 0.12
            } else {
                console.log('error')
            }
            break
        case 'Varna':
            if (sells >= 0 && sells <= 500) {
                result += sells * 0.045
            } else if (sells > 500 && sells <= 1000) {
                result += sells * 0.075
            } else if (sells > 1000 && sells <= 10000) {
                result += sells * 0.10
            } else if (sells > 10000) {
                result += sells * 0.13
            } else {
                console.log('error')
            }
            break
        case 'Plovdiv':
            if (sells >= 0 && sells <= 500) {
                result += sells * 0.055
            } else if (sells > 500 && sells <= 1000) {
                result += sells * 0.08
            } else if (sells > 1000 && sells <= 10000) {
                result += sells * 0.12
            } else if (sells > 10000) {
                result += sells * 0.145
            } else {
                console.log('error')
            }
            break
        default:
            console.log('error')
            break

    }
    if (result !== 0.00) {
        console.log(result.toFixed(2))
    }

}
tradeCommissions('Ploiv', '499.99')
