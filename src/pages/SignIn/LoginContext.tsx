import React, {createContext} from 'react';


export const LoginContext = createContext<any>(false);

export const LoginProvider = ({children}: any) => {
    const [isLoggedIn, setIsLoggedIn] = React.useState(false);

    return (
        <LoginContext.Provider value={[isLoggedIn,setIsLoggedIn]} >
            {children}
        </LoginContext.Provider>
    );
}


