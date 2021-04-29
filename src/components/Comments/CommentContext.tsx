import React, {createContext} from 'react';


export const CommentsContext = createContext<any>(Boolean);

export const CommentsProvider = ({children}: any) => {
    const [rerender, setRerender] = React.useState(false);

    return (
        <CommentsContext.Provider value={[rerender,setRerender]} >
            {children}
        </CommentsContext.Provider>
    );
}


