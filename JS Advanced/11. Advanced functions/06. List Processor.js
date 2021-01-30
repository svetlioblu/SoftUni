function solve(input) {
    let result = []
    let actions = {
        add: (str) => { result.push(str) },
        remove: (str) => { result = result.filter(x => x != str) },
        print: () => { console.log(result.join(',')) }
    }
    input.forEach(element => {
        if (element == 'print') {
            actions.print()
        } else {
            let [action, item] = element.split(' ')
            actions[action](item)
        }

    })
}
solve(['add pesho', 'add george', 'add peter', 'remove peter','print'])