import jwt_decode from "jwt-decode";
/*
global class for retrieving user information from jwt token. User information will be stored in UserCredsContext anyway
*/
class Auth {

    constructor() {
        this.authenticated = false;
    }

    login(cb) {
        this.authenticated = true;
        cb();
    }

    logout(cb) {
        this.authenticated = false;
        cb();
    }

    isAuthenticated() {
        if (localStorage.getItem('token')) {
            return true;
        } else {
            return false;
        }
    }

    getUserCredentials = () => {
        const token = localStorage.getItem('token');
        let decoded;
        if(token !== null) {
            decoded = jwt_decode(token);
            return decoded;
        } else {
            return null;
        }
    }
    
    getUserName = () => {
        if (this.getUserCredentials() !== null) {
            return this.getUserCredentials()["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"];
        }
    }

    getUserRole = () => {
        if (this.getUserCredentials() !== null) {
            return this.getUserCredentials()["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"];
        }
    }
}

export default new Auth();