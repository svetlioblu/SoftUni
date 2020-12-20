function dayOfWeek(day) {
    let week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    let result = week[day - 1]
    if (result === undefined) {
        console.log(`Invalid day!`);

    } else {
        console.log(result);
    }
}
dayOfWeek(11)