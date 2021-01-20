
function createAssemblyLine() {

    function adjustTemp() {
        if (this.temp !== this.tempSettings) {
            this.temp < this.tempSettings ? this.temp += 1 : this.temp -= 1
        }
    }

    return {
        hasClima: function (car) {
            car.temp = 21
            car.tempSettings = 21
            car.adjustTemp = adjustTemp
            return car
        }
    }
}

const myCar = {
    make: 'Toyota',
    model: 'Avensis'
};

const test = createAssemblyLine()
console.log(test.hasClima(myCar));
myCar.adjustTemp()
console.log(myCar);



