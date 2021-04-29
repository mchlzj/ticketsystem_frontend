
export const sendData = async(title, description) => {

            await fetch('https://www.hetfeld.name/ticket_backend/api/tickets',
            {
                method: 'POST',
                body: JSON.stringify({
                    title: title,
                    description: description
                }), 
                mode: 'cors',
                headers: {
                        'Content-Type' : 'application/json'
                    }
            });
        }

