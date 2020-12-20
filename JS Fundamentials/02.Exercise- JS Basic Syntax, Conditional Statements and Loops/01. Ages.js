function ages(age) {
    let result = ''
    if (age >= 0 && age <= 2) {
        result = 'baby'
    } else if (age > 2 && age <= 13) {
        result = 'child'
    } else if (age > 13 && age <= 19) {
        result = 'teenager'
    } else if (age > 19 && age <= 65) {
        result = 'adult'
    } else if (age > 65) {
        result = 'elder'
    } else{
        result = 'out of bounds'
    }
console.log(result);

}
ages(-66)