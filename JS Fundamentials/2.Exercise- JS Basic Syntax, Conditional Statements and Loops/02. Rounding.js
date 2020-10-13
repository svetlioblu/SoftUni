function rounding(arg1, arg2) {
    let numberToRound = arg1
    let precision = arg2
    if (precision > 15) {
        precision = 15
    }
    let result = numberToRound.toFixed(precision)
    console.log(parseFloat(result));


}
rounding(3.1415926535897932384626433832795,2)