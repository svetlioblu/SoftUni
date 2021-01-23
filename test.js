// let str = 'The Rose Valley (Bulgaria) is located just south of the Balkan Mountains (Kazanlak).The most common oil-bearing rose found in the valley is the pink-petaled Damask rose (Rosa damascena Mill).'
// let reg = /\((.+?)\)/g
//     let result = []
//     let match = reg.exec(str)
//     while(match) {
//         result.push(match[1])
//         match = reg.exec(str)
//     }
//     console.log(result);
let arr = ['dd', 'dd','dd','dd']
let b = arr.map((x, i) => {
    if (i > 0) {
        return x[0].toUpperCase() + x.substring(1)
    }
    return x
})
console.log(b);