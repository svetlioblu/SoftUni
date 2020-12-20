function worldTour(input) {
    let destination = input.shift()
    let actions = {
        "Add Stop": function (index, string) {
            index = Number(index)
            if (isNaN(index) == false && index >= 0 && index < destination.length) {
                destination = destination.substring(0, index) + string + destination.substring(index)  
            }
            console.log(destination)
        },
        "Remove Stop": function (start, end) {
            start = Number(start)
            end = Number(end)
            if (isNaN(start) == false && start >= 0 && start < destination.length && isNaN(end) == false && end >= 0 && end < destination.length) {
                destination = destination.substring(0, start) + destination.substring(end + 1) 
            }
            console.log(destination)
        },
        "Switch": function (substr, replace) {
            if (destination.includes(substr)) {
                destination = destination.split(substr).join(replace)  
            }
            console.log(destination)
        }
    }
    let line = input.shift()
    while (line != 'Travel') {
        let [action, a, b] = line.split(':')
        actions[`${action}`](a, b)
        line = input.shift()
    }
console.log(`Ready for world tour! Planned stops: ${destination}`)

}
worldTour([
    'Hawai::Cyprys-Greece',
    'Add Stop:7:Rome',
    'Remove Stop:11:16',
    'Switch:Hawai:Bulgaria',
    'Travel'
]
)