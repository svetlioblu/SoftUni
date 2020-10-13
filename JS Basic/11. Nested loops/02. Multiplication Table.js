function multiplicationTable() {
    for (let i = 1; i <= 10; i++) {
        for (let y = 1; y <= 10; y++) {
            let result = i * y
            console.log(`${i} * ${y} = ${result}`)
            
        }
    }
}
multiplicationTable()