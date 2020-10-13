function fruitShop(arg1, arg2, arg3) {
    let fruit = arg1
    let day = arg2
    let quantity = arg3
    let result = 0
    if (day === 'Saturday' || day === 'Sunday') {
        switch (fruit) {
            case 'banana':
                result = quantity * 2.70
                break
            case 'apple':
                result = quantity * 1.25
                break
            case 'orange':
                result = quantity * 0.90
                break
            case 'grapefruit':
                result = quantity * 1.60
                break
            case 'kiwi':
                result = quantity * 3.00
                break
            case 'pineapple':
                result = quantity * 5.60
                break
            case 'grapes':
                result = quantity * 4.20
                break

            default:
                console.log('error')

        }
    } else if (day === 'Monday' || day === 'Tuesday' || day === 'Wednesday' || day === 'Thursday' || day === 'Friday') {
        switch (fruit) {
            case 'banana':
                result = quantity * 2.50
                break
            case 'apple':
                result = quantity * 1.20
                break
            case 'orange':
                result = quantity * 0.85
                break
            case 'grapefruit':
                result = quantity * 1.45
                break
            case 'kiwi':
                result = quantity * 2.70
                break
            case 'pineapple':
                result = quantity * 5.50
                break
            case 'grapes':
                result = quantity * 3.85
                break

            default:
                console.log('error')


        }

    } else {
        console.log('error')


    }

    if (result === 0.00) {

    } else {
        console.log(result.toFixed(2))
    }

}
fruitShop('orange', 'Friday', '0.6')