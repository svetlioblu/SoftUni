function concatenateNames(stringOne, stringTwo, delimiter) {
    let result = `${stringOne}${delimiter}${stringTwo}`

    console.log(result)
}
concatenateNames('John',
    'Smith',
    '->'
)