function garage(input) {

    let location = new Map()

    for (let line of input) {
        let [garageNumber, carDetails] = line.split(' - ')
        carDetails = carDetails.split(': ').join(' - ')

        if (!location.has(garageNumber)) {
            location.set(garageNumber, [])
        }
        location.get(garageNumber).push(carDetails)
    }
    for(let key of location.entries()) {
        console.log(`Garage № ${key[0]}`)
        key[1].forEach(element => {
          console.log(`--- ${element}`)  
        })
    }
  

}
garage(['1 - color: blue, fuel type: diesel', '1 - color: red, manufacture: Audi', '2 - fuel type: petrol', '4 - color: dark blue, fuel type: diesel, manufacture: Fiat'])