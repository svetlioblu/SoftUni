function numbersFromMtoN(m, n) {
    let biggerNumber = Number(m)
    let smallerNumber = Number(n)

    while (biggerNumber >= smallerNumber) {
        console.log(biggerNumber)
        biggerNumber--
    }
}
numbersFromMtoN(4,1)