function carFactory(order) {

    let engine = [{ power: 90, volume: 1800 }, { power: 120, volume: 2400 }, { power: 200, volume: 3500 }]
    let carriage = {
        hatchback: { type: 'hatchback', color: order.color },
        coupe: { type: 'coupe', color: order.color }
    }
    function pickEngine(power) {
        if (order.power >= 200) {
            return engine[2]
        } else if (order.power > 90 && order.power <= 120) {
            return engine[1]
        } else {
            return engine[0]
        }
    }
    function wheels(inch) {
        inch % 2 === 0 ? inch -= 1 : inch
        return [inch, inch, inch, inch]
    }

    return {
        model: order.model,
        engine: pickEngine(order.power),
        carriage: carriage[order.carriage],
        wheels: wheels(order.wheelsize)
    }

}
console.log(carFactory({ model: 'Opel Vectra',
power: 110,
color: 'grey',
carriage: 'coupe',
wheelsize: 17 }


));

