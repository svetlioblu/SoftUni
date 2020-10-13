function worldSwimmingRecord(arg1, arg2, arg3) {
    let worldRecordInSec = Number(arg1)
    let distanceInMeters = Number(arg2)
    let timeForOneMeterInSec = Number(arg3)

    //water slow each 15m with 12.5s

    let timeToSwimInSec = distanceInMeters * timeForOneMeterInSec
    let waterSlowOn15Meters = Math.floor((distanceInMeters / 15)) * 12.5

    let realTime = timeToSwimInSec + waterSlowOn15Meters

    if (worldRecordInSec > realTime) {

        console.log(`Yes, he succeeded! The new world record is ${realTime.toFixed(2)} seconds.`)

    } else if (worldRecordInSec < realTime) {
        let calculation = realTime - worldRecordInSec
        console.log(`No, he failed! He was ${calculation.toFixed(2)} seconds slower.`);
    }
}
worldSwimmingRecord('10464', '1500', '20')