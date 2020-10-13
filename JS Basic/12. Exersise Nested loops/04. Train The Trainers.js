function trainTheTrainers(input) {
    let juryCount = Number(input.shift())
    let presentation = input.shift()
    let totalPresentationAsessmentSum = 0
    let currentPresentationAsessmentSum = 0
    let totalAsessmentsCount = 0


    while (presentation != 'Finish') {
        currentPresentationAsessmentSum = 0
        for (let i = 0; i < juryCount; i++) {
            currentPresentationAsessmentSum += Number(input.shift())
            totalAsessmentsCount++
        }
        totalPresentationAsessmentSum += currentPresentationAsessmentSum
        console.log(`${presentation} - ${(currentPresentationAsessmentSum / juryCount).toFixed(2)}.`)
        presentation = input.shift()
    }
    console.log(`Student\'s final assessment is ${(totalPresentationAsessmentSum / totalAsessmentsCount).toFixed(2)}.`)

}
trainTheTrainers([
'3',
'Arrays',
'4.53',
'5.23',
'5.00',
'Lists',
'5.83',
'6.00',
'5.42',
'Finish'
])