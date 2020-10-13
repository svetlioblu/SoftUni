function charityCompaign(arg1, arg2, arg3, arg4, arg5) {

    let days = Number(arg1)
    let people = Number(arg2)
    let cake = Number(arg3)
    let goof = Number(arg4)
    let pancake = Number(arg5)
    let hR = days * people
    let sum = cake * 45 + goof * 5.80 + pancake * 3.20
    let sumWithCosts = sum - (1 / 8) * sum
    let result = hR * sumWithCosts

    console.log(result.toFixed(2));

}
charityCompaign('131', '5', '9', '33', '46')