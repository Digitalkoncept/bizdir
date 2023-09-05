import React,{useContext} from 'react'
import UserContext from '@/context/UserContext';
import { appwriteService } from '@/appwrite/appwrite'
import Link from 'next/link';
import { useRouter } from 'next/navigation'
import { useState } from 'react';
const LogoutButton = () => {
    const router = useRouter()
    const {setAuthStatus,authStatus} = useContext(UserContext);
    const handleLogout = async (e) =>{
        e.preventDefault()
        try {
           await appwriteService.logout();
              setAuthStatus(false)
              router.replace("/")
              
      } catch (error) {
          console.log(error.message)
      }
      }
  return (
    <li onClick={(e) => handleLogout(e)}>
    <Link href="/#">
      <img src="/icon/dbl12.png" alt="" />
      Log Out
    </Link>
  </li>
  )
}

export default LogoutButton
