exports.isNameValid = (res, name) => {
    if (!name || name.length <= 3) {
        return res.send('Invalid username')
    }
}
exports.isAgeValid = (res, age) => {
    if (!age || age < 0 || age > 120) {
        return res.send('Invalid age')
    }
}