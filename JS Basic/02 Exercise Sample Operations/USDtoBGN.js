function converter (USD) {
let Dolars = Number(USD)
let BGN = Dolars * 1.79549
let result = BGN.toFixed(2)
console.log(result)

}
converter('100')