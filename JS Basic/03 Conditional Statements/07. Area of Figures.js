function areaOfFigures(arg1, arg2, arg3) {

    let figure = arg1
    let sideWidth = Number(arg2)
    let sideWidth2 = Number(arg3)
    let result

    if (figure == 'square') {
        result = sideWidth * sideWidth

    } else if (figure == 'rectangle') {
        result = sideWidth * sideWidth2

    } else if (figure == 'circle') {
        result = Math.PI * Math.pow(sideWidth, 2)

    } else if (figure == 'triangle') {
        result = sideWidth * sideWidth2 / 2
        
    }
    console.log(result.toFixed(3))

}
areaOfFigures('triangle', '4.5', '20')