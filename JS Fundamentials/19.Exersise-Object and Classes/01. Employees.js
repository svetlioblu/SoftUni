function employees(arr) {
    class Employees {
        constructor(name) {
            this.name = name
           
        }
        inroduce() {
            return `Name: ${this.name} -- Personal Number: `
        }
    }

    for (let employee of arr) {
        let number = employee.length
        let currentEmployee = new Employees(employee)
        
        console.log(currentEmployee.inroduce() + number)  
    }
   


}
employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]
)