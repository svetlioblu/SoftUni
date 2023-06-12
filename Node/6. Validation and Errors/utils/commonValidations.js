exports.isNameValid = (name) => {
    return name && name.length >= 3
}
exports.isAgeValid = (age) => {
    return age && age >= 0 && age <= 120
}