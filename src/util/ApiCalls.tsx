
const url = 'http://localhost:59543/api/';
//https://www.hetfeld.name/ticket_backend/api/
//http://localhost:59543/api/

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
              'Content-Type' : 'application/json'
          }
  });
  try {
      if (response.ok) {
          const jsonResponse = await response.json();
          return jsonResponse;
      }
      throw new Error("Login failed");
    }catch(error) {
        console.log("invalid login");
    }
};

//Tickets abrufen
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

//Ticket erstellen
export const sendData = async( title, description) => {
    await fetch(url  + 'tickets',
    {
        method: 'POST',
        body: JSON.stringify({
            title: title,
            description: description,
            createdBy: {
                // userName: creator
            }
        }), 
        mode: 'cors',
        headers: {
                'Content-Type' : 'application/json',
                'authorization' : 'Bearer ' + localStorage.getItem('token')
            }
    });
}

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
