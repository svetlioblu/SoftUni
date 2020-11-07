function distinctArray(input) {
    let result = input.filter((x, i) => input.indexOf(x)===i)
    return result.join(' ')
}
console.log(distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2]))
