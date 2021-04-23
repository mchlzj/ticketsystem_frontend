import React, {useContext} from 'react'
import {Route, Redirect} from 'react-router-dom';
import auth from './util/auth'
import {LoginContext} from './util/LoginContext';


export const ProtectedRoute = ({component: Component, ...rest}) => {

    const [isLoggedIn, setIsLoggedIn] = useContext(LoginContext);

    return (
        <Route {...rest} 
        render ={
            (props) => {
                if (auth.isAuthenticated()) {
                    return <Component {...props}/>
                }
                else {
                    return <Redirect to={
                        {
                            pathname: "/login",
                            state: {
                                from: props.location
                            }
                        }
                    }/>
                }
            }
        }/>
    )
}