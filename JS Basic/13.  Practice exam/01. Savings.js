function savings(input) {
    let montlyIncome = Number(input[0])
    let monthsToFestival = Number(input[1])
    let personalExpensesMonthly = Number(input[2])

    let expensesPerMonth = (montlyIncome - montlyIncome * 0.30) - personalExpensesMonthly
    let percentage = (expensesPerMonth / montlyIncome) * 100
    let savedMoney = expensesPerMonth * monthsToFestival
    console.log(`She can save ${percentage.toFixed(2)}%\n${savedMoney.toFixed(2)}`)


}
savings([
    '2050',
    '5',
    '900'
])