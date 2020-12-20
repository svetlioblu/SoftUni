function fancyBarcodes(input) {
    let n = Number(input.shift())
    for (let i = 0; i < n; i++) {
        let reg = /@#+[A-Z][a-zA-Z\d]{4,}[A-Z]@#+/g
        let match = input[i].match(reg)
        if (match) {
            let digits = input[i].match(/\d/g)
            if (digits) {
                digits = digits.join('')
                console.log(`Product group: ${digits}`)
            } else {
                console.log(`Product group: 00`)
            }

        } else {
            console.log(`Invalid barcode`)
        }

    }
}
fancyBarcodes([
    '6',
    '@###Val1d1teM@###',
    '@#ValidIteM@#',
    '##InvaliDiteM##',
    '@InvalidIteM@',
    '@#Invalid_IteM@#',
    '@#ValiditeM@#'
]
)