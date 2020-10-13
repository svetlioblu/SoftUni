function personalTitles(arg1, arg2) {
    let age = Number(arg1)
    let gender = arg2
    if (gender === 'm') {
        if (age >= 16) {
            console.log('Mr.')

        } else {
            console.log('Master')

        }
    } else {
        if (age >= 16) {
            console.log('Ms.')

        } else {
            console.log('Miss')

        }
    }

}

personalTitles('18', 'm')