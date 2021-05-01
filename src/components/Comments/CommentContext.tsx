import React, {createContext} from 'react';


export const CommentsContext = createContext<any>([]);

export const CommentsProvider = ({children}: any) => {
    const [comments, setComments] = React.useState([]);

    return (
        <CommentsContext.Provider value={[comments,setComments]} >
            {children}
        </CommentsContext.Provider>
    );
}


