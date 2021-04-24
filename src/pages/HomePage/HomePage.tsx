import React, {useContext} from 'react'
import {LoginContext} from '../../util/LoginContext'
import {Redirect} from 'react-router-dom';
import auth from '../../util/auth'

function HomePage(props) {


    return (


            <div>
                Welcome to Homepage
                <h1>Status: {props.isLoggedIn} </h1>
                <button onClick= {
                    () => {
                        auth.login(() => {
                            props.history.push("/dashboard");
                        })
                    }
                }>Login</button>
            </div>


    );
}

export default HomePage
