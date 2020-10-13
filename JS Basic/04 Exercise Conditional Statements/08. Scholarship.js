function scholarship(arg1, arg2, arg3) {
    let income = Number(arg1)
    let averageSuccess = Number(arg2)
    let minSalary = Number(arg3)
    let social = 0
    let success = 0

    if (income < minSalary && averageSuccess > 4.5) {
        social =  minSalary * 0.35

    }
    if (averageSuccess >= 5.5) {
        success = averageSuccess * 25
    }

    if (social=== 0 && success === 0) {
        console.log(`You cannot get a scholarship!`)
    }

    if (social !== 0 && social > success) {
        console.log(`You get a Social scholarship ${Math.floor(social)} BGN`)

    } else if (success !== 0 && success >= social) {
        console.log(`You get a scholarship for excellent results ${Math.floor(success)} BGN`)

    }
}
scholarship('300.00', '5.65', '420.00')
