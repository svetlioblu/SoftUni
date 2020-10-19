function arrayRotation(arr, numberRotations) {

    for (let i = 0; i < numberRotations; i++) {
        let current = arr.shift()
        arr.push(current)
    }
    console.log(arr.join(' '));
    
}
arrayRotation([2, 4, 15, 31], 5)