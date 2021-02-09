function Person(firstName, lastName) {
    this.firstName = firstName
    this.lastName = lastName
    Object.defineProperty(this, 'fullName', {
        get: function () {
            return `${this.firstName} ${this.lastName}`
        },
        set: function (value) {
            if (/^.+?\s.+?$/gm.test(value)) {
                let [fName, lName] = value.split(' ')
                this.firstName = fName
                this.lastName = lName
            }
        }
    })
}
let person = new Person("Albert", "Simpson");
console.log(person.fullName); //Albert Simpson
person.firstName = "Simon";
console.log(person.fullName); //Simon Simpson
person.fullName = "Peter";
console.log(person.firstName);  // Simon
console.log(person.lastName);  // Simpson

