// let str = 'The Rose Valley (Bulgaria) is located just south of the Balkan Mountains (Kazanlak).The most common oil-bearing rose found in the valley is the pink-petaled Damask rose (Rosa damascena Mill).'
// let reg = /\((.+?)\)/g
//     let result = []
//     let match = reg.exec(str)
//     while(match) {
//         result.push(match[1])
//         match = reg.exec(str)
//     }
//     console.log(result);

let arr = {
    Construction: [
        ['Stanimir', 2, 'engineer'],
        ['Pesho', 15, 'electrical engineer'],
        ['Slavi', 1, 'dyer'],
        ['Stan', 2, 'architect']
    ],
    Marketing: [
        ['Stanimir', 1200, 'digital marketing manager'],
        ['Pesho', 1000, 'graphical designer']
    ],
    'Human resources': [['Gosho', 1350, 'HR']]
}

let result = []
for (let key in arr) {
    result.push(arr[key].reduce((a,b)=>{
        return a+b[1]
    },0)/arr[key].length)
}

console.log(result);