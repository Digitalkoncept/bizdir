'use client'
import React,{useState,useContext} from 'react'
import useAuth from '@/context/useAuth'
import Link from 'next/link'
import {account} from "@/appwrite/appwrite"
import  appwriteService  from '@/appwrite/appwrite'
import { useRouter, usePathname, useSearchParams } from 'next/navigation'
import Headertwo from "@/components/Headertwo"
import {  toast } from "react-toastify";
import Footer from '@/components/Footer'
const page = () => {
  const router = useRouter()
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
})
const [loginForm, setLoginForm] = useState({
  email: "",
  password: "",
})
const [userEmail, setuserEmail] = useState("");
console.log(userEmail)
    const [error, setError] = useState("")
    const {setAuthStatus,authStatus} = useAuth();
  const searchParams = useSearchParams()
    const login = searchParams.get('login')
    console.log("auth status is ",authStatus)
    
  const [activeForm, setActiveForm] = useState(login? login :'login');
  const handleFormChange = (formName) => {
        setActiveForm(formName);
    };
    const create = async (e) => {
      console.log("function running correctly")
      e.preventDefault()
      try {
          const userData = await appwriteService.createUserAccount(formData);
          if (userData) {
              setAuthStatus(true)
              router.push("/login?login=login")
          }
      } catch (error) {
          setError(error.message)
          console.log(error)
      }
  }

  const loginUser = async (e) => {
    e.preventDefault()
    try {
        const session = await appwriteService.login(loginForm);
        if (session) {
            setAuthStatus(true)
            router.push("/dashboard")
        }
            
        
    } catch (error) {
        setError(error.message)
    }
}

const googleAuth = (e) => {
  e.preventDefault();

  try {
    account.createOAuth2Session(
      "google",
      `${process.env.NEXT_APP_FRONTEND_URL}`,
      `${process.env.NEXT_APP_FRONTEND_URL}/login`
    );
  } catch (e) {
    toast.error(`${e.message}`);
  }
};
const microsoftAuth = (e) => {
  e.preventDefault();

  try {
    account.createOAuth2Session(
      "microsoft",
      "http://localhost:3000/",
      "http://localhost:3000/login"
    );
  } catch (e) {
    toast.error(`${e.message}`);
  }
};
const forgetPassword = async (e) => {
  e.preventDefault();
  if (userEmail && userEmail.includes('@')) {
   const req = await appwriteService.forgotPassword(userEmail)
   if(req){
    toast.success(`Email has been sent!`);
   }
  } else {
    toast.error(`Please enter your email!`);
  }
};

