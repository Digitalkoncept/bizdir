'use client';
import React from 'react'
import Headertwo from '../../component/Headertwo'
import Footer from '../../component/Footer';
import BottomMenu from '../../component/BottomMenu';
import Link from 'next/link';

const page = () => {
  return (
    <div>
      <section>
    <div className="str">
    <div>
      <Headertwo/>
    </div>
  </div>
    </section>
    <>
  <section className=" login-reg">
    <div className="container">
      <div className="row">
        <div className="add-list-ste">
          <div className="add-list-ste-inn">
            <ul>
              <li>
                <Link href="/add-listing-step-1">
                  {" "}
                  <span>Step 1</span>
                  <b>Basic Info</b>
                </Link>
              </li>
              <li>
                <Link href="/add-listing-step-2">
                  {" "}
                  <span>Step 2</span>
                  <b>Services</b>
                </Link>
              </li>
              <li>
                <Link href="/add-listing-step-3">
                  {" "}
                  <span>Step 3</span>
                  <b>offers</b>
                </Link>
              </li>
              <li>
                <Link href="/add-listing-step-4">
                  {" "}
                  <span>Step 4</span>
                  <b>map</b>
                </Link>
              </li>
              <li>
                <Link href="/add-listing-step-5" className="act">
                  {" "}
                  <span>Step 5</span>
                  <b>Other</b>
                </Link>
              </li>
              <li>
                <Link href="/add-listing-step-6">
                  {" "}
                  <span>Step 6</span>
                  <b>done</b>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="login-main add-list">
          <div className="log-bor">&nbsp;</div>{" "}
          <span className="steps">Step 5</span>
          <div className="log">
            <div className="login add-lis-oth">
              <h4>Other informations</h4>
              <span
                className="add-list-add-btn lis-add-oad"
                title="add new offer"
              >
                +
              </span>
              <span
                className="add-list-rem-btn lis-add-ore"
                title="remove offer"
              >
                -
              </span>
              <form
                action="listing_insert"
                className="listing_form"
                id="listing_form_5"
                name="listing_form_5"
                method="post"
                encType="multipart/form-data"
              >
                <ul>
                  <li>
                    {/*FILED START*/}
                    <div className="row">
                      <div className="col-md-5">
                        <div className="form-group">
                          <input
                            type="text"
                            name="listing_info_question[]"
                            className="form-control"
                            placeholder="Experience"
                          />
                        </div>
                      </div>
                      <div className="col-md-2">
                        <div className="form-group">
                          {" "}
                          <i className="material-icons">arrow_forward</i>
                        </div>
                      </div>
                      <div className="col-md-5">
                        <div className="form-group">
                          <input
                            type="text"
                            name="listing_info_answer[]"
                            className="form-control"
                            placeholder="20 years"
                          />
                        </div>
                      </div>
                    </div>
                    {/*FILED END*/}
                  </li>
                  {/*FILED START*/}
                  {/*                                    <li>*/}
                  {/*                                    <div class="row">*/}
                  {/*                                        <div class="col-md-5">*/}
                  {/*                                            <div class="form-group">*/}
                  {/*                                              <input type="text" name="listing_info_question[]" class="form-control" placeholder="Parking">*/}
                  {/*                                            </div>*/}
                  {/*                                        </div>*/}
                  {/*										<div class="col-md-2">*/}
                  {/*                                            <div class="form-group">*/}
                  {/*                                              <i class="material-icons">arrow_forward</i>*/}
                  {/*                                            </div>*/}
                  {/*                                        </div>*/}
                  {/*                                        <div class="col-md-5">*/}
                  {/*                                            <div class="form-group">*/}
                  {/*                                              <input type="text" name="listing_info_answer[]" class="form-control" placeholder="yes">*/}
                  {/*                                            </div>*/}
                  {/*                                        </div>*/}
                  {/*                                    </div>*/}
                  {/*                                    </li>*/}
                  {/*FILED END*/}
                  {/*FILED START*/}
                  {/*                                    <li>*/}
                  {/*                                    <div class="row">*/}
                  {/*                                        <div class="col-md-5">*/}
                  {/*                                            <div class="form-group">*/}
                  {/*                                              <input type="text" name="listing_info_question[]" class="form-control" placeholder="Smoking">*/}
                  {/*                                            </div>*/}
                  {/*                                        </div>*/}
                  {/*										<div class="col-md-2">*/}
                  {/*                                            <div class="form-group">*/}
                  {/*                                              <i class="material-icons">arrow_forward</i>*/}
                  {/*                                            </div>*/}
                  {/*                                        </div>*/}
                  {/*                                        <div class="col-md-5">*/}
                  {/*                                            <div class="form-group">*/}
                  {/*                                              <input type="text" name="listing_info_answer[]" class="form-control" placeholder="yes">*/}
                  {/*                                            </div>*/}
                  {/*                                        </div>*/}
                  {/*                                    </div>*/}
                  {/*                                    </li>*/}
                  {/*FILED END*/}
                  {/*FILED START*/}
                  {/*                                    <li>*/}
                  {/*                                    <div class="row">*/}
                  {/*                                        <div class="col-md-5">*/}
                  {/*                                            <div class="form-group">*/}
                  {/*                                              <input type="text" name="listing_info_question[]" class="form-control" placeholder="Take Out">*/}
                  {/*                                            </div>*/}
                  {/*                                        </div>*/}
                  {/*										<div class="col-md-2">*/}
                  {/*                                            <div class="form-group">*/}
                  {/*                                              <i class="material-icons">arrow_forward</i>*/}
                  {/*                                            </div>*/}
                  {/*                                        </div>*/}
                  {/*                                        <div class="col-md-5">*/}
                  {/*                                            <div class="form-group">*/}
                  {/*                                              <input type="text" name="listing_info_answer[]" class="form-control" placeholder="yes">*/}
                  {/*                                            </div>*/}
                  {/*                                        </div>*/}
                  {/*                                    </div>*/}
                  {/*                                    </li>*/}
                  {/*FILED END*/}
                </ul>
                {/*FILED START*/}
                <div className="row">
                  <div className="col-md-6">
                    <Link href="/add-listing-step-4">
                      <button type="button" className="btn btn-primary">
                        Previous
                      </button>
                    </Link>
                  </div>
                  <div className="col-md-6">
                    <button
                      type="submit"
                      name="listing_submit"
                      className="btn btn-primary"
                    >
                      Finish
                    </button>
                  </div>
                  {/*                                        <div class="col-md-12">*/}
                  {/*                                            <Link href="/add-listing-step-6" class="skip">Skip this >></Link>*/}
                  {/*                                        </div>*/}
                </div>
                {/*FILED END*/}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*END PRICING DETAILS*/}
  {/* START */}
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
</>
<Footer/>
<BottomMenu/>
    </div>
  )
}

export default page
