function sumEvenNumbers(arr) {
    result = 0
    for (let num of arr) {
        num = Number(num)
        if (num % 2 === 0) {
            result += num
        }
    }

    console.log(result)


}
sumEvenNumbers(['2', '4', '6', '8', '10'])