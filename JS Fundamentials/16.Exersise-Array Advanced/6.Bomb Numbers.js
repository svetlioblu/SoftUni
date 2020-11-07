function bombNumbers(arr1, arr2) {
    let field = arr1
    let bomb = arr2
    while (field.includes(bomb[0])) {
        let bombPosition = field.indexOf(bomb[0])
        let bombDamage = bomb[1]
        field.splice(bombPosition + 1, bombDamage)
        field.splice(bombPosition - bombDamage, bombDamage + 1)
    }

    return field.reduce((a, b) => a + b)

}
console.log(bombNumbers([1, 2, 2, 4, 2, 2, 2, 9],
    [4, 2]
    
    
))