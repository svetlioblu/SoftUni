class Parking {
    constructor(capacity) {
        this.capacity = capacity
        this.vehicles = []
    }
    addCar(carModel, carNumber) {
        if (this.capacity <= 0) {
            throw new Error('Not enough parking space.')
        } else {
            this.vehicles.push({ carModel, carNumber, payed: false })
            this.capacity -= 1
        }
        return `The ${carModel}, with a registration number ${carNumber}, parked.`
    }
    removeCar(carNumber) {
        let isCar = false
        for (let car of this.vehicles) {
            if (car.carNumber == carNumber && car.payed == false) {
                isCar = true
                throw new Error(`${carNumber} needs to pay before leaving the parking lot.`)
            } else if (car.carNumber == carNumber && car.payed == true) {
                isCar = true
                this.capacity += 1
                this.vehicles = this.vehicles.filter(x => x.carNumber != carNumber)
                return `${carNumber} left the parking lot.`
            }
        }
        if (!isCar) {
            throw new Error(`The car, you're looking for, is not found.`)
        }
    }
    pay(carNumber) {
        let isCar = false
        for (let car of this.vehicles) {
            if (car.carNumber == carNumber && car.payed == false) {
                car.payed = true
                isCar = true
                return `${carNumber}'s driver successfully payed for his stay.`
            } else if (car.carNumber == carNumber && car.payed == true) {
                isCar = true
                throw new Error(`${carNumber}'s driver has already payed his ticket.`)
            }
        }
        if (!isCar) {
            throw new Error(`${carNumber} is not in the parking lot.`)
        }
    }
    getStatistics(carNumber) {
        if (!carNumber) {
            let result = [`The Parking Lot has ${this.capacity} empty spots left.`]
            this.vehicles.sort((a, b) => a.carModel.localeCompare(b.carModel))
            this.vehicles.forEach(car => {
                result.push(`${car.carModel} == ${car.carNumber} - ${car.payed ? 'Has payed' : `Not payed`}`)
            })
            return result.join('\n')
        } else {
            let result = ``
            this.vehicles.forEach(car => {
                if (carNumber == car.carNumber) {
                    result = `${car.carModel} == ${car.carNumber} - ${car.payed ? 'Has payed' : `Not payed`}`
                }
            })
            return result
        }

    }

}
const parking = new Parking(12);

console.log(parking.addCar("b", "TX3691CA"));
console.log(parking.addCar("a", "TX3491CA"));

console.log(parking.getStatistics());




