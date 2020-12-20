function revealWord(param, str) {
    param = param.split(', ')
    let substr = ' ' + str + ' '
   
    for (let word of param) {
        let search = substr.indexOf(` ${'*'.repeat(word.length)} `)

        if (search != -1) {
            substr = substr.replace(` ${'*'.repeat(word.length)} `, ` ${word} `)
        }

    }

    console.log(substr.trim())
}
revealWord('great, learning',
    'softuni is ***** place for ******** new programming  languages'
)