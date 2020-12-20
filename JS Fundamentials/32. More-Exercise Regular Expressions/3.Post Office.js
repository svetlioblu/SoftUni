function postOffice([input]) {
    let [capitals, codes, words] = input.split('|')
    capitals = capitals.match(/(:?[\$#%\*&])([A-Z]+)\1/)[2]
    codes = codes.match(/(6[5-9]|[7-8][0-9]|90):([0-1][1-9]|20)/g)
    codes = new Set(codes)
    codes = [...codes]
    words = ' ' + words + ' '

    for (let word of capitals) {
        let char = word.charCodeAt()
        // console.log(codes)
        codes.forEach(element => {
            let [currentElCode, len] = element.split(':')
            if (char == currentElCode) {
                len = Number(len)
                let reg = new RegExp(`\\s${word}[^\\s]{${len}}\\s`, 'g')
                console.log(words.match(reg)[0].trim())
            }
        })
    }
}
postOffice([
    'Urgent"Message.TO$#POAML#|readData79:05:79:0!2reme80:03--23:11{79:05}tak{65:11ar}!77:!23--)77:05ACCSS76:05ad|Remedy Por Ostream :Istream Post sOffices Office Of Ankh-Morpork MR.LIPWIG Mister Lipwig'
])