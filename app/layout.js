/* eslint-disable @next/next/no-head-element */
"use client";
import "@/styles/globals.css";
import "@/css/style.css";
import "@/css/bootstrap.css";
import "@/css/style2.css";
import Head from "next/head";
import { Poppins } from "next/font/google";
// import "../styles/admin-style.css"
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { SessionProvider } from "next-auth/react";

const poppins = Poppins({
    subsets: ["latin"],
    display: "swap",
    weight: "600",
});

export default function RootLayout({ children, session }) {
    return (
        <SessionProvider session={session}>
            <html>
                <Head>
                    <link
                        href="https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap"
                        rel="stylesheet"
                    />
                </Head>
                <body>
                    <div>
                        {children}
                        <ToastContainer />
                    </div>
                </body>
            </html>
        </SessionProvider>
    );
}
