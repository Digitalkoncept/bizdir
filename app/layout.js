/* eslint-disable @next/next/no-head-element */
'use client'
import React, { useEffect, useState } from "react";
import "@/styles/globals.css";
import  appwriteService  from "@/appwrite/appwrite";
import {account} from "@/appwrite/appwrite"
import { AuthProvider } from "@/context/authContext";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "@/css/style.css";
import "@/css/bootstrap.css";
import "@/css/style2.css"




export default function RootLayout({ children }) {
  const [loader, setLoader] = useState(true);
  const [authStatus,setAuthStatus] = useState(false);

  useEffect(() => {
    appwriteService.isLoggedIn()
    .then(setAuthStatus)
    .finally(() => setLoader(false));

}, []);

  return ( <AuthProvider  value={{ authStatus, setAuthStatus }}>
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
    </AuthProvider>
  );
}