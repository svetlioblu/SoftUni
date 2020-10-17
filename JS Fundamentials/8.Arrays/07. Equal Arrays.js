function equalArrays(arr1, arr2) {
    let sumFirstArr = 0
    let isEqual = true
    let currentIndexIfnoEqual = 0
    for (let i = 0; i < arr1.length; i++) {
        if (Number(arr1[i]) !== Number(arr2[i])) {
            currentIndexIfnoEqual = i
            isEqual = false
            break;
        } else {
            sumFirstArr += Number(arr1[i])
        }
    }

    if (isEqual === false) {
        console.log(`Arrays are not identical. Found difference at ${currentIndexIfnoEqual} index`)
    } else {
        console.log(`Arrays are identical. Sum: ${sumFirstArr}`);

    }

}
equalArrays(['1'], ['10'])