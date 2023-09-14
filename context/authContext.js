import { createContext } from "react";
const AuthContext = createContext({
    authStatus: false,
    setAuthStatus: () => {},
    jwtToken:null,
    setJwtToken:() =>{}, 
});


export const AuthProvider = AuthContext.Provider;

export default AuthContext;
