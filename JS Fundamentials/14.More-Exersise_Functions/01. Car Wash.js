function carWash(arr) {
    let percent = 0
    for (let action of arr) {
        switch (action) {
            case 'soap':
                percent += 10
                break
            case 'water':
                percent *= 1.20
                break
            case 'vacuum cleaner':
                percent *= 1.25
                break
            case 'mud':
                percent -= percent * 0.10
                break
        }
    }
    return console.log(`The car is ${percent.toFixed(2)}% clean.`)


}
carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water'])