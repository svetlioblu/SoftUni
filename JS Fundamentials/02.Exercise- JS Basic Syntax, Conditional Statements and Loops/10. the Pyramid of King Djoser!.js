function thePyramidOfKingDjoser(arg1, arg2) {
    let size = arg1
    let height = arg2
    let stone = 0
    let marble = 0
    let lapisLazuli = 0
    let gold = 0
    let increment = height
    let loopCounter = 1

    while (size > 2) {
        let area = size * size
        let perimeter = 4 * size - 4
        stone += (area - perimeter) * height
        if (loopCounter === 5) {
            lapisLazuli += perimeter * height
            loopCounter = 0
        } else {
            marble += perimeter * height
        }
        size -= 2
        loopCounter += 1
        increment += height
    }
    gold = Math.ceil((size * size) * height)
    console.log(`Stone required: ${Math.ceil(stone)}`);
    console.log(`Marble required: ${Math.ceil(marble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapisLazuli)}`);
    console.log(`Gold required: ${gold}`);
    console.log(`Final pyramid height: ${Math.floor(increment)}`);

}
thePyramidOfKingDjoser(11, 1)