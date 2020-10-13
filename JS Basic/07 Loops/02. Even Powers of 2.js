function evenPowersOf2(arg) {
    let number = Number(arg)

    for (let i = 0; i <= number; i++) {
        if (i % 2 === 0) {

            console.log(Math.pow(2, i))
        }

    }
}
evenPowersOf2('5')
