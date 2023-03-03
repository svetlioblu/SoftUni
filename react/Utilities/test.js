// let a = '55.1231'
// let temp = a.search(/\+/g)
// console.log(temp);
let a = {
    "todos": {
        "1": {
            "text": "Give dog a bath",
            "isCompleted": true
        },
        "2": {
            "text": "Do laundry",
            "isCompleted": true
        },
        "3": {
            "text": "Vacuum floor",
            "isCompleted": false
        },
        "4": {
            "text": "Feed cat",
            "isCompleted": true
        }
    }

}

let result = Object.keys(a.todos).map(id => ({ id, ...a.todos[id]}))
console.log(result[1])