function sorting(arr) {
    let result = []
    let sorted = arr.sort((a, b) => b - a)
    for (let i = 0; i < sorted.length / 2; i++) {

        result.push(sorted[i])
        result.push(sorted[arr.length - 1 - i])
    }
    sorted.length % 2 != 0 ? result.pop() : result

    console.log( result.join(' '))
}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94, 0])

//ca be solved with even sift pop on new arr