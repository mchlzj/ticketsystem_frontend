import React, {createContext} from 'react';


export const TicketContext = createContext<any>([]);

export const TicketProvider = ({children}: any) => {
    const [ticket, setTicket] = React.useState([]);

    return (
        <TicketContext.Provider value={[ticket,setTicket]} >
            {children}
        </TicketContext.Provider>
    );
}


