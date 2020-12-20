function schoolGrades(input) {
    let students = {}
    for (let line of input) {
        let tokens = line.split(' ')
        let name = tokens.shift()
        // tokens = tokens.map(Number)
        if (students.hasOwnProperty(name)) {
            tokens.forEach(element => {
                students[name].push(element)
            });
        } else {
            students[name] = tokens
        }

    }
    let sorted = Object.entries(students).sort(averageSort)

    for (let line of sorted) {
        let name = line.shift()
        let score = line.shift().join(', ')
        console.log(`${name}: ${score}`)
        
    }


    function averageSort(a, b) {
        let avA = a[1].map(Number).reduce((a, b) => a + b) / a[1].length
        let avB = b[1].map(Number).reduce((a, b) => a + b) / b[1].length
        return avA - avB
    }
}
schoolGrades(['Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6']
)