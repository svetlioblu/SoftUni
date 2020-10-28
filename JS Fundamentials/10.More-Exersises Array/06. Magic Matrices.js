function magicMatrices(arr) {
    let sumInitial = arr[0].reduce((a, b) => a + b, 0)

    //sum rows az much elemet te arr has
    for (let row = 0; row < arr.length; row++) {
        let sumRow = arr[row].reduce((a, b) => a + b, 0);
        if (sumRow != sumInitial) {
            return console.log('false')
        }
    }
    // sum colls az much cols the first element have
    for (let col = 0; col < arr[0].length; col++) {
        let sumCol = 0
        for (let row = 0; row < arr.length; row++) {
            sumCol += arr[col][row]
        }
        if (sumCol != sumInitial) {
            return console.log('false')

        }
    }
    return console.log('true')


}

magicMatrices([[11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]]
)