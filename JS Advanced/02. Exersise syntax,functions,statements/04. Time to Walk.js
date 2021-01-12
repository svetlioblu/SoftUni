"use strict"
function timetoWalk(steps, pace, kmch) {
    // covert to m/s from km/h
    let speed = kmch * 1000 / 3600
    const distance = steps * pace
    const rest = Math.floor(distance / 500) * 60
    const time = distance / speed + rest
    const hours = Math.floor(time / 3600).toFixed(0).padStart(2, "0")
    const minutes = Math.floor((time - hours * 3600) / 60).toFixed(0).padStart(2, "0")
    const seconds = (time - hours * 60 * 60 - minutes * 60).toFixed(0).padStart(2, "0")
    console.log(`${hours}:${minutes}:${seconds}`);
}
timetoWalk(4000, 0.60, 5)
