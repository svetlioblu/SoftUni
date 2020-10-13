function bonusScore(arg) {
    let number = Number(arg)
    let bonusCounter=0
    
    if ((number % 2 === 0) && (number % 10 === 5)) {
        bonusCounter = 3
    } else if (number % 10 === 5) {
        bonusCounter = 2

    } else if (number % 2 === 0) {
        bonusCounter = 1
    }

    if (number <= 100) {
        bonusCounter = bonusCounter + 5
        number = number + bonusCounter
    } else if (number > 1000) {
        bonusCounter = bonusCounter + (number * 0.10)
        number = number + bonusCounter

    } else if (number > 100) {
        bonusCounter = bonusCounter + (number * 0.20)
        number = number + bonusCounter

    }
    console.log(bonusCounter)
    console.log(number)

}

bonusScore('15875') 