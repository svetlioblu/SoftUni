function examPoints(arg1, arg2, arg3) {

    let task = arg1
    let points = Number(arg2)
    let course = arg3

    switch (task) {
        case '1':
            if (course === 'Basics') {
                points *= 0.08
                points -= points * 0.20
            } else if (course === 'Fundamentals') {
                points *= 0.11
            } else if (course === 'Advanced') {
                points *= 0.14
                points += points * 0.20
            }
            break
        case '2':
            if (course === 'Basics') {
                points *= 0.09

            } else if (course === 'Fundamentals') {
                points *= 0.11
            } else if (course === 'Advanced') {
                points *= 0.14
                points += points * 0.20
            }
            break
        case '3':
            if (course === 'Basics') {
                points *= 0.09

            } else if (course === 'Fundamentals') {
                points *= 0.12
            } else if (course === 'Advanced') {
                points *= 0.15
                points += points * 0.20
            }
            break
        case '4':
            if (course === 'Basics') {
                points *= 0.10

            } else if (course === 'Fundamentals') {
                points *= 0.13
            } else if (course === 'Advanced') {
                points *= 0.16
                points += points * 0.20
            }
            break
    }
    console.log(`Total points: ${points.toFixed(2)}`)


}
examPoints('2', '95', 'Advanced')