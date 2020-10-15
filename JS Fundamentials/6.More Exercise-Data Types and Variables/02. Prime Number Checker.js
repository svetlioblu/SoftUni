function primeNumberChecker(number) {
    let index = 2
    let isPrime = true
    while (index < number) {
        if (number % index === 0) {
            isPrime = false
        }
        index++

    }
    if (isPrime) {
        console.log(`true`)
        
    } else (
        console.log(`false`)
        
    )

}
primeNumberChecker(81)