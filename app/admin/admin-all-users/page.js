'use client'
import React,{useEffect, useState} from 'react'
import {account,databases} from '@/appwrite/appwrite'

const page = () => {
const [users,setUsers] = useState([]);

const getUser = async () => {
  const res = await databases.listDocuments('64faed31a7aff8087750', '64fc60052476f26d9afc');
  setUsers(res.documents);
};
useEffect(() => {
  if (typeof window !== 'undefined'){
    getUser();
  }
}, []);

console.log(users);
  return (
   <section>
  <div className="ad-com">
    <div className="ad-dash leftpadd">
      <div className="ud-cen">
        <div className="log-bor">&nbsp;</div>
        <span className="udb-inst">All User Details</span>
        <div className="ud-cen-s2">
          <h2>All Users - 248</h2>
          <div className="ad-int-sear">
            <input type="text" id="pg-sear" placeholder="Search this page.." />
          </div>
          <a href="admin-add-new-user.html" className="db-tit-btn">Add new user</a>
          <table className="responsive-table bordered" id="pg-resu">
            <thead>
              <tr>
                <th>No</th>
                <th>User Name</th>
                <th>User ID</th>
                <th>Plan type</th>
                <th>Expiry on</th>
                <th>Amount</th>
                <th>User Type</th>
                <th>Edit</th>
                <th>Delete</th>
                <th>Preview</th>
                <th>More</th>
              </tr>
            </thead>
            <tbody>
              {users && users.map((user,index)=>{
                 const date = new Date(user.Joined);

                 const options = { year: 'numeric', month: 'short', day: 'numeric' };
                 const formateDate = date.toLocaleDateString('en-US', options);
         
                 // Rearrange the components to the desired format
                 const [month, day, year] = formateDate.split(' ');
                 const joinDate = `${day}-${month}-${year}`;
              return (
                <tr>
                <td>{index +1}</td>
                <td><img src="../images/user/475847.jpg" alt />{user.name}<span>{user.email}</span><span>{joinDate}</span>
                </td>
                <td>USER339 </td>
                <td><span className="db-list-rat">Free</span></td>
                <td><span className="db-list-ststus">27, Apr 2021</span></td>
                <td><span className="db-list-rat">$0</span></td>
                <td>{user.role? user.role:'NA'} </td>
                <td><a href="admin-my-profile-edit.html?row=339&path=2" className="db-list-edit">Edit</a></td>
                <td><a href="admin-my-profile-delete.html?row=339&path=2" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/profile/werwer" className="db-list-edit" target="_blank">Preview</a></td>
                <td><a href="admin-user-full-details.html?row=339" className="db-list-edit">More</a></td>
              </tr>
              )
              })}
            
             
            </tbody>
          </table>
        </div>
      </div>
      <div className="ad-pgnat">
        <ul className="pagination">
          <li className="page-item"><a className="page-link" href="#">Previous</a></li>
          <li className="page-item active"><a className="page-link" href="#">1</a></li>
          <li className="page-item"><a className="page-link" href="#">2</a></li>
          <li className="page-item"><a className="page-link" href="#">3</a></li>
          <li className="page-item"><a className="page-link" href="#">Next</a></li>
        </ul>
      </div>
    </div>
  </div>
</section>

  )
}

export default page
