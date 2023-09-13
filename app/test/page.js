'use client'
import {  Query } from "appwrite";
import React,{useEffect,useState} from 'react'
import {account,databases} from '@/appwrite/appwrite'

const page = () => {
const [balance,setBalance] = useState(null);
const getUser = async () => {
     const  data = await databases.listDocuments('64faed31a7aff8087750', '65000690d48de42a98f2', [
        Query.equal('user_id', '64fee87444e6360a0e02')])
    setBalance(data);
  };
useEffect(()  =>  {
    if (typeof window !== 'undefined'){
        getUser();
    }
  }, []);
  console.log(balance)
  return (
    <div>
      test
    </div>
  )
}

export default page
