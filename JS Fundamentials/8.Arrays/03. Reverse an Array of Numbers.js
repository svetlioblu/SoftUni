function reverseAnArrayOfNumbers(arrCount, arr) {
    let arrCut = []
    for (let i = 0; i < arrCount; i++) {
        arrCut[i] = arr[i]
    }
    let result = arrCut.reverse().join(' ')
    console.log(result);

}
reverseAnArrayOfNumbers(2, [66, 43, 75, 89, 47])