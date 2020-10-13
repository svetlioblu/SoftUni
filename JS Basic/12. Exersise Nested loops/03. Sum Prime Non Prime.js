function sumPrimeNonPrime(input) {
    let number = input.shift()
    let isPrime = true
    let primeSum = 0
    let noPrimeSum = 0
    while (number != 'stop') {
        let currentValue = Number(number)
        if (currentValue < 0) {
            console.log(`Number is negative.`)
            number = input.shift()
            continue
        }
        for (let i = 2; i < currentValue; i++) {
            if (currentValue % i === 0) {
                isPrime = false
                break
            }
        }
        if (isPrime) {
            primeSum += currentValue
        } else {
            noPrimeSum += currentValue
        }

        number = input.shift()
        isPrime = true
    }
    console.log(`Sum of all prime numbers is: ${primeSum}`)
    console.log(`Sum of all non prime numbers is: ${noPrimeSum}`)
}
sumPrimeNonPrime([
    '0',
    '-9',
    '0',
    'stop'
])