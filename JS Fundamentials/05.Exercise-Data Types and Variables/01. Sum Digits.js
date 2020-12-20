function sumDigits(number) {
    let splitToArr = number.toString().split('')
    let result = 0
    for (let i = 0; i < splitToArr.length; i++) {
        result += Number(splitToArr[i])
    }
console.log(result);

}
sumDigits(97561)