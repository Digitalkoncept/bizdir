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
          <img src="/user/62736rn53themes.png"  alt="theme" />
          <h4>Digital koncept</h4>
          <b>Join on 26, Mar 2021</b>
          <Link className="ud-lhs-view-pro" target="_blank" href="/profile">
            My profile
          </Link>
        </div>
        <div className="ud-lhs-s2">
          <ul>
            <li>
              <Link href="/dashboard" className="db-lact">
                <img src="/icon/dbl1.png" alt="theme" />
                My Dashboard
              </Link>
            </li>
            <li>
              <Link href="/db-all-listing" className="">
                <img src="/icon/shop.png" alt="theme" />
                All Listings
              </Link>
            </li>
            <li>
              <Link href="/add-listing-start">
                <img src="/icon/dbl3.png" alt="theme" />
                Add New Listing
              </Link>
            </li>
            <li>
              <Link href="/db-enquiry" className="">
                <img src="/icon/tick.png" alt="theme" />
                Lead enquiry
              </Link>
            </li>
            <li>
              <Link href="/db-products" className="">
                <img src="/icon/cart.png" alt="theme" />
                All Products
              </Link>
            </li>
            <li>
              <Link href="/db-events" className="">
                <img src="/icon/calendar.png" alt="theme" />
                Events
              </Link>
            </li>
            <li>
              <Link href="/db-blog-posts" className="">
                <img src="/icon/blog1.png" alt="theme" />
                Blog posts
              </Link>
            </li>
            <li>
              <Link href="/db-coupons" className="">
                <img src="/icon/coupons.png" alt="theme" />
                Coupons
              </Link>
            </li>
            <li>
              <Link href="/db-promote" className="">
                <img src="/icon/promotion.png" alt="theme" />
                Promotions
              </Link>
            </li>
            <li>
              <Link href="/db-seo" className="">
                <img src="/icon/seo.png" alt="theme" />
                SEO
              </Link>
            </li>
            <li>
              <Link href="/db-point-history" className="">
                <img src="/icon/point.png" alt="theme" />
                Points History
              </Link>
            </li>
            <li>
              <Link href="/db-review" className="">
                <img src="/icon/dbl13.png" alt="theme" />
                Reviews
              </Link>
            </li>
            {/*<li>
                  <Link href="/db-message" className=""><img src="/icon/dbl14.png" alt="theme" />Messages</Link>
              </li>*/}
            <li>
              <Link href="/db-my-profile" className="">
                <img src="/icon/dbl6.png" alt="theme" />
                My Profile
              </Link>
            </li>
            <li>
              <Link href="/db-like-listings" className="">
                <img src="/icon/dbl15.png" alt="theme" />
                Liked Listings
              </Link>
            </li>
            <li>
              <Link href="/db-followings" className="">
                <img src="/icon/dbl18.png" alt="theme" />
                Followings
              </Link>
            </li>
            <li>
              <Link href="/db-post-ads" className="">
                <img src="/icon/dbl11.png" alt="theme" />
                Ad Summary
              </Link>
            </li>
            <li>
              <Link href="/db-payment" className="">
                <img src="/icon/dbl9.png" alt="theme" />
                Payment &amp; plan
              </Link>
            </li>
            <li>
              <Link href="/db-invoice-all" className="">
                <img src="/icon/dbl16.png" alt="theme" />
                Payment invoice
              </Link>
            </li>
            <li>
              <Link href="/db-notifications" className="">
                <img src="/icon/dbl19.png" alt="theme" />
                Notifications
              </Link>
            </li>
            <li>
              <Link href="/how-to" className="" target="_blank">
                <img src="/icon/dbl17.png" alt="theme" />
                How to&apos;s
              </Link>
            </li>
            <li>
              <Link href="/db-setting" className="">
                <img src="/icon/dbl210.png" alt="theme" />
                Setting
              </Link>
            </li>
            <li>
              <Link href="/#">
                <img src="/icon/dbl12.png" alt="theme" />
                Log Out
              </Link>
            </li>
          </ul>
        </div>
      </div>
      {/*CENTER SECTION*/}
      <div className="ud-cen">
        <div className="log-bor">&nbsp;</div>{" "}
        <span className="udb-inst">User Dashboard</span>
        <div className="cd-cen-intr">
          <div className="cd-cen-intr-inn">
            <h2>
              Welcom back, <b>Digital koncept</b>
            </h2>
            <p>
              Stay up to date reports in your listing, products, events and blog
              reports here
            </p>
          </div>
        </div>
        <div className="ud-cen-s1">
          <ul>
            <li>
              <div>
                {" "}
                <b>21</b>
                <h4>All Listings</h4>
                <p>Total no of listings</p>{" "}
                <Link href="/db-all-listing">&nbsp;</Link>
              </div>
            </li>
            <li>
              <div>
                {" "}
                <b>13</b>
                <h4>Enquiries</h4>
                <p>Total no of enquiry</p> <Link href="/db-enquiry">&nbsp;</Link>
              </div>
            </li>
            <li>
              <div>
                {" "}
                <b>18</b>
                <h4>Followings</h4>
                <p>Total no of followings</p>{" "}
                <Link href="/db-followings">&nbsp;</Link>
              </div>
            </li>
          </ul>
        </div>
        {/* START */}
        <div className="ud-cen-s3 ud-cen-s4">
          <h2>Profile page</h2>
          <Link href="/db-my-profile-edit" className="db-tit-btn">
            Edit profile page
          </Link>
          <div className="ud-payment ud-pro-link">
            <div className="pay-lhs">
              <div className="lis-pro-badg">
                <div>
                  <img src="/user/62736rn53themes.png" alt="theme" />
                  <h4>Digital koncept</h4>
                  <p>Member since 26, Mar 2021</p>
                </div>{" "}
                <Link href="/profile" className="fclick" target="_blank">
                  &nbsp;
                </Link>
              </div>
            </div>
            <div className="pay-rhs">
              <ul>
                <li>
                  <b>Name : </b> Digital koncept
                </li>
                <li>
                  <b>Followers : </b> <span>07</span>
                </li>
                <li>
                  <b>City : </b> Sydney
                </li>
                <li>
                  <b>Email : </b> connect@bizdir.in
                </li>
                <li className="pro">
                  <input type="text" defaultValue="profile" readOnly="" />
                </li>
                <li className="pre">
                  <Link target="_blank" href="/profile">
                    View my profile page
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* END */}
        {/* START */}
        <div className="ud-cen-s3 ud-cen-s4">
          <h2>Business page</h2>
          <Link href="/company-profile-edit" className="db-tit-btn">
            Edit business page
          </Link>
          <div className="ud-payment ud-pro-link bus-pg">
            <div className="pay-lhs">
              <div className="lis-pro-badg">
                <div>
                  <img src="/user/39791rn53-themes.png" alt="theme" />
                  <h4>Digital koncept net</h4>
                  <p>Member since 26, Mar 2021</p>
                </div>{" "}
                <Link
                  href="/company-profile"
                  className="fclick"
                  target="_blank"
                >
                  &nbsp;
                </Link>
              </div>
            </div>
            <div className="pay-rhs">
              <ul>
                <li>
                  <b>Name : </b> Digital koncept net
                </li>
                <li>
                  <b>Page views : </b> <span>19</span>
                </li>
                <li className="pro">
                  <input
                    type="text"
                    defaultValue="company-profile"
                    readOnly=""
                  />
                </li>
                <li className="pre">
                  <Link target="_blank" href="/company-profile">
                    View business page
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* END */}
        <div className="ud-cen-s2">
          <h2>Listing Details</h2>
          <Link href="/add-listing-start" className="db-tit-btn">
            Add New Listing
          </Link>
          <table className="responsive-table bordered">
            <thead>
              <tr>
                <th>No</th>
                <th>Listing Name</th>
                <th>Rating</th>
                <th>Views</th>
                {/*                    <th>Expiry on</th>*/}
                <th>Status</th>
                <th>Edit</th>
                <th>Delete</th>
                {/*                    <th>*/}
                {/*</th>*/}
                <th>Preview</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>
                  <img src="/listings/78776dsc09586.jpg " alt="theme" />
                  test <span>28, Mar 2021</span>
                </td>
                <td>
                  <span className="db-list-rat">0</span>
                </td>
                <td>
                  <span className="db-list-rat">1</span>
                </td>
                {/*                        <td><span className="db-list-ststus">8 June 2020</span></td>*/}
                <td>
                  <span className="db-list-ststus">Active</span>
                </td>
                <td>
                  <Link
                    href="/edit-listing-step-1?row=LIST395"
                    className="db-list-edit"
                  >
                    Edit
                  </Link>
                </td>
                <td>
                  <Link href="/delete-listing?row=LIST395" className="db-list-edit">
                    Delete
                  </Link>
                </td>
                {/*                        <td><Link href="/promote-business?code=*/}
                {/*&&type=listing" className="db-list-edit">*/}
                {/*</Link></td>*/}
                <td>
                  <Link
                    href="/listing/test6"
                    className="db-list-edit"
                    target="_blank"
                  >
                    Preview
                  </Link>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>
                  <img src="/listings/432063dffe1d6-e6c7-4bc8-a563-0e5687c5fe12.jpeg" alt="theme" />
                  dfzhfhd <span>25, Mar 2021</span>
                </td>
                <td>
                  <span className="db-list-rat">0</span>
                </td>
                <td>
                  <span className="db-list-rat">7</span>
                </td>
                {/*                        <td><span className="db-list-ststus">8 June 2020</span></td>*/}
                <td>
                  <span className="db-list-ststus">Active</span>
                </td>
                <td>
                  <Link
                    href="/edit-listing-step-1?row=LIST394"
                    className="db-list-edit"
                  >
                    Edit
                  </Link>
                </td>
                <td>
                  <Link href="/delete-listing?row=LIST394" className="db-list-edit">
                    Delete
                  </Link>
                </td>
                {/*                        <td><Link href="/promote-business?code=*/}
                {/*&&type=listing" className="db-list-edit">*/}
                {/*</Link></td>*/}
                <td>
                  <Link
                    href="/listing/dfzhfhd"
                    className="db-list-edit"
                    target="_blank"
                  >
                    Preview
                  </Link>
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>
                  <img src="/listings/72048pexels-francesco-ungaro-96444-(1).jpg" alt="theme" />
                  Iei <span>25, Mar 2021</span>
                </td>
                <td>
                  <span className="db-list-rat">0</span>
                </td>
                <td>
                  <span className="db-list-rat">15</span>
                </td>
                {/*                        <td><span className="db-list-ststus">8 June 2020</span></td>*/}
                <td>
                  <span className="db-list-ststus">Active</span>
                </td>
                <td>
                  <Link
                    href="/edit-listing-step-1?row=LIST393"
                    className="db-list-edit"
                  >
                    Edit
                  </Link>
                </td>
                <td>
                  <Link href="/delete-listing?row=LIST393" className="db-list-edit">
                    Delete
                  </Link>
                </td>
                {/*                        <td><Link href="/promote-business?code=*/}
                {/*&&type=listing" className="db-list-edit">*/}
                {/*</Link></td>*/}
                <td>
                  <Link
                    href="/listing/iei"
                    className="db-list-edit"
                    target="_blank"
                  >
                    Preview
                  </Link>
                </td>
              </tr>
              <tr>
                <td>4</td>
                <td>
                  <img src="/listings/432063dffe1d6-e6c7-4bc8-a563-0e5687c5fe12.jpeg" alt="theme" />
                  phoenix mall <span>13, Mar 2021</span>
                </td>
                <td>
                  <span className="db-list-rat">0</span>
                </td>
                <td>
                  <span className="db-list-rat">10</span>
                </td>
                {/*                        <td><span className="db-list-ststus">8 June 2020</span></td>*/}
                <td>
                  <span className="db-list-ststus">Active</span>
                </td>
                <td>
                  <Link
                    href="/edit-listing-step-1?row=LIST392"
                    className="db-list-edit"
                  >
                    Edit
                  </Link>
                </td>
                <td>
                  <Link href="/delete-listing?row=LIST392" className="db-list-edit">
                    Delete
                  </Link>
                </td>
                {/*                        <td><Link href="/promote-business?code=*/}
                {/*&&type=listing" className="db-list-edit">*/}
                {/*</Link></td>*/}
                <td>
                  <Link
                    href="/listing/phoenix-mall"
                    className="db-list-edit"
                    target="_blank"
                  >
                    Preview
                  </Link>
                </td>
              </tr>
              <tr>
                <td>5</td>
                <td>
                  <img src="/listings/45451download-(1).jfif" alt="theme" />
                  Ocha Thai Cuisine <span>12, Mar 2021</span>
                </td>
                <td>
                  <span className="db-list-rat">5.0</span>
                </td>
                <td>
                  <span className="db-list-rat">9</span>
                </td>
                {/*                        <td><span className="db-list-ststus">8 June 2020</span></td>*/}
                <td>
                  <span className="db-list-ststus">Active</span>
                </td>
                <td>
                  <Link
                    href="/edit-listing-step-1?row=LIST391"
                    className="db-list-edit"
                  >
                    Edit
                  </Link>
                </td>
                <td>
                  <Link href="/delete-listing?row=LIST391" className="db-list-edit">
                    Delete
                  </Link>
                </td>
                {/*                        <td><Link href="/promote-business?code=*/}
                {/*&&type=listing" className="db-list-edit">*/}
                {/*</Link></td>*/}
                <td>
                  <Link
                    href="/listing/ocha-thai-cuisine"
                    className="db-list-edit"
                    target="_blank"
                  >
                    Preview
                  </Link>
                </td>
              </tr>
              <tr>
                <td>6</td>
                <td>
                  <img src="/listings/72048pexels-francesco-ungaro-96444-(1).jpg" alt="theme" />
                  Core real estates <span>11, Mar 2021</span>
                </td>
                <td>
                  <span className="db-list-rat">0</span>
                </td>
                <td>
                  <span className="db-list-rat">18</span>
                </td>
                {/*                        <td><span className="db-list-ststus">8 June 2020</span></td>*/}
                <td>
                  <span className="db-list-ststus">Active</span>
                </td>
                <td>
                  <Link
                    href="/edit-listing-step-1?row=LIST389"
                    className="db-list-edit"
                  >
                    Edit
                  </Link>
                </td>
                <td>
                  <Link href="/delete-listing?row=LIST389" className="db-list-edit">
                    Delete
                  </Link>
                </td>
                {/*                        <td><Link href="/promote-business?code=*/}
                {/*&&type=listing" className="db-list-edit">*/}
                {/*</Link></td>*/}
                <td>
                  <Link
                    href="/listing/core-real-estates"
                    className="db-list-edit"
                    target="_blank"
                  >
                    Preview
                  </Link>
                </td>
              </tr>
              <tr>
                <td>7</td>
                <td>
                  <img src="/listings/85477capture1.png"  alt="theme" />
                  Gill Automobiles and Services <span>20, Feb 2021</span>
                </td>
                <td>
                  <span className="db-list-rat">0</span>
                </td>
                <td>
                  <span className="db-list-rat">30</span>
                </td>
                {/*                        <td><span className="db-list-ststus">8 June 2020</span></td>*/}
                <td>
                  <span className="db-list-ststus">Active</span>
                </td>
                <td>
                  <Link
                    href="/edit-listing-step-1?row=LIST384"
                    className="db-list-edit"
                  >
                    Edit
                  </Link>
                </td>
                <td>
                  <Link href="/delete-listing?row=LIST384" className="db-list-edit">
                    Delete
                  </Link>
                </td>
                {/*                        <td><Link href="/promote-business?code=*/}
                {/*&&type=listing" className="db-list-edit">*/}
                {/*</Link></td>*/}
                <td>
                  <Link
                    href="/listing/gill-automobiles-and-services"
                    className="db-list-edit"
                    target="_blank"
                  >
                    Preview
                  </Link>
                </td>
              </tr>
              <tr>
                <td>8</td>
                <td>
                  <img src="/listings/64465capture-(1).png" alt="theme" />
                  Titan Wedding Hall <span>07, Feb 2021</span>
                </td>
                <td>
                  <span className="db-list-rat">5.0</span>
                </td>
                <td>
                  <span className="db-list-rat">27</span>
                </td>
                {/*                        <td><span className="db-list-ststus">8 June 2020</span></td>*/}
                <td>
                  <span className="db-list-ststus">Active</span>
                </td>
                <td>
                  <Link
                    href="/edit-listing-step-1?row=LIST381"
                    className="db-list-edit"
                  >
                    Edit
                  </Link>
                </td>
                <td>
                  <Link href="/delete-listing?row=LIST381" className="db-list-edit">
                    Delete
                  </Link>
                </td>
                {/*                        <td><Link href="/promote-business?code=*/}
                {/*&&type=listing" className="db-list-edit">*/}
                {/*</Link></td>*/}
                <td>
                  <Link
                    href="/listing/titan-wedding-hall"
                    className="db-list-edit"
                    target="_blank"
                  >
                    Preview
                  </Link>
                </td>
              </tr>
              <tr>
                <td>9</td>
                <td>
                  <img src="/listings/72048pexels-francesco-ungaro-96444-(1).jpg " alt="theme" />
                  Taj Hotels <span>24, Dec 2020</span>
                </td>
                <td>
                  <span className="db-list-rat">0</span>
                </td>
                <td>
                  <span className="db-list-rat">16</span>
                </td>
                {/*                        <td><span className="db-list-ststus">8 June 2020</span></td>*/}
                <td>
                  <span className="db-list-ststus">Active</span>
                </td>
                <td>
                  <Link
                    href="/edit-listing-step-1?row=LIST380"
                    className="db-list-edit"
                  >
                    Edit
                  </Link>
                </td>
                <td>
                  <Link href="/delete-listing?row=LIST380" className="db-list-edit">
                    Delete
                  </Link>
                </td>
                {/*                        <td><Link href="/promote-business?code=*/}
                {/*&&type=listing" className="db-list-edit">*/}
                {/*</Link></td>*/}
                <td>
                  <Link
                    href="/listing/taj-hotels1"
                    className="db-list-edit"
                    target="_blank"
                  >
                    Preview
                  </Link>
                </td>
              </tr>
              <tr>
                <td>10</td>
                <td>
                  <img src="/listings/28181houses-on-body-of-water-1724424.jpg " alt="theme" />
                  ccc <span>29, Sep 2020</span>
                </td>
                <td>
                  <span className="db-list-rat">0</span>
                </td>
                <td>
                  <span className="db-list-rat">10</span>
                </td>
                {/*                        <td><span className="db-list-ststus">8 June 2020</span></td>*/}
                <td>
                  <span className="db-list-ststus">Active</span>
                </td>
                <td>
                  <Link
                    href="/edit-listing-step-1?row=LIST378"
                    className="db-list-edit"
                  >
                    Edit
                  </Link>
                </td>
                <td>
                  <Link href="/delete-listing?row=LIST378" className="db-list-edit">
                    Delete
                  </Link>
                </td>
                {/*                        <td><Link href="/promote-business?code=*/}
                {/*&&type=listing" className="db-list-edit">*/}
                {/*</Link></td>*/}
                <td>
                  <Link
                    href="/listing/ccc"
                    className="db-list-edit"
                    target="_blank"
                  >
                    Preview
                  </Link>
                </td>
              </tr>
              <tr>
                <td>11</td>
                <td>
                  <img src="/listings/28181houses-on-body-of-water-1724424.jpg" alt="theme" />
                  Hello <span>23, Sep 2020</span>
                </td>
                <td>
                  <span className="db-list-rat">0</span>
                </td>
                <td>
                  <span className="db-list-rat">10</span>
                </td>
                {/*                        <td><span className="db-list-ststus">8 June 2020</span></td>*/}
                <td>
                  <span className="db-list-ststus">Active</span>
                </td>
                <td>
                  <Link
                    href="/edit-listing-step-1?row=LIST375"
                    className="db-list-edit"
                  >
                    Edit
                  </Link>
                </td>
                <td>
                  <Link href="/delete-listing?row=LIST375" className="db-list-edit">
                    Delete
                  </Link>
                </td>
                {/*                        <td><Link href="/promote-business?code=*/}
                {/*&&type=listing" className="db-list-edit">*/}
                {/*</Link></td>*/}
                <td>
                  <Link
                    href="/listing/hello3"
                    className="db-list-edit"
                    target="_blank"
                  >
                    Preview
                  </Link>
                </td>
              </tr>
              <tr>
                <td>12</td>
                <td>
                  <img src="/listings/56295pexels-photo-3155726.jpeg" alt="theme" />
                  Premium gardens <span>16, May 2020</span>
                </td>
                <td>
                  <span className="db-list-rat">0</span>
                </td>
                <td>
                  <span className="db-list-rat">9</span>
                </td>
                {/*                        <td><span className="db-list-ststus">8 June 2020</span></td>*/}
                <td>
                  <span className="db-list-ststus">Active</span>
                </td>
                <td>
                  <Link
                    href="/edit-listing-step-1?row=LIST268"
                    className="db-list-edit"
                  >
                    Edit
                  </Link>
                </td>
                <td>
                  <Link href="/delete-listing?row=LIST268" className="db-list-edit">
                    Delete
                  </Link>
                </td>
                {/*                        <td><Link href="/promote-business?code=*/}
                {/*&&type=listing" className="db-list-edit">*/}
                {/*</Link></td>*/}
                <td>
                  <Link
                    href="/listing/premium-gardens"
                    className="db-list-edit"
                    target="_blank"
                  >
                    Preview
                  </Link>
                </td>
              </tr>
              <tr>
                <td>13</td>
                <td>
                  <img src="/listings/55800pexels-photo-258154.jpeg" alt="theme" />
                  Beach luxury villa gardens <span>16, May 2020</span>
                </td>
                <td>
                  <span className="db-list-rat">0</span>
                </td>
                <td>
                  <span className="db-list-rat">14</span>
                </td>
                {/*                        <td><span className="db-list-ststus">8 June 2020</span></td>*/}
                <td>
                  <span className="db-list-ststus">Active</span>
                </td>
                <td>
                  <Link
                    href="/edit-listing-step-1?row=LIST267"
                    className="db-list-edit"
                  >
                    Edit
                  </Link>
                </td>
                <td>
                  <Link href="/delete-listing?row=LIST267" className="db-list-edit">
                    Delete
                  </Link>
                </td>
                {/*                        <td><Link href="/promote-business?code=*/}
                {/*&&type=listing" className="db-list-edit">*/}
                {/*</Link></td>*/}
                <td>
                  <Link
                    href="/listing/beach-luxury-villa-gardens"
                    className="db-list-edit"
                    target="_blank"
                  >
                    Preview
                  </Link>
                </td>
              </tr>
              <tr>
                <td>14</td>
                <td>
                  <img src="/listings/75352house-luxury-villa-swimming-pool-32870.jpg" alt="theme" />
                  GOS Villas <span>16, May 2020</span>
                </td>
                <td>
                  <span className="db-list-rat">0</span>
                </td>
                <td>
                  <span className="db-list-rat">10</span>
                </td>
                {/*                        <td><span className="db-list-ststus">8 June 2020</span></td>*/}
                <td>
                  <span className="db-list-ststus">Active</span>
                </td>
                <td>
                  <Link
                    href="/edit-listing-step-1?row=LIST266"
                    className="db-list-edit"
                  >
                    Edit
                  </Link>
                </td>
                <td>
                  <Link href="/delete-listing?row=LIST266" className="db-list-edit">
                    Delete
                  </Link>
                </td>
                {/*                        <td><Link href="/promote-business?code=*/}
                {/*&&type=listing" className="db-list-edit">*/}
                {/*</Link></td>*/}
                <td>
                  <Link
                    href="/listing/gos-villas"
                    className="db-list-edit"
                    target="_blank"
                  >
                    Preview
                  </Link>
                </td>
              </tr>
              <tr>
                <td>15</td>
                <td>
                  <img src="/listings/2279bike1.jpg" alt="theme" />
                  Super bike showroom <span>02, May 2020</span>
                </td>
                <td>
                  <span className="db-list-rat">0</span>
                </td>
                <td>
                  <span className="db-list-rat">9</span>
                </td>
                {/*                        <td><span className="db-list-ststus">8 June 2020</span></td>*/}
                <td>
                  <span className="db-list-ststus">Active</span>
                </td>
                <td>
                  <Link
                    href="/edit-listing-step-1?row=LIST247"
                    className="db-list-edit"
                  >
                    Edit
                  </Link>
                </td>
                <td>
                  <Link href="/delete-listing?row=LIST247" className="db-list-edit">
                    Delete
                  </Link>
                </td>
                {/*                        <td><Link href="/promote-business?code=*/}
                {/*&&type=listing" className="db-list-edit">*/}
                {/*</Link></td>*/}
                <td>
                  <Link
                    href="/listing/super-bike-showroom"
                    className="db-list-edit"
                    target="_blank"
                  >
                    Preview
                  </Link>
                </td>
              </tr>
              <tr>
                <td>16</td>
                <td>
                  <img src="/listings/2279bike1.jpg" alt="theme" />
                  Benz cars showroom <span>25, Apr 2020</span>
                </td>
                <td>
                  <span className="db-list-rat">5.0</span>
                </td>
                <td>
                  <span className="db-list-rat">12</span>
                </td>
                {/*                        <td><span className="db-list-ststus">8 June 2020</span></td>*/}
                <td>
                  <span className="db-list-ststus">Active</span>
                </td>
                <td>
                  <Link
                    href="/edit-listing-step-1?row=LIST238"
                    className="db-list-edit"
                  >
                    Edit
                  </Link>
                </td>
                <td>
                  <Link href="/delete-listing?row=LIST238" className="db-list-edit">
                    Delete
                  </Link>
                </td>
                {/*                        <td><Link href="/promote-business?code=*/}
                {/*&&type=listing" className="db-list-edit">*/}
                {/*</Link></td>*/}
                <td>
                  <Link
                    href="/listing/benz-cars-showroom"
                    className="db-list-edit"
                    target="_blank"
                  >
                    Preview
                  </Link>
                </td>
              </tr>
              <tr>
                <td>17</td>
                <td>
                  <img src="/listings/56300pexels-photo-667838.jpeg" alt="theme" />
                  Smith Luxury Villas <span>19, Mar 2020</span>
                </td>
                <td>
                  <span className="db-list-rat">2.0</span>
                </td>
                <td>
                  <span className="db-list-rat">9</span>
                </td>
                {/*                        <td><span className="db-list-ststus">8 June 2020</span></td>*/}
                <td>
                  <span className="db-list-ststus">Active</span>
                </td>
                <td>
                  <Link
                    href="/edit-listing-step-1?row=LIST207"
                    className="db-list-edit"
                  >
                    Edit
                  </Link>
                </td>
                <td>
                  <Link href="/delete-listing?row=LIST207" className="db-list-edit">
                    Delete
                  </Link>
                </td>
                {/*                        <td><Link href="/promote-business?code=*/}
                {/*&&type=listing" className="db-list-edit">*/}
                {/*</Link></td>*/}
                <td>
                  <Link
                    href="/listing/smith-luxury-villas"
                    className="db-list-edit"
                    target="_blank"
                  >
                    Preview
                  </Link>
                </td>
              </tr>
              <tr>
                <td>18</td>
                <td>
                  <img src="/listings/78973104682512.jpg" alt="theme" />
                  Ø§Ø¨Ù†Ù‰ Ù…ÙˆÙ‚Ø¹Ùƒ Ù…Ø¹Ù†Ø§ <span>25, Jan 2020</span>
                </td>
                <td>
                  <span className="db-list-rat">0</span>
                </td>
                <td>
                  <span className="db-list-rat">9</span>
                </td>
                {/*                        <td><span className="db-list-ststus">8 June 2020</span></td>*/}
                <td>
                  <span className="db-list-ststus">Active</span>
                </td>
                <td>
                  <Link
                    href="/edit-listing-step-1?row=LIST164"
                    className="db-list-edit"
                  >
                    Edit
                  </Link>
                </td>
                <td>
                  <Link href="/delete-listing?row=LIST164" className="db-list-edit">
                    Delete
                  </Link>
                </td>
                {/*                        <td><Link href="/promote-business?code=*/}
                {/*&&type=listing" className="db-list-edit">*/}
                {/*</Link></td>*/}
                <td>
                  <Link
                    href="/listing/Ø§Ø¨Ù†Ù‰-Ù…ÙˆÙ‚Ø¹Ùƒ-Ù…Ø¹Ù†Ø§"
                    className="db-list-edit"
                    target="_blank"
                  >
                    Preview
                  </Link>
                </td>
              </tr>
              <tr>
                <td>19</td>
                <td>
                  <img src="/listings/2060201_preview.jpg" alt="theme" />
                  BizBookBusiness Directory Template <span>24, Jan 2020</span>
                </td>
                <td>
                  <span className="db-list-rat">0</span>
                </td>
                <td>
                  <span className="db-list-rat">9</span>
                </td>
                {/*                        <td><span className="db-list-ststus">8 June 2020</span></td>*/}
                <td>
                  <span className="db-list-ststus">Active</span>
                </td>
                <td>
                  <Link
                    href="/edit-listing-step-1?row=LIST163"
                    className="db-list-edit"
                  >
                    Edit
                  </Link>
                </td>
                <td>
                  <Link href="/delete-listing?row=LIST163" className="db-list-edit">
                    Delete
                  </Link>
                </td>
                {/*                        <td><Link href="/promote-business?code=*/}
                {/*&&type=listing" className="db-list-edit">*/}
                {/*</Link></td>*/}
                <td>
                  <Link
                    href="/listing/bizbookbusiness-directory-template"
                    className="db-list-edit"
                    target="_blank"
                  >
                    Preview
                  </Link>
                </td>
              </tr>
              <tr>
                <td>20</td>
                <td>
                  <img src="/listings/76808tour-travel-html-template.jpg" alt="theme" />
                  Tour and Travel html Template <span>29, Dec 2019</span>
                </td>
                <td>
                  <span className="db-list-rat">3.7</span>
                </td>
                <td>
                  <span className="db-list-rat">12</span>
                </td>
                {/*                        <td><span className="db-list-ststus">8 June 2020</span></td>*/}
                <td>
                  <span className="db-list-ststus">Active</span>
                </td>
                <td>
                  <Link
                    href="/edit-listing-step-1?row=LIST130"
                    className="db-list-edit"
                  >
                    Edit
                  </Link>
                </td>
                <td>
                  <Link href="/delete-listing?row=LIST130" className="db-list-edit">
                    Delete
                  </Link>
                </td>
                {/*                        <td><Link href="/promote-business?code=*/}
                {/*&&type=listing" className="db-list-edit">*/}
                {/*</Link></td>*/}
                <td>
                  <Link
                    href="/listing/tour-and-travel-html-template"
                    className="db-list-edit"
                    target="_blank"
                  >
                    Preview
                  </Link>
                </td>
              </tr>
              <tr>
                <td>21</td>
                <td>
                  <img src="/listings/657791_f1cdikgosfn0gg0a96jsdw.png" alt="theme" />
                  Smart Digital Products <span>15, Dec 2019</span>
                </td>
                <td>
                  <span className="db-list-rat">3.2</span>
                </td>
                <td>
                  <span className="db-list-rat">8</span>
                </td>
                {/*                        <td><span className="db-list-ststus">8 June 2020</span></td>*/}
                <td>
                  <span className="db-list-ststus">Active</span>
                </td>
                <td>
                  <Link
                    href="/edit-listing-step-1?row=LIST129"
                    className="db-list-edit"
                  >
                    Edit
                  </Link>
                </td>
                <td>
                  <Link href="/delete-listing?row=LIST129" className="db-list-edit">
                    Delete
                  </Link>
                </td>
                {/*                        <td><Link href="/promote-business?code=*/}
                {/*&&type=listing" className="db-list-edit">*/}
                {/*</Link></td>*/}
                <td>
                  <Link
                    href="/listing/smart-digital-products"
                    className="db-list-edit"
                    target="_blank"
                  >
                    Preview
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="ud-cen-s3">
          <h2>Events</h2>
          <Link href="/create-new-event" className="db-tit-btn">
            Add new Event
          </Link>
          <ul>
            <li>
              <div className="db-eve">
                <Link href="/event/champions-of-india-run-ride-walk">
                  <img
                    src="/events/88783banner16130393609bct2.jpg"
                    alt="theme"
                  />
                  <h5>CHAMPIONS OF INDIA RUN-RIDE-WALK</h5>
                  <span>Created: 12, Mar 2021</span>
                </Link>
              </div>
            </li>
            <li>
              <div className="db-eve">
                <Link href="/event/india-vs-england">
                  <img
                    src="/events/64903media-desktop-4th-test-india-vs-england-0-2021-2-13-t-22-0-8.jpg"
                    alt="theme"
                  />
                  <h5>INDIA VS ENGLAND</h5>
                  <span>Created: 11, Mar 2021</span>
                </Link>
              </div>
            </li>
            <li>
              <div className="db-eve">
                <Link href="/event/ipl-2021">
                  <img src="/events/84183jpg.webp" alt="theme" />
                  <h5>IPL 2021</h5>
                  <span>Created: 21, Feb 2021</span>
                </Link>
              </div>
            </li>
            <li>
              <div className="db-eve">
                <Link href="/event/27-health-and-nutrition-tips">
                  <img
                    src="/events/51138springfield_illinois.jpg"
                    alt="theme"
                  />
                  <h5>27 Health and Nutrition Tips</h5>
                  <span>Created: 09, Apr 2020</span>
                </Link>
              </div>
            </li>
            <li>
              <div className="db-eve">
                <Link href="/event/digital-marketing-seminar-2020">
                  <img
                    src="/events/730182020-google-ideas-to-increase-business-sale-through-digital-marketing.jpg"
                    alt="theme"
                  />
                  <h5>Digital Marketing Seminar 2020</h5>
                  <span>Created: 26, Mar 2020</span>
                </Link>
              </div>
            </li>
          </ul>
        </div>
        <div className="ud-cen-s3 ud-cen-s4">
          <h2>Blog posts</h2>
          <Link href="/create-new-blog-post" className="db-tit-btn">
            Add new post
          </Link>
          <ul>
            <li>
              <div className="db-eve">
                <Link href="/blog/inception">
                  <img
                    src="/blogs/36614hollywood-insider-feature-inception-greatest-movie-of-the-decade-leonardo-dicaprio-tom-hardy-marion-cotillard-joseph-gordon-levitt-michael-caine-christopher-nolan-ken-wantanabe-ellen-paige.jpg"
                    alt="theme"
                  />
                  <h5>INCEPTION</h5>
                  <span>Created: 12, Mar 2021</span>
                </Link>
              </div>
            </li>
            <li>
              <div className="db-eve">
                <Link href="/blog/avengers-infinty-war">
                  <img
                    src="/blogs/79119https___blogs-images.forbes.com_scottmendelson_files_2018_04_image001.jpg"
                    alt="theme"
                  />
                  <h5>AVENGERS INFINTY WAR</h5>
                  <span>Created: 12, Mar 2021</span>
                </Link>
              </div>
            </li>
            <li>
              <div className="db-eve">
                <Link href="/blog/avengers-end-game1">
                  <img
                    src="/blogs/8325292c8e00b34fcfdeaf605a0647c21adb3.jpg"
                    alt="theme"
                  />
                  <h5>AVENGERS END GAME</h5>
                  <span>Created: 11, Mar 2021</span>
                </Link>
              </div>
            </li>
            <li>
              <div className="db-eve">
                <Link href="/blog/captainamerica-the-civil-war">
                  <img
                    src="/blogs/6619940496pexels-photo-248547.jpeg"
                    alt="theme"
                  />
                  <h5>captainamerica the civil war</h5>
                  <span>Created: 11, Mar 2021</span>
                </Link>
              </div>
            </li>
            <li>
              <div className="db-eve">
                <Link href="/blog/samsung-m31-review-">
                  <img src="/blogs/25287gsmarena_001.jpg" alt="theme" />
                  <h5>Samsung M31 Review </h5>
                  <span>Created: 22, Feb 2021</span>
                </Link>
              </div>
            </li>
            <li>
              <div className="db-eve">
                <Link href="/blog/wizard-of-oz1">
                  <img
                    src="/blogs/71300wizard_of_oz_4k_banner.jpg"
                    alt="theme"
                  />
                  <h5>wizard of oz</h5>
                  <span>Created: 21, Feb 2021</span>
                </Link>
              </div>
            </li>
            <li>
              <div className="db-eve">
                <Link href="/blog/wizard-of-oz">
                  <img
                    src="/blogs/19145wizard_of_oz_4k_banner.jpg"
                    alt="theme"
                  />
                  <h5>wizard of oz</h5>
                  <span>Created: 21, Feb 2021</span>
                </Link>
              </div>
            </li>
            <li>
              <div className="db-eve">
                <Link href="/blog/titanic">
                  <img src="/blogs/79351titanic.jpg" alt="theme" />
                  <h5>Titanic</h5>
                  <span>Created: 21, Feb 2021</span>
                </Link>
              </div>
            </li>
            <li>
              <div className="db-eve">
                <Link href="/blog/digital-marketing">
                  <img
                    src="/blogs/131032020-google-ideas-to-increase-business-sale-through-digital-marketing.jpg"
                    alt="theme"
                  />
                  <h5>Digital Marketing</h5>
                  <span>Created: 26, Mar 2020</span>
                </Link>
              </div>
            </li>
          </ul>
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
                <span className="cout">00</span>
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
        {/*" alt="theme">*/}
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
                      alt="theme"
                    />
                  </Link>
                </li>
                <li>
                  <Link href="/profile/betty-d-friedman" target="_blank">
                    <img
                      src="/user/8766pexels-photo-774909.jpeg"
                      alt="theme"
                    />
                  </Link>
                </li>
                <li>
                  <Link href="/profile/claude-d-dial" target="_blank">
                    <img
                      src="/user/33654pexels-photo-91227.jpeg"
                      alt="theme"
                    />
                  </Link>
                </li>
                <li>
                  <Link href="/profile/kumar" target="_blank">
                    <img
                      src="/user/4913411004989_334444876752279_544839968_n.jpg"
                      alt="theme"
                    />
                  </Link>
                </li>
                <li>
                  <Link href="/profile/deneme" target="_blank">
                    <img src="/user/475847.jpg" alt="theme" />
                  </Link>
                </li>
                <li>
                  <Link href="/profile/clic" target="_blank">
                    <img src="/user/475847.jpg" alt="theme" />
                  </Link>
                </li>
                <li>
                  <Link href="/profile/nawaf-alayli" target="_blank">
                    <img src="/user/475847.jpg" alt="theme" />
                  </Link>
                </li>
                {/*                    <li>*/}
                {/*                        <Link href="/profile" target="_blank">*/}
                {/*                            <img src="/user/2.jpg" alt="theme">*/}
                {/*                        </Link>*/}
                {/*                    </li>*/}
                {/*                    <li>*/}
                {/*                        <Link href="/profile" target="_blank">*/}
                {/*                            <img src="/user/3.jpg" alt="theme">*/}
                {/*                        </Link>*/}
                {/*                    </li>*/}
                {/*                    <li>*/}
                {/*                        <Link href="/profile" target="_blank">*/}
                {/*                            <img src="/user/4.jpg" alt="theme">*/}
                {/*                        </Link>*/}
                {/*                    </li>*/}
                {/*                    <li>*/}
                {/*                        <Link href="/profile" target="_blank">*/}
                {/*                            <img src="/user/5.jpg" alt="theme">*/}
                {/*                        </Link>*/}
                {/*                    </li>*/}
                {/*                    <li>*/}
                {/*                        <Link href="/profile" target="_blank">*/}
                {/*                            <img src="/user/6.jpg" alt="theme">*/}
                {/*                        </Link>*/}
                {/*                    </li>*/}
                {/*                    <li>*/}
                {/*                        <Link href="/profile" target="_blank">*/}
                {/*                            <img src="/user/7.jpg" alt="theme">*/}
                {/*                        </Link>*/}
                {/*                    </li>*/}
                {/*                    <li>*/}
                {/*                        <Link href="/profile" target="_blank">*/}
                {/*                            <img src="/user/8.jpg" alt="theme">*/}
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
              <img src="/idea.png" alt="theme" />
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
