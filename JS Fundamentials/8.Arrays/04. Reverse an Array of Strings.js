function reverseAnArrayOfStrings(arr) {
    let currentElement = ''
    let endOfArr = arr.length - 1
    for (let i = 0; i < arr.length / 2; i++) {
        currentElement = arr[i]
        arr[i] = arr[endOfArr - i]
        arr[endOfArr - i] = currentElement
    }
    console.log(arr.join(' '));

}
reverseAnArrayOfStrings(['a', 'b', 'c', 'd'])