function removeOccurrences(input) {
    let [chars, line] = input.split(' ')
    let reg = new RegExp(`[^${chars}]`, `g`)
    let result = line.match(reg).join('')
    console.log(result)
}
removeOccurrences("ice kicegiciceeb")