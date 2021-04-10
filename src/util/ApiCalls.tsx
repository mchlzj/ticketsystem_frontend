
const url = 'https://www.hetfeld.name/ticket_backend/api/';
//https://www.hetfeld.name/ticket_backend/api/
//http://localhost:59543/api/
export const getAllTickets = async() => {
    const response = await fetch(url + 'Tickets');
    try {
        if (response.ok) {
            const jsonResponse = await response.json();
            return jsonResponse;
        }
        throw new Error('Request Failed!');
    } catch(error) {
        console.log(error);
    }
};

export const getTicketById = async(id) => {
    const response = await fetch(url + `Tickets/${id}`);
    try {
        if (response.ok) {
            const jsonResponse = await response.json();
            return jsonResponse;
        }
        throw new Error('Request Failed!');
    } catch(error) {
        console.log(error);
    }
};

