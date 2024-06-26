'use strict';
'use client';
import React from 'react';
import Script from 'next/script';
import { useSession,signOut } from "next-auth/react"
import { useScrollPosition } from '../hooks';
import Link from 'next/link';
import { useState } from 'react';
import $ from "jquery";
import DbMenu from './Layout/user/DbMenu';
import MobileMenu from './Layout/user/MobileMenu';
const Header = ({transparent}) => {
  const { data: session, status } = useSession();
  const [ isMenuVisible, setMenuVisibility ] = useState(false);
  const [ isMobMenuVisible, setMobMenuVisibility ] = useState(false);
  const [dashboardvisiblity, setDashboardVisiblity] = useState(false);
  const scrollPosition = useScrollPosition();
  return (
    <>
    
    <div className={`${(scrollPosition > 0 || transparent === false) ? 'hom-top dmact': 'hom-top'}`}>
    <div className="container">
      <div className="row">
        <div className="hom-nav  db-open ">
          {/*MOBILE MENU*/}
          {/*<div className="menu">
                            <i className="material-icons mopen">menu</i>
                        </div>*/}
          <Link href="/" className="top-log">
            <img src="/Logo-W-200x45.webp" alt="" className="ic-logo" />
          </Link>
          <div className="menu" onClick={() => setMenuVisibility(! isMenuVisible)}>
            <h4>All Category</h4>
          </div>
          <div className={`${isMenuVisible ? 'pop-menu ani': 'pop-menu' }`}>
            <div className="container">
              <div className="row">
                {" "}
                <i className="material-icons clopme" onClick={() => setMenuVisibility(! isMenuVisible)}>close</i>
                <div className="pmenu-spri">
                  <ul>
                    <li>
                      <Link href="/all-category" className="act">
                        <img alt="image" src="/icon/shop.png" />
                        All Services
                      </Link>
                    </li>
                    <li>
                      <Link href="/events">
                        <img alt="image" src="/icon/calendar.png" />
                        Events
                      </Link>
                    </li>
                    <li>
                      <Link href="/all-products">
                        <img alt="image" src="/icon/cart.png" />
                        Products
                      </Link>
                    </li>
                    <li>
                      <Link href="/coupons">
                        <img alt="image" src="/icon/coupons.png" />
                        Coupon &amp; deals
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog-posts">
                        <img alt="image" src="/icon/blog1.png" />
                        Blogs
                      </Link>
                    </li>
                    <li>
                      <Link href="/community">
                        <img alt="image" src="/icon/11.png" />
                        Community
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="pmenu-cat">
                  <h4>All Categories</h4>
                  <input type="text" id="pg-sear" placeholder="Search category" />
                  <ul id="pg-resu">
                    <li>
                      <Link href="/all-listing">
                        Wedding halls - <span>03</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/all-listing">
                        Hotel &amp; Food - <span>01</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/all-listing">
                        Pet shop - <span>12</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/all-listing">
                        Digital Products - <span>31</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/all-listing">
                        Spa and Facial - <span>10</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/all-listing">
                        Real Estate - <span>23</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/all-listing">
                        Sports - <span>05</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/all-listing">
                        Education - <span>02</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/all-listing">
                        Electricals - <span>05</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/all-listing">
                        Automobiles - <span>06</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/all-listing">
                        Transportation - <span>02</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/all-listing">
                        Hospitals - <span>08</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/all-listing">
                        Hotels And Resorts - <span>09</span>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="dir-home-nav-bot">
                  <ul>
                    <li>
                      A few reasons you’ll love Online Business Directory{" "}
                      <span>Call us on: +919350751751</span>
                    </li>
                    <li>
                      <Link
                        href="/post-your-ads"
                        className="waves-effect waves-light btn-large"
                      >
                        <i className="material-icons">font_download</i> Advertise
                        with us
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/pricing-details"
                        className="waves-effect waves-light btn-large"
                      >
                        {" "}
                        <i className="material-icons">store</i> Add your business
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/*END MOBILE MENU*/}
          <div className="top-ser">
            <form name="filter_form" id="filter_form" className="filter_form">
              <ul>
                <li className="sr-sea">
                 
                  <input
                    type="text"
                    autoComplete="off"
                    id="top-select-search"
                    placeholder="Search for services and business..."
                  />
                 
                </li>
                <li className="sbtn">
                  <button
                    type="button"
                    className="btn btn-success"
                    id="top_filter_submit"
                  >
                    <i className="material-icons">&nbsp;</i>
                  </button>
                </li>
              </ul>
            </form>
          </div>
         <DbMenu session={session} setDashboardVisiblity={setDashboardVisiblity} dashboardvisiblity={dashboardvisiblity}  />
             <ul className={`bl ${session ? 'hidden':'block'}`} >
              <li>
                <Link href="https://bizbookdirectorytemplate.com/pricing-details">Add business</Link>
              </li>
              <li>
                <Link href="/login">Sign in</Link>
              </li>
              <li>
                <Link href="/register">Create an account</Link>
              </li>
            </ul>
          {/*MOBILE MENU*/}
          <MobileMenu session={session} setMobMenuVisibility={setMobMenuVisibility} isMenuVisible={isMenuVisible} isMobMenuVisible={isMobMenuVisible}/>
          {/*END MOBILE MENU*/}
        </div>
      </div>
    </div>
    </div>
    <style jsx>
  {`
  .hom-top {
    transition: all 0.5s ease;
    background: none;
    box-shadow: none;
}

.top-ser {
    display: none;
}

.dmact .top-ser {
    display: block;
}

.caro-home {
    margin-top: 90px;
    float: left;
    width: 100%;
}

.carousel-item:before {
    background: none;
}
  `}
</style>
<span className={`bg ${dashboardvisiblity?'act':''}`}>&nbsp;</span>

    </>
  )
}

export default Header
