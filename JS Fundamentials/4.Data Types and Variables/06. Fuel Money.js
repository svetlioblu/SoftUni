function fuelMoney(distance, passengers, fuelPrice) {
    let needFuel = (distance / 100) * 7
    needFuel += passengers * 0.100
    let result = needFuel * fuelPrice
    console.log(`Needed money for that trip is ${result}lv.`);
    
}
fuelMoney(90, 14, 2.88)