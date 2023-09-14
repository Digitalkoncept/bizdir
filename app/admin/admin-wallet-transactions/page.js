'use client'
import React,{useEffect, useState} from 'react'
import {account,databases} from '@/appwrite/appwrite'
import {  Query,ID } from "appwrite";
import {  toast } from "react-toastify";
import appwriteService from '@/appwrite/appwrite'
const page = () => {
  const [showModal,setShowModal] = useState(null);
  const [rejectReason, setRejectReason] = useState('');
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


const rejectPermission = async (e, item) => {
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
      // User exists, update the balance by deducting the amount
      balance = existingBalance.documents[0];
      balance.current_balance -= item.balance; // Deduct the amount from the current balance
      await databases.updateDocument('64faed31a7aff8087750', '65000690d48de42a98f2', balance.$id, {
        current_balance: balance.current_balance,
      });
      await databases.updateDocument('64faed31a7aff8087750', '64faed592ffde69dcab8', item.$id, {
        status: "rejected by admin",
        reject_message:rejectReason
      });
    } else {
      // This scenario shouldn't occur if the user always has a balance entry
      console.error("User's balance record not found");
      return;
    }
  } catch (error) {
    console.error('Error updating balance:', error);
    return;
  }

  toast.success("Request rejected successfully");
  setShowModal(null);
  getTransactions();
  setRejectReason('');
  console.log("Transaction updated successfully");
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
                <th>user</th>
                <th>balance</th>
                <th>payment_method</th>
                <th>approved_by</th>
                <th>employee_id</th>
                <th>request_time</th>
                <th>approval_time</th>
                <th>status</th>
              </tr>
            </thead>
            <tbody>
              {transaction && transaction.map((item, index) =>{
                const dateobj = new Date(item.request_time)
                const dateobj1 = new Date(item.approval_time)
                const formattedDate = dateobj.toLocaleDateString();
                const formattedDate1 = dateobj1.toLocaleDateString();
                const formattedTime = dateobj.toLocaleTimeString();
                const formattedTime1 = dateobj1.toLocaleTimeString();
                return (<tr>
                  <td>{index +1}</td>
                  <td>{item.transaction_id}</td>
                  <td> {item.user_id} </td>
                  <td> {item.user_name} </td>
                  <td> {item.balance} </td>
                  <td> {item.payment_method} </td>
                  <td> {item.approve_by} </td>
                  <td> {item.employee_id} </td>
                  <td> {formattedDate + ' '+ formattedTime} </td>
                  <td> {formattedDate1 + ' '+ formattedTime1} </td>
                  <td className='relative'>{item.status} <button onClick={() =>openModal(item)} className="db-list-edit" disabled={item.status === 'rejected by admin'?'true':false}>update</button>
                  {showModal && showModal.$id === item.$id && (
                      <div className="font-manrope flex   items-center justify-center absolute right-0 top-0 z-10">
                      <div className="mx-auto box-border w-[300px] border bg-white p-2">
                        <div className="flex items-center justify-between relative">
                        
                          <button onClick={closeModal} className="cursor-pointer border rounded-[4px] absolute right-0">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-[15px] w-[15px] text-[#64748B]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </button>
                        </div>
                        
                        <div className="my-2 ">
                        <form onSubmit={(e)=> rejectPermission(e,item)}>
                      
                      <textarea id="message" rows="4"
                       onChange={(e) => setRejectReason(e.target.value)} 
                       className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500  " placeholder="give any reason here..."></textarea>
                          <button type='submit'  className="w-4/2 cursor-pointer rounded-[4px] bg-red-700 px-3 py-[6px] text-center font-base text-xs text-white">Reject</button>
                          </form>
                        </div>
                      </div>
                    </div>
                )}
                  </td>

                </tr>)
            
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
