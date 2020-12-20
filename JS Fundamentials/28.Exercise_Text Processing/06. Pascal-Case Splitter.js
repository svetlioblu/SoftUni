function pascalCaseSplitter(str) {
    let result = ''
    for (let char of str) {
        if (char == char.toUpperCase()) {
            result += ', '
        }
        result += char
    }
    console.log(result.substring(2)) 
}
pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan')