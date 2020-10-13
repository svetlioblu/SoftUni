function cinemaTickets(input) {

    let standardTicketCount = 0
    let studentTicketCount = 0
    let kidTicketCount = 0
    let totalTicketCurrentMovie = 0
    let totalTicketSold = 0
    let index = 0
    let movieTitle = input[index]
    index++
    let ticketsCount = Number(input[index])
    index++
    let ticketType = input[index]
    index++

    while (movieTitle !== 'Finish') {
        totalTicketCurrentMovie = 0

        while (ticketType !== 'End' && ticketType !== 'Finish') {

            totalTicketCurrentMovie += 1
            totalTicketSold += 1
            switch (ticketType) {
                case 'standard':
                    standardTicketCount += 1
                    break
                case 'student':
                    studentTicketCount += 1
                    break
                case 'kid':
                    kidTicketCount += 1
                    break
            }
            if (totalTicketCurrentMovie >= ticketsCount) {
                break
            }

            ticketType = input[index]
            index++
        }
        let roomProcentagecalculation = (totalTicketCurrentMovie / ticketsCount) * 100
        console.log(`${movieTitle} - ${roomProcentagecalculation.toFixed(2)}% full.`)

        movieTitle = input[index]
        if (movieTitle == undefined) {
            break
        }
        index++
        ticketsCount = Number(input[index])
        index++
        ticketType = input[index]
        index++

    }
    let standardPercentage = (standardTicketCount / totalTicketSold) * 100
    let studentdPercentage = (studentTicketCount / totalTicketSold) * 100
    let kidTicketPercentage = (kidTicketCount / totalTicketSold) * 100
    console.log(`Total tickets: ${totalTicketSold}`)
    console.log(`${studentdPercentage.toFixed(2)}% student tickets.`)
    console.log(`${standardPercentage.toFixed(2)}% standard tickets.`)
    console.log(`${kidTicketPercentage.toFixed(2)}% kids tickets.`)

}
cinemaTickets([
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