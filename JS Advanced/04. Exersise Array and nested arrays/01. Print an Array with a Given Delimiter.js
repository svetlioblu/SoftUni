function solve(arr, dellimiter) {
return arr.join(dellimiter)
}

console.log(solve(['One',
    'Two',
    'Three',
    'Four',
    'Five'],
    '-'
));
console.log(`----------------`);
console.log(solve(['How about no?',
    'I',
    'will',
    'not',
    'do',
    'it!'],
    '_'
));