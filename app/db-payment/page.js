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
    <div>
      <Headertwo/>
    </div>
  </div>
    </section>
    <>
  <section className=" ud">
    <div className="ud-inn">
      {/*LEFT SECTION*/}
      <div className="ud-lhs">
        <div className="ud-lhs-s1">
          <img src="/user/62736rn53themes.png" alt="" />
          <h4>Digital koncept</h4>
          <b>Join on 26, Mar 2021</b>
          <Link className="ud-lhs-view-pro" target="_blank" href="/profile">
            My profile
          </Link>
        </div>
        <div className="ud-lhs-s2">
          <ul>
            <li>
              <Link href="/dashboard" className="">
                <img src="/icon/dbl1.png" alt="" />
                My Dashboard
              </Link>
            </li>
            <li>
              <Link href="/db-all-listing" className="">
                <img src="/icon/shop.png" alt="" />
                All Listings
              </Link>
            </li>
            <li>
              <Link href="/add-listing-start">
                <img src="/icon/dbl3.png" alt="" />
                Add New Listing
              </Link>
            </li>
            <li>
              <Link href="/db-enquiry" className="">
                <img src="/icon/tick.png" alt="" />
                Lead enquiry
              </Link>
            </li>
            <li>
              <Link href="/db-products" className="">
                <img src="/icon/cart.png" alt="" />
                All Products
              </Link>
            </li>
            <li>
              <Link href="/db-events" className="">
                <img src="/icon/calendar.png" alt="" />
                Events
              </Link>
            </li>
            <li>
              <Link href="/db-blog-posts" className="">
                <img src="/icon/blog1.png" alt="" />
                Blog posts
              </Link>
            </li>
            <li>
              <Link href="/db-coupons" className="">
                <img src="/icon/coupons.png" alt="" />
                Coupons
              </Link>
            </li>
            <li>
              <Link href="/db-promote" className="">
                <img src="/icon/promotion.png" alt="" />
                Promotions
              </Link>
            </li>
            <li>
              <Link href="/db-seo" className="">
                <img src="/icon/seo.png" alt="" />
                SEO
              </Link>
            </li>
            <li>
              <Link href="/db-point-history" className="">
                <img src="/icon/point.png" alt="" />
                Points History
              </Link>
            </li>
            <li>
              <Link href="/db-review" className="">
                <img src="/icon/dbl13.png" alt="" />
                Reviews
              </Link>
            </li>
            {/*<li>
                  <Link href="/db-message" className=""><img src="/icon/dbl14.png" alt="" />Messages</Link>
              </li>*/}
            <li>
              <Link href="/db-my-profile" className="">
                <img src="/icon/dbl6.png" alt="" />
                My Profile
              </Link>
            </li>
            <li>
              <Link href="/db-like-listings" className="">
                <img src="/icon/dbl15.png" alt="" />
                Liked Listings
              </Link>
            </li>
            <li>
              <Link href="/db-followings" className="">
                <img src="/icon/dbl18.png" alt="" />
                Followings
              </Link>
            </li>
            <li>
              <Link href="/db-post-ads" className="">
                <img src="/icon/dbl11.png" alt="" />
                Ad Summary
              </Link>
            </li>
            <li>
              <Link href="/db-payment" className="db-lact">
                <img src="/icon/dbl9.png" alt="" />
                Payment &amp; plan
              </Link>
            </li>
            <li>
              <Link href="/db-invoice-all" className="">
                <img src="/icon/dbl16.png" alt="" />
                Payment invoice
              </Link>
            </li>
            <li>
              <Link href="/db-notifications" className="">
                <img src="/icon/dbl19.png" alt="" />
                Notifications
              </Link>
            </li>
            <li>
              <Link href="/how-to" className="" target="_blank">
                <img src="/icon/dbl17.png" alt="" />
                How to&apos;s
              </Link>
            </li>
            <li>
              <Link href="/db-setting" className="">
                <img src="/icon/dbl210.png" alt="" />
                Setting
              </Link>
            </li>
            <li>
              <Link href="/#">
                <img src="/icon/dbl12.png" alt="" />
                Log Out
              </Link>
            </li>
          </ul>
        </div>
      </div>
      {/*CENTER SECTION*/}
      <div className="ud-cen">
        <div className="log-bor">&nbsp;</div>{" "}
        <span className="udb-inst">Payment</span>
        <div className="ud-cen-s2">
          <h2>Payment Status</h2>
          <Link href="/db-plan-change" className="db-tit-btn">
            Change My Plan
          </Link>
          <div className="ud-payment">
            <div className="pay-lhs">
              <img src="/user/62736rn53themes.png" alt="" />
            </div>
            <div className="pay-rhs">
              <ul>
                <li>
                  <b>Name : </b> Digital koncept
                </li>
                <li>
                  <b>Plan name : </b> Premium Plus
                </li>
                <li>
                  <b>Start date : </b> 26, Mar 2021
                </li>
                <li>
                  <b>Expiry date : </b> 26, Mar 2031
                </li>
                <li>
                  <b>Duration : </b> 10 year
                </li>
                <li>
                  <b>Remaining days : </b> 3638
                </li>
                <li>
                  <span className="ud-stat-pay-btn">Checkout amount: $20</span>
                </li>
                <li>
                  <span className="ud-stat-pay-btn">
                    Payment Status: PENDING
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="ud-pay-op">
            <h4>Select your payment option</h4>
            <ul>
              <li>
                <div className="pay-full">
                  <div className="rbbox">
                    <input
                      type="radio"
                      id="paymentpaypal"
                      name="payment"
                      defaultChecked="checked"
                    />
                    <label htmlFor="paymentpaypal">
                      PayPal payment gateway
                    </label>
                    <div className="pay-note">
                      {" "}
                      <span>
                        <i className="material-icons">star</i> You can pay with
                        your credit card if you don’t have a PayPal account.
                      </span>
                      <span>
                        <i className="material-icons">star</i>What is PayPal?
                      </span>
                      <form
                        name="paypal_form"
                        id="paypal_form"
                        method="post"
                        action="payment_paypal_submit"
                      >
                        <h4>Billing details</h4>
                        <ul>
                          <li>
                            {/*FILED START*/}
                            <div className="row">
                              <div className="col-md-6">
                                <div className="form-group">
                                  <input
                                    type="text"
                                    readOnly="readonly"
                                    className="form-control"
                                    defaultValue="Digital koncept"
                                    placeholder="Full name *"
                                    required=""
                                  />
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-group">
                                  <input
                                    type="text"
                                    name="user_country"
                                    className="form-control"
                                    defaultValue="Austarlia"
                                    placeholder="Country"
                                  />
                                </div>
                              </div>
                            </div>
                            {/*FILED END*/}
                            {/*FILED START*/}
                            <div className="row">
                              <div className="col-md-6">
                                <div className="form-group">
                                  <input
                                    type="text"
                                    name="user_state"
                                    className="form-control"
                                    defaultValue="Sydney"
                                    placeholder="State"
                                  />
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-group">
                                  <input
                                    type="text"
                                    name="user_city"
                                    className="form-control"
                                    defaultValue="Sydney"
                                    placeholder="City *"
                                    required=""
                                  />
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
                                    name="user_address"
                                    className="form-control"
                                    defaultValue="No 27, Pointing street, Sydney, Australia"
                                    placeholder="Village & Street name"
                                  />
                                </div>
                              </div>
                            </div>
                            {/*FILED END*/}
                            {/*FILED START*/}
                            <div className="row">
                              <div className="col-md-6">
                                <div className="form-group">
                                  <input
                                    type="text"
                                    name="user_zip_code"
                                    onkeypress="return isNumber(event)"
                                    className="form-control"
                                    defaultValue={65448811}
                                    placeholder="Postcode/ZIP"
                                  />
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-group">
                                  <input
                                    type="text"
                                    className="form-control"
                                    name="user_contact_name"
                                    defaultValue="John smth"
                                    placeholder="Contact person *"
                                    required=""
                                  />
                                </div>
                              </div>
                            </div>
                            {/*FILED END*/}
                            {/*FILED START*/}
                            <div className="row">
                              <div className="col-md-6">
                                <div className="form-group">
                                  <input
                                    type="text"
                                    className="form-control"
                                    name="user_contact_mobile"
                                    onkeypress="return isNumber(event)"
                                    defaultValue={2211446688}
                                    placeholder="Contact number"
                                  />
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-group">
                                  <input
                                    type="text"
                                    className="form-control"
                                    name="user_contact_email"
                                    defaultValue="rn53hemes@gmail.com"
                                    placeholder="Contact email"
                                    required=""
                                  />
                                </div>
                              </div>
                            </div>
                            {/*FILED END*/}
                          </li>
                        </ul>
                        <button
                          type="submit"
                          name="payment_submit"
                          className="db-pro-bot-btn"
                        >
                          Start Payment
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="pay-full">
                  <div className="rbbox">
                    <input type="radio" id="paymentstripe" name="payment" />
                    <label htmlFor="paymentstripe">
                      Stripe payment gateway
                    </label>
                    <div className="pay-note">
                      {" "}
                      <span>
                        <i className="material-icons">star</i> You can pay with
                        your credit card if you don’t have a Stripe account.
                      </span>
                      <span>
                        <i className="material-icons">star</i>What is Stripe?
                      </span>
                      <form
                        name="stripe_dash_form"
                        id="stripe_dash_form"
                        method="post"
                        action="stripe_bypass_submit"
                      >
                        <input
                          type="hidden"
                          readOnly="readonly"
                          className="form-control"
                          name="stripe_dash_user_id"
                          defaultValue={37}
                          placeholder="Full name *"
                          required=""
                        />
                        <h4>Billing details</h4>
                        <ul>
                          <li>
                            {/*                                                    FILED START*/}
                            <div className="row">
                              <div className="col-md-6">
                                <div className="form-group">
                                  <input
                                    type="text"
                                    readOnly="readonly"
                                    className="form-control"
                                    defaultValue="Digital koncept"
                                    placeholder="Full name *"
                                    required=""
                                  />
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-group">
                                  <input
                                    type="text"
                                    name="user_country"
                                    className="form-control"
                                    defaultValue="Austarlia"
                                    placeholder="Country"
                                  />
                                </div>
                              </div>
                            </div>
                            {/*                                                    FILED END*/}
                            {/*                                                    FILED START*/}
                            <div className="row">
                              <div className="col-md-6">
                                <div className="form-group">
                                  <input
                                    type="text"
                                    name="user_state"
                                    className="form-control"
                                    defaultValue="Sydney"
                                    placeholder="State"
                                  />
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-group">
                                  <input
                                    type="text"
                                    name="user_city"
                                    className="form-control"
                                    defaultValue="Sydney"
                                    placeholder="City *"
                                    required=""
                                  />
                                </div>
                              </div>
                            </div>
                            {/*                                                    FILED END*/}
                            {/*                                                    FILED START*/}
                            <div className="row">
                              <div className="col-md-12">
                                <div className="form-group">
                                  <input
                                    type="text"
                                    name="user_address"
                                    className="form-control"
                                    defaultValue="No 27, Pointing street, Sydney, Australia"
                                    placeholder="Village & Street name"
                                  />
                                </div>
                              </div>
                            </div>
                            {/*                                                    FILED END*/}
                            {/*                                                    FILED START*/}
                            <div className="row">
                              <div className="col-md-6">
                                <div className="form-group">
                                  <input
                                    type="text"
                                    name="user_zip_code"
                                    onkeypress="return isNumber(event)"
                                    className="form-control"
                                    defaultValue={65448811}
                                    placeholder="Postcode/ZIP"
                                  />
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-group">
                                  <input
                                    type="text"
                                    className="form-control"
                                    name="user_contact_name"
                                    defaultValue="John smth"
                                    placeholder="Contact person *"
                                    required=""
                                  />
                                </div>
                              </div>
                            </div>
                            {/*                                                    FILED END*/}
                            {/*                                                    FILED START*/}
                            <div className="row">
                              <div className="col-md-6">
                                <div className="form-group">
                                  <input
                                    type="text"
                                    className="form-control"
                                    name="user_contact_mobile"
                                    onkeypress="return isNumber(event)"
                                    defaultValue={2211446688}
                                    placeholder="Contact number"
                                  />
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-group">
                                  <input
                                    type="text"
                                    className="form-control"
                                    name="user_contact_email"
                                    defaultValue="rn53hemes@gmail.com"
                                    placeholder="Contact email"
                                    required=""
                                  />
                                </div>
                              </div>
                            </div>
                            {/*                                                    FILED END*/}
                          </li>
                        </ul>
                        <button
                          type="submit"
                          name="stripe_dash_form_submit"
                          className="db-pro-bot-btn"
                        >
                          Start Payment
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="pay-full">
                  <div className="rbbox">
                    <input type="radio" id="payment_razor_pay" name="payment" />
                    <label htmlFor="payment_razor_pay">
                      Razor Pay payment gateway
                    </label>
                    <div className="pay-note">
                      {" "}
                      <span>
                        <i className="material-icons">star</i> You can pay with
                        your credit card if you don’t have a Razor Pay account.
                      </span>
                      <span>
                        <i className="material-icons">star</i>What is Razor Pay?
                      </span>
                      <form
                        name="razor_pay_dash_form"
                        id="razor_pay_dash_form"
                        method="post"
                        action="razor_pay_bypass_submit"
                      >
                        <input
                          type="hidden"
                          readOnly="readonly"
                          className="form-control"
                          name="razor_pay_dash_user_id"
                          defaultValue={37}
                          placeholder="Full name *"
                          required=""
                        />
                        <h4>Billing details</h4>
                        <ul>
                          <li>
                            {/*                                                    FILED START*/}
                            <div className="row">
                              <div className="col-md-6">
                                <div className="form-group">
                                  <input
                                    type="text"
                                    readOnly="readonly"
                                    className="form-control"
                                    defaultValue="Digital koncept"
                                    placeholder="Full name *"
                                    required=""
                                  />
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-group">
                                  <input
                                    type="text"
                                    name="user_country"
                                    className="form-control"
                                    defaultValue="Austarlia"
                                    placeholder="Country"
                                  />
                                </div>
                              </div>
                            </div>
                            {/*                                                    FILED END*/}
                            {/*                                                    FILED START*/}
                            <div className="row">
                              <div className="col-md-6">
                                <div className="form-group">
                                  <input
                                    type="text"
                                    name="user_state"
                                    className="form-control"
                                    defaultValue="Sydney"
                                    placeholder="State"
                                  />
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-group">
                                  <input
                                    type="text"
                                    name="user_city"
                                    className="form-control"
                                    defaultValue="Sydney"
                                    placeholder="City *"
                                    required=""
                                  />
                                </div>
                              </div>
                            </div>
                            {/*                                                    FILED END*/}
                            {/*                                                    FILED START*/}
                            <div className="row">
                              <div className="col-md-12">
                                <div className="form-group">
                                  <input
                                    type="text"
                                    name="user_address"
                                    className="form-control"
                                    defaultValue="No 27, Pointing street, Sydney, Australia"
                                    placeholder="Village & Street name"
                                  />
                                </div>
                              </div>
                            </div>
                            {/*                                                    FILED END*/}
                            {/*                                                    FILED START*/}
                            <div className="row">
                              <div className="col-md-6">
                                <div className="form-group">
                                  <input
                                    type="text"
                                    name="user_zip_code"
                                    onkeypress="return isNumber(event)"
                                    className="form-control"
                                    defaultValue={65448811}
                                    placeholder="Postcode/ZIP"
                                  />
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-group">
                                  <input
                                    type="text"
                                    className="form-control"
                                    name="user_contact_name"
                                    defaultValue="John smth"
                                    placeholder="Contact person *"
                                    required=""
                                  />
                                </div>
                              </div>
                            </div>
                            {/*                                                    FILED END*/}
                            {/*                                                    FILED START*/}
                            <div className="row">
                              <div className="col-md-6">
                                <div className="form-group">
                                  <input
                                    type="text"
                                    className="form-control"
                                    name="user_contact_mobile"
                                    onkeypress="return isNumber(event)"
                                    defaultValue={2211446688}
                                    placeholder="Contact number"
                                  />
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-group">
                                  <input
                                    type="text"
                                    className="form-control"
                                    name="user_contact_email"
                                    defaultValue="rn53hemes@gmail.com"
                                    placeholder="Contact email"
                                    required=""
                                  />
                                </div>
                              </div>
                            </div>
                            {/*                                                    FILED END*/}
                          </li>
                        </ul>
                        <button
                          type="submit"
                          name="razor_pay_dash_form_submit"
                          className="db-pro-bot-btn"
                        >
                          Start Payment
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="pay-full">
                  <div className="rbbox">
                    <input type="radio" id="payment_paytm" name="payment" />
                    <label htmlFor="payment_paytm">Paytm payment gateway</label>
                    <div className="pay-note">
                      {" "}
                      <span>
                        <i className="material-icons">star</i> You can pay with
                        your credit card if you don’t have a Paytm account.
                      </span>
                      <span>
                        <i className="material-icons">star</i>What is Paytm?
                      </span>
                      <form
                        name="paytm_dash_form"
                        id="paytm_dash_form"
                        method="post"
                        action="paytm_bypass_submit"
                      >
                        <input
                          type="hidden"
                          readOnly="readonly"
                          className="form-control"
                          name="paytm_dash_user_id"
                          defaultValue={37}
                          placeholder="Full name *"
                          required=""
                        />
                        <h4>Billing details</h4>
                        <ul>
                          <li>
                            {/*                                                    FILED START*/}
                            <div className="row">
                              <div className="col-md-6">
                                <div className="form-group">
                                  <input
                                    type="text"
                                    readOnly="readonly"
                                    className="form-control"
                                    defaultValue="Digital koncept"
                                    placeholder="Full name *"
                                    required=""
                                  />
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-group">
                                  <input
                                    type="text"
                                    name="user_country"
                                    className="form-control"
                                    defaultValue="Austarlia"
                                    placeholder="Country"
                                  />
                                </div>
                              </div>
                            </div>
                            {/*                                                    FILED END*/}
                            {/*                                                    FILED START*/}
                            <div className="row">
                              <div className="col-md-6">
                                <div className="form-group">
                                  <input
                                    type="text"
                                    name="user_state"
                                    className="form-control"
                                    defaultValue="Sydney"
                                    placeholder="State"
                                  />
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-group">
                                  <input
                                    type="text"
                                    name="user_city"
                                    className="form-control"
                                    defaultValue="Sydney"
                                    placeholder="City *"
                                    required=""
                                  />
                                </div>
                              </div>
                            </div>
                            {/*                                                    FILED END*/}
                            {/*                                                    FILED START*/}
                            <div className="row">
                              <div className="col-md-12">
                                <div className="form-group">
                                  <input
                                    type="text"
                                    name="user_address"
                                    className="form-control"
                                    defaultValue="No 27, Pointing street, Sydney, Australia"
                                    placeholder="Village & Street name"
                                  />
                                </div>
                              </div>
                            </div>
                            {/*                                                    FILED END*/}
                            {/*                                                    FILED START*/}
                            <div className="row">
                              <div className="col-md-6">
                                <div className="form-group">
                                  <input
                                    type="text"
                                    name="user_zip_code"
                                    onkeypress="return isNumber(event)"
                                    className="form-control"
                                    defaultValue={65448811}
                                    placeholder="Postcode/ZIP"
                                  />
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-group">
                                  <input
                                    type="text"
                                    className="form-control"
                                    name="user_contact_name"
                                    defaultValue="John smth"
                                    placeholder="Contact person *"
                                    required=""
                                  />
                                </div>
                              </div>
                            </div>
                            {/*                                                    FILED END*/}
                            {/*                                                    FILED START*/}
                            <div className="row">
                              <div className="col-md-6">
                                <div className="form-group">
                                  <input
                                    type="text"
                                    className="form-control"
                                    name="user_contact_mobile"
                                    onkeypress="return isNumber(event)"
                                    defaultValue={2211446688}
                                    placeholder="Contact number"
                                  />
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-group">
                                  <input
                                    type="text"
                                    className="form-control"
                                    name="user_contact_email"
                                    defaultValue="rn53hemes@gmail.com"
                                    placeholder="Contact email"
                                    required=""
                                  />
                                </div>
                              </div>
                            </div>
                            {/*                                                    FILED END*/}
                          </li>
                        </ul>
                        <button
                          type="submit"
                          name="paytm_dash_form_submit"
                          className="db-pro-bot-btn"
                        >
                          Start Payment
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="ud-notes">
            <p>
              <b>Notes:</b> Hi, Before start &quot;Ads Payment&quot; you must know the
              pricing details and positions and all. You just click the &quot;Pricing
              and other details&quot; button in this same page and you know the all
              details. If your payment done means your invoice automaticall
              received your &quot;Payment invoice&quot; page and you never stop your Ads
              till the end date.
            </p>
          </div>
        </div>
      </div>
      {/*RIGHT SECTION*/}
      <div className="ud-rhs">
        <div className="ud-rhs-promo">
          <h3>Promote my business</h3>
          <p>
            Your listing show on the top of the respective category page
          </p>{" "}
          <Link href="/promote-business">Start now</Link>
        </div>
        {/*    //Total Point Section Starts*/}
        <div className="ud-rhs-poin">
          <div className="ud-rhs-poin1">
            <h4>Your points</h4>
            <span className="count1">60</span>
          </div>
          <div className="ud-rhs-poin2">
            <h3>Earn more credit points</h3>
            <p>
              Use this poins to promote your listing. <Link href="/#">Click here</Link>{" "}
              for demo
            </p>{" "}
            <Link href="/buy-points" className="cta">
              Buy Points
            </Link>
          </div>
        </div>
        {/*    //Total Point Section Ends*/}
        <div className="ud-rhs-pay">
          <div className="ud-rhs-pay-inn">
            <h3>Payment Information</h3>
            <ul>
              <li>
                <b>Plan name : </b> Premium Plus
              </li>
              <li>
                <b>Start date : </b> 26, Mar 2021
              </li>
              <li>
                <b>Expiry date : </b> 26, Mar 2031
              </li>
              <li>
                <b>Duration : </b> 10 year
              </li>
              <li>
                <b>Remaining Days: </b> 3638
              </li>
              <li>
                <span className="ud-stat-pay-btn">
                  <b>Checkout cost:</b> $20
                </span>
              </li>
              <li>
                <span className="ud-stat-pay-btn">
                  <b>Payment Status:</b> PENDING
                </span>
              </li>
            </ul>{" "}
            <Link href="/db-payment" className="btn btn2">
              Pay Now
            </Link>
          </div>
        </div>
        <div className="ud-rhs-pay ud-rhs-status">
          <div className="ud-rhs-pay-inn">
            <h3>Listing open &amp; close status</h3>
            <ul>
              {/*                <li>*/}
              {/*                    <span>Premium gardens</span>*/}
              {/*                    <div className="custom-control custom-switch">*/}
              {/*                        <input type="checkbox" className="listing_open_close_switch custom-control-input" id="switch1" checked>*/}
              {/*                        <label className="custom-control-label" for="switch1">&nbsp;</label>*/}
              {/*                    </div>*/}
              {/*                </li>*/}
              <li>
                {" "}
                <span>test</span>
                <div className="custom-control custom-switch">
                  <input
                    type="checkbox"
                    className="listing_open_close_switch custom-control-input"
                    id={395}
                    defaultChecked=""
                  />
                  <label
                    className="custom-control-label"
                    htmlFor={395}
                    data-toggle="tooltip"
                    title="Click here to update your listing status, Open or Closed."
                  >
                    &nbsp;
                  </label>
                </div>
              </li>
              <li>
                {" "}
                <span>dfzhfhd</span>
                <div className="custom-control custom-switch">
                  <input
                    type="checkbox"
                    className="listing_open_close_switch custom-control-input"
                    id={394}
                    defaultChecked=""
                  />
                  <label
                    className="custom-control-label"
                    htmlFor={394}
                    data-toggle="tooltip"
                    title="Click here to update your listing status, Open or Closed."
                  >
                    &nbsp;
                  </label>
                </div>
              </li>
              <li>
                {" "}
                <span>Iei</span>
                <div className="custom-control custom-switch">
                  <input
                    type="checkbox"
                    className="listing_open_close_switch custom-control-input"
                    id={393}
                  />
                  <label
                    className="custom-control-label"
                    htmlFor={393}
                    data-toggle="tooltip"
                    title="Click here to update your listing status, Open or Closed."
                  >
                    &nbsp;
                  </label>
                </div>
              </li>
              <li>
                {" "}
                <span>phoenix mall</span>
                <div className="custom-control custom-switch">
                  <input
                    type="checkbox"
                    className="listing_open_close_switch custom-control-input"
                    id={392}
                    defaultChecked=""
                  />
                  <label
                    className="custom-control-label"
                    htmlFor={392}
                    data-toggle="tooltip"
                    title="Click here to update your listing status, Open or Closed."
                  >
                    &nbsp;
                  </label>
                </div>
              </li>
              <li>
                {" "}
                <span>Ocha Thai Cuisine</span>
                <div className="custom-control custom-switch">
                  <input
                    type="checkbox"
                    className="listing_open_close_switch custom-control-input"
                    id={391}
                    defaultChecked=""
                  />
                  <label
                    className="custom-control-label"
                    htmlFor={391}
                    data-toggle="tooltip"
                    title="Click here to update your listing status, Open or Closed."
                  >
                    &nbsp;
                  </label>
                </div>
              </li>
              <li>
                {" "}
                <span>Core real estates</span>
                <div className="custom-control custom-switch">
                  <input
                    type="checkbox"
                    className="listing_open_close_switch custom-control-input"
                    id={389}
                  />
                  <label
                    className="custom-control-label"
                    htmlFor={389}
                    data-toggle="tooltip"
                    title="Click here to update your listing status, Open or Closed."
                  >
                    &nbsp;
                  </label>
                </div>
              </li>
              <li>
                {" "}
                <span>Gill Automobiles and Services</span>
                <div className="custom-control custom-switch">
                  <input
                    type="checkbox"
                    className="listing_open_close_switch custom-control-input"
                    id={384}
                    defaultChecked=""
                  />
                  <label
                    className="custom-control-label"
                    htmlFor={384}
                    data-toggle="tooltip"
                    title="Click here to update your listing status, Open or Closed."
                  >
                    &nbsp;
                  </label>
                </div>
              </li>
              <li>
                {" "}
                <span>Titan Wedding Hall</span>
                <div className="custom-control custom-switch">
                  <input
                    type="checkbox"
                    className="listing_open_close_switch custom-control-input"
                    id={381}
                    defaultChecked=""
                  />
                  <label
                    className="custom-control-label"
                    htmlFor={381}
                    data-toggle="tooltip"
                    title="Click here to update your listing status, Open or Closed."
                  >
                    &nbsp;
                  </label>
                </div>
              </li>
              <li>
                {" "}
                <span>Taj Hotels</span>
                <div className="custom-control custom-switch">
                  <input
                    type="checkbox"
                    className="listing_open_close_switch custom-control-input"
                    id={380}
                    defaultChecked=""
                  />
                  <label
                    className="custom-control-label"
                    htmlFor={380}
                    data-toggle="tooltip"
                    title="Click here to update your listing status, Open or Closed."
                  >
                    &nbsp;
                  </label>
                </div>
              </li>
              <li>
                {" "}
                <span>ccc</span>
                <div className="custom-control custom-switch">
                  <input
                    type="checkbox"
                    className="listing_open_close_switch custom-control-input"
                    id={378}
                    defaultChecked=""
                  />
                  <label
                    className="custom-control-label"
                    htmlFor={378}
                    data-toggle="tooltip"
                    title="Click here to update your listing status, Open or Closed."
                  >
                    &nbsp;
                  </label>
                </div>
              </li>
              <li>
                {" "}
                <span>Hello</span>
                <div className="custom-control custom-switch">
                  <input
                    type="checkbox"
                    className="listing_open_close_switch custom-control-input"
                    id={375}
                    defaultChecked=""
                  />
                  <label
                    className="custom-control-label"
                    htmlFor={375}
                    data-toggle="tooltip"
                    title="Click here to update your listing status, Open or Closed."
                  >
                    &nbsp;
                  </label>
                </div>
              </li>
              <li>
                {" "}
                <span>Premium gardens</span>
                <div className="custom-control custom-switch">
                  <input
                    type="checkbox"
                    className="listing_open_close_switch custom-control-input"
                    id={268}
                    defaultChecked=""
                  />
                  <label
                    className="custom-control-label"
                    htmlFor={268}
                    data-toggle="tooltip"
                    title="Click here to update your listing status, Open or Closed."
                  >
                    &nbsp;
                  </label>
                </div>
              </li>
              <li>
                {" "}
                <span>Beach luxury villa gardens</span>
                <div className="custom-control custom-switch">
                  <input
                    type="checkbox"
                    className="listing_open_close_switch custom-control-input"
                    id={267}
                  />
                  <label
                    className="custom-control-label"
                    htmlFor={267}
                    data-toggle="tooltip"
                    title="Click here to update your listing status, Open or Closed."
                  >
                    &nbsp;
                  </label>
                </div>
              </li>
              <li>
                {" "}
                <span>GOS Villas</span>
                <div className="custom-control custom-switch">
                  <input
                    type="checkbox"
                    className="listing_open_close_switch custom-control-input"
                    id={266}
                  />
                  <label
                    className="custom-control-label"
                    htmlFor={266}
                    data-toggle="tooltip"
                    title="Click here to update your listing status, Open or Closed."
                  >
                    &nbsp;
                  </label>
                </div>
              </li>
              <li>
                {" "}
                <span>Super bike showroom</span>
                <div className="custom-control custom-switch">
                  <input
                    type="checkbox"
                    className="listing_open_close_switch custom-control-input"
                    id={247}
                  />
                  <label
                    className="custom-control-label"
                    htmlFor={247}
                    data-toggle="tooltip"
                    title="Click here to update your listing status, Open or Closed."
                  >
                    &nbsp;
                  </label>
                </div>
              </li>
              <li>
                {" "}
                <span>Benz cars showroom</span>
                <div className="custom-control custom-switch">
                  <input
                    type="checkbox"
                    className="listing_open_close_switch custom-control-input"
                    id={238}
                  />
                  <label
                    className="custom-control-label"
                    htmlFor={238}
                    data-toggle="tooltip"
                    title="Click here to update your listing status, Open or Closed."
                  >
                    &nbsp;
                  </label>
                </div>
              </li>
              <li>
                {" "}
                <span>Smith Luxury Villas</span>
                <div className="custom-control custom-switch">
                  <input
                    type="checkbox"
                    className="listing_open_close_switch custom-control-input"
                    id={207}
                  />
                  <label
                    className="custom-control-label"
                    htmlFor={207}
                    data-toggle="tooltip"
                    title="Click here to update your listing status, Open or Closed."
                  >
                    &nbsp;
                  </label>
                </div>
              </li>
              <li>
                {" "}
                <span>Ø§Ø¨Ù†Ù‰ Ù…ÙˆÙ‚Ø¹Ùƒ Ù…Ø¹Ù†Ø§</span>
                <div className="custom-control custom-switch">
                  <input
                    type="checkbox"
                    className="listing_open_close_switch custom-control-input"
                    id={164}
                    defaultChecked=""
                  />
                  <label
                    className="custom-control-label"
                    htmlFor={164}
                    data-toggle="tooltip"
                    title="Click here to update your listing status, Open or Closed."
                  >
                    &nbsp;
                  </label>
                </div>
              </li>
              <li>
                {" "}
                <span>BizBookBusiness Directory Template</span>
                <div className="custom-control custom-switch">
                  <input
                    type="checkbox"
                    className="listing_open_close_switch custom-control-input"
                    id={163}
                    defaultChecked=""
                  />
                  <label
                    className="custom-control-label"
                    htmlFor={163}
                    data-toggle="tooltip"
                    title="Click here to update your listing status, Open or Closed."
                  >
                    &nbsp;
                  </label>
                </div>
              </li>
              <li>
                {" "}
                <span>Tour and Travel html Template</span>
                <div className="custom-control custom-switch">
                  <input
                    type="checkbox"
                    className="listing_open_close_switch custom-control-input"
                    id={130}
                    defaultChecked=""
                  />
                  <label
                    className="custom-control-label"
                    htmlFor={130}
                    data-toggle="tooltip"
                    title="Click here to update your listing status, Open or Closed."
                  >
                    &nbsp;
                  </label>
                </div>
              </li>
              <li>
                {" "}
                <span>Smart Digital Products</span>
                <div className="custom-control custom-switch">
                  <input
                    type="checkbox"
                    className="listing_open_close_switch custom-control-input"
                    id={129}
                    defaultChecked=""
                  />
                  <label
                    className="custom-control-label"
                    htmlFor={129}
                    data-toggle="tooltip"
                    title="Click here to update your listing status, Open or Closed."
                  >
                    &nbsp;
                  </label>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="ud-rhs-pay ud-rhs-repo">
          <div className="ud-rhs-pay-inn">
            <h3>Last week report</h3>
            <ul>
              <li>
                {" "}
                <span className="view">Enquiry</span>
                <span className="cout">00</span>
                <span className="name">Leads</span>
              </li>
              <li>
                {" "}
                <span className="view">Views</span>
                <span className="cout">02</span>
                <span className="name">Listings</span>
              </li>
              <li>
                {" "}
                <span className="view">Views</span>
                <span className="cout">01</span>
                <span className="name">Events</span>
              </li>
              <li>
                {" "}
                <span className="view">Views</span>
                <span className="cout">01</span>
                <span className="name">Blogs</span>
              </li>
              <li>
                {" "}
                <span className="view">Views</span>
                <span className="cout">00</span>
                <span className="name">Products</span>
              </li>
              <li>
                {" "}
                <span className="cout">00</span>
                <span className="name">Messages</span>
              </li>
            </ul>
          </div>
        </div>
        {/*    <div className="ud-rhs-sec-2">*/}
        {/*        <h4>*/}
        {/*</h4>*/}
        {/*        <ul>*/}
        {/*            */}
        {/*            <li>*/}
        {/*                <Link href="/*/}
        {/*">*/}
        {/*                    <img src="/user/*/}
        {/*" alt="">*/}
        {/*                    <h5>*/}
        {/*</h5>*/}
        {/*                    <p>*/}
        {/*: <b>*/}
        {/*</b> */}
        {/*: <b> */}
        {/*</b></p>*/}
        {/*                </Link>*/}
        {/*            </li>*/}
        {/*                */}
        {/*        </ul>*/}
        {/*    </div>*/}
        <div className="ud-rhs-sec-1">
          <h4>Admin Notification</h4>
          <ul>
            <li>
              <Link target="_blank" href="/xxxxxxxxxxxxxxxxxx">
                <h5>test</h5>
                <p>test</p>
              </Link>
            </li>
            <li>
              <Link target="_blank" href="/demoo">
                <h5>demo2</h5>
                <p>demo2222</p>
              </Link>
            </li>
            <li>
              <Link target="_blank" href="/demo">
                <h5>demo</h5>
                <p>demo notification</p>
              </Link>
            </li>
            <li>
              <Link
                target="_blank"
                href="/https://www.location-voitures-maurice.com/"
              >
                <h5>https://www.location-voitures-maurice.com/</h5>
                <p>https://www.location-voitures-maurice.com/</p>
              </Link>
            </li>
            <li>
              <Link target="_blank" href="/prueba">
                <h5>preuba</h5>
                <p>prieba</p>
              </Link>
            </li>
            <li>
              <Link
                target="_blank"
                href="/https://directoryfinder.net/demo/business-directory-template/listing-details?code=LIST211"
              >
                <h5>Homey massage offer 50%</h5>
                <p>Special offer for this month only</p>
              </Link>
            </li>
            <li>
              <Link target="_blank" href="/https://youtu.be/O8EeSKUgyj8">
                <h5>How lead tracking works?</h5>
                <p>Lead and url tracking work process</p>
              </Link>
            </li>
            <li>
              <Link target="_blank" href="/http://www.fltdsgn.com/">
                <h5>Other url redirect</h5>
                <p>Other url redirect test by directory finder</p>
              </Link>
            </li>
            <li>
              <Link
                target="_blank"
                href="/https://directoryfinder.net/how-to-install-this-on-local-server-tutorial-videos"
              >
                <h5>How to install directoryfinder template?</h5>
                <p>How to install directoryfinder template in local server</p>
              </Link>
            </li>
            <li>
              <Link
                target="_blank"
                href="/http://directoryfinder.net/demo/business-directory-template/event-details?row=10"
              >
                <h5>How to add new listing?</h5>
                <p>Just few clicks to add your new listing</p>
              </Link>
            </li>
            <li>
              <Link target="_blank" href="/https://youtu.be/93_4_0Dyys8">
                <h5>Best Business Directory Template</h5>
                <p>
                  Get the premium business directory templates with the best
                  quality
                </p>
              </Link>
            </li>
            <li>
              <Link target="_blank" href="/www.google.com1">
                <h5>1test noti title1</h5>
                <p>Tour Travel | Tour Travel Package Template</p>
              </Link>
            </li>
          </ul>
        </div>
        <div className="ud-rhs-promo ud-rhs-promo-1">
          <h3>Community members</h3>
          <p>
            Follow your favirote business users and grove your online business
            now.
          </p>{" "}
          <Link href="/community">Community</Link>
        </div>
        <div className="ud-rhs-sec-3">
          <div className="list-mig-like">
            <div className="list-ri-peo-like">
              <h3>Who all are follow you</h3>
              <ul>
                <li>
                  <Link href="/profile/rachel" target="_blank">
                    <img
                      src="/user/63520pexels-photo-1130626.jpeg"
                      alt=""
                    />
                  </Link>
                </li>
                <li>
                  <Link href="/profile/betty-d-friedman" target="_blank">
                    <img
                      src="/user/8766pexels-photo-774909.jpeg"
                      alt=""
                    />
                  </Link>
                </li>
                <li>
                  <Link href="/profile/claude-d-dial" target="_blank">
                    <img
                      src="/user/33654pexels-photo-91227.jpeg"
                      alt=""
                    />
                  </Link>
                </li>
                <li>
                  <Link href="/profile/kumar" target="_blank">
                    <img
                      src="/user/4913411004989_334444876752279_544839968_n.jpg"
                      alt=""
                    />
                  </Link>
                </li>
                <li>
                  <Link href="/profile/deneme" target="_blank">
                    <img src="/user/475847.jpg" alt="" />
                  </Link>
                </li>
                <li>
                  <Link href="/profile/clic" target="_blank">
                    <img src="/user/475847.jpg" alt="" />
                  </Link>
                </li>
                <li>
                  <Link href="/profile/nawaf-alayli" target="_blank">
                    <img src="/user/475847.jpg" alt="" />
                  </Link>
                </li>
                {/*                    <li>*/}
                {/*                        <Link href="/profile" target="_blank">*/}
                {/*                            <img src="/user/2.jpg" alt="">*/}
                {/*                        </Link>*/}
                {/*                    </li>*/}
                {/*                    <li>*/}
                {/*                        <Link href="/profile" target="_blank">*/}
                {/*                            <img src="/user/3.jpg" alt="">*/}
                {/*                        </Link>*/}
                {/*                    </li>*/}
                {/*                    <li>*/}
                {/*                        <Link href="/profile" target="_blank">*/}
                {/*                            <img src="/user/4.jpg" alt="">*/}
                {/*                        </Link>*/}
                {/*                    </li>*/}
                {/*                    <li>*/}
                {/*                        <Link href="/profile" target="_blank">*/}
                {/*                            <img src="/user/5.jpg" alt="">*/}
                {/*                        </Link>*/}
                {/*                    </li>*/}
                {/*                    <li>*/}
                {/*                        <Link href="/profile" target="_blank">*/}
                {/*                            <img src="/user/6.jpg" alt="">*/}
                {/*                        </Link>*/}
                {/*                    </li>*/}
                {/*                    <li>*/}
                {/*                        <Link href="/profile" target="_blank">*/}
                {/*                            <img src="/user/7.jpg" alt="">*/}
                {/*                        </Link>*/}
                {/*                    </li>*/}
                {/*                    <li>*/}
                {/*                        <Link href="/profile" target="_blank">*/}
                {/*                            <img src="/user/8.jpg" alt="">*/}
                {/*                        </Link>*/}
                {/*                    </li>*/}
              </ul>
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
