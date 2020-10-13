function cinema(arg1, arg2, arg3) {
    let type = arg1
    let rows = Number(arg2)
    let col = Number(arg3)
    let area = rows * col
    let result = 0

    switch (type) {
        case 'Premiere':
            result = area * 12.00
            break
        case 'Normal':
            result = area * 7.50
            break
        case 'Discount':
            result = area * 5.00
            break
    }
    console.log(`${result.toFixed(2)} leva`)
}
cinema('Discount', '12', '30')