function aggregateElements(arr) {
    let sumInverse = 0
    console.log(arr.reduce((a, b) => a + b))
    for (let num of arr) {
        sumInverse += 1/num
    }
    console.log(sumInverse)
    console.log(arr.join(''))

}
aggregateElements([1, 2, 3])