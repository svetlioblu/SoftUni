function maxNumber(arr) {
    let result = ''
    let isTop = true
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] >= arr[i]) {
                isTop = false
                break
            }
        }
        if (isTop) {
            result += arr[i] + ' '
        } else {
            isTop = true
        }
    }
    console.log(result)

}
maxNumber([41, 41, 34, 20])