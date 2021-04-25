

export const sendData = async(creator, title, description) => {
    

            await fetch('https://www.hetfeld.name/ticket_backend/api/tickets',
            {
                method: 'POST',
                body: JSON.stringify({
                    title: title,
                    description: description,
                    createdBy: {
                        userName: creator
                    }

                }), 
                mode: 'cors',
                headers: {
                        'Content-Type' : 'application/json'
                    }
            });
        }