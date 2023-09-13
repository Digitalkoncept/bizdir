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
    
       (async () => {
        const cuser = await appwriteService.getCurrentUser()
       const  user = await databases.getDocument('64faed31a7aff8087750', '64fc60052476f26d9afc',cuser.$id);
       if(user){
        setEmloyee(user);
       }
    })()
  }
}, []);
console.log('currentUser data',currentuser)
console.log('employee data',employee)
const openModal = (item) => {
  setShowModal(item);
};
const closeModal = () =>{
  setShowModal(null);
}
console.log(employee)

const approvePermission = async (e, item) => {
  e.preventDefault();
  console.log(item.$id);
  const now = new Date();
  

  try {
    let balance = null;
    
    // Check if the user exists in the balance table
    const balanceQuery = Query.equal('user_id', item.user_id);
    const existingBalance = await databases.listDocuments('64faed31a7aff8087750', '65000690d48de42a98f2', [balanceQuery]);
    console.log("existingbalance",existingBalance);
    if (existingBalance.documents.length > 0) {
      // User exists, update the balance
      balance = existingBalance.documents[0];
      balance.current_balance += item.balance;
      await databases.updateDocument('64faed31a7aff8087750', '65000690d48de42a98f2', balance.$id, {
        current_balance: balance.current_balance,
      });
      await databases.updateDocument('64faed31a7aff8087750', '64faed592ffde69dcab8', item.$id, {
        status: "approved",
        approve_by: `${employee.name}`,
        employee_id: employee.$id,
        approval_time: now.toISOString(),
      });
    } else {
      // User doesn't exist, create a new record
      balance = {
        user_id: item.user_id,
        current_balance: item.balance,
      };
      const response = await databases.createDocument('64faed31a7aff8087750', '65000690d48de42a98f2', ID.unique(), balance);
      balance.$id = response.$id;
      await databases.updateDocument('64faed31a7aff8087750', '64faed592ffde69dcab8', item.$id, {
        status: "approved",
        approve_by: `${employee.name}`,
        employee_id: employee.$id,
        approval_time: now.toISOString(),
      });
    }
  } catch (error) {
    console.error('Error updating or creating balance:', error);
  }

  toast.success("Request approved successfully");
  setShowModal(null);
  getTransactions();
  console.log("Transaction updated successfully");
};




const rejectPermission = async (e,item) => {
  e.preventDefault();
  console.log(item.$id)
  const now = new Date();
  await databases.updateDocument('64faed31a7aff8087750','64faed592ffde69dcab8', item.$id,{
    status:"reject",
    approve_by:`${employee.name}`,
    employee_id:employee.$id,
    approval_time:now.toISOString(),

  });
  toast.success("request rejected successfully");
  setShowModal(null);
  getTransactions();
  console.log("transaction rejected Successfully");
};
console.log("all transactions",transaction)

  return (
    <>
 <section>
  <div className="ad-com">
    <div className="ad-dash leftpadd">
      <div className="ud-cen">
        <div className="log-bor">&nbsp;</div>
        <span className="udb-inst">All Balance Requests</span>
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
                const dateobj = new Date(item.request_time)
                const formattedDate = dateobj.toLocaleDateString();
                const formattedTime = dateobj.toLocaleTimeString();
                if(item.status === 'pending'){
                return (<tr>
                  <td>{index +1}</td>
                  <td>{item.transaction_id}</td>
                  <td> {item.user_id} </td>
                  <td> {item.user_name} </td>
                  <td> {item.balance} </td>
                  <td> {item.payment_method} </td>
                  <td> {formattedDate + ' '+ formattedTime} </td>
                  <td className='relative'>{item.status} <button onClick={() =>openModal(item)} className="db-list-edit">update</button>
                  {showModal && showModal.$id === item.$id && (
                      <div className="font-manrope flex   items-center justify-center absolute right-0 top-0 z-10">
                      <div className="mx-auto box-border w-[175px] border bg-white p-2">
                        <div className="flex items-center justify-between relative">
                        
                          <button onClick={closeModal} className="cursor-pointer border rounded-[4px] absolute right-0">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-[15px] w-[15px] text-[#64748B]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </button>
                        </div>
                        
                        <div className="my-2 flex justify-between">
                          <button onClick={(e)=> approvePermission(e,item)} className="w-4/2 cursor-pointer rounded-[4px] bg-green-700 px-3 py-[6px] text-center font-base text-xs text-white">Approve</button>
                          <button onClick={(e)=> rejectPermission(e,item)} className="w-4/2 cursor-pointer rounded-[4px] bg-red-700 px-3 py-[6px] text-center font-base text-xs text-white">Reject</button>
                        </div>
                      </div>
                    </div>
                )}
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
