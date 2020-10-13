function fishTank(arg1, arg2, arg3, arg4) {
    let length = arg1
    let width = arg2
    let high = arg3
    let percenetage = arg4

    let totalTank = length * width * high
    // all liters that will have in total. Convert sm3 to liters 1cm3 = 0.001 l
    totalTank = totalTank * 0.001
    // percentage conversion of all content (pomp, sand)
    let tankContent = percenetage / 100
    // from the total water remove the percentage of sand/pomp
    let result = totalTank - totalTank * tankContent
    result = result.toFixed(3)


    console.log(result)

}
fishTank("85",
    "75",
    "47",
    "17"
)