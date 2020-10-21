function nonDecreasingSubsequence(arr) {
    let currentBigger = 0
    let result = []
    for (let element of arr) {

        if (element >= currentBigger) {
            currentBigger = element
            result.push(currentBigger)
        }
        
    }
    console.log(result.join(' '));

}

nonDecreasingSubsequence([ 1, 3,-1, 8, 4,8, 10, 12, 3, 2, 24])