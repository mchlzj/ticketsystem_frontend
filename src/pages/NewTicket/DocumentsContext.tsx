import React, {createContext} from 'react';


export const DocumentsContext = createContext<any>([]);

export const DocumentsProvider = ({children}: any) => {
    const [documents, setDocuments] = React.useState([]);

    return (
        <DocumentsContext.Provider value={[documents,setDocuments]} >
            {children}
        </DocumentsContext.Provider>
    );
}


