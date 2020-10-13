function examPreparation(input) {
    let index = 0
    let numberOfProblems = 0
    let badAssessments = 0
    let scoreSum = 0
    let avgAssessment = 0
    let lastExam = ''
    let badAssessmentsCount = Number(input[index])
    index++
    let examTitle = input[index]
    index++
    let examAssessment = Number(input[index])
    index++

    while (examTitle !== 'Enough') {
        numberOfProblems += 1
        lastExam = examTitle
        if (examAssessment <= 4.00) {
            badAssessments += 1
            if (badAssessments === badAssessmentsCount) {
                return console.log(`You need a break, ${badAssessments} poor grades.`)
            }
        }
        scoreSum += examAssessment
        examTitle = input[index]
        index++
        examAssessment = Number(input[index])
        index++
    }
    avgAssessment = scoreSum / numberOfProblems
    console.log(`Average score: ${avgAssessment.toFixed(2)}\nNumber of problems: ${numberOfProblems}\nLast problem: ${lastExam}`)
}
examPreparation([
    '3',
    'Money',
    '6',
    'Story',
    '4',
    'Spring Time',
    '5',
    'Bus',
    '6',
    'Enough'
])