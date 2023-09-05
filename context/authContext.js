import { createContext } from "react";
import {account} from "@/appwrite/appwrite"
const AuthContext = createContext({
    authStatus: false,
    setAuthStatus: () => {},
    
});


export const AuthProvider = AuthContext.Provider;

export default AuthContext;
