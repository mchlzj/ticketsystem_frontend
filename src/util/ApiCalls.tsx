
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
// export const sendData = async( title, description) => {
//     await fetch(url  + 'tickets',
//     {
//         method: 'POST',
//         body: JSON.stringify({
//             title: title,
//             description: description,
//             createdBy: {
//                 // userName: creator
//             }
//         }), 
//         mode: 'cors',
//         headers: {
//                 'Content-Type' : 'application/json',
//                 'authorization' : 'Bearer ' + localStorage.getItem('token')
//             }
//     });
// }

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
export const createNewTicket = async(title, description, modul) => {
    const response = await fetch(url + 'Tickets',
    {
        method: 'POST',
        body: JSON.stringify({
            title: title,
            description: description

            }), 
        mode: 'cors',
        headers: {
                'Content-Type' : 'application/json',
                'authorization' : 'Bearer ' + localStorage.getItem('token')
            }
    });
}


// export const removeComment = async( ticketID, text) => {
//     await fetch(url  + 'Comments',
//     {
//         method: 'POST',
//         body: JSON.stringify({
//             ticketID: ticketID,
//             text: text            
//         }), 
//         mode: 'cors',
//         headers: {
//                 'Content-Type' : 'application/json',
//                 'authorization' : 'Bearer ' + localStorage.getItem('token')
//             }
//     });
// }

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

