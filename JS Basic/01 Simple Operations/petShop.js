function petShop(dogs, others) {
    //"{крайната сума} lv."
    let dogFood = Number(dogs) * 2.50
    let allAnimalFood = Number(others) * 4
    let sum = dogFood + allAnimalFood
    sum = sum.toFixed(2)

    let result = `${sum} lv.`
    console.log(result)


}

petShop("5", "4")