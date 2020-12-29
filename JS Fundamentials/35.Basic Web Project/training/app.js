let data = require(`./modules`)
let fs = require('fs')
let arr = [4, 6, 1, 9]
let sorted = arr.sort(data.sortDescending)
console.log(sorted)

fs.writeFileSync('./training/data.txt','test','utf-8')
let read = fs.readFileSync('./training/data.txt','utf-8')
console.log(read)