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
              <Link href="/db-review" className="db-lact">
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
              <Link href="/db-payment" className="">
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
        <span className="udb-inst">Reviews</span>
        <div className="ud-cen-s2">
          <h2>All Listings - Received review details</h2>
          <ul className="nav nav-tabs">
            <li className="nav-item">
              {" "}
              <Link className="nav-link active" data-toggle="tab" href="/#received">
                All Received Reviews
              </Link>
            </li>
            <li className="nav-item">
              {" "}
              <Link className="nav-link" data-toggle="tab" href="/#sent">
                All Sent Reviews
              </Link>
            </li>
          </ul>
          {/* Tab panes */}
          <div className="tab-content">
            <div id="received" className="container tab-pane active">
              <br />
              <table className="responsive-table bordered">
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Listing Name</th>
                    <th>User</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>City</th>
                    <th>Ratings</th>
                    <th>Message</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Ocha Thai Cuisine</td>
                    <td>Loki</td>
                    <td>thedirectoryfinder@gmail.com</td>
                    <td>87654567</td>
                    <td />
                    <td>
                      <label className="rat">
                        {" "}
                        <i className="material-icons">star</i>
                        <i className="material-icons">star</i>
                        <i className="material-icons">star</i>
                        <i className="material-icons">star</i>
                        <i className="material-icons">star</i>
                        {/*                                            <i className="material-icons">star</i>*/}
                        {/*                                            <i className="material-icons">star</i>*/}
                        {/*                                            <i className="material-icons">star</i>*/}
                        {/*                                            <i className="material-icons">star_half</i>*/}
                      </label>
                    </td>
                    <td>Perfect service</td>
                    <td>
                      {" "}
                      <Link href="/review_trash?way=1&&reviewreviewreviewreviewreviewreview=104">
                        <span className="db-list-edit">Delete</span>{" "}
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Titan Wedding Hall</td>
                    <td>Loki</td>
                    <td>thedirectoryfinder@gmail.com</td>
                    <td>87654567</td>
                    <td />
                    <td>
                      <label className="rat">
                        {" "}
                        <i className="material-icons">star</i>
                        <i className="material-icons">star</i>
                        <i className="material-icons">star</i>
                        <i className="material-icons">star</i>
                        <i className="material-icons">star</i>
                        {/*                                            <i className="material-icons">star</i>*/}
                        {/*                                            <i className="material-icons">star</i>*/}
                        {/*                                            <i className="material-icons">star</i>*/}
                        {/*                                            <i className="material-icons">star_half</i>*/}
                      </label>
                    </td>
                    <td>
                      Best service provider in wedding hall field... i
                      personally recommended this Titan Wedding Hall.
                    </td>
                    <td>
                      {" "}
                      <Link href="/review_trash?way=1&&reviewreviewreviewreviewreviewreview=101">
                        <span className="db-list-edit">Delete</span>{" "}
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Smith Luxury Villas</td>
                    <td>Leland K Cotter</td>
                    <td>cotter@business.com</td>
                    <td>9255886632</td>
                    <td />
                    <td>
                      <label className="rat">
                        {" "}
                        <i className="material-icons">star</i>
                        <i className="material-icons">star</i>
                        <i className="material-icons">star</i>
                        {/*                                            <i className="material-icons">star</i>*/}
                        {/*                                            <i className="material-icons">star</i>*/}
                        {/*                                            <i className="material-icons">star</i>*/}
                        {/*                                            <i className="material-icons">star_half</i>*/}
                      </label>
                    </td>
                    <td>gfffff</td>
                    <td>
                      {" "}
                      <Link href="/review_trash?way=1&&reviewreviewreviewreviewreviewreview=88">
                        <span className="db-list-edit">Delete</span>{" "}
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>Benz cars showroom</td>
                    <td>Betty D Friedman</td>
                    <td>friedman@business.com</td>
                    <td>8478073384</td>
                    <td />
                    <td>
                      <label className="rat">
                        {" "}
                        <i className="material-icons">star</i>
                        <i className="material-icons">star</i>
                        <i className="material-icons">star</i>
                        <i className="material-icons">star</i>
                        <i className="material-icons">star</i>
                        {/*                                            <i className="material-icons">star</i>*/}
                        {/*                                            <i className="material-icons">star</i>*/}
                        {/*                                            <i className="material-icons">star</i>*/}
                        {/*                                            <i className="material-icons">star_half</i>*/}
                      </label>
                    </td>
                    <td>One of the best showrooms in the US.</td>
                    <td>
                      {" "}
                      <Link href="/review_trash?way=1&&reviewreviewreviewreviewreviewreview=84">
                        <span className="db-list-edit">Delete</span>{" "}
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>Smith Luxury Villas</td>
                    <td>Leland K Cotter</td>
                    <td>cotter@business.com</td>
                    <td>9255886632</td>
                    <td />
                    <td>
                      <label className="rat">
                        {" "}
                        <i className="material-icons">star</i>
                        {/*                                            <i className="material-icons">star</i>*/}
                        {/*                                            <i className="material-icons">star</i>*/}
                        {/*                                            <i className="material-icons">star</i>*/}
                        {/*                                            <i className="material-icons">star_half</i>*/}
                      </label>
                    </td>
                    <td>j</td>
                    <td>
                      {" "}
                      <Link href="/review_trash?way=1&&reviewreviewreviewreviewreviewreview=82">
                        <span className="db-list-edit">Delete</span>{" "}
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td>6</td>
                    <td>Smart Digital Products</td>
                    <td>Betty D Friedman</td>
                    <td>friedman@business.com</td>
                    <td>8478073384</td>
                    <td />
                    <td>
                      <label className="rat">
                        {" "}
                        <i className="material-icons">star</i>
                        <i className="material-icons">star</i>
                        <i className="material-icons">star</i>
                        <i className="material-icons">star</i>
                        <i className="material-icons">star</i>
                        {/*                                            <i className="material-icons">star</i>*/}
                        {/*                                            <i className="material-icons">star</i>*/}
                        {/*                                            <i className="material-icons">star</i>*/}
                        {/*                                            <i className="material-icons">star_half</i>*/}
                      </label>
                    </td>
                    <td>
                      Good support, Very Good team, Excellent design and web
                      template. They are quick to respond for support..
                    </td>
                    <td>
                      {" "}
                      <Link href="/review_trash?way=1&&reviewreviewreviewreviewreviewreview=67">
                        <span className="db-list-edit">Delete</span>{" "}
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td>7</td>
                    <td>Tour and Travel html Template</td>
                    <td>Betty D Friedman</td>
                    <td>friedman@business.com</td>
                    <td>8478073384</td>
                    <td />
                    <td>
                      <label className="rat">
                        {" "}
                        <i className="material-icons">star</i>
                        <i className="material-icons">star</i>
                        <i className="material-icons">star</i>
                        <i className="material-icons">star</i>
                        <i className="material-icons">star</i>
                        {/*                                            <i className="material-icons">star</i>*/}
                        {/*                                            <i className="material-icons">star</i>*/}
                        {/*                                            <i className="material-icons">star</i>*/}
                        {/*                                            <i className="material-icons">star_half</i>*/}
                      </label>
                    </td>
                    <td>
                      Good support, Very Good team, Excellent design and web
                      template. They are quick to respond for support..
                    </td>
                    <td>
                      {" "}
                      <Link href="/review_trash?way=1&&reviewreviewreviewreviewreviewreview=66">
                        <span className="db-list-edit">Delete</span>{" "}
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td>8</td>
                    <td>Smart Digital Products</td>
                    <td>Rachel</td>
                    <td>rachel@business.com</td>
                    <td>9282922971</td>
                    <td />
                    <td>
                      <label className="rat">
                        {" "}
                        <i className="material-icons">star</i>
                        <i className="material-icons">star</i>
                        <i className="material-icons">star</i>
                        {/*                                            <i className="material-icons">star</i>*/}
                        {/*                                            <i className="material-icons">star</i>*/}
                        {/*                                            <i className="material-icons">star</i>*/}
                        {/*                                            <i className="material-icons">star_half</i>*/}
                      </label>
                    </td>
                    <td>
                      Really good job and friendly services will uncover many
                      web sites still in their infancy. Various versions have
                      evolved over the years, sometimes by accident, sometimes
                      on purpose
                    </td>
                    <td>
                      {" "}
                      <Link href="/review_trash?way=1&&reviewreviewreviewreviewreviewreview=51">
                        <span className="db-list-edit">Delete</span>{" "}
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td>9</td>
                    <td>Tour and Travel html Template</td>
                    <td>Rachel</td>
                    <td>rachel@business.com</td>
                    <td>9282922971</td>
                    <td />
                    <td>
                      <label className="rat">
                        {" "}
                        <i className="material-icons">star</i>
                        <i className="material-icons">star</i>
                        <i className="material-icons">star</i>
                        {/*                                            <i className="material-icons">star</i>*/}
                        {/*                                            <i className="material-icons">star</i>*/}
                        {/*                                            <i className="material-icons">star</i>*/}
                        {/*                                            <i className="material-icons">star_half</i>*/}
                      </label>
                    </td>
                    <td>
                      Really good job and friendly services will uncover many
                      web sites still in their infancy. Various versions have
                      evolved over the years, sometimes by accident, sometimes
                      on purpose
                    </td>
                    <td>
                      {" "}
                      <Link href="/review_trash?way=1&&reviewreviewreviewreviewreviewreview=50">
                        <span className="db-list-edit">Delete</span>{" "}
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td>10</td>
                    <td>Smart Digital Products</td>
                    <td>Directory Finder</td>
                    <td>thedirectoryfinder@gmail.com</td>
                    <td>022446688</td>
                    <td />
                    <td>
                      <label className="rat">
                        {" "}
                        <i className="material-icons">star</i>
                        <i className="material-icons">star</i>
                        <i className="material-icons">star</i>
                        <i className="material-icons">star</i>
                        {/*                                            <i className="material-icons">star</i>*/}
                        {/*                                            <i className="material-icons">star</i>*/}
                        {/*                                            <i className="material-icons">star</i>*/}
                        {/*                                            <i className="material-icons">star_half</i>*/}
                      </label>
                    </td>
                    <td>
                      Best service provider look like readable English. Many
                      desktop publishing packages and web page editors now use
                      Lorem Ipsum as their default model text
                    </td>
                    <td>
                      {" "}
                      <Link href="/review_trash?way=1&&reviewreviewreviewreviewreviewreview=43">
                        <span className="db-list-edit">Delete</span>{" "}
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td>11</td>
                    <td>Tour and Travel html Template</td>
                    <td>Directory Finder</td>
                    <td>thedirectoryfinder@gmail.com</td>
                    <td>022446688</td>
                    <td />
                    <td>
                      <label className="rat">
                        {" "}
                        <i className="material-icons">star</i>
                        <i className="material-icons">star</i>
                        <i className="material-icons">star</i>
                        {/*                                            <i className="material-icons">star</i>*/}
                        {/*                                            <i className="material-icons">star</i>*/}
                        {/*                                            <i className="material-icons">star</i>*/}
                        {/*                                            <i className="material-icons">star_half</i>*/}
                      </label>
                    </td>
                    <td>
                      Good support, Very Good team, Excellent design and web
                      template. They are quick to respond for support..
                    </td>
                    <td>
                      {" "}
                      <Link href="/review_trash?way=1&&reviewreviewreviewreviewreviewreview=42">
                        <span className="db-list-edit">Delete</span>{" "}
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td>12</td>
                    <td>Smart Digital Products</td>
                    <td>Directory Finder</td>
                    <td>thedirectoryfinder@gmail.com</td>
                    <td>022446688</td>
                    <td />
                    <td>
                      <label className="rat">
                        {" "}
                        <i className="material-icons">star</i>
                        <i className="material-icons">star</i>
                        {/*                                            <i className="material-icons">star</i>*/}
                        {/*                                            <i className="material-icons">star</i>*/}
                        {/*                                            <i className="material-icons">star</i>*/}
                        {/*                                            <i className="material-icons">star_half</i>*/}
                      </label>
                    </td>
                    <td>
                      I found one of the best template designers every. i
                      strongly recommended this brand and well-skilled
                      developers.
                    </td>
                    <td>
                      {" "}
                      <Link href="/review_trash?way=1&&reviewreviewreviewreviewreviewreview=37">
                        <span className="db-list-edit">Delete</span>{" "}
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td>13</td>
                    <td>Smart Digital Products</td>
                    <td>Directory Finder</td>
                    <td>thedirectoryfinder@gmail.com</td>
                    <td>022446688</td>
                    <td>Sydney</td>
                    <td>
                      <label className="rat">
                        {" "}
                        <i className="material-icons">star</i>
                        <i className="material-icons">star</i>
                        {/*                                            <i className="material-icons">star</i>*/}
                        {/*                                            <i className="material-icons">star</i>*/}
                        {/*                                            <i className="material-icons">star</i>*/}
                        {/*                                            <i className="material-icons">star_half</i>*/}
                      </label>
                    </td>
                    <td>
                      I found one of the best template designers every. i
                      strongly recommended this brand and well-skilled
                      developers.
                    </td>
                    <td>
                      {" "}
                      <Link href="/review_trash?way=1&&reviewreviewreviewreviewreviewreview=36">
                        <span className="db-list-edit">Delete</span>{" "}
                      </Link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div id="sent" className="container tab-pane fade">
              <br />
              <table className="responsive-table bordered">
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Listing Name</th>
                    <th>User</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>City</th>
                    <th>Ratings</th>
                    <th>Message</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Rolexo Villas in California</td>
                    <td>Digital koncept</td>
                    <td>connect@bizdir.in</td>
                    <td>5522114422</td>
                    <td />
                    <td>
                      <label className="rat">
                        {" "}
                        <i className="material-icons">star</i>
                        <i className="material-icons">star</i>
                        <i className="material-icons">star</i>
                        <i className="material-icons">star</i>
                        <i className="material-icons">star</i>
                        {/*                                            <i className="material-icons">star</i>*/}
                        {/*                                            <i className="material-icons">star</i>*/}
                        {/*                                            <i className="material-icons">star</i>*/}
                        {/*                                            <i className="material-icons">star_half</i>*/}
                      </label>
                    </td>
                    <td>
                      verified_userRolexo Villas is well-known to all as a
                      premier builder of villas and apartments. Even though they
                      have various departments they stay united in giving the
                      customers the best service. I really had a good service
                      right from on time delivery, quality of work, perfection
                      in work completion. The relationship does not end in just
                      in hand over but they stand strong in all tuff times for
                      the commitment given. After 3+ years of handover they
                      addressed the compound wall cracks which expanded and in a
                      week condition. They still respond to any queries / faults
                      on time and track it to closure.
                    </td>
                    <td>
                      {" "}
                      <Link href="/review_trash?way=1&&reviewreviewreviewreviewreviewreview=102">
                        <span className="db-list-edit">Delete</span>{" "}
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>The Royal Spa Center for Women</td>
                    <td>Digital koncept</td>
                    <td>connect@bizdir.in</td>
                    <td>5522114422</td>
                    <td>Sydney</td>
                    <td>
                      <label className="rat">
                        {" "}
                        <i className="material-icons">star</i>
                        <i className="material-icons">star</i>
                        <i className="material-icons">star</i>
                        <i className="material-icons">star</i>
                        {/*                                            <i className="material-icons">star</i>*/}
                        {/*                                            <i className="material-icons">star</i>*/}
                        {/*                                            <i className="material-icons">star</i>*/}
                        {/*                                            <i className="material-icons">star_half</i>*/}
                      </label>
                    </td>
                    <td>
                      Perfect facial.. i strongly recommended Writing great
                      reviews may help others discover the places that are just
                      apt for them. Here are a few tips to write a good review:
                    </td>
                    <td>
                      {" "}
                      <Link href="/review_trash?way=1&&reviewreviewreviewreviewreviewreview=35">
                        <span className="db-list-edit">Delete</span>{" "}
                      </Link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
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
