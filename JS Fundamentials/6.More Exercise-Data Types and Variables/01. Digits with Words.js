function digitsWithWords(digitAsString) {
    let digits = ['zero','one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
    let result = 0
    if (digits.includes(digitAsString)) {
        result = digits.indexOf(digitAsString)
    }
    console.log(result)

}
digitsWithWords('nine')