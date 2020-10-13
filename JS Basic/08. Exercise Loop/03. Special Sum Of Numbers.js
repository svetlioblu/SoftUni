function specialSumOfNumbers(arg1, arg2, arg3) {

    let start = Number(arg1)
    let end = Number(arg2)
    let devider = Number(arg3)
    let result = 0

    for (start; start <= end; start++) {
        if (start % devider === 0) {
            result += start
        }
    }
    console.log(result)
}
specialSumOfNumbers('61', '125', '25')