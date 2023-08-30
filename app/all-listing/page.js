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
  <section>
    <div className="all-listing all-listing-pg">
      {/*FILTER ON MOBILE VIEW*/}
      <div className="fil-mob fil-mob-act">
        <h4>
          Listing filters <i className="material-icons">filter_list</i>
        </h4>
      </div>
      <div className="all-list-bre">
        <div className="container sec-all-list-bre">
          <div className="row">
            <h1>Real Estate</h1>
            <ul>
              <li>
                <Link href="/index">Home</Link>
              </li>
              <li>
                <Link href="/all-category">All category</Link>
              </li>
              <li>
                {" "}
                <Link href="/all-listing">Real Estate</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-3 fil-mob-view">
            <div className="all-filt">
              {" "}
              <span className="fil-mob-clo">
                <i className="material-icons">close</i>
              </span>
              {/*START*/}
              <div className="filt-alist-near">
                <div className="tit">
                  <h4>Top Service Providers</h4>
                </div>
                <div className="near-ser-list top-ser-secti-prov">
                  <ul>
                    <li>
                      <div className="near-bx">
                        <div className="ne-1">
                          <img src="/services/1.jpg" alt='service' />
                        </div>
                        <div className="ne-2">
                          <h5>Core real estates</h5>
                          <p>
                            City: No:2, 4th Avenue, Newyork, USA, Near to
                            Airport
                          </p>
                        </div>
                        <div className="ne-3">
                          {" "}
                          <span>5.0</span>
                        </div>
                        <Link href="/listing-details" />
                      </div>
                    </li>
                    <li>
                      <div className="near-bx">
                        <div className="ne-1">
                          <img src="/services/12.jpeg" alt='service' />
                        </div>
                        <div className="ne-2">
                          <h5>Rolexo Villas in California</h5>
                          <p>
                            City: 28800 Orchard Lake Road, Suite 180 Farmington
                            Hills, U.S.A.
                          </p>
                        </div>
                        <div className="ne-3">
                          {" "}
                          <span>4.0</span>
                        </div>
                        <Link href="/listing-details" />
                      </div>
                    </li>
                    <li>
                      <div className="near-bx">
                        <div className="ne-1">
                          <img src="/services/13.jpg" alt='service' />
                        </div>
                        <div className="ne-2">
                          <h5>Orange pet shop</h5>
                          <p>
                            City: No:2, 4th Avenue, Newyork, USA, Near to
                            Airport
                          </p>
                        </div>
                        <div className="ne-3">
                          {" "}
                          <span>5.0</span>
                        </div>
                        <Link href="/listing-details" />
                      </div>
                    </li>
                    <li>
                      <div className="near-bx">
                        <div className="ne-1">
                          <img src="/services/14.jpg" alt='service' />
                        </div>
                        <div className="ne-2">
                          <h5>Best villas near you</h5>
                          <p>
                            City: No:2, 4th Avenue, Newyork, USA, Near to
                            Airport
                          </p>
                        </div>
                        <div className="ne-3">
                          {" "}
                          <span>5.0</span>
                        </div>
                        <Link href="/listing-details" />
                      </div>
                    </li>
                    <li>
                      <div className="near-bx">
                        <div className="ne-1">
                          <img src="/services/20.jpeg" alt='service' />
                        </div>
                        <div className="ne-2">
                          <h5>Ac services near you</h5>
                          <p>City: testapro 456</p>
                        </div>
                        <div className="ne-3">
                          {" "}
                          <span>4.0</span>
                        </div>
                        <Link href="/listing-details" />
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              {/*END*/}
              {/*START*/}
              <div className="filt-com lhs-cate">
                <h4>Categories</h4>
                <div className="dropdown">
                  <select className="chosen-select">
                    <option value="">Select Category</option>
                    <option value={1}>Hotels And Resorts</option>
                    <option value={15}>Spa and Facial</option>
                    <option value={16}>Digital Products</option>
                    <option value={17}>Pet shop</option>
                    <option value={18}>Hotel &amp; Food</option>
                    <option value={19}>Wedding halls</option>
                    <option selected="" value={10}>
                      Real Estate
                    </option>
                    <option value={8}>Sports</option>
                    <option value={7}>Education</option>
                    <option value={3}>Transportation</option>
                    <option value={6}>Electricals</option>
                    <option value={5}>Automobiles</option>
                    <option value={2}>Hospitals</option>
                  </select>
                </div>
              </div>
              {/*END*/}
              {/*START*/}
              <div className="sub_cat_section filt-com lhs-sub">
                <h4>Sub category</h4>
                <ul>
                  <li>
                    <div className="chbox">
                      <input
                        type="checkbox"
                        className="sub_cat_check"
                        name="sub_cat_check"
                        defaultValue={22}
                        id="Villas"
                      />
                      <label htmlFor="Villas">Villas</label>
                    </div>
                  </li>
                  <li>
                    <div className="chbox">
                      <input
                        type="checkbox"
                        className="sub_cat_check"
                        name="sub_cat_check"
                        defaultValue={21}
                        id="Indepentant House"
                      />
                      <label htmlFor="Indepentant House">
                        Indepentant House
                      </label>
                    </div>
                  </li>
                  <li>
                    <div className="chbox">
                      <input
                        type="checkbox"
                        className="sub_cat_check"
                        name="sub_cat_check"
                        defaultValue={20}
                        id="Plots and Lands"
                      />
                      <label htmlFor="Plots and Lands">Plots and Lands</label>
                    </div>
                  </li>
                </ul>
              </div>
              {/*END*/}
              {/*START*/}
              <div className="filt-com lhs-featu">
                <h4>Features</h4>
                <ul>
                  <li>
                    <div className="chbox">
                      <input
                        type="checkbox"
                        defaultValue="trusted"
                        className="feature_check"
                        id="trusted"
                      />
                      <label htmlFor="trusted">Trusted services provider</label>
                    </div>
                  </li>
                  <li>
                    <div className="chbox">
                      <input
                        type="checkbox"
                        defaultValue="premium"
                        className="feature_check"
                        id="premium"
                      />
                      <label htmlFor="premium">Premium services</label>
                    </div>
                  </li>
                  <li>
                    <div className="chbox">
                      <input
                        type="checkbox"
                        defaultValue="verified"
                        className="feature_check"
                        id="verified"
                      />
                      <label htmlFor="verified">Verified services</label>
                    </div>
                  </li>
                  <li>
                    <div className="chbox">
                      <input
                        type="checkbox"
                        defaultValue="trending"
                        className="feature_check"
                        id="trending"
                      />
                      <label htmlFor="trending">Trending services</label>
                    </div>
                  </li>
                  <li>
                    <div className="chbox">
                      <input
                        type="checkbox"
                        defaultValue="offers"
                        className="feature_check"
                        id="offers"
                      />
                      <label htmlFor="offers">Offers and discounts</label>
                    </div>
                  </li>
                  <li>
                    <div className="chbox">
                      <input
                        type="checkbox"
                        defaultValue="latest"
                        className="feature_check"
                        id="latest"
                      />
                      <label htmlFor="latest">Latest updated</label>
                    </div>
                  </li>
                  <li>
                    <div className="chbox">
                      <input
                        type="checkbox"
                        defaultValue="likes"
                        className="feature_check"
                        id="likes"
                      />
                      <label htmlFor="likes">Most likes</label>
                    </div>
                  </li>
                </ul>
              </div>
              {/*END*/}
              {/*START*/}
              <div className="filt-com lhs-rati">
                <h4>Ratings</h4>
                <ul>
                  <li>
                    <div className="rbbox">
                      <input
                        type="radio"
                        defaultValue={5}
                        name="rating_check"
                        className="rating_check"
                        id="rb1"
                      />
                      <label htmlFor="rb1">
                        {" "}
                        <i className="material-icons">star</i>
                        <i className="material-icons">star</i>
                        <i className="material-icons">star</i>
                        <i className="material-icons">star</i>
                        <i className="material-icons">star</i>
                      </label>
                    </div>
                  </li>
                  <li>
                    <div className="rbbox">
                      <input
                        type="radio"
                        defaultValue={4}
                        name="rating_check"
                        className="rating_check"
                        id="rb2"
                      />
                      <label htmlFor="rb2">
                        {" "}
                        <i className="material-icons">star</i>
                        <i className="material-icons">star</i>
                        <i className="material-icons">star</i>
                        <i className="material-icons">star</i>
                        <i className="material-icons">star_border</i>
                      </label>
                    </div>
                  </li>
                  <li>
                    <div className="rbbox">
                      <input
                        type="radio"
                        defaultValue={3}
                        name="rating_check"
                        className="rating_check"
                        id="rb3"
                      />
                      <label htmlFor="rb3">
                        {" "}
                        <i className="material-icons">star</i>
                        <i className="material-icons">star</i>
                        <i className="material-icons">star</i>
                        <i className="material-icons">star_border</i>
                        <i className="material-icons">star_border</i>
                      </label>
                    </div>
                  </li>
                  <li>
                    <div className="rbbox">
                      <input
                        type="radio"
                        defaultValue={2}
                        name="rating_check"
                        className="rating_check"
                        id="rb4"
                      />
                      <label htmlFor="rb4">
                        {" "}
                        <i className="material-icons">star</i>
                        <i className="material-icons">star</i>
                        <i className="material-icons">star_border</i>
                        <i className="material-icons">star_border</i>
                        <i className="material-icons">star_border</i>
                      </label>
                    </div>
                  </li>
                  <li>
                    <div className="rbbox">
                      <input
                        type="radio"
                        defaultValue={1}
                        name="rating_check"
                        className="rating_check"
                        id="rb5"
                      />
                      <label htmlFor="rb5">
                        {" "}
                        <i className="material-icons">star</i>
                        <i className="material-icons">star_border</i>
                        <i className="material-icons">star_border</i>
                        <i className="material-icons">star_border</i>
                        <i className="material-icons">star_border</i>
                      </label>
                    </div>
                  </li>
                </ul>
              </div>
              {/*END*/}
              {/*START*/}
              <div className="filt-com lhs-ads">
                <ul>
                  <li>
                    <div className="ads-box">
                      <Link href="/">
                        {" "}
                        <span>Ad</span>
                        <img src="/ads/ads1.jpg" alt="" />
                      </Link>
                    </div>
                  </li>
                  {/*                                    <li>*/}
                  {/*                                        <div className="ads-box">*/}
                  {/*                                            */}
                  {/*                                            <Link href="/*/}
                  {/*">*/}
                  {/*                                                <span>Ad</span>*/}
                  {/**/}
                  {/*                                                <img*/}
                  {/*                                                    src="/ads/*/}
                  {/*" alt="">*/}
                  {/*                                            </Link>*/}
                  {/*                                        </div>*/}
                  {/*                                    </li>*/}
                </ul>
              </div>
              {/*END*/}
              <div className="all-list-filt-form">
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
            </div>
          </div>
          <div className="col-md-9">
            <div className="f2">
              <div className="vfilter">
                {" "}
                <i className="material-icons ic1 " title="Grid view">
                  apps
                </i>
                <i className="material-icons ic2 act" title="List view">
                  format_list_bulleted
                </i>
                <i className="material-icons ic3" title="Map view">
                  location_on
                </i>
              </div>
            </div>
            {/* LISTING INN FILTER */}
            <div className="list-filt-v2">
              <ul>
                <li>
                  <div className="chbox">
                    <input
                      type="checkbox"
                      name="lfv2-all"
                      className="lfv2-all"
                      defaultValue={1}
                      id="lfv2-all"
                      defaultChecked="checked"
                    />
                    <label htmlFor="lfv2-all">All</label>
                  </div>
                </li>
                <li>
                  <div className="chbox">
                    <input
                      type="checkbox"
                      name="lfv2-pop"
                      className="lfv2-pop"
                      id="lfv2-pop"
                    />
                    <label htmlFor="lfv2-pop">Popular</label>
                  </div>
                </li>
                <li>
                  <div className="chbox">
                    <input
                      type="checkbox"
                      name="lfv2-op"
                      className="lfv2-op"
                      id="lfv2-op"
                    />
                    <label htmlFor="lfv2-op">Open</label>
                  </div>
                </li>
                <li>
                  <div className="chbox">
                    <input
                      type="checkbox"
                      name="lfv2-tru"
                      className="lfv2-tru"
                      id="lfv2-tru"
                    />
                    <label htmlFor="lfv2-tru">Verified</label>
                  </div>
                </li>
                <li>
                  <div className="chbox">
                    <input
                      type="checkbox"
                      name="lfv2-near"
                      className="lfv2-near"
                      id="lfv2-near"
                    />
                    <label htmlFor="lfv2-near">Nearby</label>
                  </div>
                </li>
                <li>
                  <div className="chbox">
                    <input
                      type="checkbox"
                      name="lfv2-off"
                      className="lfv2-off"
                      id="lfv2-off"
                    />
                    <label htmlFor="lfv2-off">Offers</label>
                  </div>
                </li>
              </ul>
            </div>
            {/* END LISTING INN FILTER */}
            {/*ADS*/}
            <div className="ban-ati-com ads-all-list">
              <Link href="/https://themeforest.net/item/bizbook-directory-listings-template/25391222">
                <span>Ad</span>
                <img src="/ads/1.png" alt="" />
              </Link>
            </div>
            {/*ADS*/}
            {/* Loader Image */}
            <div id="loadingmessage" style={{ display: "none" }}>
              <div id="loadingmessage1">&nbsp;</div>
            </div>
            {/* Loader Image */}
            <div className="all-list-sh all-listing-total">
              <ul>
                <li>
                  <div className="eve-box">
                    {/*-LISTING IMAGE-*/}
                    <div className="al-img">
                      {" "}
                      <span className="open-stat">open</span>
                      <Link href="/listing-details">
                        <img src="/services/2.jpeg" alt="" />
                      </Link>
                    </div>
                    {/*-END LISTING IMAGE-*/}
                    {/*-LISTING NAME-*/}
                    <div>
                      <h4>
                        <Link href="/listing-details">
                          Rolexo Villas in California
                        </Link>
                        <i className="li-veri">
                          <img src="/icon/svg/verified.png" alt="" />
                        </i>
                      </h4>
                      <label className="rat">
                        <i className="material-icons">star</i>
                        <i className="material-icons">star</i>
                        <i className="material-icons">star</i>
                        <i className="material-icons">star</i>
                        <i className="material-icons">star</i>
                      </label>
                      <span className="addr">
                        28800 Orchard Lake Road, Suite 180 Farmington Hills,
                        U.S.A.
                      </span>
                      <span className="pho">7904462944</span>
                      <span className="mail">thedirectoryfinder@gmail.com</span>
                      <div className="links">
                        <Link
                          href="/#"
                          data-toggle="modal"
                          data-target="#quote"
                          className="quo"
                        >
                          Get quote
                        </Link>
                        <Link href="/">View more</Link>
                        <Link href="/Tel:7904462944">Call Now</Link>
                        <Link
                          href="/https://wa.me/7904462944"
                          className="what"
                          target="_blank"
                        >
                          WhatsApp
                        </Link>
                      </div>
                    </div>
                    {/*-END LISTING NAME-*/}
                    {/*-SAVE-*/}
                    <span
                      className="enq-sav"
                      data-toggle="tooltip"
                      title=" Click to like this listing"
                    >
                      <i className="l-like sav-act">
                        <img src="/icon/svg/like.svg" alt="" />
                      </i>
                    </span>
                    {/*-END SAVE-*/}
                  </div>
                </li>
                <li>
                  <div className="eve-box">
                    {/*-LISTING IMAGE-*/}
                    <div className="al-img">
                      {" "}
                      <span className="open-stat">open</span>
                      <Link href="/listing-details">
                        <img src="/services/24.jpg" alt="" />
                      </Link>
                    </div>
                    {/*-END LISTING IMAGE-*/}
                    {/*-LISTING NAME-*/}
                    <div>
                      <h4>
                        <Link href="/listing-details">Village food street</Link>
                        <i className="li-veri">
                          <img src="/icon/svg/verified.png" alt="" />
                        </i>
                      </h4>
                      <label className="rat">
                        <i className="material-icons">star</i>
                        <i className="material-icons">star</i>
                        <i className="material-icons">star</i>
                        <i className="material-icons">star</i>
                        <i className="material-icons">star</i>
                      </label>
                      <span className="addr">
                        28800 Orchard Lake Road, Suite 180 Farmington Hills,
                        U.S.A.
                      </span>
                      <span className="pho">7904462944</span>
                      <span className="mail">village@gmail.com</span>
                      <div className="links">
                        <Link
                          href="/#"
                          data-toggle="modal"
                          data-target="#quote"
                          className="quo"
                        >
                          Get quote
                        </Link>
                        <Link href="/">View more</Link>
                        <Link href="/Tel:7904462944">Call Now</Link>
                        <Link
                          href="/https://wa.me/7904462944"
                          className="what"
                          target="_blank"
                        >
                          WhatsApp
                        </Link>
                      </div>
                    </div>
                    {/*-END LISTING NAME-*/}
                    {/*-SAVE-*/}
                    <span
                      className="enq-sav"
                      data-toggle="tooltip"
                      title=" Click to like this listing"
                    >
                      <i className="l-like sav-act">
                        <img src="/icon/svg/like.svg" alt="" />
                      </i>
                    </span>
                    {/*-END SAVE-*/}
                  </div>
                </li>
                <li>
                  <div className="eve-box">
                    {/*-LISTING IMAGE-*/}
                    <div className="al-img">
                      {" "}
                      <span className="open-stat">open</span>
                      <Link href="/listing-details">
                        <img src="/services/21.jpg" alt="" />
                      </Link>
                    </div>
                    {/*-END LISTING IMAGE-*/}
                    {/*-LISTING NAME-*/}
                    <div>
                      <h4>
                        <Link href="/listing-details">
                          Honey 2 massage &amp; facial{" "}
                        </Link>
                        <i className="li-veri">
                          <img src="/icon/svg/verified.png" alt="" />
                        </i>
                      </h4>
                      <label className="rat">
                        <i className="material-icons">star</i>
                        <i className="material-icons">star</i>
                        <i className="material-icons">star</i>
                        <i className="material-icons">star</i>
                        <i className="material-icons ratstar">star</i>
                      </label>
                      <span className="addr">
                        28800 Orchard Lake Road, Suite 180 Farmington Hills,
                        U.S.A.
                      </span>
                      <span className="pho">7904462944</span>
                      <span className="mail">village@gmail.com</span>
                      <div className="links">
                        <Link
                          href="/#"
                          data-toggle="modal"
                          data-target="#quote"
                          className="quo"
                        >
                          Get quote
                        </Link>
                        <Link href="/Tel:7904462944">Call Now</Link>
                        <Link
                          href="/https://wa.me/7904462944"
                          className="what"
                          target="_blank"
                        >
                          WhatsApp
                        </Link>
                      </div>
                    </div>
                    {/*-END LISTING NAME-*/}
                    {/*-SAVE-*/}
                    <span
                      className="enq-sav"
                      data-toggle="tooltip"
                      title=" Click to like this listing"
                    >
                      <i className="l-like sav-act">
                        <img src="/icon/svg/like.svg" alt="" />
                      </i>
                    </span>
                    {/*-END SAVE-*/}
                  </div>
                </li>
                <li>
                  <div className="eve-box">
                    {/*-LISTING IMAGE-*/}
                    <div className="al-img">
                      {" "}
                      <span className="open-stat">open</span>
                      <Link href="/listing-details">
                        <img src="/services/17.jpeg" alt="" />
                      </Link>
                    </div>
                    {/*-END LISTING IMAGE-*/}
                    {/*-LISTING NAME-*/}
                    <div>
                      <h4>
                        <Link href="/listing-details">Orange pet shops</Link>
                        <i className="li-veri">
                          <img src="/icon/svg/verified.png" alt="" />
                        </i>
                      </h4>
                      <label className="rat">
                        <i className="material-icons">star</i>
                        <i className="material-icons">star</i>
                        <i className="material-icons">star</i>
                        <i className="material-icons">star</i>
                        <i className="material-icons ratstar">star</i>
                      </label>
                      <span className="addr">
                        28800 Orchard Lake Road, Suite 180 Farmington Hills,
                        U.S.A.
                      </span>
                      <span className="pho">7904462944</span>
                      <span className="mail">orange@gmail.com</span>
                      <div className="links">
                        <Link
                          href="/#"
                          data-toggle="modal"
                          data-target="#quote"
                          className="quo"
                        >
                          Get quote
                        </Link>
                        <Link href="/Tel:7904462944">Call Now</Link>
                        <Link
                          href="/https://wa.me/7904462944"
                          className="what"
                          target="_blank"
                        >
                          WhatsApp
                        </Link>
                      </div>
                    </div>
                    {/*-END LISTING NAME-*/}
                    {/*-SAVE-*/}
                    <span
                      className="enq-sav"
                      data-toggle="tooltip"
                      title=" Click to like this listing"
                    >
                      <i className="l-like sav-act">
                        <img src="/icon/svg/like.svg" alt="" />
                      </i>
                    </span>
                    {/*-END SAVE-*/}
                  </div>
                </li>
                <li>
                  <div className="eve-box">
                    {/*-LISTING IMAGE-*/}
                    <div className="al-img">
                      {" "}
                      <span className="open-stat">open</span>
                      <Link href="/listing-details">
                        <img src="/services/16.jpg" alt="" />
                      </Link>
                    </div>
                    {/*-END LISTING IMAGE-*/}
                    {/*-LISTING NAME-*/}
                    <div>
                      <h4>
                        <Link href="/listing-details">
                          Ocean blue interier designs
                        </Link>
                        <i className="li-veri">
                          <img src="/icon/svg/verified.png" alt="" />
                        </i>
                      </h4>
                      <label className="rat">
                        <i className="material-icons">star</i>
                        <i className="material-icons">star</i>
                        <i className="material-icons">star</i>
                        <i className="material-icons">star</i>
                        <i className="material-icons ratstar">star</i>
                      </label>
                      <span className="addr">
                        28800 Orchard Lake Road, Suite 180 Farmington Hills,
                        U.S.A.
                      </span>
                      <span className="pho">7904462944</span>
                      <span className="mail">blue@gmail.com</span>
                      <div className="links">
                        <Link
                          href="/#"
                          data-toggle="modal"
                          data-target="#quote"
                          className="quo"
                        >
                          Get quote
                        </Link>
                        <Link href="/Tel:7904462944">Call Now</Link>
                        <Link
                          href="/https://wa.me/7904462944"
                          className="what"
                          target="_blank"
                        >
                          WhatsApp
                        </Link>
                      </div>
                    </div>
                    {/*-END LISTING NAME-*/}
                    {/*-SAVE-*/}
                    <span
                      className="enq-sav"
                      data-toggle="tooltip"
                      title=" Click to like this listing"
                    >
                      <i className="l-like sav-act">
                        <img src="/icon/svg/like.svg" alt="" />
                      </i>
                    </span>
                    {/*-END SAVE-*/}
                  </div>
                </li>
                <li>
                  <div className="eve-box">
                    {/*-LISTING IMAGE-*/}
                    <div className="al-img">
                      {" "}
                      <span className="open-stat">open</span>
                      <Link href="/listing-details">
                        <img src="/services/30.jpg" alt="" />
                      </Link>
                    </div>
                    {/*-END LISTING IMAGE-*/}
                    {/*-LISTING NAME-*/}
                    <div>
                      <h4>
                        <Link href="/listing-details">
                          Packy hospital &amp; Health care
                        </Link>
                        <i className="li-veri">
                          <img src="/icon/svg/verified.png" alt="" />
                        </i>
                      </h4>
                      <label className="rat">
                        <i className="material-icons">star</i>
                        <i className="material-icons">star</i>
                        <i className="material-icons">star</i>
                        <i className="material-icons">star</i>
                        <i className="material-icons ratstar">star</i>
                      </label>
                      <span className="addr">
                        28800 Orchard Lake Road, Suite 180 Farmington Hills,
                        U.S.A.
                      </span>
                      <span className="pho">7904462944</span>
                      <span className="mail">packy@gmail.com</span>
                      <div className="links">
                        <Link
                          href="/#"
                          data-toggle="modal"
                          data-target="#quote"
                          className="quo"
                        >
                          Get quote
                        </Link>
                        <Link href="/Tel:7904462944">Call Now</Link>
                        <Link
                          href="/https://wa.me/7904462944"
                          className="what"
                          target="_blank"
                        >
                          WhatsApp
                        </Link>
                      </div>
                    </div>
                    {/*-END LISTING NAME-*/}
                    {/*-SAVE-*/}
                    <span
                      className="enq-sav"
                      data-toggle="tooltip"
                      title=" Click to like this listing"
                    >
                      <i className="l-like sav-act">
                        <img src="/icon/svg/like.svg" alt="" />
                      </i>
                    </span>
                    {/*-END SAVE-*/}
                  </div>
                </li>
                <li>
                  <div className="eve-box">
                    {/*-LISTING IMAGE-*/}
                    <div className="al-img">
                      {" "}
                      <span className="open-stat">open</span>
                      <Link href="/listing-details">
                        <img src="/services/22.jpeg" alt="" />
                      </Link>
                    </div>
                    {/*-END LISTING IMAGE-*/}
                    {/*-LISTING NAME-*/}
                    <div>
                      <h4>
                        <Link href="/listing-details">
                          Maching wedding matrimoney
                        </Link>
                        <i className="li-veri">
                          <img src="/icon/svg/verified.png" alt="" />
                        </i>
                      </h4>
                      <label className="rat">
                        <i className="material-icons">star</i>
                        <i className="material-icons">star</i>
                        <i className="material-icons">star</i>
                        <i className="material-icons">star</i>
                        <i className="material-icons ratstar">star</i>
                      </label>
                      <span className="addr">
                        28800 Orchard Lake Road, Suite 180 Farmington Hills,
                        U.S.A.
                      </span>
                      <span className="pho">7904462944</span>
                      <span className="mail">matemoney@gmail.com</span>
                      <div className="links">
                        <Link
                          href="/#"
                          data-toggle="modal"
                          data-target="#quote"
                          className="quo"
                        >
                          Get quote
                        </Link>
                        <Link href="/Tel:7904462944">Call Now</Link>
                        <Link
                          href="/https://wa.me/7904462944"
                          className="what"
                          target="_blank"
                        >
                          WhatsApp
                        </Link>
                      </div>
                    </div>
                    {/*-END LISTING NAME-*/}
                    {/*-SAVE-*/}
                    <span
                      className="enq-sav"
                      data-toggle="tooltip"
                      title=" Click to like this listing"
                    >
                      <i className="l-like sav-act">
                        <img src="/icon/svg/like.svg" alt="" />
                      </i>
                    </span>
                    {/*-END SAVE-*/}
                  </div>
                </li>
                <li>
                  <div className="eve-box">
                    {/*-LISTING IMAGE-*/}
                    <div className="al-img">
                      {" "}
                      <span className="open-stat">open</span>
                      <Link href="/listing-details">
                        <img src="/services/10.jpg" alt="" />
                      </Link>
                    </div>
                    {/*-END LISTING IMAGE-*/}
                    {/*-LISTING NAME-*/}
                    <div>
                      <h4>
                        <Link href="/listing-details">
                          The Royal Blue Resort &amp; Hotels
                        </Link>
                        <i className="li-veri">
                          <img src="/icon/svg/verified.png" alt="" />
                        </i>
                      </h4>
                      <label className="rat">
                        <i className="material-icons">star</i>
                        <i className="material-icons">star</i>
                        <i className="material-icons">star</i>
                        <i className="material-icons">star</i>
                        <i className="material-icons ratstar">star</i>
                      </label>
                      <span className="addr">
                        28800 Orchard Lake Road, Suite 180 Farmington Hills,
                        U.S.A.
                      </span>
                      <span className="pho">7904462944</span>
                      <span className="mail">royalblu@gmail.com</span>
                      <div className="links">
                        <Link
                          href="/#"
                          data-toggle="modal"
                          data-target="#quote"
                          className="quo"
                        >
                          Get quote
                        </Link>
                        <Link href="/Tel:7904462944">Call Now</Link>
                        <Link
                          href="/https://wa.me/7904462944"
                          className="what"
                          target="_blank"
                        >
                          WhatsApp
                        </Link>
                      </div>
                    </div>
                    {/*-END LISTING NAME-*/}
                    {/*-SAVE-*/}
                    <span
                      className="enq-sav"
                      data-toggle="tooltip"
                      title=" Click to like this listing"
                    >
                      <i className="l-like sav-act">
                        <img src="/icon/svg/like.svg" alt="" />
                      </i>
                    </span>
                    {/*-END SAVE-*/}
                  </div>
                </li>
                <li>
                  <div className="eve-box">
                    {/*-LISTING IMAGE-*/}
                    <div className="al-img">
                      {" "}
                      <span className="open-stat">open</span>
                      <Link href="/listing-details">
                        <img src="/services/4.jpg" alt="" />
                      </Link>
                    </div>
                    {/*-END LISTING IMAGE-*/}
                    {/*-LISTING NAME-*/}
                    <div>
                      <h4>
                        <Link href="/listing-details">
                          Original bike services
                        </Link>
                        <i className="li-veri">
                          <img src="/icon/svg/verified.png" alt="" />
                        </i>
                      </h4>
                      <label className="rat">
                        <i className="material-icons">star</i>
                        <i className="material-icons">star</i>
                        <i className="material-icons">star</i>
                        <i className="material-icons">star</i>
                        <i className="material-icons ratstar">star</i>
                      </label>
                      <span className="addr">
                        28800 Orchard Lake Road, Suite 180 Farmington Hills,
                        U.S.A.
                      </span>
                      <span className="pho">7904462944</span>
                      <span className="mail">bikeser@gmail.com</span>
                      <div className="links">
                        <Link
                          href="/#"
                          data-toggle="modal"
                          data-target="#quote"
                          className="quo"
                        >
                          Get quote
                        </Link>
                        <Link href="/Tel:7904462944">Call Now</Link>
                        <Link
                          href="/https://wa.me/7904462944"
                          className="what"
                          target="_blank"
                        >
                          WhatsApp
                        </Link>
                      </div>
                    </div>
                    {/*-END LISTING NAME-*/}
                    {/*-SAVE-*/}
                    <span
                      className="enq-sav"
                      data-toggle="tooltip"
                      title=" Click to like this listing"
                    >
                      <i className="l-like sav-act">
                        <img src="/icon/svg/like.svg" alt="" />
                      </i>
                    </span>
                    {/*-END SAVE-*/}
                  </div>
                </li>
              </ul>
              {/*ADS*/}
              <div className="ban-ati-com ads-all-list">
                <Link href="/https://themeforest.net/item/bizbook-directory-listings-template/25391222">
                  <span>Ad</span>
                  <img src="/ads/3.png" alt="" />
                </Link>
              </div>
              {/*ADS*/}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* END */}
  {/* START */}
  <section>
    <div className="list-map">
      {" "}
      <span
        id="map-error-box"
        className="map-error-box"
        style={{ display: "none" }}
      >
        !!! Oops No Listing with the Selected Category
      </span>
      <div className="list-map-resu map-view" id="map-view" />
      <div className="list-map-filt">
        <div className="map-fi-com map-fi-view">
          <div className="vfilter">
            {" "}
            <i className="material-icons ic-map-1" title="Grid view">
              apps
            </i>
            <i className="material-icons ic-map-2" title="List view">
              format_list_bulleted
            </i>
            <i className="material-icons ic-map-3 act" title="Map view">
              layers
            </i>
          </div>
        </div>
        <div className="map-fi-com map-fi-cate">
          <select
            onchange="SubcategoryFilter1(this.value);"
            name="cat_check"
            id="cat_check1"
            className="cat_check chosen-select "
          >
            <option value="">Select Category</option>
            <option value="hotels-and-resorts">Hotels And Resorts</option>
            <option value="spa-and-facial">Spa and Facial</option>
            <option value="digital-products">Digital Products</option>
            <option value="pet-shop">Pet shop</option>
            <option value="hotel---food">Hotel &amp; Food</option>
            <option value="wedding-halls">Wedding halls</option>
            <option selected="" value="real-estate">
              Real Estate
            </option>
            <option value="sports">Sports</option>
            <option value="education">Education</option>
            <option value="transportation">Transportation</option>
            <option value="electricals">Electricals</option>
            <option value="automobiles">Automobiles</option>
            <option value="hospitals">Hospitals</option>
          </select>
        </div>
        <div className="sub_cat_section1 map-fi-com map-fi-subcate">
          <select
            name="sub_cat_check"
            id="sub_cat_check1"
            className="sub_cat_check"
          >
            <option value="">Select sub-category</option>
            <option value={22}>Villas</option>
            <option value={21}>Indepentant House</option>
            <option value={20}>Plots and Lands</option>
          </select>
        </div>
        {/*        <div className="map-fi-com map-fi-rat">*/}
        {/*            <select id="rating_check1" name="rating_check">*/}
        {/*                <option value="">Select Rating</option>*/}
        {/*                <option value="5">5 Star</option>*/}
        {/*                <option value="4">4 Star</option>*/}
        {/*                <option value="3">3 Star</option>*/}
        {/*                <option value="2">2 Star</option>*/}
        {/*                <option value="1">1 Star</option>*/}
        {/*            </select>*/}
        {/*        </div>*/}
        <div className="map-fi-com map-fi-fea">
          <select id="city_check1" name="city_check">
            <option value="">Select City</option>
            <option value={10519}>Toronto</option>
            <option value={1068}>Vadodara</option>
            <option value={11}>Akkarampalle</option>
            <option value={1131}>Hisar</option>
            <option value={26}>Balapur</option>
            <option value={114}>Karnul</option>
            <option value={706}>Delhi</option>
            <option value={707}>New Delhi</option>
            <option value={3659}>Chennai</option>
          </select>
        </div>
        <div className="map-fi-com map-fi-fea">
          <select id="feature_check1" name="feature_check">
            <option value="">Select Feature</option>
            <option value="trusted">Trusted services provider</option>
            <option value="premium">Premium services</option>
            <option value="verified">Verified services</option>
            <option value="trending">Trending services</option>
            <option value="offers">Offers and discounts</option>
            <option value="latest">Latest updated</option>
            <option value="likes">Most likes</option>
          </select>
        </div>
      </div>
    </div>
  </section>
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
