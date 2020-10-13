function verySpecialNumbers(arg1, arg2, arg3) {
    let start = Number(arg1)
    let end = Number(arg2)
    let n = Number(arg3)
    let powerN = n * n

    for (let i = start; i <= end; i++) {
        if (i % powerN === 0) {
            console.log(`Very special number: ${i}`)

        } else if (i % n === 0) {
            console.log(`Special number: ${i}`)

        } else { console.log(i) }
    }

}
verySpecialNumbers('1', '10', '4')