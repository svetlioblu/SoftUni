function problemTwo(input) {
    let n = Number(input.shift())
    for (let i = 0; i < n; i++) {
        let reg = /(.+)>\d{3}\|[a-z]{3}\|[A-Z]{3}\|[^<>]{3}<\1/g
        let match = input[i].match(reg)
        if (match) {
            let element = match[0].split('|')
            let group1 = element[0].split('>')[1]
            let group2 = element[1]
            let group3 = element[2]
            let group4 = element[3].split('<')[0]
            let encripted = group1 + group2 + group3 + group4

            console.log(`Password: ${encripted}`)
        } else {
            console.log(`Try another password!`)
        }

    }
}
problemTwo([
    '5',
    'aa>111|mqu|BAU|mqu<aa',
    '()>111!aaa!AAA!^&*<()',
    'o>088|abc|AAA|***<o',
    'asd>asd|asd|ASD|asd<asd',
    '*>088|zzzz|ZzZ|123<*'
  ]
)