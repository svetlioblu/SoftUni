function nationalCourt(arr) {
    arr = arr.map(Number)
    let queue = arr.pop()
    let peoplePerHour = arr.reduce((a, b) => a + b)
    let hour = 0

    while (queue > 0) {
        hour += 1
        if (hour % 4 != 0) {
            queue -= peoplePerHour
        }
    }
    console.log(`Time needed: ${hour}h.`);

}
nationalCourt(['3', '2', '5', '40'])