function convertJson(fName, lName, color) {
    let person = {}
    person.name = fName
    person.lastName = lName
    person.hairColor = color
    let convert = JSON.stringify(person)
    console.log(convert)
    
}
convertJson('George',
    'Jones',
    'Brown'
)