// let str = 'The Rose Valley (Bulgaria) is located just south of the Balkan Mountains (Kazanlak).The most common oil-bearing rose found in the valley is the pink-petaled Damask rose (Rosa damascena Mill).'
// let reg = /\((.+?)\)/g
//     let result = []
//     let match = reg.exec(str)
//     while(match) {
//         result.push(match[1])
//         match = reg.exec(str)
//     }
//     console.log(result);

function isOddOrEven(string) {
    if (typeof (string) !== 'string') {
        return undefined;
    }
    if (string.length % 2 === 0) {
        return "even";
    }

    return "odd";
}
console.log(isOddOrEven());