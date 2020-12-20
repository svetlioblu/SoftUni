function replaceRepeatingChars(str) {

    let temp = str[0]
    let result = [temp]
    for (let char of str) {
        if (char == temp) {
            continue
        } else {
            result.push(char)
            temp = char
        }
    }
    console.log(result.join(''))
}
replaceRepeatingChars('aaaaabbbbbcdddeeeedssaa')