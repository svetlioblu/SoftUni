function softUniReception(arr) {
    arr = arr.map(Number)
    let students = arr.pop()
    let studentsPerHour = arr.reduce((a, b) => a + b)
    let hours = 0
    let counter = 1

    while (students > 0) {
        if (counter != 0 && counter % 4 == 0) {
            hours++
        } else {
            students -= studentsPerHour
            hours++
        }
        counter++
    }
    console.log(`Time needed: ${hours}h.`);
}
softUniReception(['1','2','3','45'])