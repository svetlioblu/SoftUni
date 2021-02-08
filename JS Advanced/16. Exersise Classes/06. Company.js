class Company {
    constructor() {
        this.deparments = []
    }
    //username, Salary, Position, Department
    addEmployee(...params) {
        for (let el of params) {
            if (el === "" || el === undefined || el == null) {
                throw new Error('Invalid input!')
            }
        }
        if (typeof params[1] != 'number' || params[1] < 0) {
            throw new Error('Invalid input!')
        }
        let [username, Salary, Position, Department] = params
        this.deparments.push({ username, Salary, Position, Department })
        return `New employee is hired. Name: ${username}. Position: ${Position}`
    }
    bestDepartment() {
        let sorted = this.deparments.reduce((a, b) => {
            if (!a[b.Department]) {
                a[b.Department] = []
            }
            a[b.Department].push([b.username, b.Salary, b.Position])
            return a
        }, {})

        let bestDep = Object.entries(sorted).sort((a, b) => {
            let first = a[1].reduce((a, b) => {
                return a + b[1]
            }, 0) / a[1].length
            let second = b[1].reduce((a, b) => {
                return a + b[1]
            }, 0) / b[1].length
            return second - first
        })[0]
        const averageSalary = bestDep[1].reduce((a, b) => {
            return a + b[1]
        }, 0) / bestDep[1].length
        bestDep[1].sort((a, b) => {
            return (b[1] - a[1]) || a[0].localeCompare(b[0])
        })
        let employe = ``
        bestDep[1].forEach(element => {
            employe += '\n'+element.join(' ') 
        })
        return `Best Department is: ${bestDep[0]}\nAverage salary: ${averageSalary.toFixed(2)}${employe}`
    }
}
let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
console.log(c.addEmployee("Pesho", 1500, "electrical engineer", "Construction"))
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");


console.log(c.bestDepartment())
// console.log(c.deparments)