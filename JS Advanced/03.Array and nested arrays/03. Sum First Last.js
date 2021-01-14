function solve(arr) {
    let n1 = Number(arr.shift())
    let n2 = Number(arr[arr.length-1])
    return n1+n2
}
console.log(solve(['20', '30', '40']));