function solve(arr) {
    let result = []
    let counter = 0
    let command = {
        add() {
            counter += 1
            result.push(counter)
        },
        remove() {
            counter += 1
            result.pop()
        }
    }

    for (let line of arr) {
        command[line]()
    }
    if (result.length === 0) {
        return 'Empty'
    } else {
        return result.join('\n')
    }
}

console.log(solve(['add',
    'add',
    'add',
    'add']
));
console.log('-------------');
console.log(solve(['add',
    'add',
    'remove',
    'add',
    'add']
));
console.log('-------------');
console.log(solve(['remove',
    'remove',
    'remove']
));
