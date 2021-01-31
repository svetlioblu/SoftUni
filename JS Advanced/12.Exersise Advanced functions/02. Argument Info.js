function solve(...params) {
    const typeCount = {}
    params.forEach(element => {
        if (!typeCount.hasOwnProperty(typeof element)) {
            typeCount[typeof element] = 0
        }
        typeCount[typeof element] += 1
        console.log(`${typeof element}: ${element}`)
    })
    let typeCountSorted = Object.entries(typeCount).sort((a, b) => b[1] - a[1]).reduce((a, b) => {
        a[b[0]] = b[1]
        return a
    }, {})
  
    for (let key in typeCountSorted) {
        console.log(`${key} = ${typeCount[key]}`);
    }
}
solve(42, 'cat', 15, 'kitten', 'tomcat')