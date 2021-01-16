function solve(arr, n) {
    
    for (let i = 0; i < n; i++) {
        let temp = arr.pop()
        arr.unshift(temp)
    }
    return arr.join(' ')
}
console.log(solve(['1',
    '2',
    '3',
    '4'],
    2
));
console.log(solve(['Banana',
    'Orange',
    'Coconut',
    'Apple'],
    15
));