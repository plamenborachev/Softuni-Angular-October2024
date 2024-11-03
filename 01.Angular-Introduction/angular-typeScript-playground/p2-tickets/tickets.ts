class Ticket{
    destination: string
    price: number
    status: string

    constructor(destination: string, price: number, status: string){
        this.destination = destination;
        this.price = price;
        this.status = status;
    }
}

function solve(ticketDescriptions: string[],  sortingCriteria: string): Ticket[]{
    var tickets: Ticket[] = [];

    ticketDescriptions.forEach(ticket => {
        var ticketParts: string[] = ticket.split('|');
        //console.log(ticketParts);

        var newTicket: Ticket = new Ticket(ticketParts[0], +ticketParts[1], ticketParts[2]);
        //console.log(newTicket);

        tickets.push(newTicket);

        
    });

    switch (sortingCriteria) {
        case 'destination':
            tickets.sort((t1, t2) => t1.destination.localeCompare(t2.destination));
            break;
        case 'price':
            tickets.sort((t1, t2) => t1.price - t2.price);
            break;
        case 'status':
            tickets.sort((t1, t2) => t1.status.localeCompare(t2.status));
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
    ],
    'price'    
    )
)

