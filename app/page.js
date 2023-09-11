'use client';
import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {  toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Slider from "react-slick";
import {account,databases} from "@/appwrite/appwrite"
import Header from '@/components/Header'
import Footer from '@/components/Footer';
import { useRouter,useSearchParams } from 'next/navigation';
import BottomMenu from '@/components/BottomMenu';
import Link from 'next/link'
import { useState, useEffect } from 'react';

const page = () => {
  const [location, setLocation] = useState({});
  const [loading, setLoading] = useState(true);
  
  const router = useRouter();

  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  const category = {
    "data":[
      {
      "name":"Spa and Facial", "title":"Show All (1020)","img":"/services/21.jpg"
      },
      {
        "name":"Hospitals", "title":"Show All (1020)","img":"/services/30.jpg"
      },
        {
          "name":"Transportation", "title":"Show All (970)","img":"/services/1.jpg"
      },
      {
        "name":"Automobile", "title":"Show All (1020)","img":"/services/21.jpg","img":"/services/4.jpg"
       },
        {
          "name":"Electricals", "title":"Show All (1020)","img":"/services/8.jpg"
      },
      {
            "name":"Education", "title":"Show All (1020)","img":"/services/7.jpeg"
      },
      {
              "name":"Pet & Animals", "title":"Show All (1020)","img":"/services/17.jpeg"
      },
      {
        "name":"Real Estate", "title":"Show All (1020)","img":"/services/29.jpeg"
      },
  ]
  };
  
  const searchParams = useSearchParams()
  const userId = searchParams.get("userId");
  const secret = searchParams.get("secret");
  console.log("search params value",userId,secret);
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        fetch(
          `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
        )
          .then((response) => response.json())
          .then((data) => {
            setLocation({
              city: data.city,
              country: data.countryName,
            });
            setLoading(false);
          });
      });
    } else {
      setLocation({
        city: "Unknown",
        country: "Unknown",
      });
      setLoading(false);
    }
    if (typeof window !== 'undefined' && userId) {
      const promise = account.updateVerification(userId, secret);
      promise
        .then(function(response) {
          toast.success("User is verified!");
          console.log("Mail confirmed successfully");
          const update = databases.updateDocument('64faed31a7aff8087750', '64fc60052476f26d9afc', userId,{
            emailVerification:true,
          });
          console.log(update);
        })
        .catch(function(error) {
          toast.error("Verification failed");
          console.log("There is an error", error);
        });
    }
  }, [userId, secret]);
  
  // const urlParams = new URLSearchParams(window.location.search);
 

  
  return (
    <>
   
    <section>
      <div className="str">
    <div className="hom-head animation-bg" >
     <Header/>  
    <div className="container">
    <div className="row">
    <div className="ban-tit">
      <h1>
        <b>
          Connect with the right
          <br />
          Service Experts
        </b>{" "}
        Restaurants, cafe&apos;s, and bars in {location?.city}, {location?.country}{" "}
      </h1>
    </div>
    <div className="ban-search">
      <form name="filter_form" id="filter_form" className="filter_form">
        <ul>
          <li className="sr-cit">
            <input
              type="text"
              id="select-city"
              name="select-city"
              className="autocomplete"
              placeholder="City"
            />
          </li>
          <li className="sr-sea">
            {/*<input type="text" id="select-search" className="autocomplete"
                                         placeholder="">*/}
            <input
              type="text"
              autoComplete="off"
              id="select-search"
              placeholder="Search for services and business..."
              className="search-field"
            />
            <ul id="tser-res" className="tser-res tser-res1">
              <li>
                <div>
                  <h4>The Royal Spa Center For Womens</h4>
                  <span>No:2, 4th Avenue, Newyork, USA, Near to Airport</span>
                  <Link href="/all-listing" />
                </div>
              </li>
              <li>
                <div>
                  <h4>Real estate</h4>
                  <span>Chennai, India</span>
                  <Link href="/all-listing" />
                </div>
              </li>
              <li>
                <div>
                  <h4>Education</h4>
                  <span>
                    Schools, university, colleges, online classes, tution
                    centers, distance education..
                  </span>
                  <Link href="/all-listing" />
                </div>
              </li>
              <li>
                <div>
                  <h4>Hotel and resort booking</h4>
                  <span>
                    hotel booking online, hotel reservation, holiday room
                    booking
                  </span>
                  <Link href="/all-listing" />
                </div>
              </li>
              <li>
                <div>
                  <h4>Import and export</h4>
                  <span>Import and export to other countrys with low cost</span>
                  <Link href="/all-listing" />
                </div>
              </li>
              <li>
                <div>
                  <h4>Properties in Illunois</h4>
                  <span>Villas, Plots, House rent and buy</span>
                  <Link href="/all-listing" />
                </div>
              </li>
              <li>
                <div>
                  <h4>Schools in Adyar</h4>
                  <span>schools, adyar, education, </span>
                  <Link href="/all-listing" />
                </div>
              </li>
              <li>
                <div>
                  <h4>Laptop services near you</h4>
                  <span>laptop services, computer services</span>
                  <Link href="/all-listing" />
                </div>
              </li>
              <li>
                <div>
                  <h4>Hospital and medical services near you</h4>
                  <span>Hospital and medical services near you</span>
                  <Link href="/all-listing" />
                </div>
              </li>
            </ul>
          </li>
          <li className="sr-btn">
            <input
              type="submit"
              id="filter_submit"
              name="filter_submit"
              value="Search"
              className="filter_submit"
            />
          </li>
        </ul>
      </form>
    </div>
    <div className="ban-short-links ani">
  <ul>
    <li>
      <div>
        <img src="/icon/shop.png" alt="" loading="lazy" />
        <h4>All Services</h4>
        <a
          href="/all-category"
          className="fclick"
        />
      </div>
    </li>
    <li>
      <div>
        <img src="/icon/expert.png" alt="" loading="lazy" />
        <h4>Experts</h4>
        <a
          href="/service-experts"
          className="fclick"
        />
      </div>
    </li>
    <li>
      <div>
        <img src="/icon/employee.png" alt="" loading="lazy" />
        <h4>Jobs</h4>
        <a
          href="/jobs"
          className="fclick"
        />
      </div>
    </li>
    <li>
      <div>
        <img
          src="/places/icons/hot-air-balloon.png"
          alt=""
          loading="lazy"
        />
        <h4>Travel</h4>
        <a
          href="/places"
          className="fclick"
        />
      </div>
    </li>
    <li>
      <div>
        <img src="/icon/news.png" alt="" loading="lazy" />
        <h4>News</h4>
        <a
          href="/news"
          className="fclick"
        />
      </div>
    </li>
    <li>
      <div>
        <img src="/icon/calendar.png" alt="" loading="lazy" />
        <h4>Events</h4>
        <a
          href="/events"
          className="fclick"
        />
      </div>
    </li>
    <li>
      <div>
        <img src="/icon/cart.png" alt="" loading="lazy" />
        <h4>Products</h4>
        <a
          href="/all-products"
          className="fclick"
        />
      </div>
    </li>
    <li>
      <div>
        <img src="/icon/coupons.png" alt="" loading="lazy" />
        <h4>Coupons</h4>
        <a
          href="/coupons"
          className="fclick"
        />
      </div>
    </li>
    <li>
      <div>
        <img src="/icon/blog1.png" alt="" loading="lazy" />
        <h4>Blogs</h4>
        <a
          href="/blog-posts"
          className="fclick"
        />
      </div>
    </li>
  </ul>
</div>

    <div className="ban-ql">
      <ul>
        <li>
          <div>
            <img src="/icon/1.png" alt="" />
            <h4>24 Million Business</h4>
            <p>
              Choose from a collection of handpicked luxury villas &amp;
              apartments
            </p>{" "}
            <Link href="/#">Explore Now</Link>
          </div>
        </li>
        <li>
          <div>
            <img src="/icon/2.png" alt="" />
            <h4>1,200 Services Offered</h4>
            <p>
              Choose from a collection of handpicked luxury villas &amp;
              apartments
            </p>{" "}
            <Link href="/#">Explore Now</Link>
          </div>
        </li>
        <li>
          <div>
            <img src="/icon/3.png" alt="" />
            <h4>05 Million Visitors</h4>
            <p>
              Choose from a collection of handpicked luxury villas &amp;
              apartments
            </p>{" "}
            <Link href="/#">Explore Now</Link>
          </div>
        </li>
        <li>
          <div>
            <img src="/icon/4.png" alt="" />
            <h4>2k+ Premium Users</h4>
            <p>
              Choose from a collection of handpicked luxury villas &amp;
              apartments
            </p>{" "}
            <Link href="/#">Explore Now</Link>
          </div>
        </li>
      </ul>
    </div>
  </div>
    </div>
    </div>
    </div>
    </section>
    <section>
      <div className="str">
        <div className="container">
        <div className="products land-pack container mx-auto my-10 px-4 xl:px-0">
				<div className="home-tit">
						<h2><span>Popular Services</span> near you</h2>
						<p>lacinia viverra lectus. Fusce imperdiet ullamcorper metus eu fringilla.</p>
					</div>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4">

        {category.data.map((item)=>{
       return <div key={item.key} className="product overflow-hidden  bg-white mb-2 rounded-md">

<Link href='/' className='no-underline hover:no-underline'>
   <div className='land-pack-grid-img transform transition duration-500 hover:scale-105'>
    <img
      className=" cursor-pointer object-cover bg-gray-100"
      src={item.img}
      alt="service"
    />
    </div>
    <div className="land-pack-grid-text">
			<h4>{item.name} <span className="dir-ho-cat">{item.title}</span></h4>
		</div>
</Link>


        </div>})}
				</div>
        <Link href="/all-category" className="more">View all services</Link>
			  </div>
        
        </div>
      </div>
    </section>

    <section>
  <div className="str">
    <div className="container">
      <div className="row">
        <div className="home-tit">
          <h2>
            <span>Explore City</span> Category{" "}
          </h2>
          <p>
            lacinia viverra lectus. Fusce imperdiet ullamcorper metus eu
            fringilla.
          </p>
        </div>
        <div className="home-city">
          <ul>
            <li>
              <div className="hcity">
                <div>
                  <img
                    src="/services/10.jpg"
                    alt=""
                  />
                </div>
                <div>
                  <img src="/services/1.jpg" alt="" />
                  <h4>Hotels And Resorts</h4>
                  <div className="list-rat-all">
                    {" "}
                    <b>3.0</b>
                    <label className="rat">
                      {" "}
                      <i className="material-icons">star</i>
                      <i className="material-icons">star</i>
                      <i className="material-icons">star</i>
                      <i className="material-icons ratstar">star</i>
                      <i className="material-icons ratstar">star</i>
                    </label>{" "}
                    <span>2 Reviews</span>
                  </div>
                  <p>09 Listings</p>
                </div>{" "}
                <Link href="/all-listing" className="fclick">
                  &nbsp;
                </Link>
              </div>
            </li>
            <li>
              <div className="hcity">
                <div>
                  <img src="/services/9.png" alt="" />
                </div>
                <div>
                  <img src="/services/20356s7.jpeg" alt="" />
                  <h4>Automobiles</h4>
                  <div className="list-rat-all">
                    {" "}
                    <b>3.0</b>
                    <label className="rat">
                      {" "}
                      <i className="material-icons">star</i>
                      <i className="material-icons">star</i>
                      <i className="material-icons">star</i>
                      <i className="material-icons ratstar">star</i>
                      <i className="material-icons ratstar">star</i>
                    </label>{" "}
                    <span>2 Reviews</span>
                  </div>
                  <p>06 Listings</p>
                </div>
                <Link href="/all-listing" className="fclick">
                  &nbsp;
                </Link>
              </div>
            </li>
            <li>
              <div className="hcity">
                <div>
                  <img src="/services/19.jpg" alt="" />
                </div>
                <div>
                  <img src="/services/20356s7.jpeg" alt="" />
                  <h4>Wedding halls</h4>
                  <div className="list-rat-all">
                    {" "}
                    <b>5.0</b>
                    <label className="rat">
                      {" "}
                      <i className="material-icons">star</i>
                      <i className="material-icons">star</i>
                      <i className="material-icons">star</i>
                      <i className="material-icons">star</i>
                      <i className="material-icons">star</i>
                    </label>{" "}
                    <span>1 Reviews</span>
                  </div>
                  <p>03 Listings</p>
                </div>{" "}
                <Link href="/all-listing" className="fclick">
                  &nbsp;
                </Link>
              </div>
            </li>
            <li>
              <div className="hcity">
                <div>
                  <img src="/services/8.jpg" alt="" />
                </div>
                <div>
                  <img src="/services/445234.jpg" alt="" />
                  <h4>Digital products</h4>
                  <div className="list-rat-all">
                    {" "}
                    <b>3.3</b>
                    <label className="rat">
                      {" "}
                      <i className="material-icons">star</i>
                      <i className="material-icons">star</i>
                      <i className="material-icons">star</i>
                      <i className="material-icons">star</i>
                      <i className="material-icons ratstar">star</i>
                    </label>{" "}
                    <span>3 Reviews</span>
                  </div>
                  <p>23 Listings</p>
                </div>{" "}
                <Link href="/all-listing" className="fclick">
                  &nbsp;
                </Link>
              </div>
            </li>
            <li>
              <div className="hcity">
                <div>
                  <img src="/services/2.jpeg" alt="" />
                </div>
                <div>
                  <img src="/services/20356s7.jpeg" alt="" />
                  <h4>Real Estate</h4>
                  <div className="list-rat-all">
                    {" "}
                    <b>3.3</b>
                    <label className="rat">
                      {" "}
                      <i className="material-icons">star</i>
                      <i className="material-icons">star</i>
                      <i className="material-icons">star</i>
                      <i className="material-icons">star</i>
                      <i className="material-icons ratstar">star</i>
                    </label>{" "}
                    <span>3 Reviews</span>
                  </div>
                  <p>23 Listings</p>
                </div>{" "}
                <Link href="/all-listing" className="fclick">
                  &nbsp;
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
    </section>
    <section>
  <div className="hom-mpop-ser">
    <div className="container">
      <div className="hom-mpop-main">
        <div className="home-tit">
          <h2>
            <span>Featured Services</span> in your city{" "}
          </h2>
          <p>
            lacinia viverra lectus. Fusce imperdiet ullamcorper metus eu
            fringilla.
          </p>
        </div>
        <div className="col-md-6">
          <div>
            {/*POPULAR LISTINGS*/}
            <div className="hom-mpop">
              {/*POPULAR LISTINGS IMAGE*/}
              <div className="col-md-3">
                <img src="/listings/1.jpg" alt="" />
              </div>
              {/*POPULAR LISTINGS: CONTENT*/}
              <div className="col-md-9">
                <h3>Titan Wedding Hall</h3>
                <h4>Wedding halls</h4>
                <p>Titan wedding happ, North street, No 2, Newyork, USA</p>{" "}
                <span className="rat-sh">5.0</span>
              </div>{" "}
              <Link href="/listing-details">&nbsp;</Link>
            </div>
            {/*POPULAR LISTINGS*/}
            <div className="hom-mpop">
              {/*POPULAR LISTINGS IMAGE*/}
              <div className="col-md-3">
                <img src="/listings/2.jpg" alt="" />
              </div>
              {/*POPULAR LISTINGS: CONTENT*/}
              <div className="col-md-9">
                <h3>Gill Automobiles and Services</h3>
                <h4>Automobiles</h4>
                <p>Titan wedding happ, North street, No 2, Newyork, USA</p>
              </div>
            </div>
            {/*POPULAR LISTINGS*/}
            <div className="hom-mpop">
              {/*POPULAR LISTINGS IMAGE*/}
              <div className="col-md-3">
                <img src="/listings/3.jpeg" alt="" />
              </div>
              {/*POPULAR LISTINGS: CONTENT*/}
              <div className="col-md-9">
                <h3>Rolexo Villas in California</h3>
                <h4>Real Estate</h4>
                <p>
                  28800 Orchard Lake Road, Suite 180 Farmington Hills, U.S.A.
                </p>{" "}
                <span className="rat-sh">5.0</span>
              </div>
              <Link href="/listing-details">&nbsp;</Link>
            </div>
            {/*POPULAR LISTINGS*/}
            <div className="hom-mpop">
              {/*POPULAR LISTINGS IMAGE*/}
              <div className="col-md-3">
                <img src="/listings/4.jpg" alt="" />
              </div>
              {/*POPULAR LISTINGS: CONTENT*/}
              <div className="col-md-9">
                <h3>The Spa at Mandarin Oriental</h3>
                <h4>Hospitals</h4>
                <p>No:2, 4th Avenue, Newyork, USA, Near to Airport</p>{" "}
                <span className="rat-sh">4.0</span>
              </div>
              <Link href="/listing-details">&nbsp;</Link>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div>
            {/*POPULAR LISTINGS*/}
            <div className="hom-mpop">
              {/*POPULAR LISTINGS IMAGE*/}
              <div className="col-md-3">
                <img src="/listings/5.jpeg" alt="" />
              </div>
              {/*POPULAR LISTINGS: CONTENT*/}
              <div className="col-md-9">
                <h3>IPM Business Software</h3>
                <h4>Digital Products</h4>
                <p>No:2, 4th Avenue, Newyork, USA, Near to Airport</p>
              </div>
              <Link href="/listing-details">&nbsp;</Link>
            </div>
            {/*POPULAR LISTINGS*/}
            <div className="hom-mpop">
              {/*POPULAR LISTINGS IMAGE*/}
              <div className="col-md-3">
                <img src="/listings/6.jpg" alt="" />
              </div>
              {/*POPULAR LISTINGS: CONTENT*/}
              <div className="col-md-9">
                <h3>Rachel Taj Hotels</h3>
                <h4>Hotels And Resorts</h4>
                <p>No:2, 4th Avenue, Newyork, USA, Near to Airport</p>{" "}
                <span className="rat-sh">3.0</span>
              </div>
              <Link href="/listing-details">&nbsp;</Link>
            </div>
            {/*POPULAR LISTINGS*/}
            <div className="hom-mpop">
              {/*POPULAR LISTINGS IMAGE*/}
              <div className="col-md-3">
                <img src="/listings/7.jpg" alt="" />
              </div>
              {/*POPULAR LISTINGS: CONTENT*/}
              <div className="col-md-9">
                <h3>Joseph Multispeciality Hospital</h3>
                <h4>Hospitals</h4>
                <p>No:2, 4th Avenue, Newyork, USA, Near to Airport</p>
              </div>{" "}
              <Link href="/listing-details">&nbsp;</Link>
            </div>
            {/*POPULAR LISTINGS*/}
            <div className="hom-mpop">
              {/*POPULAR LISTINGS IMAGE*/}
              <div className="col-md-3">
                <img src="/listings/8.jpeg" alt="" />
              </div>
              {/*POPULAR LISTINGS: CONTENT*/}
              <div className="col-md-9">
                <h3>Green Healthcare Hospital</h3>
                <h4>Hospitals</h4>
                <p>No:2, 4th Avenue, Newyork, USA, Near to Airport</p>{" "}
                <span className="rat-sh">3.0</span>
              </div>{" "}
              <Link href="/listing-details">&nbsp;</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="hlead-coll">
        <div className="col-md-6">
          <div className="hom-cre-acc-left">
            <h3>
              What service do you need? <span>BizBook Directory</span>
            </h3>
            <p>
              Tell us more about your requirements so that we can connect you to
              the right service provider.
            </p>
            <ul>
              <li>
                <img src="/icon/blog.png" alt="" />
                <div>
                  <h5>Tell us more about your requirements</h5>
                  <p>
                    HI Imagine you have made your presence online through a
                    local online directory, but your competitors have..
                  </p>
                </div>
              </li>
              <li>
                <img src="/icon/shield.png" alt="" />
                <div>
                  <h5>We connect with right service provider</h5>
                  <p>
                    Advertising your business to area specific has many
                    advantages. For local businessmen, it is an opportunity..
                  </p>
                </div>
              </li>
              <li>
                <img src="/icon/general.png" alt="" />
                <div>
                  <h5>Happy with our service</h5>
                  <p>
                    Your local business too needs brand management and image
                    making. As you know the local market..
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-md-6">
          <div className="hom-col-req">
            <div className="log-bor">&nbsp;</div>{" "}
            <span className="udb-inst">Fill the form</span>
            <h4>What you looking for?</h4>
            <div
              id="home_enq_success"
              className="log"
              style={{ display: "none" }}
            >
              <p>Your Enquiry Is Submitted Successfully!!!</p>
            </div>
            <div id="home_enq_fail" className="log" style={{ display: "none" }}>
              <p>Something Went Wrong!!!</p>
            </div>
            <div id="home_enq_same" className="log" style={{ display: "none" }}>
              <p>You cannot make enquiry on your own listing</p>
            </div>
            <form
              name="home_enquiry_form"
              id="home_enquiry_form"
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
                id="home_enquiry_submit"
                name="home_enquiry_submit"
                className="btn btn-primary"
              >
                Submit Requirements
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  </section>
  
  <>
  <section>
    <div className="str str-full">
      <div className="container">
        <div className="row">
          <div className="home-tit">
            <h2>
              <span>Top Service Provider</span> in city{" "}
            </h2>
            <p>
              lacinia viverra lectus. Fusce imperdiet ullamcorper metus eu
              fringilla.
            </p>
          </div>
          <div className="ho-popu-bod">
            {/*Top Branding Hotels*/}
            <div className="col-md-4">
              <div className="hot-page2-hom-pre-head">
                <h4>
                  Top Branding <span>Real Estate</span>
                </h4>
              </div>
              <div className="hot-page2-hom-pre">
                <ul>
                  {/*LISTINGS*/}
                  <li>
                    <div className="hot-page2-hom-pre-1">
                      <img src="/services/1.jpg" alt="" />
                    </div>
                    <div className="hot-page2-hom-pre-2">
                      <h5>Royal Real Estates</h5>
                      <span>
                        No:2, 4th Avenue, Newyork, USA, Near to Airport
                      </span>
                    </div>
                    <Link href="/listing-details" className="fclick" />
                  </li>
                  {/*LISTINGS*/}
                  {/*LISTINGS*/}
                  <li>
                    <div className="hot-page2-hom-pre-1">
                      <img src="/services/2.jpeg" alt="" />
                    </div>
                    <div className="hot-page2-hom-pre-2">
                      <h5>Smith Luxury Villas</h5>
                      <span>
                        No:2, 4th Avenue, Newyork, USA, Near to Airport
                      </span>
                    </div>
                    <div className="hot-page2-hom-pre-3">
                      {" "}
                      <span>2.0</span>
                    </div>
                    <Link href="/listing-details" className="fclick" />
                  </li>
                  {/*LISTINGS*/}
                  {/*LISTINGS*/}
                  <li>
                    <div className="hot-page2-hom-pre-1">
                      <img src="/services/3.jpg" alt="" />
                    </div>
                    <div className="hot-page2-hom-pre-2">
                      <h5>Appers Premium Independent Houses</h5>
                      <span>
                        No:2, 4th Avenue, Newyork, USA, Near to Airport
                      </span>
                    </div>
                    <div className="hot-page2-hom-pre-3">
                      {" "}
                      <span>3.3</span>
                    </div>
                    <Link href="/listing-details" className="fclick" />
                  </li>
                  {/*LISTINGS*/}
                  {/*LISTINGS*/}
                  <li>
                    <div className="hot-page2-hom-pre-1">
                      <img src="/services/4.jpg" alt="" />
                    </div>
                    <div className="hot-page2-hom-pre-2">
                      <h5>Asian Real Estate</h5>
                      <span>
                        No:2, 4th Avenue, Newyork, USA, Near to Airport
                      </span>
                    </div>
                    <Link href="/listing-details" className="fclick" />
                  </li>
                  {/*LISTINGS*/}
                  {/*LISTINGS*/}
                  <li>
                    <div className="hot-page2-hom-pre-1">
                      <img src="/services/5.jpeg" alt="" />
                    </div>
                    <div className="hot-page2-hom-pre-2">
                      <h5>jj</h5>
                      <span>
                        No:2, 4th Avenue, Newyork, USA, Near to Airport
                      </span>
                    </div>
                    <Link href="/listing-details" className="fclick" />
                  </li>
                  {/*LISTINGS*/}
                </ul>
              </div>
            </div>
            <div className="col-md-4">
              <div className="hot-page2-hom-pre-head">
                <h4>
                  Top Branding <span>Digital Products</span>
                </h4>
              </div>
              <div className="hot-page2-hom-pre">
                <ul>
                  {/*LISTINGS*/}
                  <li>
                    <div className="hot-page2-hom-pre-1">
                      <img src="/services/6.jpeg" alt="" />
                    </div>
                    <div className="hot-page2-hom-pre-2">
                      <h5>BizBookBusiness Directory Template</h5>
                      <span>
                        No:2, 4th Avenue, Newyork, USA, Near to Airport
                      </span>
                    </div>
                    <Link href="/listing-details" className="fclick" />
                  </li>
                  {/*LISTINGS*/}
                  {/*LISTINGS*/}
                  <li>
                    <div className="hot-page2-hom-pre-1">
                      <img src="/services/7.jpeg" alt="" />
                    </div>
                    <div className="hot-page2-hom-pre-2">
                      <h5>Sony Music</h5>
                      <span>
                        No:2, 4th Avenue, Newyork, USA, Near to Airport
                      </span>
                    </div>
                    <Link href="/listing-details" className="fclick" />
                  </li>
                  {/*LISTINGS*/}
                  {/*LISTINGS*/}
                  <li>
                    <div className="hot-page2-hom-pre-1">
                      <img src="/services/8.jpg" alt="" />
                    </div>
                    <div className="hot-page2-hom-pre-2">
                      <h5>IPM Business Software</h5>
                      <span>
                        No:2, 4th Avenue, Newyork, USA, Near to Airport
                      </span>
                    </div>
                    <Link href="/listing-details" className="fclick" />
                  </li>
                  {/*LISTINGS*/}
                  {/*LISTINGS*/}
                  <li>
                    <div className="hot-page2-hom-pre-1">
                      <img src="/services/9.png" alt="" />
                    </div>
                    <div className="hot-page2-hom-pre-2">
                      <h5>Tour and Travel html Template</h5>
                      <span>
                        No:2, 4th Avenue, Newyork, USA, Near to Airport
                      </span>
                    </div>
                    <div className="hot-page2-hom-pre-3">
                      {" "}
                      <span>3.7</span>
                    </div>
                    <Link href="/listing-details" className="fclick" />
                  </li>
                  {/*LISTINGS*/}
                  {/*LISTINGS*/}
                  <li>
                    <div className="hot-page2-hom-pre-1">
                      <img src="/services/10.jpg" alt="" />
                    </div>
                    <div className="hot-page2-hom-pre-2">
                      <h5>Smart Digital Products</h5>
                      <span>
                        No:2, 4th Avenue, Newyork, USA, Near to Airport
                      </span>
                    </div>
                    <div className="hot-page2-hom-pre-3">
                      {" "}
                      <span>3.2</span>
                    </div>
                    <Link href="/listing-details" className="fclick" />
                  </li>
                  {/*LISTINGS*/}
                </ul>
              </div>
            </div>
            <div className="col-md-4">
              <div className="hot-page2-hom-pre-head">
                <h4>
                  Top Branding <span>Hospitals</span>
                </h4>
              </div>
              <div className="hot-page2-hom-pre">
                <ul>
                  {/*LISTINGS*/}
                  <li>
                    <div className="hot-page2-hom-pre-1">
                      <img src="/services/11.jpg" alt="" />
                    </div>
                    <div className="hot-page2-hom-pre-2">
                      <h5>William Chil care Hospital</h5>
                      <span>
                        No:2, 4th Avenue, Newyork, USA, Near to Airport
                      </span>
                    </div>
                    <Link href="/listing-details" className="fclick" />
                  </li>
                  {/*LISTINGS*/}
                  {/*LISTINGS*/}
                  <li>
                    <div className="hot-page2-hom-pre-1">
                      <img src="/services/12.jpeg" alt="" />
                    </div>
                    <div className="hot-page2-hom-pre-2">
                      <h5>Urban Community Hospital</h5>
                      <span>
                        No:2, 4th Avenue, Newyork, USA, Near to Airport
                      </span>
                    </div>
                    <div className="hot-page2-hom-pre-3">
                      {" "}
                      <span>4.0</span>
                    </div>
                    <Link href="/listing-details" className="fclick" />
                  </li>
                  {/*LISTINGS*/}
                  {/*LISTINGS*/}
                  <li>
                    <div className="hot-page2-hom-pre-1">
                      <img src="/services/13.jpg" alt="" />
                    </div>
                    <div className="hot-page2-hom-pre-2">
                      <h5>Joseph Multispeciality Hospital</h5>
                      <span>
                        No:2, 4th Avenue, Newyork, USA, Near to Airport
                      </span>
                    </div>
                    <Link href="/listing-details" className="fclick" />
                  </li>
                  {/*LISTINGS*/}
                  {/*LISTINGS*/}
                  <li>
                    <div className="hot-page2-hom-pre-1">
                      <img src="/services/14.jpg" alt="" />
                    </div>
                    <div className="hot-page2-hom-pre-2">
                      <h5>Apolloo Hospitals UAE</h5>
                      <span>
                        No:2, 4th Avenue, Newyork, USA, Near to Airport
                      </span>
                    </div>
                    <div className="hot-page2-hom-pre-3">
                      {" "}
                      <span>4.0</span>
                    </div>
                    <Link href="/listing-details" className="fclick" />
                  </li>
                  {/*LISTINGS*/}
                  {/*LISTINGS*/}
                  <li>
                    <div className="hot-page2-hom-pre-1">
                      <img src="/services/16.jpg" alt="" />
                    </div>
                    <div className="hot-page2-hom-pre-2">
                      <h5>Green Healthcare Hospital</h5>
                      <span>
                        No:2, 4th Avenue, Newyork, USA, Near to Airport
                      </span>
                    </div>
                    <div className="hot-page2-hom-pre-3">
                      {" "}
                      <span>3.0</span>
                    </div>
                    <Link href="/listing-details" className="fclick" />
                  </li>
                  {/*LISTINGS*/}
                </ul>
              </div>
            </div>
            {/*End Top Branding Hotels*/}
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* END */}
  <section>
    <div
      id="demo"
      className="carousel slide cate-sli caro-home"
      data-ride="carousel"
    >
      <div className="carousel-inner">
      <Slider {...settings}>
        <div className="carousel-item active">
          <img src="/slider/1.jpg" alt="Los Angeles" />
          <Link
            href="//demo"
            target="_blank"
          />
        </div>
        <div className="carousel-item ">
          <img src="/slider/2.jpg" alt="Los Angeles" />
          <Link
            href="//demo"
            target="_blank"
          />
        </div>
        </Slider>
      </div>
     
    </div>
  </section>
  {/* START */}
  <section>
    <div className="str count">
      <div className="container">
        <div className="row">
          <div className="home-tit">
            <h2>
              <span>Feature Events</span> in city{" "}
            </h2>
            <p>
              lacinia viverra lectus. Fusce imperdiet ullamcorper metus eu
              fringilla.
            </p>
          </div>
          <div className="hom-event">
            <div className="hom-eve-com hom-eve-lhs">
              <div className="hom-eve-lhs-1 col-md-4">
                <div className="eve-box">
                  <div>
                    <Link href="/event-details">
                      <img src="/events/1.png" alt="" />
                      <span>
                        <b>Dec 31</b>
                      </span>
                    </Link>
                  </div>
                  <div>
                    <h4>
                      <Link href="/event-details">Online Marketers Meet-Up</Link>
                    </h4>
                    <span className="addr">London, UK</span>
                    <span className="pho">6622442200</span>
                  </div>
                  <div>
                    <div className="auth">
                      <img src="/user/1.png" alt="" /> <b>Hosted by</b>
                      <br />
                      <h4>Directory Finder</h4>
                      <Link
                        target="_blank"
                        href="/profile"
                        className="fclick"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="hom-eve-lhs-1 col-md-4">
                <div className="eve-box">
                  <div>
                    <Link href="/event-details">
                      <img src="/events/2.jpg" alt="" />
                      <span>
                        <b>Dec 31</b>
                      </span>
                    </Link>
                  </div>
                  <div>
                    <h4>
                      <Link href="/event-details">New year celebration</Link>
                    </h4>
                    <span className="addr">London, UK</span>
                    <span className="pho">6622442200</span>
                  </div>
                  <div>
                    <div className="auth">
                      <img src="/user/2.jpeg" alt="" /> <b>Hosted by</b>
                      <br />
                      <h4>Chris moris</h4>
                      <Link
                        target="_blank"
                        href="/profile"
                        className="fclick"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="hom-eve-lhs-2 col-md-4">
                <ul>
                  <li>
                    <div className="eve-box-list">
                      <img src="/events/3.jpeg" alt="" />
                      <h4 title="Lunar New Year 2020">Lunar New Year 2020</h4>
                      <p>
                        Celebrate as the sights, sounds and aromas of A
                      </p>{" "}
                      <span>
                        Jan <b> 07</b>
                      </span>
                      <Link href="/event-details" className="fclick" />
                    </div>
                  </li>
                  <li>
                    <div className="eve-box-list">
                      <img src="/events/4.jpg" alt="" />
                      <h4 title="Car Fest 2020">Car Fest 2020</h4>
                      <p>
                        Celebrate as the sights, sounds and aromas of A
                      </p>{" "}
                      <span>
                        Jan <b> 10</b>
                      </span>
                      <Link href="/event-details" className="fclick" />
                    </div>
                  </li>
                  <li>
                    <div className="eve-box-list">
                      <img src="/events/5.jpg" alt="" />
                      <h4 title="Poway Winter Festival">
                        Poway Winter Festival
                      </h4>
                      <p>Celebrate as the sights, sounds and aromas of A</p>{" "}
                      <span>
                        Jan <b> 18</b>
                      </span>
                      <Link href="/event-details" className="fclick" />
                    </div>
                  </li>
                  <li>
                    <div className="eve-box-list">
                      <img src="/events/6.jpg" alt="" />
                      <h4 title="Toyota Cars 20% Offer">
                        Toyota Cars 20% Offer
                      </h4>
                      <p>Celebrate as the sights, sounds and aromas of A</p>{" "}
                      <span>
                        Mar <b> 18</b>
                      </span>
                      <Link href="/event-details" className="fclick" />
                    </div>
                  </li>
                  <li>
                    <div className="eve-box-list">
                      <img src="/events/7.jpg" alt="" />
                      <h4 title="Electrical Energy Saving Methods">
                        Electrical Energy Saving Methods
                      </h4>
                      <p>Celebrate as the sights, sounds and aromas of A</p>{" "}
                      <span>
                        Jan <b> 31</b>
                      </span>
                      <Link href="/event-details" className="fclick" />
                    </div>
                  </li>
                  <li>
                    <div className="eve-box-list">
                      <img src="/events/8.jpeg" alt="" />
                      <h4 title="Food eating challenge">
                        Food eating challenge
                      </h4>
                      <p>Celebrate as the sights, sounds and aromas of A</p>{" "}
                      <span>
                        Jan <b> 18</b>
                      </span>
                      <Link href="/event-details" className="fclick" />
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="how-wrks">
            <div className="home-tit">
              <h2>
                <span>How It Works</span>
              </h2>
              <p>
                Explore some of the best tips from around the world from our
                <br />
                partners and friends.lacinia viverra lectus.
              </p>
            </div>
            <div className="how-wrks-inn">
              <ul>
                <li>
                  <div>
                    {" "}
                    <span>1</span>
                    <img src="/icon/how1.png" alt="" />
                    <h4>Create an account</h4>
                    <p>
                      Fusce imperdiet ullamcorper metus eu fringilla. from
                      around the world from our partners and friends.
                    </p>
                  </div>
                </li>
                <li>
                  <div>
                    {" "}
                    <span>2</span>
                    <img src="/icon/how2.png" alt="" />
                    <h4>Add your business</h4>
                    <p>
                      Fusce imperdiet ullamcorper metus eu fringilla. from
                      around the world from our partners and friends.
                    </p>
                  </div>
                </li>
                <li>
                  <div>
                    {" "}
                    <span>3</span>
                    <img src="/icon/how3.png" alt="" />
                    <h4>Get more leads</h4>
                    <p>
                      Fusce imperdiet ullamcorper metus eu fringilla. from
                      around the world from our partners and friends.
                    </p>
                  </div>
                </li>
                <li>
                  <div>
                    {" "}
                    <span>4</span>
                    <img src="/icon/how4.png" alt="" />
                    <h4>Archive goles</h4>
                    <p>
                      Fusce imperdiet ullamcorper metus eu fringilla. from
                      around the world from our partners and friends.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          {/*<div className="home-tit">
              <h2><span></span> </h2>
              <p></p>
          </div>
          <div className="inte">
              <ul>
                  <li>
                      <div className="hom-oth">
                          <div>
                              <img src="/listings/hot5.jpg" alt="">
                          </div>
                          <div>
                              <h4>Events</h4>
                              <span>Email configuration</span>
                          </div>
                          <Link href="/events" className="fclick"></Link>
                      </div>
                  </li>
                  <li>
                      <div className="hom-oth">
                          <div>
                              <img src="/listings/re1.jpg" alt="">
                          </div>
                          <div>
                              <h4>Blog posts</h4>
                              <span>Email configuration</span>
                          </div>
                          <Link href="/blog-posts" className="fclick"></Link>
                      </div>
                  </li>
                  <li>
                      <div className="hom-oth">
                          <div>
                              <img src="/listings/spa3.jpg" alt="">
                          </div>
                          <div>
                              <h4>How it works</h4>
                              <span>Email configuration</span>
                          </div>
                          <Link href="/how-to" className="fclick"></Link>
                      </div>
                  </li>
                  <li>
                      <div className="hom-oth">
                          <div>
                              <img src="/listings/re5.jpg" alt="">
                          </div>
                          <div>
                              <h4>Pricing details</h4>
                              <span>Email configuration</span>
                          </div>
                          <Link href="/pricing-details" className="fclick"></Link>
                      </div>
                  </li>
              </ul>
          </div>*/}
          {/*<div className="country">
              <div className="country-inn">
                  <h4>                            <span className="cont2"></span>
                  </h4>
                                          <iframe src="" allowfullscreen=""></iframe>
              </div>
          </div>*/}
          <div className="mob-app">
            <div className="lhs">
              <img src="/mobile.png" alt="" />
            </div>
            <div className="rhs">
              <h2>
                Looking for the Best Service Provider? <span>Get the App!</span>
              </h2>
              <ul>
                <li>HOM-APP-TITFind nearby listings</li>
                <li>Easy service enquiry</li>
                <li>Listing reviews and ratings</li>
                <li>Manage your listing, enquiry and reviews</li>
              </ul>{" "}
              <span>
                We&apos;ll send you a link, to you below provided email id &amp; open
                it on your smart phone to download the app
              </span>
              <form>
                <ul>
                  <li>
                    <input
                      type="email"
                      placeholder="Enter email id"
                      required=""
                    />
                  </li>
                  <li>
                    <input type="submit" defaultValue="Get App Link" />
                  </li>
                </ul>
              </form>
              <Link href="/#">
                <img src="/android.png" alt="" />
              </Link>
              <Link href="/#">
                <img src="/apple.png" alt="" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* END */}
  {/* START */}
  <section>
    <div className="hom-ads">
      <div className="container">
        <div className="row">
          <div className="filt-com lhs-ads">
            <div className="ads-box">
              <Link href="/">
                {" "}
                <span>Ad</span>
                <img src="/ads/ads2.jpg" alt="" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* END */}
  {/* START */}
  <div className="ani-quo">
    <div className="ani-q1">
      <h4>What you looking for?</h4>
      <p>We connect you to service experts.</p> <span>Get experts</span>
    </div>
    <div className="ani-q2">
      <img src="/quote.png" alt="" />
    </div>
  </div>
  {/* END */}
  {/* START */}
  <span className="btn-ser-need-ani">Help &amp; Support</span>
  <div className="ani-quo-form">
    {" "}
    <i className="material-icons ani-req-clo">close</i>
    <div className="tit">
      <h3>
        What service do you need? <span>Bizdir will help you</span>
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
    
  {/* END */}
 <Footer/>
  {/* START */}
  

  <BottomMenu/>

</>

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
    margin-top: 24px;
    float: left;
    width: 100%;
}

.carousel-item:before {
    background: none;
}
.slick-next{
  right:50px!important;
}
.slick-prev{
  left:50px!important
}
  `}
</style>
    </>
  )
}

export default page
