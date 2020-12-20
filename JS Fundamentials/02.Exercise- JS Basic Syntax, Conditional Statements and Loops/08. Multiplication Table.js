function multiplicationTable(num) {
    let result = 0
    for (let i = 1; i <= 10; i++) {
        result = num * i
        console.log(`${num} X ${i} = ${result}`)

    }
}
multiplicationTable(2)