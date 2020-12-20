function stringSubstring(word, str) {
    str = " " + str + " "
    let wordLowerCase = word.toLowerCase()
    str = str.toLowerCase()
    let search = str.indexOf(` ${wordLowerCase} `)
    if (search != -1) {
        console.log(word)
    } else {
        console.log(`${word} not found!`)
    }
}
stringSubstring('javascript',
'JavaScriptd is the best programming language'
)