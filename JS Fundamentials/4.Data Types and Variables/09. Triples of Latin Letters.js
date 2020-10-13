function triplesOflatinLetters(number) {

    for (let i = 0; i < number; i++) {
        let result = ''
        let result2 = ''
        let result3 = ''
        result = String.fromCharCode(97 + i)
        for (j = 0; j < number; j++) {
            result2 = String.fromCharCode(97 + j)
            for (z = 0; z < number; z++) {
                result3 = String.fromCharCode(97 + z)
                console.log(`${result}${result2}${result3}`);
            }
        }

    }
}
triplesOflatinLetters(3)
