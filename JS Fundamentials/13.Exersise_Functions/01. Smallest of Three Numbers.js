function smallestOfthreeNumbers(a, b, c) {
    let currentNum = Number.MAX_SAFE_INTEGER
    if (currentNum > a) {
        currentNum = a
        if (currentNum > b) {
            currentNum = b
        }
        if (currentNum > c) {
            currentNum = c
        }
    }
    return console.log(currentNum);

}
smallestOfthreeNumbers(25,
    21,
    4
    
    )