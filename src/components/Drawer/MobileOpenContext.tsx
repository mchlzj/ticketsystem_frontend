import React, {createContext} from 'react';


export const MobileOpenContext = createContext<any>(null);

export const MobileOpenProvider = ({children}: any) => {
    const [mobileOpen, setMobileOpen] = React.useState(false);

    return (
        <MobileOpenContext.Provider value={[mobileOpen,setMobileOpen]} >
            {children}
        </MobileOpenContext.Provider>
    );
}


