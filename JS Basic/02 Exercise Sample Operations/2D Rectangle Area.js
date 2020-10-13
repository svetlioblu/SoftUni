function rectangleArea(x1, y1, x2, y2) {
    let horizontal1 = Number(x1)
    let vertical1 = Number(y1)
    let horizontal2 = Number(x2)
    let vertical2 = Number(y2)
    // take absolute value 
    let length = Math.abs(horizontal1 - horizontal2)
    let width = Math.abs(vertical1 - vertical2)
    // formula to calculate rectangle area
    let area = length * width
    // formula to calculate rectangle perimeter
    let perimeter = 2 * (length + width)

    area = area.toFixed(2)
    perimeter = perimeter.toFixed(2)
    console.log(area)
    console.log(perimeter)
}

rectangleArea('60',
    '20',
    '10',
    '50'
)