function meetings(input) {

    let meetings = {}

    for (let line of input) {
        let [day, name] = line.split(' ')
        if (meetings.hasOwnProperty(day)) {
            console.log(`Conflict on ${day}!`)
        } else {
            console.log(`Scheduled for ${day}`)
           meetings[day] = name
        }
    }
    for(let key in meetings) {
        console.log(`${key} -> ${meetings[key]}`)
    }
}
meetings(['Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim']
)