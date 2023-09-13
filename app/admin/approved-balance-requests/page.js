'use client'
import React,{useEffect, useState} from 'react'
import {account,databases} from '@/appwrite/appwrite'
import {  Query,ID } from "appwrite";
import {  toast } from "react-toastify";
import appwriteService from '@/appwrite/appwrite'
const page = () => {
  const [showModal,setShowModal] = useState(null);
  const [transaction,setTransaction] = useState([]);
  const [currentuser,setCurrentUser] = useState(null);
  const [employee,setEmloyee] = useState(null);

  
const getTransactions = async () => {
  const res = await databases.listDocuments('64faed31a7aff8087750', '64faed592ffde69dcab8');
  setTransaction(res.documents);
};

useEffect(() => {
  if (typeof window !== 'undefined'){
    getTransactions();
  }
}, []);

const openModal = (item) => {
  setShowModal(item);
};
const closeModal = () =>{
  setShowModal(null);
}
console.log(employee)




console.log("all transactions",transaction)

  return (
    <>
 <section>
  <div className="ad-com">
    <div className="ad-dash leftpadd">
      <div className="ud-cen">
        <div className="log-bor">&nbsp;</div>
        <span className="udb-inst">All Balance Approved Requests</span>
        <div className="ud-cen-s2 relative">
          <h2>Notifications you sent</h2>
          <a href="admin-create-notification.html" className="db-tit-btn">Send new notification</a>
          <div className="ad-int-sear">
            <input type="text" id="pg-sear" placeholder="Search this page.." />
          </div>
          <table className="responsive-table bordered" id="pg-resu">
            <thead>
              <tr>
                <th>No</th>
                <th>transaction_id</th>
                <th>user_id</th>
                <th>user_name</th>
                <th>balance</th>
                <th>payment_method</th>
                <th>request_time</th>
                <th>status</th>
              </tr>
            </thead>
            <tbody>
              {transaction && transaction.map((item, index) =>{
                const dateobj = new Date(item.approval_time)
                const formattedDate = dateobj.toLocaleDateString();
                const formattedTime = dateobj.toLocaleTimeString();
                if(item.status === 'approved'){
                return (<tr>
                  <td>{index +1}</td>
                  <td>{item.transaction_id}</td>
                  <td> {item.user_id} </td>
                  <td> {item.user_name} </td>
                  <td> {item.balance} </td>
                  <td> {item.payment_method} </td>
                  <td> {formattedDate + ' '+ formattedTime} </td>
                  <td className='relative'>{item.status} 
                  </td>

                </tr>)
              }
              })}

            </tbody>

          </table>
      
        </div>
      </div>
    </div>
  </div>
</section>

</>
  )
}

export default page
