function wordTracker(input) {
    let words = input.shift().split(' ')
    let list = {}
    words.forEach(element => {
        list[element] = 0
    })
    for (let line of input) {
        if (list.hasOwnProperty(line)) {
            list[line] += 1
        }
    }
    let sorted = Object.entries(list).sort((a, b) => b[1] - a[1])
   
    sorted.forEach(element => console.log(`${element[0]} - ${element[1]}`))

}
wordTracker([
    'this sentence', 'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurances', 'of', 'the'
    , 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
]
)