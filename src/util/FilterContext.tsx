import { truncateSync } from 'fs';
import React, {createContext} from 'react';


export const isClosedContext = createContext<any>(true);

export const IsClosedProvider = ({children}: any) => {
    const [isClosed, setIsClosed] = React.useState(true);

    return (
        <isClosedContext.Provider value={[isClosed, setIsClosed]} >
            {children}
        </isClosedContext.Provider>
    );
}

