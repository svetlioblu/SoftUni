function pirates(one, two, three) {
    let allDays = one
    let daily = two
    let expected = three
    let sum = 0
    for (let i = 1; i <= allDays; i++) {
        sum += daily
        if (i % 3 == 0) {
            sum += daily * 0.5
        }
        if (i % 5 == 0) {
            sum -= sum * 0.3
        }
    }
    if (sum >= expected) {
        console.log(`Ahoy! ${sum.toFixed(2)} plunder gained.`)
    } else {

        let percentage = (sum * 100 / expected).toFixed(2)
        console.log(`Collected only ${percentage}% of the plunder.`)

    }

}
pirates(0,0, 0.0)