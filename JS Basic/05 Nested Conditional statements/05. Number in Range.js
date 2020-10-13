function numberInRange(arg1) {
    let number = Number(arg1)

    number = Math.abs(number)
    if (number <= 100 && number !== 0) {
        console.log('Yes')

    } else {
        console.log('No')

    }

}
numberInRange('0')