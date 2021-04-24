import React, {createContext} from 'react';
import auth from './auth';


export const UserNameContext = createContext<any>('');

export const UserNameProvider = ({children}: any) => {
    const [userName, setUserName] = React.useState(auth.getUserName());

    return (
        <UserNameContext.Provider value={[userName,setUserName]} >
            {children}
        </UserNameContext.Provider>
    );
}

export const UserRoleContext = createContext<any>('');

export const UserRoleProvider = ({children}: any) => {
    const [userRole, setUserRole] = React.useState(auth.getUserRole());

    return (
        <UserRoleContext.Provider value={[userRole,setUserRole]} >
            {children}
        </UserRoleContext.Provider>
    );
}