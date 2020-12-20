function censoredWords(str, word) {
    let search = str.indexOf(word)

    while (search != -1) {
        str = str.replace(word, '*'.repeat(word.length

        ))

        search = str.indexOf(word, search + 1)
    }

    console.log(str);

}
censoredWords("A small sentence with some words small", "small")