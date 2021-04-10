
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
        console.log(error);
    }
};

//Tickets abrufen
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
