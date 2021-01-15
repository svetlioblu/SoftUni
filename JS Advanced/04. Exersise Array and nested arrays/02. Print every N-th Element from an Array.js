function solve(arr, num) {
    let result = []
    for (let i = 0; i < arr.length; i += num) {
        result.push(arr[i])
    }
    return result
}
console.log(solve(['5',
    '20',
    '31',
    '4',
    '20'],
    2
));
console.log('-----------');
console.log(solve(['dsa',
    'asd',
    'test',
    'tset'],
    2
));
console.log('-----------');
console.log(solve(['1',
    '2',
    '3',
    '4',
    '5'],
    6
));
