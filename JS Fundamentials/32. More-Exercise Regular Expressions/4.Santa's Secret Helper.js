function santaSecretHelper(input) {
    let key = Number(input.shift())
    let line = input.shift()

    while (line != 'end') {
        let temp = ''
        for (let char of line) {
            char = (char.charCodeAt() - key)
            temp += String.fromCharCode(char)
        }
        let pattern = /@([A-Za-z]+)[^@\-\!\:\>]+!([GN])!/
        let match = temp.match(pattern)
        if (match) {
            if (match[2] == 'G') {
                console.log(match[1])
            }
        }
        line = input.shift()
    }

}
santaSecretHelper([
    '3',
    "N}eideidmk$'(mnyenmCNlpamnin$J$",
    'ddddkkkkmvkvmCFrqqru-nvevek$J$nmgievnge',
    'ppqmkkkmnolmnnCEhq/vkievk$Q$',
    'yyegiivoguCYdohqwlqh/kguimhk$J$',
    'end'
  ])