if (authStatus) {
  router.replace("/dashboard");
  return <></>;
}

  
  return (
    <>
     <section>
		<div class="str">
			<div>
      <Headertwo handleFormChange={handleFormChange} setActiveForm={setActiveForm} />
      </div>
      </div>
      </section>
   <section className=" login-reg">
  <div className="container">
    <div className="row">
      <div className="login-main">
        <div className="log-bor">&nbsp;</div>
        {activeForm === 'login' && (
          <div className="log log-1">
          <div className="login">
            <h4>Member Login</h4>
            <form onSubmit={loginUser} id="login_form" name="login_form">
              <div className="form-group">
                <input type="email"  autoComplete="off"
                 name="email" id="email_id" className="form-control"
                 value={loginForm.email}
                 onChange={(e) =>
                     setLoginForm((prev) => ({ ...prev, email: e.target.value }))
                 }
                  placeholder="Enter email*" pattern="^[\w]{1,}[\w.+-]{0,}@[\w-]{2,}([.][a-zA-Z]{2,}|[.][\w-]{2,}[.][a-zA-Z]{2,})$" title="Enter email address" defaultValue="rn53themes@gmail.com" required />
              </div>
              <div className="form-group">
                <input type="password" name="password"
                 id="password" className="form-control"
                 value={loginForm.password}
                 onChange={(e) =>
                     setLoginForm((prev) => ({
                         ...prev,
                         password: e.target.value,
                     }))
                 }
                  placeholder="Enter password*" required defaultValue="passwor" />
              </div>
              <button type="submit" name="login_submit" value="submit" className="btn btn-primary">Sign in</button>
            </form>
            {/* SOCIAL MEDIA LOGIN */}
            <div className="soc-log">
             <ul>
                <li>
                  <div classname="g-signin2" data-onsuccess="onSignIn">
                  </div></li>
                <li>
                  <Link href="javascript:void(0);"  onClick={(e) => googleAuth(e)} className="login-goog"><img src="/images/icon/seo.png" />Continue
                    with Google</Link>
                </li> 
                <li>
                  <Link href="javascript:void(0);" onClick={(e) =>microsoftAuth(e)} classname="login-micro">
                    <img src="/icon/microsoft.svg" />Continue with Microsoft</Link>
                </li>
              </ul>
            </div>
            {/* END SOCIAL MEDIA LOGIN */}
          </div>
        </div>
        )}
        {activeForm === 'signup' && (
           <div className="log log-2">
           <div className="login">
             <h4>Create an account</h4>
             <p>Don't have an account? Create your account. It's take less then a minutes</p>
             <form onSubmit={create}  name="register_form" id="register_form">
               <input type="hidden" autoComplete="off" name="trap_box" id="trap_box" className="validate" />
               <input type="hidden" autoComplete="off" name="mode_path" defaultValue="XeFrOnT_MoDeX_PATHXHU" id="mode_path" className="validate" />
               <div className="form-group">
                 <input type="text" 
                 autoComplete="off" value={formData.name}  onChange={(e) =>  setFormData((prev) => ({ ...prev, name: e.target.value })) } 
                 name="name" id="name" className="form-control" placeholder="Name" />
               </div>
               <div className="form-group">
                 <input type="email" autoComplete="off"
                   value={formData.email}
                   onChange={(e) =>
                       setFormData((prev) => ({ ...prev, email: e.target.value }))
                   }
                  name="email" id="email" className="form-control" placeholder="Email id*" required />
               </div>
               <div className="form-group">
                 <input type="password" name="password"
                  value={formData.password}
                  onChange={(e) =>
                      setFormData((prev) => ({
                          ...prev,
                          password: e.target.value,
                      }))
                  }
                  id="password" className="form-control" placeholder="Password*" required />
               </div>
               {/* <div className="form-group">
                 <input type="text" onkeypress="return isNumber(event)" autoComplete="off" name="mobile_number" id="mobile_number" className="form-control" placeholder="Phone" />
               </div> */}
               {/* <div className="form-group ca-sh-user">
                 <select name="user_type" id="user_type" className="form-control ca-check-plan">
                   <option value>User type</option>
                   <option value="General">General user</option>
                   <option value="Service provider">Service provider</option>
                 </select> <a href="user-type" className="frmtip" target="_blank">User options</a>
               </div> */}
               {/* <div className="form-group ca-sh-plan">
                 <select name="user_plan" id="user_plan" className="form-control">
                   <option value disabled="disabled" selected="selected">Choose your plan</option>
                   <option value={1}>Free</option>
                   <option value={2}>Standard - $9/year</option>
                   <option value={3}>Premium - $19/year</option>
                   <option value={4}>Premium Plus - $20/year</option>
                  
                 </select> <a href="pricing-details.html" className="frmtip" target="_blank">Plan details</a>
               </div> */}
               <button type="submit" name="register_submit" className="btn btn-primary">Register Now</button>
             </form>
             {/* SOCIAL MEDIA LOGIN */}
             <div className="soc-log">
               <ul>
                 <li>
                   <div className="g-signin2" data-onsuccess="onSignIn" />
                 </li>
                 {/*                                        <li>*/}
                 {/*                                            <a href="google_login.html" class="login-goog"><img*/}
                 {/*                                                    src="images/icon/seo.png">Continue*/}
                 {/*                                                with Google</a>*/}
                 {/*                                        </li>*/}
                 <li>
                   <a href="javascript:void(0);" onclick="fbLogin();" className="login-fb">
                     <img src="images/icon/facebook.png" />Continue with Facebook</a>
                 </li>
               </ul>
             </div>
             {/* END SOCIAL MEDIA LOGIN */}
           </div>
         </div>
        )}
       {activeForm === 'forgotPassword' && (
         <div className="log log-3">
         <div className="login">
           <h4>Forgot password</h4>
           <form id="forget_form" name="forget_form" method="post" action="forgot_process.html">
             <div className="form-group">
               <input type="email" name="email" autoComplete="off"
                onChange={(e) => {
                  setuserEmail(e.target.value);
                }}
                id="email_id" className="form-control"
                 placeholder="Enter email*" pattern="^[\w]{1,}[\w.+-]{0,}@[\w-]{2,}([.][a-zA-Z]{2,}|[.][\w-]{2,}[.][a-zA-Z]{2,})$" title="Invalid email address" required />
             </div>
             <button type="submit" name="forgot_submit"  onClick={(e) => forgetPassword(e)} className="btn btn-primary">Submit</button>
           </form>
         </div>
       </div>
       )}
       
       
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
