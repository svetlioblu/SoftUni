function matchFullName ([str]) {
let reg = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g
let result = str.match(reg)
console.log(result.join(' '))
}

matchFullName(["Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov"])