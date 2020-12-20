function winingTicket([input]) {
    let tickets = input.replace(/\s/g, '').split(',')

    for (let line of tickets) {
        if (line.length == 20) {
            let substr1 = line.substring(0, 10)
            let substr2 = line.substring(10)
            let match = /[@\$#\^]{6,10}/g
            if (!line.match(match)) {
                console.log(`ticket "${line}" - no match`)
                continue
            }
            let substr1Char = substr1.match(match)[0][1]
            let substr1Len = substr1.match(match)[0].length
            let substr2Char = substr2.match(match)[0][1]
            let substr2Len = substr2.match(match)[0].length

            if (substr1Char === substr2Char && substr1Len === 10 && substr2Len === 10) {
                console.log(`ticket "${line}" - ${substr1Len}${substr1Char} Jackpot!`)
            } else if (substr1Char === substr2Char && substr1Len === substr2Len) {
                console.log(`ticket "${line}" - ${substr1Len}${substr1Char}`)
            } else if (substr1Char != substr2Char || substr1Len != substr2Len) {
                console.log(`ticket "${line}" - no match`)
            }
        } else {
            console.log(`invalid ticket`)
        }
    }
}
winingTicket(['validticketnomatch:( ,   th@@@@@@eemo@@@@@@ey'])