function lift(arr) {
    let people = Number(arr.shift())
    let wagons = arr.shift().split(' ').map(Number)

    wagons = wagons.map(x => {
        if (x < 4) {
            while (x != 4) {
                if (people <= 0) {
                    break
                }
                x += 1
                people--
            }
        }
        return x
    })
    let checkEmptySlots = wagons.filter(x => x != 4).length
    if (checkEmptySlots != 0 && people == 0) {
        console.log(`The lift has empty spots!\n${wagons.join(' ')}`)
    } else if (checkEmptySlots == 0 && people != 0) {
        console.log(`There isn't enough space! ${people} people in a queue!\n${wagons.join(' ')}`)

    } else {
        console.log(`${wagons.join(' ')}`)

    }

}
lift([
    "20",
    "0 2 0"
   ]   
)