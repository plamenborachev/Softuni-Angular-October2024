var Ticket = /** @class */ (function () {
    function Ticket(destination, price, status) {
        this.destination = destination;
        this.price = price;
        this.status = status;
    }
    return Ticket;
}());
function solve(ticketDescriptions, sortingCriteria) {
    var tickets = [];
    ticketDescriptions.forEach(function (ticket) {
        var ticketParts = ticket.split('|');
        //console.log(ticketParts);
        var newTicket = new Ticket(ticketParts[0], +ticketParts[1], ticketParts[2]);
        //console.log(newTicket);
        tickets.push(newTicket);
    });
    switch (sortingCriteria) {
        case 'destination':
            tickets.sort(function (t1, t2) { return t1.destination.localeCompare(t2.destination); });
            break;
        case 'price':
            tickets.sort(function (t1, t2) { return t1.price - t2.price; });
            break;
        case 'status':
            tickets.sort(function (t1, t2) { return t1.status.localeCompare(t2.status); });
            break;
        default:
            tickets;
            break;
    }
    return tickets;
}
// console.log(solve([
//     'Philadelphia|94.20|available',
//      'New York City|95.99|available',
//      'New York City|95.99|sold',
//      'Boston|126.20|departed'
//     ],
//     'destination'
//     )
// )
// console.log(solve([
//     'Philadelphia|94.20|available',
//      'New York City|95.99|available',
//      'New York City|95.99|sold',
//      'Boston|126.20|departed'
//     ],
//     'status'    
//     )
// )
console.log(solve([
    'Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'
], 'price'));
