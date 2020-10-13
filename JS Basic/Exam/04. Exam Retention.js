function examRetention(arg1, arg2) {
    let studentsCount = Number(arg1)
    let seasons = Number(arg2)
    let firstExam = 0
    let secondExam = 0
    let continueStudents = 0
    let returningStudents = 0




    for (let i = 1; i <= seasons; i++) {
        firstExam = 0
        secondExam = 0
        continueStudents = 0
        returningStudents = 0
        firstExam += Math.ceil(studentsCount * 0.90)
        secondExam += Math.ceil(firstExam * 0.90)
        continueStudents += Math.ceil(secondExam * 0.80)
        if (i % 3 === 0) {
            returningStudents += Math.ceil(continueStudents + continueStudents * 0.15)
        } else {
            returningStudents += Math.ceil(continueStudents + continueStudents * 0.05)
        }
        studentsCount = returningStudents

    }
    console.log(`Students: ${studentsCount}`)


}

examRetention('2000', '5')