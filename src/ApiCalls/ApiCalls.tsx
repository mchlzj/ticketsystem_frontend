
const url = 'http://localhost:59543/api/';
//https://www.hetfeld.name/ticket_backend/api/
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

