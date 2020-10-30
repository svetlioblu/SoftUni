function passwordValidator(pass) {
    let isProperLength = false
    let isProperDigitsCount = false
    let isItonlyLattersDigits = false
    isCorrectLength(pass)
    azAndDigitsOnly(pass)
    isCorrectDigits(pass)


    function isCorrectLength(authenticate) {
        let checkLengthCount = authenticate.length
        if (checkLengthCount >= 6 && checkLengthCount <= 10) {
            isProperLength = true
        } else {
            return console.log(`Password must be between 6 and 10 characters`)

        }
    }
    function azAndDigitsOnly(authenticate) {
        let patt = new RegExp(/[^A-z0-9]/g)
        if (patt.test(authenticate)) {
            return console.log(`Password must consist only of letters and digits`)
        } else {
            isItonlyLattersDigits = true
        }
    }

    function isCorrectDigits(authenticate) {
        let digitCount = 0
        for (let i of authenticate) {
            if (Number.isNaN(Number(i) + 1) !== true) {
                digitCount += 1
            }
        }
        if (digitCount >= 2) {
            isProperDigitsCount = true
        } else {
            return console.log(`Password must have at least 2 digits`)

        }
    }
    if(isProperLength && isProperDigitsCount && isItonlyLattersDigits) {
        return console.log(`Password is valid`)
        
    }
}
passwordValidator('Pa$s$s')