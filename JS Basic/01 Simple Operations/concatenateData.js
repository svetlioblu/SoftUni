function concatenateData(fName, lName, cAge, cTown) {

    //  You are <firstName> <lastName>, a <age>-years old person from <town>.
    let firstName = fName
    let lastName = lName
    let currentAge = parseInt(cAge)
    let currentTown = cTown
    console.log(`You are ${firstName} ${lastName}, a ${currentAge}-years old person from ${currentTown}.`);

}

concatenateData("Ivan", "Stoqnov", "23", "Plovdiv")