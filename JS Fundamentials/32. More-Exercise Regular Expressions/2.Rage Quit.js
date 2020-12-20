function rageQuit([str]) {
    str = str.toUpperCase()
    let uniqueSymbols = {}
    let result = ''
    let pattern = /[^\d]+\d+/g
    let match = str.match(pattern).forEach(element => {
        let number = Number(element.match(/\d+/))
        let chars = element.match(/[^\d]+/)[0]

        result += chars.repeat(number)
    })
    for (let char of result) {
        uniqueSymbols[char] = 0
    }

    console.log(`Unique symbols used: ${Object.keys(uniqueSymbols).length}`)
    console.log(result)
}
rageQuit([
    'e-!btI17z=E:DMJ19U1Tvg VQ>11P"qCmo.-0YHYu~o%/%b.}a[=d15fz^"{0^/pg.Ft{W12`aD<l&$W&)*yF1WLV9_GmTf(d0($!$`e/{D\'xi]-~17 *%p"%|N>zq@ %xBD18<Y(fHh`@gu#Z#p"Z<v13fI]\':\\Iz.17*W:\\mwV`z-15g@hUYE{_$~}+X%*nytkW15'
  ])