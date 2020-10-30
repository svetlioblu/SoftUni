function radioCristals(arr) {

    let ticknessRequired = arr.shift()
    let etch = 0
    let isX = false
    let currentTickness = 0
    for (let i = 0; i < arr.length; i++) {
        currentTickness = arr[i]
        console.log(`Processing chunk ${currentTickness} microns`)
        currentTickness = chunkCut(currentTickness)
        currentTickness = chunkLap(currentTickness)
        currentTickness = chunkGrind(currentTickness)
        currentTickness = chunkEtch(currentTickness)
        //currentTickness = chunkWash(currentTickness)
        console.log(`Finished crystal ${currentTickness} microns`)
    }


    function chunkCut(ore) {
        let cut = 0
        let process = ore / 4
        while (process >= ticknessRequired) {
            ore = process
            cut++
            process = process / 4
        }
        if (cut !== 0) {
            console.log(`Cut x${cut}`)
            ore = chunkWash(ore)
            return ore
        }
        return ore
    }
    function chunkLap(ore) {
        let lap = 0
        let process = ore - (ore * 0.20)
        while (process >= ticknessRequired) {
            ore = process
            lap++
            process = ore - (ore * 0.20)
        }
        if (lap !== 0) {
            console.log(`Lap x${lap}`)
            ore = chunkWash(ore)
        }
        return ore
    }
    function chunkWash(ore) {
        console.log(`Transporting and washing`)
        return Math.floor(ore)
    }
    function chunkGrind(ore) {
        let grind = 0
        let process = ore - 20
        while (process >= ticknessRequired) {
            ore = process
            grind++
            process = ore - 20
        }
        if (grind !== 0) {
            console.log(`Grind x${grind}`)
            ore = chunkWash(ore)
        }
        return ore
    }
    function chunkEtch(ore) {

        let process = ore - 2
        while (process >= ticknessRequired) {
            ore = process
            etch++
            process = ore - 2
        }
        if (ore - 2 === ticknessRequired - 1) {
            //console.log(`X-ray x1`)
            ore = ticknessRequired
            etch++
            isX = true
        }
        if (etch !== 0) {
            console.log(`Etch x${etch}`)
            ore = chunkWash(ore)
        }
        if (isX) {
            console.log(`X-ray x1`)
            isX = false
        }
        return ore
    }


}
radioCristals([1375, 50000])