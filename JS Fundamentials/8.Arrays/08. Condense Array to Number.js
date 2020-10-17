function condenseArrayToNumber(arr) {
    let arr2 = arr.slice()
    let tempArr = []

    if (arr2[1] == undefined) {
        return console.log(Number(arr2[0]))
    }

    for (let i = 0; i < arr2.length - 1; i++) {
        tempArr[i] = arr2[i] + arr2[i + 1]
    }
    arr2 = tempArr
    tempArr = []
    if (arr2[1] !== undefined) {
        condenseArrayToNumber(arr2)
    } else {
        console.log(Number(arr2[0]))

    }
}
condenseArrayToNumber([2,10,3])