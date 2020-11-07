function sumFirstandLast(arr) {
    arr = arr.map(Number)
    let first = arr.shift()
    let last = arr.pop()
    return first + last

}
console.log(sumFirstandLast(['20', '30', '40']))
