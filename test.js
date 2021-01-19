let obj = { a: 1, b: 2 }
let copy ={}

Object.assign(copy,obj)
copy.a = 5
console.log(obj);