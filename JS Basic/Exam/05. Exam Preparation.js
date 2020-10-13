function examPreparation(arg1, arg2, arg3) {
    let studentsCount = Number(arg1)
    let taskCount = Number(arg2)
    let trainerEnergy = Number(arg3)

    let solvedTasks = 0
    let askedQuestions = 0

    while (trainerEnergy >= 0) {
        solvedTasks += taskCount
        trainerEnergy += 2 * taskCount
        studentsCount -= taskCount
        askedQuestions += studentsCount * 2
        trainerEnergy -= 3 * (studentsCount * 2)

        if (studentsCount < 10) {
            return console.log(`The students are too few!\nProblems solved: ${solvedTasks}`)
        } else {
            let leftstudents = Math.floor(studentsCount / 10)
            studentsCount += leftstudents
        }


    }
    console.log(`The trainer is too tired!\nQuestions asked: ${askedQuestions}`)



}
examPreparation('20', '1', '100')