
'use client';
import React from 'react'
import Headertwo from '@/components/Headertwo'
import Footer from '@/components/Footer';
import BottomMenu from '@/components/BottomMenu';
import Link from 'next/link';
const page = () => {
  return (
    <div>
     <section>
  <div className="str">
    <Headertwo />
  </div>
    </section>
    <style jsx>
        {`
        .hom-head {
            padding: 0
        }
        .hom-top{
            background: #090b52!important;
        }
        .hom-head:before {
            display: none
        }
    
        .hom-head .hom-top ~ .container {
            display: none !important;
        }
    
        .carousel-item:before {
            background: none
        }
    
        .home-tit {
            padding-top: 0
        }
        `}
    </style>
    <section className="abou-pg commun-pg-main">
  <div className="about-ban comunity-ban">
    <h1>All Services</h1>
    <p>Connect with the right Service Experts</p>
    <input type="text" id="tail-se" placeholder="Search sub category here.." />
  </div>
</section>

<section>
  <div className="str all-cate-pg">
    <div className="container">
      <div className="row">
        <div className="sh-all-scat">
          <ul id="tail-re">
            <li>
              <div className="sh-all-scat-box">
                <div className="lhs">
                  <img src="/services/29.jpeg" alt="" />
                </div>
                <div className="rhs">
                  <h4>
                    <Link href="/all-listing">Real Estate </Link>
                    <span>23</span>
                  </h4>
                  <ol>
                    <li>
                      {" "}
                      <Link href="/all-listing">
                        Villas <span>87</span>
                      </Link>
                    </li>
                    <li>
                      {" "}
                      <Link href="/all-listing">
                        Indepentant House <span>45</span>
                      </Link>
                    </li>
                    <li>
                      {" "}
                      <Link href="/all-listing">
                        Plots and Lands <span>80</span>
                      </Link>
                    </li>
                  </ol>
                </div>
              </div>
            </li>
          </ul>
          <ul id="tail-re">
            <li>
              <div className="sh-all-scat-box">
                <div className="lhs">
                  <img src="/services/10.jpg" alt="" />
                </div>
                <div className="rhs">
                  <h4>
                    <Link href="/all-listing">Hotels And Resorts </Link>
                    <span>987</span>
                  </h4>
                  <ol>
                    <li>
                      {" "}
                      <Link href="/all-listing">
                        Street food <span>23</span>
                      </Link>
                    </li>
                    <li>
                      {" "}
                      <Link href="/all-listing">
                        Coffee shop <span>234</span>
                      </Link>
                    </li>
                    <li>
                      {" "}
                      <Link href="/all-listing">
                        Food hotel <span>423</span>
                      </Link>
                    </li>
                    <li>
                      {" "}
                      <Link href="/all-listing">
                        Beach Resort <span>52</span>
                      </Link>
                    </li>
                    <li>
                      {" "}
                      <Link href="/all-listing">
                        Resort <span>86</span>
                      </Link>
                    </li>
                    <li>
                      {" "}
                      <Link href="/all-listing">
                        Hotels <span>33</span>
                      </Link>
                    </li>
                  </ol>
                </div>
              </div>
            </li>
          </ul>
          <ul id="tail-re">
            <li>
              <div className="sh-all-scat-box">
                <div className="lhs">
                  <img src="/services/17.jpeg" alt="" />
                </div>
                <div className="rhs">
                  <h4>
                    <Link href="/all-listing">Pet shop </Link>
                    <span>12</span>
                  </h4>
                  <ol>
                    <li>
                      {" "}
                      <Link href="/all-listing">
                        Buy dogs <span>765</span>
                      </Link>
                    </li>
                    <li>
                      {" "}
                      <Link href="/all-listing">
                        Puppy dog types <span>76</span>
                      </Link>
                    </li>
                    <li>
                      {" "}
                      <Link href="/all-listing">
                        Other pets <span>40</span>
                      </Link>
                    </li>
                  </ol>
                </div>
              </div>
            </li>
          </ul>
          <ul id="tail-re">
            <li>
              <div className="sh-all-scat-box">
                <div className="lhs">
                  <img src="/services/18.jpeg" alt="" />
                </div>
                <div className="rhs">
                  <h4>
                    <Link href="/all-listing">Digital Products </Link>
                    <span>1238</span>
                  </h4>
                  <ol>
                    <li>
                      {" "}
                      <Link href="/all-listing">
                        Smart classes <span>22</span>
                      </Link>
                    </li>
                    <li>
                      {" "}
                      <Link href="/all-listing">
                        Health care products <span>898</span>
                      </Link>
                    </li>
                    <li>
                      {" "}
                      <Link href="/all-listing">
                        Website Template <span>988</span>
                      </Link>
                    </li>
                    <li>
                      {" "}
                      <Link href="/all-listing">
                        Ebooks <span>11</span>
                      </Link>
                    </li>
                  </ol>
                </div>
              </div>
            </li>
          </ul>
          <ul id="tail-re">
            <li>
              <div className="sh-all-scat-box">
                <div className="lhs">
                  <img src="/services/21.jpg" alt="" />
                </div>
                <div className="rhs">
                  <h4>
                    <Link href="/all-listing">Spa and Facial </Link>
                    <span>5321</span>
                  </h4>
                  <ol>
                    <li>
                      {" "}
                      <Link href="/all-listing">
                        Health &amp; Beauty <span>230</span>
                      </Link>
                    </li>
                    <li>
                      {" "}
                      <Link href="/all-listing">
                        Health &amp;Beauty <span>64</span>
                      </Link>
                    </li>
                    <li>
                      {" "}
                      <Link href="/all-listing">
                        Face &amp; Body <span>72</span>
                      </Link>
                    </li>
                    <li>
                      {" "}
                      <Link href="/all-listing">
                        Massage <span>321</span>
                      </Link>
                    </li>
                    <li>
                      {" "}
                      <Link href="/all-listing">
                        Facial <span>532</span>
                      </Link>
                    </li>
                  </ol>
                </div>
              </div>
            </li>
          </ul>
          <ul id="tail-re">
            <li>
              <div className="sh-all-scat-box">
                <div className="lhs">
                  <img src="/services/22.jpeg" alt="" />
                </div>
                <div className="rhs">
                  <h4>
                    <Link href="/all-listing">Wedding halls </Link>
                    <span>03</span>
                  </h4>
                  <ol>
                    <li>
                      {" "}
                      <Link href="/all-listing">
                        Seminar hall <span>00</span>
                      </Link>
                    </li>
                    <li>
                      {" "}
                      <Link href="/all-listing">
                        Party hall <span>01</span>
                      </Link>
                    </li>
                    <li>
                      {" "}
                      <Link href="/all-listing">
                        Marriage hall <span>00</span>
                      </Link>
                    </li>
                  </ol>
                </div>
              </div>
            </li>
          </ul>
          <ul id="tail-re">
            <li>
              <div className="sh-all-scat-box">
                <div className="lhs">
                  <img src="/services/23.jpeg" alt="" />
                </div>
                <div className="rhs">
                  <h4>
                    <Link href="/all-listing">Sports </Link>
                    <span>05</span>
                  </h4>
                  <ol>
                    <li>
                      {" "}
                      <Link href="/all-listing">
                        Cycling <span>231</span>
                      </Link>
                    </li>
                    <li>
                      {" "}
                      <Link href="/all-listing">
                        Swimming <span>342</span>
                      </Link>
                    </li>
                    <li>
                      {" "}
                      <Link href="/all-listing">
                        Sports Kits Shop <span>764</span>
                      </Link>
                    </li>
                  </ol>
                </div>
              </div>
            </li>
          </ul>
          <ul id="tail-re">
            <li>
              <div className="sh-all-scat-box">
                <div className="lhs">
                  <img src="/services/28.jpeg" alt="" />
                </div>
                <div className="rhs">
                  <h4>
                    <Link href="/all-listing">Education </Link>
                    <span>235</span>
                  </h4>
                  <ol>
                    <li>
                      {" "}
                      <Link href="/all-listing">
                        Tution Centers <span>45</span>
                      </Link>
                    </li>
                    <li>
                      {" "}
                      <Link href="/all-listing">
                        Colleges <span>23</span>
                      </Link>
                    </li>
                    <li>
                      {" "}
                      <Link href="/all-listing">
                        Schools <span>632</span>
                      </Link>
                    </li>
                    <li>
                      {" "}
                      <Link href="/all-listing">
                        Pre kg and Child care <span>342</span>
                      </Link>
                    </li>
                  </ol>
                </div>
              </div>
            </li>
          </ul>
          <ul id="tail-re">
            <li>
              <div className="sh-all-scat-box">
                <div className="lhs">
                  <img src="/services/25.jpeg" alt="" />
                </div>
                <div className="rhs">
                  <h4>
                    <Link href="/all-listing">Electricals </Link>
                    <span>95</span>
                  </h4>
                  <ol>
                    <li>
                      {" "}
                      <Link href="/all-listing">
                        Panel <span>70</span>
                      </Link>
                    </li>
                    <li>
                      {" "}
                      <Link href="/all-listing">
                        Power <span>35</span>
                      </Link>
                    </li>
                  </ol>
                </div>
              </div>
            </li>
          </ul>
          <ul id="tail-re">
            <li>
              <div className="sh-all-scat-box">
                <div className="lhs">
                  <img src="/services/4.jpg" alt="" />
                </div>
                <div className="rhs">
                  <h4>
                    <Link href="/all-listing">Automobiles </Link>
                    <span>245</span>
                  </h4>
                  <ol>
                    <li>
                      {" "}
                      <Link href="/all-listing">
                        Bike Showrooms <span>23</span>
                      </Link>
                    </li>
                    <li>
                      {" "}
                      <Link href="/all-listing">
                        Car showrooms <span>76</span>
                      </Link>
                    </li>
                    <li>
                      {" "}
                      <Link href="/all-listing">
                        Car and Bike Services <span>65</span>
                      </Link>
                    </li>
                  </ol>
                </div>
              </div>
            </li>
          </ul>
          <ul id="tail-re">
            <li>
              <div className="sh-all-scat-box">
                <div className="lhs">
                  <img src="/services/1.jpg" alt="" />
                </div>
                <div className="rhs">
                  <h4>
                    <Link href="/all-listing">Transportation </Link>
                    <span>432</span>
                  </h4>
                  <ol>
                    <li>
                      {" "}
                      <Link href="/all-listing">
                        Bike Services <span>40</span>
                      </Link>
                    </li>
                    <li>
                      {" "}
                      <Link href="/all-listing">
                        Bus Tickets <span>231</span>
                      </Link>
                    </li>
                    <li>
                      {" "}
                      <Link href="/all-listing">
                        Cab services <span>40</span>
                      </Link>
                    </li>
                  </ol>
                </div>
              </div>
            </li>
          </ul>
          <ul id="tail-re">
            <li>
              <div className="sh-all-scat-box">
                <div className="lhs">
                  <img src="/services/30.jpg" alt="" />
                </div>
                <div className="rhs">
                  <h4>
                    <Link href="/all-listing">Hospitals </Link>
                    <span>1258</span>
                  </h4>
                  <ol>
                    <li>
                      {" "}
                      <Link href="/all-listing">
                        Community Hospitals <span>455</span>
                      </Link>
                    </li>
                    <li>
                      {" "}
                      <Link href="/all-listing">
                        Clinics <span>890</span>
                      </Link>
                    </li>
                    <li>
                      {" "}
                      <Link href="/all-listing">
                        Child Hospitals <span>83</span>
                      </Link>
                    </li>
                  </ol>
                </div>
              </div>
            </li>
          </ul>
          {/*                    <ul>*/}
          {/*                        */}
          {/*                            <li>*/}
          {/*                                <div className="sh-all-scat-box">*/}
          {/*                                    <div className="lhs">*/}
          {/*                                        <img src="/services/*/}
          {/*" alt="">*/}
          {/*                                    </div>*/}
          {/*                                    <div className="rhs">*/}
          {/*                                        <h4>*/}
          {/* <span>40</span></h4>*/}
          {/*                                        <ol>*/}
          {/*                                            <li><Link href="/#">Villas <span>23</span></Link></li>*/}
          {/*                                            <li><Link href="/#">Plots <span>12</span></Link></li>*/}
          {/*                                            <li><Link href="/#">Flots <span>08</span></Link></li>*/}
          {/*                                            <li><Link href="/#">Computer software <span>58</span></Link></li>*/}
          {/*                                            <li><Link href="/#">Mobile apps <span>64</span></Link></li>*/}
          {/*                                            <li><Link href="/#">Business softwares <span>86</span></Link></li>*/}
          {/*                                            <li><Link href="/#">Website design <span>90</span></Link></li>*/}
          {/*                                            <li><Link href="/#">Website apps <span>67</span></Link></li>*/}
          {/*                                            <li><Link href="/#">Website app development <span>56</span></Link></li>*/}
          {/*                                            <li><Link href="/#">Spa and facial <span>120</span></Link></li>*/}
          {/*                                            <li><Link href="/#">Facial <span>144</span></Link></li>*/}
          {/*                                        </ol>*/}
          {/*                                    </div>*/}
          {/*                                </div>*/}
          {/*                            </li>*/}
          {/*                            */}
          {/*                    </ul>*/}
        </div>
      </div>
    </div>
  </div>
</section>

<>
  <span className="btn-ser-need-ani">Help &amp; Support</span>
  <div className="ani-quo-form">
    {" "}
    <i className="material-icons ani-req-clo">close</i>
    <div className="tit">
      <h3>
        What service do you need? <span>BizBook will help you</span>
      </h3>
    </div>
    <div className="hom-col-req">
      <div
        id="home_slide_enq_success"
        className="log"
        style={{ display: "none" }}
      >
        <p>Your Enquiry Is Submitted Successfully!!!</p>
      </div>
      <div id="home_slide_enq_fail" className="log" style={{ display: "none" }}>
        <p>Something Went Wrong!!!</p>
      </div>
      <div id="home_slide_enq_same" className="log" style={{ display: "none" }}>
        <p>You cannot make enquiry on your own listing</p>
      </div>
      <form
        name="home_slide_enquiry_form"
        id="home_slide_enquiry_form"
        method="post"
        encType="multipart/form-data"
      >
        <input
          type="hidden"
          className="form-control"
          name="listing_id"
          defaultValue={0}
          placeholder=""
          required=""
        />
        <input
          type="hidden"
          className="form-control"
          name="listing_user_id"
          defaultValue={0}
          placeholder=""
          required=""
        />
        <input
          type="hidden"
          className="form-control"
          name="enquiry_sender_id"
          defaultValue=""
          placeholder=""
          required=""
        />
        <input
          type="hidden"
          className="form-control"
          name="enquiry_source"
          defaultValue="Website"
          placeholder=""
          required=""
        />
        <div className="form-group">
          <input
            type="text"
            name="enquiry_name"
            defaultValue=""
            required="required"
            className="form-control"
            placeholder="Enter name*"
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            className="form-control"
            placeholder="Enter email*"
            required="required"
            defaultValue=""
            name="enquiry_email"
            pattern="^[\w]{1,}[\w.+-]{0,}@[\w-]{2,}([.][a-zA-Z]{2,}|[.][\w-]{2,}[.][a-zA-Z]{2,})$"
            title="Invalid email address"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            defaultValue=""
            name="enquiry_mobile"
            placeholder="Enter mobile number *"
            pattern="[7-9]{1}[0-9]{9}"
            title="Phone number starting with 7-9 and remaing 9 digit with 0-9"
            required=""
          />
        </div>
        <div className="form-group">
          <select
            name="enquiry_category"
            id="enquiry_category"
            className="form-control"
          >
            <option value="">Select Category</option>
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
          <textarea
            className="form-control"
            rows={3}
            name="enquiry_message"
            placeholder="Enter your query or message"
            defaultValue={""}
          />
        </div>
        <input type="hidden" id="source" />
        <button
          type="submit"
          id="home_slide_enquiry_submit"
          name="home_slide_enquiry_submit"
          className="btn btn-primary"
        >
          Submit Requirements
        </button>
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
              <img src="/idea.png" alt="" />
            </div>
            <div className="col-md-7 bb-text">
              <h4>#1 Business Directory and Service Provider</h4>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour.
              </p>
            </div>
            <div className="col-md-3 bb-link">
              {" "}
              <Link href="/pricing-details">Add my business</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <Footer/>
  <BottomMenu/>
</>

    </div>
  )
}

export default page
