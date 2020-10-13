function changeBureau(input) {

    let bitCoins = Number(input[0])
    let chineseUans = Number(input[1])
    let commision = Number(input[2])
    let dollars = 1.76
    let euro = 1.95

    // bitcoins in Lv.
    bitCoins = bitCoins * 1168
    // convert uans to Lv according to Dollar cource
    chineseUans = (chineseUans * dollars) * 0.15

    let calculationWithoutCommision = (bitCoins + chineseUans) / euro
    // convert commision in procentage
    commision = (calculationWithoutCommision * commision) / 100

    let result = calculationWithoutCommision - commision
    
 console.log(result.toFixed(2));
}

changeBureau(['20', '5678', '2.4'])

