function towns(arr) {

    class Towns {
        constructor(town, latitude, longitude) {
            this.town = town
            this.latitude = latitude
            this.longitude = longitude
        }
    }

    for (let town of arr) {
        let [city, lat, long] = town.split(' | ')
        lat = Number(lat).toFixed(2)
        long = Number(long).toFixed(2)

        let currentTown = new Towns(city, lat, long)
        currentTown = JSON.stringify(currentTown)
        console.log(JSON.parse(currentTown))

    }

}
towns(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625']
)