function roadRadar(speed, zone) {
    let limits = {
        motorway: 130,
        interstate: 90,
        city: 50,
        residential: 20
    }
    if (speed <= limits[zone]) {

        return `Driving ${speed} km/h in a ${limits[zone]} zone`
    } else {
        let overLimit = speed - limits[zone]
        let status = ''
        if (overLimit > 40) {
            status = 'reckless driving'
        } else if (overLimit > 20 && overLimit <= 40) {
            status = 'excessive speeding'
        } else {
            status = 'speeding'

        }
        return `The speed is ${overLimit} km/h faster than the allowed speed of ${limits[zone]} - ${status}`
    }

}
console.log(roadRadar(40, 'city'))
console.log(roadRadar(21, 'residential'))
console.log(roadRadar(120, 'interstate'))
console.log(roadRadar(200, 'motorway'))



