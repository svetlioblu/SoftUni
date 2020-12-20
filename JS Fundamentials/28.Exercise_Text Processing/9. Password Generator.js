function passwordGenerator(input) {
    let concatStrings = input.shift()
        .concat(input.shift())
        .toLowerCase()
        .split('')
    let passToken = input.shift()
    for (let i = 0, j = 0; i < concatStrings.length; i++) {

        if (concatStrings[i] === 'a' || concatStrings[i] === 'e' || concatStrings[i] === 'i' || concatStrings[i] === 'o' || concatStrings[i] === 'u') {

            concatStrings[i] = passToken[j].toUpperCase()
            j++
            if (j > passToken.length - 1) {
                j = 0
            }
        }
    }
    let result = concatStrings.reverse().join('')
    console.log(`Your generated password is ${result}`)
}
passwordGenerator([
    'easymoneyeazylife', 'atleasttencharacters', 'absolute'
    ]
    
)