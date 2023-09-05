/* eslint-disable @next/next/no-head-element */
'use client'
import React, { useEffect, useState } from "react";
import "@/styles/globals.css";
import { appwriteService } from "@/appwrite/appwrite";
import {account} from "@/appwrite/appwrite"
import { AuthProvider } from "@/context/authContext";
import { UserProvider } from '@/context/UserContext'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "@/css/style.css";
import "@/css/bootstrap.css";
import "@/css/style2.css"
// import "../styles/admin-style.css"


import Script from "next/script";


export default function RootLayout({ children }) {
  const [authStatus, setAuthStatus] = useState(false);
  const [loader, setLoader] = useState(true);
  
  

  useEffect(() => {
    appwriteService.isLoggedIn()
    .then(setAuthStatus)
    .finally(() => setLoader(false));
}, []);

  return ( <UserProvider value={{ authStatus, setAuthStatus }}>
    
    <html>
      <body> 
        <div>
        {children}
    <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
        </body>
    </html>
    </UserProvider>
  );
}