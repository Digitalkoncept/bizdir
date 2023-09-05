'use client'
import React from 'react'
import { createContext, useState } from 'react'
export const UserContext = createContext();

export const UserProvider = ({children}) => {
    const [authStatus,setAuthStatus] = useState(false);

    return (
        <UserContext.Provider value={{authStatus,setAuthStatus}}>
            <div>{children}</div>
        </UserContext.Provider>
    )
}