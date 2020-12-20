function wordOccurrences(input) {
    let obj = {}
    let sorted = {}
    for (let word of input) {
        if (obj.hasOwnProperty(word)) {
            obj[word] += 1
        } else {
            obj[word] = 1
        }
    }
    Object.entries(obj).sort((a, b) => b[1] - a[1])
        .forEach(element => {
            sorted[element[0]] = element[1]
        })
    

    for (let key in sorted) {
        console.log(`${key} -> ${obj[key]} times`)

    }
}
wordOccurrences(["Here", "is", "the", "first", "sentence",
    "Here", "is", "another", "sentence",
    "And", "finally", "the",
    "third", "sentence"])