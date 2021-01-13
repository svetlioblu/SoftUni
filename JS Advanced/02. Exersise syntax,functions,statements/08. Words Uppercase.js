function wordsUppercase(input) {
    let reg = /\b[a-zA-Z0-9]+\b/g
    let match = input.match(reg).map(x => x.toUpperCase())
    return match.join(', ')

}
console.log(wordsUppercase('Hi, how are you?'));
console.log(wordsUppercase('hello'));
