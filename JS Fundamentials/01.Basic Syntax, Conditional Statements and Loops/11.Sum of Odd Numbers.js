function sumOfoddNumbers(n) {
    let number = Number(n)
    let result = 0
    let oddCount = 0


    for (let i = 1; i <= 100; i++) {
        if (i % 2 !== 0) {
            console.log(i)
            result += i
            oddCount++
        }
        if(oddCount === number){
            break
        }
    }
console.log(`Sum: ${result}`)

}
sumOfoddNumbers(3)