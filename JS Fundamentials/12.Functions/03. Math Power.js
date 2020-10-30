function mathPower(num, pow) {
    let result = 1

    for (let i = 1; i <= pow; i++) {
        result *= num
    }
    return console.log(result)

}
mathPower(3, 4)