function palindromeIntegers(arr) {

    for (let i = 0; i < arr.length; i++) {
        let currentNumber = arr[i]
        let currentNumberReversed = arr[i].toString().split('').reverse().join('')

        if (currentNumber == currentNumberReversed) {
            console.log('true')
        } else {
            console.log('false')
        }

    }

}
palindromeIntegers([32,2,232,1010])