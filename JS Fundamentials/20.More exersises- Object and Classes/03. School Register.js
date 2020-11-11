function schoolRegister(arr) {

    let graduatedStudents = {}

    for (let line of arr) {
        let token = line.split(', ')
        let [name, grade, score] = token.map(e => {
            return e = e.split(': ')[1]
        })
        // score = Number(score)
        if (Number(score) >= 3) {
            grade = (Number(grade) + 1).toString()
            graduatedStudents[grade] == undefined ? graduatedStudents[grade] = name + ', ' + score : graduatedStudents[grade] += `, ${name}, ${score}`
        }
    }
    Object.keys(graduatedStudents).sort((a, b) => Number(a) - Number(b))
    for (let key of Object.keys(graduatedStudents)) {
        let result = ''
        let devider = 0
        let sum = 0
        graduatedStudents[key].split(`, `).map((x, i) => {

            if (i % 2 != 0) {
                sum += Number(x)
                devider++
            } else {
                result += x + ', '
            }
        })
        result += (sum / devider).toFixed(2)
        graduatedStudents[key] = result
    }

    for (let key of Object.keys(graduatedStudents)) {
        let avarageScore = graduatedStudents[key].split(', ').pop()
        graduatedStudents[key] = graduatedStudents[key].split(', ').slice(0, -1).join(', ')
        console.log(`${key} Grade\nList of students: ${graduatedStudents[key]}\nAverage annual grade from last year: ${avarageScore}
        `)


    }

}
schoolRegister(["Student name: Mark, Grade: 8, Graduated with an average score: 4.75",
    "Student name: Ethan, Grade: 9, Graduated with an average score: 5.66",
    "Student name: George, Grade: 8, Graduated with an average score: 2.83",
    "Student name: Steven, Grade: 10, Graduated with an average score: 4.20",
    "Student name: Joey, Grade: 9, Graduated with an average score: 4.90",
    "Student name: Angus, Grade: 11, Graduated with an average score: 2.90",
    "Student name: Bob, Grade: 11, Graduated with an average score: 5.15",
    "Student name: Daryl, Grade: 8, Graduated with an average score: 5.95",
    "Student name: Bill, Grade: 9, Graduated with an average score: 6.00",
    "Student name: Philip, Grade: 10, Graduated with an average score: 5.05",
    "Student name: Peter, Grade: 11, Graduated with an average score: 4.88",
    "Student name: Gavin, Grade: 10, Graduated with an average score: 4.00"]
)