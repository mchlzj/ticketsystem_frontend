import auth from '../../util/auth'

function HomePage(props) {


    return (
        //Die Homepage Komponente dient nur dem Routing auf das Dashboard.
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
