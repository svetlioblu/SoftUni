function flightSceduale(arr) {
    let status = arr[2][0]
    let actualFlightStatus = {}

    for (let line of arr[0]) {
        let id = line.match(/^\S+/)[0]
        let destination = line.match(/\s(.*)/)[1]
        actualFlightStatus[id] = destination
    }
    for (let line of arr[1]) {
        let id = line.match(/^\S+/)[0]
        let status = line.match(/\s(.*)/)[1]
        actualFlightStatus[id] += ` ${status}`
    }
    for (let key of Object.keys(actualFlightStatus)) {
        if (actualFlightStatus[key].includes('undefined')) {
            continue
        }
        if (actualFlightStatus[key].includes('Cancelled') && status == "Cancelled") {
            let [destination, status] = actualFlightStatus[key].split(' ')
            let flight = {
                Destination: destination,
                Status: status
            }
            console.log(flight)
        } else if (!actualFlightStatus[key].includes('Cancelled') && status != "Cancelled") {
            let destination = actualFlightStatus[key]
            let flight = {
                Destination: destination,
                Status: status
            }
            console.log(flight)
         }
    }

}
flightSceduale([['WN269 Delaware',
'FL2269 Oregon',
 'WN498 Las Vegas',
 'WN3145 Ohio',
 'WN612 Alabama',
 'WN4010 New York',
 'WN1173 California',
 'DL2120 Texas',
 'KL5744 Illinois',
 'WN678 Pennsylvania'],
 ['DL2120 Cancelled',
 'WN612 Cancelled',
 'WN1173 Cancelled',
 'SK430 Cancelled'],
 ['Cancelled']
]

)