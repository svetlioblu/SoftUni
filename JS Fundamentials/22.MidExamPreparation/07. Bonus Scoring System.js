function bonusScoringSystem(arr) {
    arr = arr.map(Number)
    let studentsCount = arr.shift()
    let lectures = arr.shift()
    let additionalBonus = arr.shift()
    let result = []

    arr.forEach(element => {
        if (lectures != 0) {
            result.push(Math.round(element / lectures * (5 + additionalBonus)))
        }
    })
    let resultBeforeSort = result.slice()

    let maxBonus = result.sort((a, b) => b - a)[0]

    let studentAttendnces = arr[resultBeforeSort.indexOf(maxBonus)]
// alwais check constrains if strat from 0
    if (studentsCount == 0) {
        maxBonus = 0
        studentAttendnces = 0

    }

    console.log(`Max Bonus: ${maxBonus}.
The student has attended ${studentAttendnces} lectures.`)

}
bonusScoringSystem([
    '0', '25', '30',

]

)