/* eslint-disable @next/next/no-head-element */
'use client'
import React,{useState} from "react";
import TopNav from "@/components/Admin/TopNav";
import LeftSidebar from "@/components/Admin/LeftSidebar/LeftSidebar"


import "../../styles/admin-style.css"


export default function DashboardLayout({ children }) {
  const [showadMenu,setShowAdMenu] = useState(true);
function toggleCart() {
  setShowAdMenu(!showadMenu);
}
  return (
        <>
        <TopNav toggleCart={toggleCart} showadMenu={showadMenu}/>
        <LeftSidebar showadMenu={showadMenu} />
        {children}
   </>
  );
}