'use client'
import React,{useState,useContext} from 'react'
import useAuth from '@/context/useAuth'
import {account} from "@/appwrite/appwrite"
import appwriteService from '@/appwrite/appwrite'
import { useRouter, usePathname, useSearchParams } from 'next/navigation'
import Headertwo from "@/components/Headertwo"
import {  toast } from "react-toastify";
import Footer from '@/components/Footer'
const page = () => {
    const router = useRouter()
    const {setAuthStatus,authStatus} = useAuth();
    const searchParams = useSearchParams()
    const [password, setpassword] = useState({
      newPassword: "",
      repeatedPassword: "",
    });
    const changePassword = async (e) => {
      e.preventDefault();
      const userId = searchParams.get("userId");
      const secret = searchParams.get("secret");
  
      if (password.newPassword === password.repeatedPassword){
        try{
          const response =   await account.updateRecovery(
              userId,
              secret,
              password.newPassword,
              password.repeatedPassword
            );
            toast.success("password Update Successfully");
            router.push("/login");
        } catch (error){
          toast.error(error.message);
        }
       
      } else {
        toast.error('Both new password and the repeated password should be same');
      }
   
    };
  return (
    <>
     <section>
		<div class="str">
			<div>
      <Headertwo  />
      </div>
      </div>
      </section>
   <section className=" login-reg">
  <div className="container">
    <div className="row">
      <div className="login-main">
        <div className="log-bor">&nbsp;</div>
          <div className="log log-1">
          <div className="login">
            <h4>Member Login</h4>
            <form  id="login_form" name="login_form">
              <div className="form-group">
                <input type="password"  autoComplete="off"
                 name="password" id="password"
                  className="form-control"
                 onChange={(e) => {
                  setpassword({
                    ...password,
                    newPassword: e.target.value,
                  });
                }}
                  placeholder=" Enter your new password "    required />
              </div>
              <div className="form-group">
                <input type="password" name="password"
                 id="password" className="form-control"
                 onChange={(e) => {
                  setpassword({
                    ...password,
                    repeatedPassword: e.target.value,
                  });
                }}
                  placeholder="  Repeat your new password " required  />
              </div>
              <button onClick={(e) => changePassword(e)} type="submit" name="login_submit" value="submit" className="btn btn-primary">Change Password</button>
            </form>
            {/* SOCIAL MEDIA LOGIN */}
            <div className="soc-log">
              <ul>
                <li>
                  <div className="g-signin2" data-onsuccess="onSignIn" />
                </li>
                {/*                                <li>*/}
                {/*                                    <a href="google_login.html" class="login-goog"><img src="images/icon/seo.png">Continue*/}
                {/*                                        with Google</a>*/}
                {/*                                </li>*/}
                <li>
                  <a href="javascript:void(0);" onclick="fbLogin();" className="login-fb">
                    <img src="images/icon/facebook.png" />Continue with Facebook</a>
                </li>
              </ul>
            </div>
            {/* END SOCIAL MEDIA LOGIN */}
          </div>
        </div>
      
        <div className="log-bot">
          <ul>
            <li> <span onClick={() => handleFormChange('login')} className="ll-1">Login?</span>
            </li>
            <li> <span onClick={() => handleFormChange('signup')} className="ll-2">Create an account?</span>
            </li>
            <li> <span onClick={() => handleFormChange('forgotPassword')} className="ll-3">Forgot password?</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  </section>
  

  <span className="btn-ser-need-ani">Help &amp; Support</span>
  <div className="ani-quo-form"> <i className="material-icons ani-req-clo">close</i>
    <div className="tit">
      <h3>What service do you need? <span>BizBook will help you</span></h3>
    </div>
    <div className="hom-col-req">
      <div id="home_slide_enq_success" className="log" style={{display: 'none'}}>
        <p>Your Enquiry Is Submitted Successfully!!!</p>
      </div>
      <div id="home_slide_enq_fail" className="log" style={{display: 'none'}}>
        <p>Something Went Wrong!!!</p>
      </div>
      <div id="home_slide_enq_same" className="log" style={{display: 'none'}}>
        <p>You cannot make enquiry on your own listing</p>
      </div>
      <form name="home_slide_enquiry_form" id="home_slide_enquiry_form" method="post" encType="multipart/form-data">
        <input type="hidden" className="form-control" name="listing_id" defaultValue={0} placeholder required />
        <input type="hidden" className="form-control" name="listing_user_id" defaultValue={0} placeholder required />
        <input type="hidden" className="form-control" name="enquiry_sender_id" defaultValue placeholder required />
        <input type="hidden" className="form-control" name="enquiry_source" defaultValue="Website" placeholder required />
        <div className="form-group">
          <input type="text" name="enquiry_name" defaultValue required="required" className="form-control" placeholder="Enter name*" />
        </div>
        <div className="form-group">
          <input type="email" className="form-control" placeholder="Enter email*" required="required" defaultValue name="enquiry_email" pattern="^[\w]{1,}[\w.+-]{0,}@[\w-]{2,}([.][a-zA-Z]{2,}|[.][\w-]{2,}[.][a-zA-Z]{2,})$" title="Invalid email address" />
        </div>
        <div className="form-group">
          <input type="text" className="form-control" defaultValue name="enquiry_mobile" placeholder="Enter mobile number *" pattern="[7-9]{1}[0-9]{9}" title="Phone number starting with 7-9 and remaing 9 digit with 0-9" required />
        </div>
        <div className="form-group">
          <select name="enquiry_category" id="enquiry_category" className="form-control">
            <option value>Select Category</option>
            <option value={19}>Wedding halls</option>
            <option value={18}>Hotel &amp; Food</option>
            <option value={17}>Pet shop</option>
            <option value={16}>Digital Products</option>
            <option value={15}>Spa and Facial</option>
            <option value={10}>Real Estate</option>
            <option value={8}>Sports</option>
            <option value={7}>Education</option>
            <option value={6}>Electricals</option>
            <option value={5}>Automobiles</option>
            <option value={3}>Transportation</option>
            <option value={2}>Hospitals</option>
            <option value={1}>Hotels And Resorts</option>
          </select>
        </div>
        <div className="form-group">
          <textarea className="form-control" rows={3} name="enquiry_message" placeholder="Enter your query or message" defaultValue={""} />
        </div>
        <input type="hidden" id="source" />
        <button type="submit" id="home_slide_enquiry_submit" name="home_slide_enquiry_submit" className="btn btn-primary">Submit Requirements</button>
      </form>
    </div>
  </div>
  {/* END */}
  {/* START */}
  <section>
    <div className="full-bot-book">
      <div className="container">
        <div className="row">
          <div className="bot-book">
            <div className="col-md-2 bb-img">
              <img src="images/idea.png" alt />
            </div>
            <div className="col-md-7 bb-text">
              <h4>#1 Business Directory and Service Provider</h4>
              <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</p>
            </div>
            <div className="col-md-3 bb-link"> <a href="pricing-details.html">Add my business</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

<Footer/>
    </>
  )
}

export default page
