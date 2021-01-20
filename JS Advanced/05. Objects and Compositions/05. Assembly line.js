
function createAssemblyLine() {

    function adjustTemp() {
        if (this.temp !== this.tempSettings) {
            this.temp < this.tempSettings ? this.temp += 1 : this.temp -= 1
        }
    }
    function hasClima(car) {
        car.temp = 21
        car.tempSettings = 21
        car.adjustTemp = adjustTemp
        return car
    }
    function nowPlaying() {
        if (this.currentTrack.name || this.currentTrack.artist != 'null') {
            console.log(`Now playing \'${this.currentTrack.name}\' by ${this.currentTrack.artist}`)
        }
    }
    function hasAudio(car) {
        car.currentTrack = { name: 'null', artist: 'null' }
        car.nowPlaying = nowPlaying
    }
    function checkDistance(num) {
        if (num < 0.1) {
            console.log(`Beep! Beep! Beep!`);
        } else if (num >= 0.1 && num < 0.25) {
            console.log(`Beep! Beep!"`);
        } else if (num >= 0.25 && num < 0.5) {
            console.log(`Beep!`)
        } else {
            console.log('');
        }
    }
    function hasParktronic(car) {
        car.checkDistance = checkDistance
    }

    return {
        hasClima,
        hasAudio,
        hasParktronic
    }
}
const assemblyLine = createAssemblyLine();

const myCar = {
    make: 'Toyota',
    model: 'Avensis'
};
assemblyLine.hasClima(myCar);
console.log(myCar.temp);
myCar.tempSettings = 18;
myCar.adjustTemp();
console.log(myCar.temp);
assemblyLine.hasAudio(myCar);
myCar.currentTrack = {
    name: 'Never Gonna Give You Up',
    artist: 'Rick Astley'
};
myCar.nowPlaying();
assemblyLine.hasParktronic(myCar);
myCar.checkDistance(0.4);
myCar.checkDistance(0.2);
console.log(myCar);




