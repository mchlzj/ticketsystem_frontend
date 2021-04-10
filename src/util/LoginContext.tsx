import React, {createContext} from 'react';


export const LoginContext = createContext<any>([]);

export const LoginProvider = ({children}: any) => {
    const [isLloggedIn, setIsLoggedIn] = React.useState([]);

    return (
        <LoginContext.Provider value={[isLloggedIn, setIsLoggedIn]} >
            {children}
        </LoginContext.Provider>
    );
}

