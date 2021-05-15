import React, {createContext} from 'react';

export const TicketsContext = createContext<any>([]);

export const TicketsProvider = ({children}: any) => {
    const [tickets, setTickets] = React.useState([]);

    return (
        <TicketsContext.Provider value={[tickets,setTickets]} >
            {children}
        </TicketsContext.Provider>
    );
}


