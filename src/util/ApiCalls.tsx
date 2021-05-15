// API Endpoint
const url = 'https://easyticketapi.azurewebsites.net/api/';

// Different API Endpoints for testing
//https://www.hetfeld.name/ticket_backend/api/
//http://localhost:59543/api/
//https://easyticketapi.azurewebsites.net/api/

//Login und Register
export const login = async(userName, password) => {
    const response = await fetch(url + 'auth/login',
    {
      method: 'POST',
      body: JSON.stringify({
          userName: userName,
          password: password
              }), 
      mode: 'cors',
      headers: {
              'Access-Control-Allow-Origin': 'https://easyticketapi.azurewebsites.net',
              'Content-Type' : 'application/json'
          }
  });
  try {
      console.log(response);
      if (response.ok) {
          const jsonResponse = await response.json();
          return jsonResponse;
      }
      throw new Error("Login failed");
    }catch(error) {
        console.log("invalid login");
        console.log(error);
    }
};

//Call Tickets
export const getAllTickets = async() => {
    const response = await fetch(url + 'tickets',
    {
        headers: {
                'authorization' : 'Bearer ' + localStorage.getItem('token')
            }
    }
    );
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
//Different Functions for searching tickets
export const getTicketsByTitle = async(title) => {
    if (title !== '' && title !== null) {
        const response = await fetch(url + 'Tickets/SearchByTitle/' + title,
        {
            headers: {
                    'authorization' : 'Bearer ' + localStorage.getItem('token')
                }
        }
        );
        try {
            if (response.ok) {
                const jsonResponse = await response.json();
                return jsonResponse;
            }
            throw new Error('Request Failed!');
        } catch(error) {
            console.log(error);
        }
    }
};

export const getCommentByTicketId = async(TicketId) => {
    const response = await fetch(url + 'Comments/GetByTicketId/' + TicketId,
    {
        headers: {
                'authorization' : 'Bearer ' + localStorage.getItem('token')
            }
    }
    );
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

export const getTicketsImZeitverlauf = async() => {
    const response = await fetch(url + 'Tickets/TicketTimeline/',
    {
        headers: {
                'authorization' : 'Bearer ' + localStorage.getItem('token')
            }
    }
    );
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

export const getTicketsNachModulen = async() => {
    const response = await fetch(url + 'Tickets/TicketsPerModule/',
    {
        headers: {
                'authorization' : 'Bearer ' + localStorage.getItem('token')
            }
    }
    );
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
    const response = await fetch(url + `Tickets/${id}`, 
    {
        headers: {
                'authorization' : 'Bearer ' + localStorage.getItem('token')
            }
    });
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

// Create a new Comment
export const newComment = async( ticketID, text) => {
    await fetch(url  + 'Comments',
    {
        method: 'POST',
        body: JSON.stringify({
            ticketID: ticketID,
            text: text            
        }), 
        mode: 'cors',
        headers: {
                'Content-Type' : 'application/json',
                'authorization' : 'Bearer ' + localStorage.getItem('token')
            }
        });
    }

// Create a new Ticket
export const createNewTicket = async(title, description, documentId) => {
    const response = await fetch(url + 'Tickets',
    {
        method: 'POST',
        body: JSON.stringify({
            title: title,
            description: description,
            documentId: documentId
            }), 
        mode: 'cors',
        headers: {
                'Content-Type' : 'application/json',
                'authorization' : 'Bearer ' + localStorage.getItem('token')
            }
    });
}

// Get all modules
export const getModules = async() => {
    const response = await fetch(url + 'Modules',
    {
        method: 'GET',
        headers: {
                'authorization' : 'Bearer ' + localStorage.getItem('token')
            }
    }
    );
    try {
        if (response.ok) {
            const jsonResponse = await response.json();
            /*console.log(jsonResponse)*/
            return jsonResponse;
        }
        throw new Error('Request Failed!');
    } catch(error) {
        /*console.log(error);*/
    }
};

// Get all documents
export const getDocuments = async( moduleId ) => {
    const response = await fetch(url + `Documents/GetByModuleId/${moduleId}`,
    {
        method: 'GET',
        headers: {
                'authorization' : 'Bearer ' + localStorage.getItem('token')
            }
    }
    );
    try {
        if (response.ok) {
            const jsonResponse = await response.json();
            /*console.log(jsonResponse)*/
            return jsonResponse;
        }
        throw new Error('Request Failed!');
    } catch(error) {
        /*console.log(error);*/
    }
};

// Change ticket status
export const changeTicketStatus = async( ticketId ) => {
    const response = await fetch(url + `Tickets/ChangeStatus/${ticketId}`,
    {
        method: 'POST',
        headers: {
                'authorization' : 'Bearer ' + localStorage.getItem('token')
            }
    }
    );
    try {
        if (response.ok) {
            const jsonResponse = await response.json();
            return jsonResponse;
        }
        throw new Error('Request Failed!');
    } catch(error) {
    }
};