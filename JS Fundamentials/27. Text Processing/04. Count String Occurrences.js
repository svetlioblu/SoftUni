function countStringOccurrences(str, word) {
    str = ' ' + str + ' '
    let search = str.indexOf(` ${word} `)
    let counter = 0
    while (search != -1) {
        counter += 1

        search = str.indexOf(` ${word} `, search + 1)
    }
    console.log(counter);
    
}
countStringOccurrences("is This is a word and it also is a sentence is",
    "is"
)