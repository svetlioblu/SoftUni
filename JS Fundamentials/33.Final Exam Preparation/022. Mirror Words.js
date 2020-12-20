function mirrorWorld([input]) {
    let reg = /([@#])[A-Za-z]{3,}\1\1[A-Za-z]{3,}\1/g
    let match = input.match(reg)
    let mirrorPairs = []

    if (match) {
        console.log(`${match.length} word pairs found!`)
        match.forEach(element => {
            let [wordA, wordB] = element.split(/[#@]/g).filter(x => x != '')

            let isMirror = wordA === wordB.split('').reverse().join('')
            if (isMirror) {
                mirrorPairs.push(`${wordA} <=> ${wordB}`)
            }
        })
        if (mirrorPairs.length == 0) {
            console.log(`No mirror words!`)
        } else {
            console.log(`The mirror words are:\n${mirrorPairs.join(', ')}`)
        }
    } else {
        console.log(`No word pairs found!`)
        if (mirrorPairs.length == 0) {
            console.log(`No mirror words!`)
        }
    }
}
mirrorWorld([
    '@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r'
    ]
    )