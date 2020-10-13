function alcoholMarket(arg1, arg2, arg3, arg4, arg5) {

    let whiskeyCost = Number(arg1)
    let beer = Number(arg2)
    let wine = Number(arg3)
    let brandy = Number(arg4)
    let whiskeyQuantity = Number(arg5)

    let brandyCost = whiskeyCost * 0.50
    let wineCost = brandyCost * 0.60
    let beerCost = brandyCost * 0.20

    let result = (whiskeyQuantity * whiskeyCost) + (brandy * brandyCost) + (wine * wineCost) + (beer * beerCost)

    console.log(result.toFixed(2));
}

alcoholMarket('63.44',
    '3.57',
    '6.35',
    '8.15',
    '2.5'
)