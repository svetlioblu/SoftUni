function evenAndOddSubtraction(arr) {
    let even = 0
    let odd = 0
    for (let currentNum of arr) {
        if (currentNum % 2 === 0) {
            even += currentNum
        } else {
            odd += currentNum
        }
    }
    let result = even - odd

    console.log(result)
}
evenAndOddSubtraction([2, 4, 6, 8, 10])