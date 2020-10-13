function newHouse(arg1, arg2, arg3) {
    let flowerType = arg1
    let flowerCount = Number(arg2)
    let budget = Number(arg3)
    let result = 0

    switch (flowerType) {
        case 'Roses':
            result = flowerCount * 5
            if (flowerCount > 80) {
             result -= result * 0.10 
            }

            break
        case 'Dahlias':
            result = flowerCount * 3.80
            if(flowerCount > 90)
            { result -= result * 0.15 }

            break
        case 'Tulips':
            result = flowerCount * 2.80
            if(flowerCount > 80)
            { result -= result * 0.15 }

            break
        case 'Narcissus':
            result = flowerCount * 3.00
            if(flowerCount < 120)
            { result += result * 0.15 }

            break
        case 'Gladiolus':
            result = flowerCount * 2.50
            if(flowerCount < 80)
            { result += result * 0.20 }

            break
    }
    if (budget >= result) {
        let leftSum = budget - result
        console.log(`Hey, you have a great garden with ${flowerCount} ${flowerType} and ${leftSum.toFixed(2)} leva left.`)
    } else {
        let leftSum = result - budget
        console.log(`Not enough money, you need ${leftSum.toFixed(2)} leva more.`)
        
    }
        

}


newHouse('Narcissus', '119', '360')