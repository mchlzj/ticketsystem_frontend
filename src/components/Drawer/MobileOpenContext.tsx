import React, {createContext} from 'react';

//Kontext der ermittelt, ob sich die Anwendung auf einem mobilen Endgerät, bzw. einem Screen dieser Größe befindet.
export const MobileOpenContext = createContext<any>(null);

export const MobileOpenProvider = ({children}: any) => {
    const [mobileOpen, setMobileOpen] = React.useState(false);

    return (
        <MobileOpenContext.Provider value={[mobileOpen,setMobileOpen]} >
            {children}
        </MobileOpenContext.Provider>
    );
}


