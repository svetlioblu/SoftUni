function firstandlastKNumbers(arr) {
    let k = arr.shift()
    let start = arr.slice(0, k)
    let end = arr.slice(-k)

return `${start.join(' ')}\n${end.join(' ')}`

}
console.log(firstandlastKNumbers([2,
    7, 8, 9])
)