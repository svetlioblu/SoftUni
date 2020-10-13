function studentInformation(name, age, grade) {
    let fName = name
    let old = Number(age)
    let assessment = Number(grade)

    console.log(`Name: ${fName}, Age: ${old}, Grade: ${assessment.toFixed(2)}`)
    

}

studentInformation('John', 15, 5.54678)