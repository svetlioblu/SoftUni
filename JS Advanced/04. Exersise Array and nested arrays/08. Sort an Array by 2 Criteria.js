function solve(arr) {
    arr.sort((a, b) => {
        a = a.toLowerCase()
        b = b.toLowerCase()
        return a.length - b.length || a.localeCompare(b)
    })
    return arr.join('\n')
}
console.log(solve(['alpha',
    'beta',
    'gamma']
));
console.log('--------------------------');
console.log(solve(['Isacc',
    'Theodor',
    'Jack',
    'Harrison',
    'George']
));

console.log('--------------------------');

console.log(solve(['test',
    'Deny',
    'omen',
    'Default']
));

