import jwt_decode from "jwt-decode";



export const getUserCredentials = () => {
    let token = localStorage.getItem('token');
    let decoded;
    if(token !== null) {
        decoded = jwt_decode(token);
        return decoded;
    } else {
        return null;
    }
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