import { LocalDiningOutlined } from "@material-ui/icons";
import { login } from "./ApiCalls";
import jwt_decode from "jwt-decode";

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
        
        // token !== null ? jwt_decode(token) : 'No userCredentials stored in local storage'
    }
    
      getUserName = () => {
        if (getUserCredentials() !== null) {
            return getUserCredentials()["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"];
        }
    }
      getUserRole = () => {
        if (getUserCredentials() !== null) {
            return getUserCredentials()["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"];
        }
    }
}

export const getUserCredentials = () => {
    const token = localStorage.getItem('token');
    let decoded;
    if(token !== null) {
        decoded = jwt_decode(token);
        return decoded;
    } else {
        return null;
    }
    
    // token !== null ? jwt_decode(token) : 'No userCredentials stored in local storage'
}

export const getUserName = () => {
    if (getUserCredentials() !== null) {
        return getUserCredentials()["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"];
    }
}
export const getUserRole = () => {
    if (getUserCredentials() !== null) {
        return getUserCredentials()["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"];
    }
}







export default new Auth();