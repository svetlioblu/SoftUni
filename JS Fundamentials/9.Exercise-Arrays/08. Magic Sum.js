function magicSum(arr, unique) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            let currentSum = arr[i] + arr[j]
            if (currentSum === unique) {
                console.log(`${arr[i]} ${arr[j]}`)

            }
        }
    }
}
magicSum([1, 2, 3, 4, 5, 6],
    6    
)