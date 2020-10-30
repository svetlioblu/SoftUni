function grades(grade) {
    if (grade >= 2.00 && grade <= 2.99) {
        return console.log('Fail')

    } else if (grade >= 3.00 && grade <= 3.49) {
        return console.log('Poor')
    } else if (grade >= 3.50 && grade <= 4.49) {
        return console.log('Good')
    } else if (grade >= 4.50 && grade <= 5.49) {
        return console.log('Very good')
    }else if (grade >= 5.50 && grade <=6.00) {
        return console.log('Excellent')
    } 
}
grades(2.99)