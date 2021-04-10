import React, {createContext} from 'react';


export const LoginContext = createContext<any>([]);

export const LoginProvider = ({children}: any) => {
    const [login, setLogin] = React.useState([]);

    return (
        <LoginContext.Provider value={[login,setLogin]} >
            {children}
        </LoginContext.Provider>
    );
}

