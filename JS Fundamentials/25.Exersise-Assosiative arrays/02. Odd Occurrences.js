function oddOccurrences(input) {
    input = input.split(' ')
    let list = new Map()

    input.forEach(element => {
        element = element.toLowerCase()
        if (list.has(element)) {
            let current = list.get(element)
            list.set(element, current += 1)
        } else {
            list.set(element, 1)
        }
    })
    let result = []
    for (let key of list.entries()) {
        if (key[1] % 2 != 0) {
            result.push(key[0])
        }
    }

    console.log(result.join(' '));
}
oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')