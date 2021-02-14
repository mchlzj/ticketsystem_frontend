
export const getData = async() => {
    const response = await fetch('https://www.hetfeld.name/ticket_backend/api/Tickets');
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

