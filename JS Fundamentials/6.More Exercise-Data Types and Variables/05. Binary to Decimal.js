function binaryToDecimal(binaryAsString) {
    let sumEachTrueNumber = 0
    let stage = 0
    for (let i = binaryAsString.length - 1; i >= 0; i--) {
        if (binaryAsString[i] === '1') {
            sumEachTrueNumber += 1 * (Math.pow(2, stage))
        }
        stage++
    }
   
    console.log(sumEachTrueNumber);

}
binaryToDecimal('11110000')