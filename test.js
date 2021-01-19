let dashboard = [
    ['X', 'X', false],
    ['X', 'X', 'X'],
    ['Xd', 'X', false]
]

let player = 'X'

let department = {
    name: "Engineering",
    data: {
        director: {
            name: 'John',
            position: 'Engineering Director'
        },
        employees: [],
        company: 'Quick Build'
    }
};

let {data:{director:{name}}} = department
name = 'Ivan'
console.log(name);
console.log(department.data);