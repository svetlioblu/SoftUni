function solve() {
    class Person {
        constructor(firstName, lastName, age, email) {
            this.firstName = firstName
            this.lastName = lastName
            this.age = age
            this.email = email
        }
        toString() {
            return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`
        }
    }
    let personA = new Person('Anna', 'Simpson', 22, 'anna@yahoo.com')
    let personB = new Person('SoftUni')
    let personC = new Person('Stephan', 'Johnson', 25)
    let personD = new Person('Gabriel', 'Peterson', 24, 'g.p@gmail.com')

    return [personA, personB, personC, personD]
}

console.log(solve());