function oddAndEvenSum(num) {
    let currentNumber = num
    let evenSum = 0
    let oddSum = 0
    while (currentNumber > 0) {
        let tempNumber = currentNumber % 10
        if (tempNumber % 2 === 0) {
            evenSum += tempNumber
        } else {
            oddSum += tempNumber
        }
        currentNumber *= 0.1
        currentNumber=Number.parseInt(currentNumber)
    }
   return  console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`)
    
}
oddAndEvenSum(3495892137259234)