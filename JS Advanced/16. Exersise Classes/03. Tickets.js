function solve(str, sortType) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination
            this.price = price
            this.status = status
        }

    }
    let tickets = str.map(x => x.split('|')).map(x => {
        let [dest, price, stat] = x
        let ticket = new Ticket(dest, Number(price), stat)
        return ticket
    })
    tickets.sort((a, b) => {
        if (sortType == 'price') {
            return a[sortType] - b[sortType]
        } else {
            return (a[sortType]).localeCompare(b[sortType])
        }
    })
    return tickets
}
console.log(solve(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'price'
))