function equalSums(arr) {
    let left = 0
    for (let i = 0; i < arr.length; i++) {

        let right = 0
        if (i === 0) {
            left += 0
        } else {
            left += arr[i - 1]
        }
        if (i === arr.length - 1) {
            right += 0
        }
        for (let j = i + 1; j < arr.length; j++) {

            right += arr[j]
        }
        if (left === right) {
            return console.log(i)
        }
    }
    console.log('no')

}
equalSums([1, 2, 3, 3])