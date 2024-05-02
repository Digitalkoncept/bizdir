"use client";
import React from "react";
import Headertwo from "@/components/Headertwo";
import Footer from "@/components/Footer";
import BottomMenu from "@/components/BottomMenu";
import Link from "next/link";

// this is index page
const page = () => {
    return (
        <div>
            <style jsx>
                {`
                    .ud-lhs {
                        display: none;
                    }
                `}
            </style>
            <section>
                <div className="str">
                    <div>
                        <Headertwo />
                    </div>
                </div>
            </section>
            <>
                <section className=" login-reg">
                    <div className="container">
                        <div className="row">
                            <div className="login-main add-list">
                                <div className="log-bor">&nbsp;</div>
                                <span className="steps">Create new</span>
                                <div className="log">
                                    <div className="login">
                                        <h4>Add New Listing</h4>
                                        <div className="row cre-dup">
                                            <div className="col-md-6">
                                                
                                                <Link href="/account/add-listing-step">
                                                    Create listing from scratch
                                                </Link>
                                            </div>
                                            <div className="col-md-6">
                                                
                                                <span className="cre-dup-btn">
                                                    Create duplicate listing
                                                </span>
                                            </div>
                                        </div>
                                        <form
                                            name="duplicate_listing_form"
                                            action="duplicate_listing_insert"
                                            id="duplicate_listing_form"
                                            method="post"
                                            className="cre-dup-form cre-dup-form-show"
                                        >
                                            {/*FILED START*/}
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <select
                                                            name="listing_id"
                                                            id="listing_id"
                                                            className="chosen-select form-control"
                                                            required="required"
                                                        >
                                                            <option
                                                                defaultValue=""
                                                                disabled=""
                                                            >
                                                                Listing Name
                                                            </option>
                                                            <option value="LIST395">
                                                                test
                                                            </option>
                                                            <option value="LIST394">
                                                                dfzhfhd
                                                            </option>
                                                            <option value="LIST393">
                                                                Iei
                                                            </option>
                                                            <option value="LIST392">
                                                                phoenix mall
                                                            </option>
                                                            <option value="LIST391">
                                                                Ocha Thai
                                                                Cuisine
                                                            </option>
                                                            <option value="LIST389">
                                                                Core real
                                                                estates
                                                            </option>
                                                            <option value="LIST384">
                                                                Gill Automobiles
                                                                and Services
                                                            </option>
                                                            <option value="LIST381">
                                                                Titan Wedding
                                                                Hall
                                                            </option>
                                                            <option value="LIST380">
                                                                Taj Hotels
                                                            </option>
                                                            <option value="LIST378">
                                                                ccc
                                                            </option>
                                                            <option value="LIST375">
                                                                Hello
                                                            </option>
                                                            <option value="LIST268">
                                                                Premium gardens
                                                            </option>
                                                            <option value="LIST267">
                                                                Beach luxury
                                                                villa gardens
                                                            </option>
                                                            <option value="LIST266">
                                                                GOS Villas
                                                            </option>
                                                            <option value="LIST247">
                                                                Super bike
                                                                showroom
                                                            </option>
                                                            <option value="LIST238">
                                                                Benz cars
                                                                showroom
                                                            </option>
                                                            <option value="LIST207">
                                                                Smith Luxury
                                                                Villas
                                                            </option>
                                                            <option value="LIST164">
                                                                Ø§Ø¨Ù†Ù‰
                                                                Ù…ÙˆÙ‚Ø¹Ùƒ
                                                                Ù…Ø¹Ù†Ø§
                                                            </option>
                                                            <option value="LIST163">
                                                                BizBookBusiness
                                                                Directory
                                                                Template
                                                            </option>
                                                            <option value="LIST130">
                                                                Tour and Travel
                                                                html Template
                                                            </option>
                                                            <option value="LIST129">
                                                                Smart Digital
                                                                Products
                                                            </option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            {/*FILED END*/}
                                            {/*FILED START*/}
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <input
                                                            type="text"
                                                            name="listing_name"
                                                            required="required"
                                                            className="form-control"
                                                            placeholder="New Listing Name*"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            {/*FILED END*/}
                                            <button
                                                type="submit"
                                                name="listing_submit"
                                                className="btn btn-primary"
                                            >
                                                Create Now
                                            </button>
                                        </form>
                                        <div className="col-md-12">
                                            
                                            <Link
                                                href="/dashboard"
                                                className="skip"
                                            >
                                                Go to user dashboard &gt;&gt;
                                            </Link>
                                        </div>
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
                    
                    <i className="material-icons ani-req-clo">close</i>
                    <div className="tit">
                        <h3>
                            What service do you need?
                            <span>BizBook will help you</span>
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
                        <div
                            id="home_slide_enq_fail"
                            className="log"
                            style={{ display: "none" }}
                        >
                            <p>Something Went Wrong!!!</p>
                        </div>
                        <div
                            id="home_slide_enq_same"
                            className="log"
                            style={{ display: "none" }}
                        >
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
                                    <option value={1}>
                                        Hotels And Resorts
                                    </option>
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
                                        <h4>
                                            #1 Business Directory and Service
                                            Provider
                                        </h4>
                                        <p>
                                            There are many variations of
                                            passages of Lorem Ipsum available,
                                            but the majority have suffered
                                            alteration in some form, by injected
                                            humour.
                                        </p>
                                    </div>
                                    <div className="col-md-3 bb-link">
                                        
                                        <Link href="/pricing-details">
                                            Add my business
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
            <Footer />
            <BottomMenu />
        </div>
    );
};

export default page;
