function solve(input) {
    let nameMovie = input.shift();
    let totalTicket = 0;
    let studentCounter = 0;
    let standardCounter = 0;
    let kidsCounter = 0;
    while (nameMovie !== 'Finish') {
        let freeSpace = Number(input.shift());
        let typeTicket = input.shift();
        let sellsTicket = 0;
        while (typeTicket !== 'End') {
            if (typeTicket === 'student') {
                studentCounter++;
            } else if (typeTicket === 'standard') {
                standardCounter++;
            } else {
                kidsCounter++;
            }
            totalTicket++;
            sellsTicket++;
            if (sellsTicket >= freeSpace) {
                break;
            }
            typeTicket = input.shift();
        }
        console.log(`${nameMovie} - ${((sellsTicket / freeSpace) * 100).toFixed(2)}% full.`);
        nameMovie = input.shift();
    }
    console.log(`Total tickets: ${totalTicket}`);
    console.log(`${((studentCounter / totalTicket) * 100).toFixed(2)}% student tickets.`);
    console.log(`${((standardCounter / totalTicket) * 100).toFixed(2)}% standard tickets.`);
    console.log(`${((kidsCounter / totalTicket) * 100).toFixed(2)}% kids tickets.`);
}

solve([
    'The Matrix',
    '20',
    'student',
    'standard',
    'kid',
    'kid',
    'student',
    'student',
    'standard',
    'student',
    'End',
    'The Green Mile',
    '17',
    'student',
    'standard',
    'standard',
    'student',
    'standard',
    'student',
    'End',
    'Amadeus',
    '3',
    'standard',
    'standard',
    'standard',
    'Finish'
])