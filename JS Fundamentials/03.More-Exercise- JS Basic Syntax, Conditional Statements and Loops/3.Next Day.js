function nextDay(year, month, day) {
    let result = new Date(year, month - 1, day + 2).toISOString().slice(0, 10).replace(/-(0)/g, '-')

    console.log(result)

}
nextDay(2017,
    2,
    28)