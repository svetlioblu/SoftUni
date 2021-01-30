function createFormatter(separator, symbol, symbolFirst, currencyFormatt) {

    return function (value) {
        let result = currencyFormatt(separator, symbol, symbolFirst, value)
        return result
    }
}

let dollarFormatter = createFormatter(',', '$', true, currencyFormatter);
console.log(dollarFormatter(5345))
console.log(dollarFormatter(3.1429))
console.log(dollarFormatter(2.709))

function currencyFormatter(separator, symbol, symbolFirst, value) {
    let result = Math.trunc(value) + separator;
    result += value.toFixed(2).substr(-2, 2);
    if (symbolFirst) return symbol + ' ' + result;
    else return result + ' ' + symbol;
}