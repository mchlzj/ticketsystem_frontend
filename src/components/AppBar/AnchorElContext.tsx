import React, {useState, createContext} from 'react'

export const AnchorElContext = createContext<any>(null);

export const AnchorElProvider = ({children}: any) => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    return (
        <AnchorElContext.Provider value={[anchorEl,setAnchorEl]} >
            {children}
        </AnchorElContext.Provider>
    );
}
