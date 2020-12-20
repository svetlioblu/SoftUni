function triangleArea(sideOne, sideTwo, sideThree) {
    //Heron Formula
    let halfPerimeter = (sideOne + sideTwo + sideThree) / 2
    let a = halfPerimeter - sideOne
    let b = halfPerimeter - sideTwo
    let c = halfPerimeter - sideThree
    let area = Math.sqrt(halfPerimeter * a * b * c)

    console.log(area);
}
triangleArea(2,
    3.5,
    4
)