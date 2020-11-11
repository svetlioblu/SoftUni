function personInfo(fName, lName, age) {
    let person = {}
    person.firstName = fName
    person.lastName = lName
    person.age = age

   return person
}
console.log(personInfo("Peter",
    "Pan",
    "20"
))