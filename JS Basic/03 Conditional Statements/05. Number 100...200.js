function checkNumber(arg) {
    let numb = parseInt(arg)
    if (numb < 100) {
        console.log('Less than 100')

    } else if (numb >= 100 && numb <= 200) {
        console.log('Between 100 and 200')

    } else {
        console.log('Greater than 200')

    }
}
checkNumber('2')

