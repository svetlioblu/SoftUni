function buildAWall(wall) {
    wall = wall.map(Number)
    let concreteDay = []
    let pesos = []

    daysCount(wall)



    function daysCount(wall) {

        wall = wall.filter(x => x !== 30)

        wall = wall.map(x => x + 1)

        wall.length != 0 ? concreteDay.push(wall.length * 195) : false

        if (wall.length !== 0) {
            daysCount(wall)
        }

    }
    pesos = concreteDay.map(x => x * 1900).reduce((a, b) => a + b)

    return `${concreteDay.join(', ')}\n${pesos} pesos`
}
console.log(buildAWall([17, 22, 17, 19, 17]))