function tailoringWorkshop(arg1, arg2, arg3) {
    let tableCount = Number(arg1)
    // in metre 
    let tableLenght = Number(arg2)
    let tableWidth = Number(arg3)
    //---tablecloths---

    let tablecloth = tableCount * (tableLenght + 2 * 0.30) * (tableWidth + 2 * 0.30)

    //---quads---
    let quads = tableCount * (tableLenght / 2) * (tableLenght / 2)

    // calculation in USD and BGN
    let usdPrice = tablecloth * 7 + quads * 9
    let bgnPrice = usdPrice * 1.85
    console.log(`${usdPrice.toFixed(2)} USD`);
    console.log(`${bgnPrice.toFixed(2)} BGN`);

}

tailoringWorkshop('10', '1.20', '0.65')
