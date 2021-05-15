import React, {createContext} from 'react';

export const ModulesContext = createContext<any>([]);

export const ModulesProvider = ({children}: any) => {
    const [moduls, setModules] = React.useState([]);

    return (
        <ModulesContext.Provider value={[moduls,setModules]} >
            {children}
        </ModulesContext.Provider>
    );
}


