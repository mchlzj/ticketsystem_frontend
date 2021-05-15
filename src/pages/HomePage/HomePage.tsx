import auth from '../../util/auth'

function HomePage(props) {

// Return HomePage
    return (
        //Homepage component is just used for routing to dashboard in case of valid authentication
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
