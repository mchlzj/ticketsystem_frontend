import React, {createContext} from 'react';


export const isClosedContext = createContext<any>(false);

export const IsClosedProvider = ({children}: any) => {
    const [isClosed, setIsClosed] = React.useState(false);

    return (
        <isClosedContext.Provider value={[isClosed, setIsClosed]} >
            {children}
        </isClosedContext.Provider>
    );
}

