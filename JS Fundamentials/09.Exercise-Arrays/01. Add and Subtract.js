function addAndSubtract(arr) {
    let arr2 = []
    let sumArr = 0
    let sumArr2 = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            arr2.push(arr[i] + i)
        } else {
            arr2.push(arr[i] - i)
        }
        sumArr += arr[i]
        sumArr2 += arr2[i]

    }
    console.log(arr2)
    console.log(sumArr)
    console.log(sumArr2)

}
addAndSubtract([-5, 10, 3, 0, 2])