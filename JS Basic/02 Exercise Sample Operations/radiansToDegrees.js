function radiansToDegrees(rad) {
    //градус = радиан * 180 / π
    let radians = Number(rad)
    let degree = radians * 180 / Math.PI
    let result = degree.toFixed(0)
    console.log(result)

}
radiansToDegrees('6.2832')