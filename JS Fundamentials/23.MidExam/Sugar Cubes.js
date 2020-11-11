function sugarCubes(input) {
    let cubes = input.shift()
    let command = input.shift()
    while (command != 'Mort') {
        let [action, value, replacement] = command.split(' ')
        value = Number(value)

        switch (action) {
            case 'Add':
                cubes.push(value)
                break
            case 'Remove':
                if (cubes.includes(value)) {
                    cubes.splice(cubes.indexOf(value), 1)
                }
                break
            case 'Replace':
                replacement = Number(replacement)
                if (cubes.includes(value)) {
                    cubes.splice(cubes.indexOf(value), 1, replacement)
                }
                break
            case 'Collapse':
                cubes = cubes.filter(x => x >= value)
                break
        }

        command = input.shift()
    }

    console.log(cubes.join(' '));

}
sugarCubes([[2, -1, 0, -3, 9, 8, 7, 2],
    "Collapse 8",
    "Mort"])
    
