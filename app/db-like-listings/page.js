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
          <img alt="demoimage" src="/user/62736rn53themes.png"  />
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
                <img alt="demoimage" src="/icon/dbl1.png"  />
                My Dashboard
              </Link>
            </li>
            <li>
              <Link href="/db-all-listing" className="">
                <img alt="demoimage" src="/icon/shop.png"  />
                All Listings
              </Link>
            </li>
            <li>
              <Link href="/add-listing-start">
                <img alt="demoimage" src="/icon/dbl3.png"  />
                Add New Listing
              </Link>
            </li>
            <li>
              <Link href="/db-enquiry" className="">
                <img alt="demoimage" src="/icon/tick.png"  />
                Lead enquiry
              </Link>
            </li>
            <li>
              <Link href="/db-products" className="">
                <img alt="demoimage" src="/icon/cart.png"  />
                All Products
              </Link>
            </li>
            <li>
              <Link href="/db-events" className="">
                <img alt="demoimage" src="/icon/calendar.png"  />
                Events
              </Link>
            </li>
            <li>
              <Link href="/db-blog-posts" className="">
                <img alt="demoimage" src="/icon/blog1.png"  />
                Blog posts
              </Link>
            </li>
            <li>
              <Link href="/db-coupons" className="">
                <img alt="demoimage" src="/icon/coupons.png"  />
                Coupons
              </Link>
            </li>
            <li>
              <Link href="/db-promote" className="">
                <img alt="demoimage" src="/icon/promotion.png"  />
                Promotions
              </Link>
            </li>
            <li>
              <Link href="/db-seo" className="">
                <img alt="demoimage" src="/icon/seo.png"  />
                SEO
              </Link>
            </li>
            <li>
              <Link href="/db-point-history" className="">
                <img alt="demoimage" src="/icon/point.png"  />
                Points History
              </Link>
            </li>
            <li>
              <Link href="/db-review" className="">
                <img alt="demoimage" src="/icon/dbl13.png"  />
                Reviews
              </Link>
            </li>
            {/*<li>
                  <Link href="/db-message" className=""><img alt="demoimage" src="/icon/dbl14.png"  />Messages</Link>
              </li>*/}
            <li>
              <Link href="/db-my-profile" className="">
                <img alt="demoimage" src="/icon/dbl6.png"  />
                My Profile
              </Link>
            </li>
            <li>
              <Link href="/db-like-listings" className="db-lact">
                <img alt="demoimage" src="/icon/dbl15.png"  />
                Liked Listings
              </Link>
            </li>
            <li>
              <Link href="/db-followings" className="">
                <img alt="demoimage" src="/icon/dbl18.png"  />
                Followings
              </Link>
            </li>
            <li>
              <Link href="/db-post-ads" className="">
                <img alt="demoimage" src="/icon/dbl11.png"  />
                Ad Summary
              </Link>
            </li>
            <li>
              <Link href="/db-payment" className="">
                <img alt="demoimage" src="/icon/dbl9.png"  />
                Payment &amp; plan
              </Link>
            </li>
            <li>
              <Link href="/db-invoice-all" className="">
                <img alt="demoimage" src="/icon/dbl16.png"  />
                Payment invoice
              </Link>
            </li>
            <li>
              <Link href="/db-notifications" className="">
                <img alt="demoimage" src="/icon/dbl19.png"  />
                Notifications
              </Link>
            </li>
            <li>
              <Link href="/how-to" className="" target="_blank">
                <img alt="demoimage" src="/icon/dbl17.png"  />
                How to&apos;s
              </Link>
            </li>
            <li>
              <Link href="/db-setting" className="">
                <img alt="demoimage" src="/icon/dbl210.png"  />
                Setting
              </Link>
            </li>
            <li>
              <Link href="/#">
                <img alt="demoimage" src="/icon/dbl12.png"  />
                Log Out
              </Link>
            </li>
          </ul>
        </div>
      </div>
      {/*CENTER SECTION*/}
      <div className="ud-cen">
        <div className="log-bor">&nbsp;</div>{" "}
        <span className="udb-inst">Liked Listings</span>
        <div className="ud-cen-s2">
          <h2>All Liked Listings</h2>
          <table className="responsive-table bordered">
            <thead>
              <tr>
                <th>No</th>
                <th>Listing Name</th>
                <th>Rating</th>
                <th>Remove</th>
                <th>Preview</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>
                  <img alt="demoimage" src="/listings/41073ser6.jpg" />
                  The Royal Spa Center for Women <span>08, Dec 2019</span>
                </td>
                <td>
                  <span className="db-list-rat">4</span>
                </td>
                <td>
                  <Link href="/liked-listing-trash?likedlistinglikedlistinglikedlistinglikedlistinglikedlisting=148">
                    <span className="db-list-edit">Remove</span>
                  </Link>
                </td>
                <td>
                  <Link
                    href="/all-listing"
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
                  <img alt="demoimage" src="/listings/4797732622rn53themes.png" />
                  Wedding Venues viki <span>22, Jan 2020</span>
                </td>
                <td>
                  <span className="db-list-rat">0</span>
                </td>
                <td>
                  <Link href="/liked-listing-trash?likedlistinglikedlistinglikedlistinglikedlistinglikedlisting=216">
                    <span className="db-list-edit">Remove</span>
                  </Link>
                </td>
                <td>
                  <Link
                    href="/listing/wedding-venues-viki"
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
                  <img alt="demoimage" src="/listings/26404cvs-gift-card-476x328.png" />
                  asjdklfasd <span>23, Jan 2020</span>
                </td>
                <td>
                  <span className="db-list-rat">0</span>
                </td>
                <td>
                  <Link href="/liked-listing-trash?likedlistinglikedlistinglikedlistinglikedlistinglikedlisting=217">
                    <span className="db-list-edit">Remove</span>
                  </Link>
                </td>
                <td>
                  <Link
                    href="/listing/asjdklfasd"
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
                  <img alt="demoimage" src="/listings/56271pexels-photo-713148.jpeg" />
                  IPM Business Software <span>22, Jan 2020</span>
                </td>
                <td>
                  <span className="db-list-rat">0</span>
                </td>
                <td>
                  <Link href="/liked-listing-trash?likedlistinglikedlistinglikedlistinglikedlistinglikedlisting=218">
                    <span className="db-list-edit">Remove</span>
                  </Link>
                </td>
                <td>
                  <Link
                    href="/listing/ipm-business-software"
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
                  <img alt="demoimage" src="/listings/20140doctor-sitting-in-front-of-his-desk-2182979.jpg" />
                  Forms hospitals <span>22, Jan 2020</span>
                </td>
                <td>
                  <span className="db-list-rat">0</span>
                </td>
                <td>
                  <Link href="/liked-listing-trash?likedlistinglikedlistinglikedlistinglikedlistinglikedlisting=219">
                    <span className="db-list-edit">Remove</span>
                  </Link>
                </td>
                <td>
                  <Link
                    href="/listing/forms-hospitals"
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
                  <img alt="demoimage" src="/listings/46980logo2.png" />
                  Test mest <span>21, Jan 2020</span>
                </td>
                <td>
                  <span className="db-list-rat">0</span>
                </td>
                <td>
                  <Link href="/liked-listing-trash?likedlistinglikedlistinglikedlistinglikedlistinglikedlisting=220">
                    <span className="db-list-edit">Remove</span>
                  </Link>
                </td>
                <td>
                  <Link
                    href="/listing/test-mest"
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
                  <img alt="demoimage" src="/listings/88258blog_off.jpg" />
                  New listing 2 <span>20, Jan 2020</span>
                </td>
                <td>
                  <span className="db-list-rat">0</span>
                </td>
                <td>
                  <Link href="/liked-listing-trash?likedlistinglikedlistinglikedlistinglikedlistinglikedlisting=221">
                    <span className="db-list-edit">Remove</span>
                  </Link>
                </td>
                <td>
                  <Link
                    href="/listing/new-listing-2"
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
                  <img alt="demoimage" src="/listings/138331.jpg" />
                  New listing <span>20, Jan 2020</span>
                </td>
                <td>
                  <span className="db-list-rat">0</span>
                </td>
                <td>
                  <Link href="/liked-listing-trash?likedlistinglikedlistinglikedlistinglikedlistinglikedlisting=222">
                    <span className="db-list-edit">Remove</span>
                  </Link>
                </td>
                <td>
                  <Link
                    href="/listing/new-listing"
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
                  <img alt="demoimage" src="/listings/138331.jpg" />
                  Anicuns Online <span>17, Jan 2020</span>
                </td>
                <td>
                  <span className="db-list-rat">0</span>
                </td>
                <td>
                  <Link href="/liked-listing-trash?likedlistinglikedlistinglikedlistinglikedlistinglikedlisting=224">
                    <span className="db-list-edit">Remove</span>
                  </Link>
                </td>
                <td>
                  <Link
                    href="/listing/anicuns-online"
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
                  <img alt="demoimage" src="/listings/83091accomplishment-ceremony-education-graduation-267885.jpg" />
                  lll <span>16, Jan 2020</span>
                </td>
                <td>
                  <span className="db-list-rat">0</span>
                </td>
                <td>
                  <Link href="/liked-listing-trash?likedlistinglikedlistinglikedlistinglikedlistinglikedlisting=225">
                    <span className="db-list-edit">Remove</span>
                  </Link>
                </td>
                <td>
                  <Link
                    href="/listing/lll"
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
                  <img alt="demoimage" src="/listings/21604photo-of-a-boy-with-curly-hair-2929036.jpg" />
                  William Chil care Hospital <span>11, Jan 2020</span>
                </td>
                <td>
                  <span className="db-list-rat">0</span>
                </td>
                <td>
                  <Link href="/liked-listing-trash?likedlistinglikedlistinglikedlistinglikedlistinglikedlisting=226">
                    <span className="db-list-edit">Remove</span>
                  </Link>
                </td>
                <td>
                  <Link
                    href="/listing/william-chil-care-hospital"
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
                  <img alt="demoimage" src="/listings/73954man-and-child-holding-baby-3279209.jpg" />
                  Urban Community Hospital <span>11, Jan 2020</span>
                </td>
                <td>
                  <span className="db-list-rat">4</span>
                </td>
                <td>
                  <Link href="/liked-listing-trash?likedlistinglikedlistinglikedlistinglikedlistinglikedlisting=227">
                    <span className="db-list-edit">Remove</span>
                  </Link>
                </td>
                <td>
                  <Link
                    href="/listing/urban-community-hospital"
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
                  <img alt="demoimage" src="/listings/20140doctor-sitting-in-front-of-his-desk-2182979.jpg" />
                  Joseph Multispeciality Hospital <span>11, Jan 2020</span>
                </td>
                <td>
                  <span className="db-list-rat">0</span>
                </td>
                <td>
                  <Link href="/liked-listing-trash?likedlistinglikedlistinglikedlistinglikedlistinglikedlisting=228">
                    <span className="db-list-edit">Remove</span>
                  </Link>
                </td>
                <td>
                  <Link
                    href="/listing/joseph-multispeciality-hospital"
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
                  <img alt="demoimage" src="/listings/22386pexels-photo-1157391.jpeg" />
                  Apolloo Hospitals UAE <span>07, Jan 2020</span>
                </td>
                <td>
                  <span className="db-list-rat">4</span>
                </td>
                <td>
                  <Link href="/liked-listing-trash?likedlistinglikedlistinglikedlistinglikedlistinglikedlisting=229">
                    <span className="db-list-edit">Remove</span>
                  </Link>
                </td>
                <td>
                  <Link
                    href="/listing/apolloo-hospitals-uae"
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
                  <img alt="demoimage" src="/listings/43032pexels-photo-955793.jpeg" />
                  Appers Premium Independent Houses <span>07, Jan 2020</span>
                </td>
                <td>
                  <span className="db-list-rat">3.3</span>
                </td>
                <td>
                  <Link href="/liked-listing-trash?likedlistinglikedlistinglikedlistinglikedlistinglikedlisting=230">
                    <span className="db-list-edit">Remove</span>
                  </Link>
                </td>
                <td>
                  <Link
                    href="/listing/appers-premium-independent-houses"
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
                  <img alt="demoimage" src="/listings/61191pexels-photo-96444.jpeg" />
                  Capital five star hotels <span>07, Jan 2020</span>
                </td>
                <td>
                  <span className="db-list-rat">4</span>
                </td>
                <td>
                  <Link href="/liked-listing-trash?likedlistinglikedlistinglikedlistinglikedlistinglikedlisting=231">
                    <span className="db-list-edit">Remove</span>
                  </Link>
                </td>
                <td>
                  <Link
                    href="/listing/capital-five-star-hotels"
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
                  <img alt="demoimage" src="/listings/51803pexels-photo-1386168.jpeg" />
                  Hard Rocks Hotels <span>07, Jan 2020</span>
                </td>
                <td>
                  <span className="db-list-rat">3.8</span>
                </td>
                <td>
                  <Link href="/liked-listing-trash?likedlistinglikedlistinglikedlistinglikedlistinglikedlisting=232">
                    <span className="db-list-edit">Remove</span>
                  </Link>
                </td>
                <td>
                  <Link
                    href="/listing/hard-rocks-hotels"
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
                  <img alt="demoimage" src="/listings/26318pexels-photo-594077.jpeg" />
                  Taaj Five Star Hotels <span>07, Jan 2020</span>
                </td>
                <td>
                  <span className="db-list-rat">4</span>
                </td>
                <td>
                  <Link href="/liked-listing-trash?likedlistinglikedlistinglikedlistinglikedlistinglikedlisting=233">
                    <span className="db-list-edit">Remove</span>
                  </Link>
                </td>
                <td>
                  <Link
                    href="/listing/taaj-five-star-hotels"
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
                  <img alt="demoimage" src="/listings/4103pexels-photo-248547.jpeg" />
                  Dial Sports Shops <span>07, Jan 2020</span>
                </td>
                <td>
                  <span className="db-list-rat">3</span>
                </td>
                <td>
                  <Link href="/liked-listing-trash?likedlistinglikedlistinglikedlistinglikedlistinglikedlisting=235">
                    <span className="db-list-edit">Remove</span>
                  </Link>
                </td>
                <td>
                  <Link
                    href="/listing/dial-sports-shops"
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
                  <img alt="demoimage" src="/listings/83091accomplishment-ceremony-education-graduation-267885.jpg" />
                  Andree Education and Tuition Center <span>07, Jan 2020</span>
                </td>
                <td>
                  <span className="db-list-rat">0</span>
                </td>
                <td>
                  <Link href="/liked-listing-trash?likedlistinglikedlistinglikedlistinglikedlistinglikedlisting=236">
                    <span className="db-list-edit">Remove</span>
                  </Link>
                </td>
                <td>
                  <Link
                    href="/listing/andree-education-and-tuition-center"
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
                  <img alt="demoimage" src="/listings/25918pexels-photo-3217851.jpeg" />
                  TATE Electrical Shops <span>07, Jan 2020</span>
                </td>
                <td>
                  <span className="db-list-rat">0</span>
                </td>
                <td>
                  <Link href="/liked-listing-trash?likedlistinglikedlistinglikedlistinglikedlistinglikedlisting=237">
                    <span className="db-list-edit">Remove</span>
                  </Link>
                </td>
                <td>
                  <Link
                    href="/listing/tate-electrical-shops"
                    className="db-list-edit"
                    target="_blank"
                  >
                    Preview
                  </Link>
                </td>
              </tr>
              <tr>
                <td>22</td>
                <td>
                  <img alt="demoimage" src="/listings/68725pexels-photo-2747550.jpeg" />
                  Center Automobiles <span>07, Jan 2020</span>
                </td>
                <td>
                  <span className="db-list-rat">4</span>
                </td>
                <td>
                  <Link href="/liked-listing-trash?likedlistinglikedlistinglikedlistinglikedlistinglikedlisting=238">
                    <span className="db-list-edit">Remove</span>
                  </Link>
                </td>
                <td>
                  <Link
                    href="/listing/center-automobiles"
                    className="db-list-edit"
                    target="_blank"
                  >
                    Preview
                  </Link>
                </td>
              </tr>
              <tr>
                <td>23</td>
                <td>
                  <img alt="demoimage" src="/listings/22862pexels-photo-1250655.jpeg" />
                  Green Healthcare Hospital <span>07, Jan 2020</span>
                </td>
                <td>
                  <span className="db-list-rat">3</span>
                </td>
                <td>
                  <Link href="/liked-listing-trash?likedlistinglikedlistinglikedlistinglikedlistinglikedlisting=239">
                    <span className="db-list-edit">Remove</span>
                  </Link>
                </td>
                <td>
                  <Link
                    href="/listing/green-healthcare-hospital"
                    className="db-list-edit"
                    target="_blank"
                  >
                    Preview
                  </Link>
                </td>
              </tr>
              <tr>
                <td>24</td>
                <td>
                  <img alt="demoimage" src="/listings/9953white-bmw-e46-under-cloudy-skies-707046.jpg" />
                  Lemoo Cap Services <span>07, Jan 2020</span>
                </td>
                <td>
                  <span className="db-list-rat">3</span>
                </td>
                <td>
                  <Link href="/liked-listing-trash?likedlistinglikedlistinglikedlistinglikedlistinglikedlisting=240">
                    <span className="db-list-edit">Remove</span>
                  </Link>
                </td>
                <td>
                  <Link
                    href="/listing/lemoo-cap-services"
                    className="db-list-edit"
                    target="_blank"
                  >
                    Preview
                  </Link>
                </td>
              </tr>
              <tr>
                <td>25</td>
                <td>
                  <img alt="demoimage" src="/listings/89971pexels-photo-2096983.jpeg" />
                  Rachel Taj Hotels <span>07, Jan 2020</span>
                </td>
                <td>
                  <span className="db-list-rat">3</span>
                </td>
                <td>
                  <Link href="/liked-listing-trash?likedlistinglikedlistinglikedlistinglikedlistinglikedlisting=241">
                    <span className="db-list-edit">Remove</span>
                  </Link>
                </td>
                <td>
                  <Link
                    href="/listing/rachel-taj-hotels"
                    className="db-list-edit"
                    target="_blank"
                  >
                    Preview
                  </Link>
                </td>
              </tr>
              <tr>
                <td>26</td>
                <td>
                  <img alt="demoimage" src="/listings/88546images-(5).jpg" />
                  coffee shop <span>04, Jan 2020</span>
                </td>
                <td>
                  <span className="db-list-rat">4</span>
                </td>
                <td>
                  <Link href="/liked-listing-trash?likedlistinglikedlistinglikedlistinglikedlistinglikedlisting=242">
                    <span className="db-list-edit">Remove</span>
                  </Link>
                </td>
                <td>
                  <Link
                    href="/listing/coffee-shop"
                    className="db-list-edit"
                    target="_blank"
                  >
                    Preview
                  </Link>
                </td>
              </tr>
              <tr>
                <td>27</td>
                <td>
                  <img alt="demoimage" src="/listings/47884beautiful-wooden-houses-with-lawns-1643389.jpg" />
                  Asian Real Estate <span>01, Feb 2020</span>
                </td>
                <td>
                  <span className="db-list-rat">0</span>
                </td>
                <td>
                  <Link href="/liked-listing-trash?likedlistinglikedlistinglikedlistinglikedlistinglikedlisting=263">
                    <span className="db-list-edit">Remove</span>
                  </Link>
                </td>
                <td>
                  <Link
                    href="/all-listing"
                    className="db-list-edit"
                    target="_blank"
                  >
                    Preview
                  </Link>
                </td>
              </tr>
              <tr>
                <td>28</td>
                <td>
                  <img alt="demoimage" src="/listings/540095e27bfabcc13d.jpg" />
                  abc ltd <span>19, Feb 2020</span>
                </td>
                <td>
                  <span className="db-list-rat">0</span>
                </td>
                <td>
                  <Link href="/liked-listing-trash?likedlistinglikedlistinglikedlistinglikedlistinglikedlisting=264">
                    <span className="db-list-edit">Remove</span>
                  </Link>
                </td>
                <td>
                  <Link
                    href="/listing/abc-ltd"
                    className="db-list-edit"
                    target="_blank"
                  >
                    Preview
                  </Link>
                </td>
              </tr>
              <tr>
                <td>29</td>
                <td>
                  <img alt="demoimage" src="/listings/540095e27bfabcc13d.jpg" />
                  Home <span>16, Mar 2020</span>
                </td>
                <td>
                  <span className="db-list-rat">0</span>
                </td>
                <td>
                  <Link href="/liked-listing-trash?likedlistinglikedlistinglikedlistinglikedlistinglikedlisting=265">
                    <span className="db-list-edit">Remove</span>
                  </Link>
                </td>
                <td>
                  <Link
                    href="/listing/home"
                    className="db-list-edit"
                    target="_blank"
                  >
                    Preview
                  </Link>
                </td>
              </tr>
              <tr>
                <td>30</td>
                <td>
                  <img alt="demoimage" src="/listings/6764gettyimages-200066800-001-1.jpg" />
                  Royal Real Estates <span>18, Jan 2020</span>
                </td>
                <td>
                  <span className="db-list-rat">0</span>
                </td>
                <td>
                  <Link href="/liked-listing-trash?likedlistinglikedlistinglikedlistinglikedlistinglikedlisting=267">
                    <span className="db-list-edit">Remove</span>
                  </Link>
                </td>
                <td>
                  <Link
                    href="/listing/royal-real-estates"
                    className="db-list-edit"
                    target="_blank"
                  >
                    Preview
                  </Link>
                </td>
              </tr>
              <tr>
                <td>31</td>
                <td>
                  <img alt="demoimage" src="/listings/67634pexels-photo-208736.jpeg" />
                  Della World Premium Properties <span>07, Jan 2020</span>
                </td>
                <td>
                  <span className="db-list-rat">4</span>
                </td>
                <td>
                  <Link href="/liked-listing-trash?likedlistinglikedlistinglikedlistinglikedlistinglikedlisting=268">
                    <span className="db-list-edit">Remove</span>
                  </Link>
                </td>
                <td>
                  <Link
                    href="/listing/della-world-premium-properties"
                    className="db-list-edit"
                    target="_blank"
                  >
                    Preview
                  </Link>
                </td>
              </tr>
              <tr>
                <td>32</td>
                <td>
                  <img alt="demoimage" src="/listings/32898pexels-photo-1858175.jpeg" />
                  Honey Massage Center <span>30, Mar 2020</span>
                </td>
                <td>
                  <span className="db-list-rat">0</span>
                </td>
                <td>
                  <Link href="/liked-listing-trash?likedlistinglikedlistinglikedlistinglikedlistinglikedlisting=286">
                    <span className="db-list-edit">Remove</span>
                  </Link>
                </td>
                <td>
                  <Link
                    href="/listing/honey-massage-center"
                    className="db-list-edit"
                    target="_blank"
                  >
                    Preview
                  </Link>
                </td>
              </tr>
              <tr>
                <td>33</td>
                <td>
                  <img alt="demoimage" src="/listings/80274easy-to-install-2.png" />
                  forms soft tech <span>22, Jan 2020</span>
                </td>
                <td>
                  <span className="db-list-rat">0</span>
                </td>
                <td>
                  <Link href="/liked-listing-trash?likedlistinglikedlistinglikedlistinglikedlistinglikedlisting=299">
                    <span className="db-list-edit">Remove</span>
                  </Link>
                </td>
                <td>
                  <Link
                    href="/listing/forms-soft-tech"
                    className="db-list-edit"
                    target="_blank"
                  >
                    Preview
                  </Link>
                </td>
              </tr>
              <tr>
                <td>34</td>
                <td>
                  <img alt="demoimage" src="/listings/66695o.jpg" />
                  International Food Bazaar <span>03, Jun 2020</span>
                </td>
                <td>
                  <span className="db-list-rat">0</span>
                </td>
                <td>
                  <Link href="/liked-listing-trash?likedlistinglikedlistinglikedlistinglikedlistinglikedlisting=309">
                    <span className="db-list-edit">Remove</span>
                  </Link>
                </td>
                <td>
                  <Link
                    href="/listing/international-food-bazaar"
                    className="db-list-edit"
                    target="_blank"
                  >
                    Preview
                  </Link>
                </td>
              </tr>
              <tr>
                <td>35</td>
                <td>
                  <img alt="demoimage" src="/listings/43340pexels-photo-106399.jpeg" />
                  Rolexo Villas in California <span>07, Mar 2021</span>
                </td>
                <td>
                  <span className="db-list-rat">5</span>
                </td>
                <td>
                  <Link href="/liked-listing-trash?likedlistinglikedlistinglikedlistinglikedlistinglikedlisting=312">
                    <span className="db-list-edit">Remove</span>
                  </Link>
                </td>
                <td>
                  <Link
                    href="/listing/rolexo-villas-in-california"
                    className="db-list-edit"
                    target="_blank"
                  >
                    Preview
                  </Link>
                </td>
              </tr>
              <tr>
                <td>36</td>
                <td>
                  <img alt="demoimage" src="/listings/40913book_reading.jpg" />
                  saadsds <span>04, Jul 2020</span>
                </td>
                <td>
                  <span className="db-list-rat">0</span>
                </td>
                <td>
                  <Link href="/liked-listing-trash?likedlistinglikedlistinglikedlistinglikedlistinglikedlisting=315">
                    <span className="db-list-edit">Remove</span>
                  </Link>
                </td>
                <td>
                  <Link
                    href="/listing/saadsds"
                    className="db-list-edit"
                    target="_blank"
                  >
                    Preview
                  </Link>
                </td>
              </tr>
              <tr>
                <td>37</td>
                <td>
                  <img alt="demoimage" src="/listings/16671tcx_pro21_white__23108.1409770848.1280.1280.jpg" />
                  Hari krishna entrepreneur <span>29, Jul 2020</span>
                </td>
                <td>
                  <span className="db-list-rat">0</span>
                </td>
                <td>
                  <Link href="/liked-listing-trash?likedlistinglikedlistinglikedlistinglikedlistinglikedlisting=317">
                    <span className="db-list-edit">Remove</span>
                  </Link>
                </td>
                <td>
                  <Link
                    href="/listing/hari-krishna-entrepreneur"
                    className="db-list-edit"
                    target="_blank"
                  >
                    Preview
                  </Link>
                </td>
              </tr>
              <tr>
                <td>38</td>
                <td>
                  <img alt="demoimage" src="/listings/79587loewe-technologies-4aqx0r9kucg-unsplash.jpg" />
                  fghdfgfdg <span>05, May 2020</span>
                </td>
                <td>
                  <span className="db-list-rat">0</span>
                </td>
                <td>
                  <Link href="/liked-listing-trash?likedlistinglikedlistinglikedlistinglikedlistinglikedlisting=318">
                    <span className="db-list-edit">Remove</span>
                  </Link>
                </td>
                <td>
                  <Link
                    href="/listing/fghdfgfdg"
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
        {/*                    <img alt="demoimage" src="/user/*/}
        {/*" >*/}
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
                    <img alt="demoimage"
                      src="/user/63520pexels-photo-1130626.jpeg"
                      
                    />
                  </Link>
                </li>
                <li>
                  <Link href="/profile/betty-d-friedman" target="_blank">
                    <img alt="demoimage"
                      src="/user/8766pexels-photo-774909.jpeg"
                      
                    />
                  </Link>
                </li>
                <li>
                  <Link href="/profile/claude-d-dial" target="_blank">
                    <img alt="demoimage"
                      src="/user/33654pexels-photo-91227.jpeg"
                      
                    />
                  </Link>
                </li>
                <li>
                  <Link href="/profile/kumar" target="_blank">
                    <img alt="demoimage"
                      src="/user/4913411004989_334444876752279_544839968_n.jpg"
                      
                    />
                  </Link>
                </li>
                <li>
                  <Link href="/profile/deneme" target="_blank">
                    <img alt="demoimage" src="/user/475847.jpg"  />
                  </Link>
                </li>
                <li>
                  <Link href="/profile/clic" target="_blank">
                    <img alt="demoimage" src="/user/475847.jpg"  />
                  </Link>
                </li>
                <li>
                  <Link href="/profile/nawaf-alayli" target="_blank">
                    <img alt="demoimage" src="/user/475847.jpg"  />
                  </Link>
                </li>
                {/*                    <li>*/}
                {/*                        <Link href="/profile" target="_blank">*/}
                {/*                            <img alt="demoimage" src="/user/2.jpg" >*/}
                {/*                        </Link>*/}
                {/*                    </li>*/}
                {/*                    <li>*/}
                {/*                        <Link href="/profile" target="_blank">*/}
                {/*                            <img alt="demoimage" src="/user/3.jpg" >*/}
                {/*                        </Link>*/}
                {/*                    </li>*/}
                {/*                    <li>*/}
                {/*                        <Link href="/profile" target="_blank">*/}
                {/*                            <img alt="demoimage" src="/user/4.jpg" >*/}
                {/*                        </Link>*/}
                {/*                    </li>*/}
                {/*                    <li>*/}
                {/*                        <Link href="/profile" target="_blank">*/}
                {/*                            <img alt="demoimage" src="/user/5.jpg" >*/}
                {/*                        </Link>*/}
                {/*                    </li>*/}
                {/*                    <li>*/}
                {/*                        <Link href="/profile" target="_blank">*/}
                {/*                            <img alt="demoimage" src="/user/6.jpg" >*/}
                {/*                        </Link>*/}
                {/*                    </li>*/}
                {/*                    <li>*/}
                {/*                        <Link href="/profile" target="_blank">*/}
                {/*                            <img alt="demoimage" src="/user/7.jpg" >*/}
                {/*                        </Link>*/}
                {/*                    </li>*/}
                {/*                    <li>*/}
                {/*                        <Link href="/profile" target="_blank">*/}
                {/*                            <img alt="demoimage" src="/user/8.jpg" >*/}
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
              <img alt="demoimage" src="/idea.png"  />
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
