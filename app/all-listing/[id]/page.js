"use client";
import React, { useRef, useState, useEffect } from "react";
import Header from "@/components/Header";
import { useRouter, usePathname } from "next/navigation";
import { CldImage } from "next-cloudinary";
import { CldUploadWidget } from "next-cloudinary";
import Footer from "@/components/Footer";
import { useSession } from "next-auth/react";
import { signIn } from "next-auth/react";
import { toast } from "react-toastify";
import { client } from "@/lib/apollo";
import { CREATE_CLAIM_REQUEST, CREATE_ENQUIRY } from "@/lib/mutation";
import { GETLISTING } from "@/lib/query";
import Link from "next/link";
import BottomMenu from "@/components/BottomMenu";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BusinessTimings from "./BusinessTimings";

const page = ({ params }) => {
  const { data: session, status, update } = useSession();
  const pathname = usePathname();
  const router = useRouter();
  const [formData, setFormData] = useState({
    listing_name: "",
    listing_id: "",
    user_id: session?.user.id,
    name: "",
    email: "",
    phone_number: "",
    listing_image: "",
    verification_image: "",
    listing_date: "",
    description: "",
  });
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const [activeSection, setActiveSection] = useState(null);
  const [claimModal, setClaimModal] = useState(false);
  const [loading, setLoading] = useState();
  const [listing, setListing] = useState({});
  const [user, setUser] = useState();

  const [enquiryFormData, setEnquiryFormData] = useState({
    enquirer_name: "",
    enquirer_email: "",
    enquirer_mobile: "",
    message: "",
  });

  const aboutRef = useRef(null);
  const serviceRef = useRef(null);
  const galleryRef = useRef(null);
  const offerRef = useRef(null);
  const mapRef = useRef(null);
  const reviewRef = useRef(null);

   console.log("address is ",listing)
  const handleEnquiryFormData = (e) => {
    console.log(e.target.name, e.target.value);
    setEnquiryFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleEnquirySubmit = async (e) => {
    e.preventDefault();

    const enquiryData = {
      ...enquiryFormData,
      listing: listing?._id,
      user_id: listing?.user._id,
      enquiry_type: "listing",
    };

    try {
      const { data, errors } = await client.mutate({
        mutation: CREATE_ENQUIRY,
        variables: { data: enquiryData },
      });

      console.log(data);

      if (errors || data.createEnquiry.code !== 201) {
        throw new Error("Something went wrong");
      }

      toast.success("Enquiry created successfully!!");

      setEnquiryFormData({
        enquirer_name: "",
        enquirer_email: "",
        enquirer_mobile: "",
        message: "",
      });
      console.log(data);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
    console.log(formData);
  };

  const validateFormData = (formData) => {
    const requiredFields = [
      "listing_name",
      "listing_id",
      "name",
      "email",
      "phone_number",
      "description",
      "verification_image",
    ];
    for (const field of requiredFields) {
      if (!formData[field] || formData[field].trim() === "") {
        return false;
      }
    }
    return true;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      if (!validateFormData(formData)) {
        toast.error("Please fill all required fields");
        return;
      }
      if (session?.user.id === listing?.user) {
        toast.error("You Already Claimed This listing?.");
        return;
      }
      const { data, errors } = await client.mutate({
        mutation: CREATE_CLAIM_REQUEST,
        variables: {
          data: { ...formData, user_id: session.user?.id },
        },
        context: {
          headers: {
            Authorization: `Bearer ${session.jwt}`,
          },
        },
      });

      if (errors || data.newClaimRequest.code !== 201) {
        toast.error(data.newClaimRequest.message);
        throw new Error("Something went wrong");
      }

      toast.success("your request submited successfully.");
      setClaimModal(false);
      update({ image: formData.image });
      console.log(data);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const handleClaimModal = () => {
    if (status === "authenticated") {
      setClaimModal(true);
    } else {
      signIn(null, { callbackUrl: pathname });
    }
  };

  const handleScrollToSection = (section) => {
    setActiveSection(section);
    const sectionRef = {
      about: aboutRef,
      service: serviceRef,
      gallery: galleryRef,
      offer: offerRef,
      map: mapRef,
      review: reviewRef,
    }[section];
    if (sectionRef.current) {
      const offsetTop = sectionRef.current.offsetTop;
      window.scrollTo({
        top: offsetTop - -160,
        behavior: "smooth",
      });
    } else {
      console.error(`Section ${section} does not exist`);
    }
  };

  const getListing = async () => {
    try {
      const { data, errors } = await client.query({
        query: GETLISTING,
        variables: { id: params.id },
      });

      if (errors || data.getListing?.code !== 200) {
        throw new Error("Something went wrong");
      }

      const currentListing = await data.getListing?.listing;

      console.log('current listing',data);
      setListing(currentListing);
      setFormData((prevFormData) => ({
        ...prevFormData,
        listing_id: currentListing?._id,
        listing_name: currentListing?.listing_name,
        listing_image: currentListing?.listing_image,
        listing_date: currentListing?.createdAt,
      }));
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  useEffect(() => {
    getListing();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session]);

  console.log("all listings =>", listing);
  return (
    <div>
      <section>
        <div className="str">
          <div>
            <Header transparent={false} />
          </div>
        </div>
      </section>
      <>
        <section>
          <div className="v3-list-ql">
            <div className="container">
              <div className="row">
                <div className="v3-list-ql-inn">
                  <ul>
                    <li
                      className={
                        activeSection === "about" ? "active active-list" : ""
                      }
                      onClick={() => handleScrollToSection("about")}
                    >
                      <span>
                        <i className="material-icons">person</i> About
                      </span>
                    </li>
                    <li
                      className={
                        activeSection === "service" ? "active-list" : ""
                      }
                      onClick={() => handleScrollToSection("service")}
                    >
                      <span>
                        <i className="material-icons">business_center</i>
                        Services
                      </span>
                    </li>
                    <li
                      className={
                        activeSection === "gallery" ? "active-list" : ""
                      }
                      onClick={() => handleScrollToSection("gallery")}
                    >
                      <span>
                        <i className="material-icons">photo</i> Gallery
                      </span>
                    </li>
                    <li
                      className={activeSection === "offer" ? "active-list" : ""}
                      onClick={() => handleScrollToSection("offer")}
                    >
                      <span>
                        <i className="material-icons">style</i> Offers
                      </span>
                    </li>
                    <li
                      className={activeSection === "map" ? "active-list" : ""}
                      onClick={() => handleScrollToSection("map")}
                    >
                      <span>
                        <i className="material-icons">camera</i> 360 View
                      </span>
                    </li>
                    <li
                      className={
                        activeSection === "review" ? "active-list" : ""
                      }
                      onClick={() => handleScrollToSection("review")}
                    >
                      <span>
                        <i className="material-icons">star_half</i> Write Review
                      </span>
                    </li>
                    {/* <li>
                        <span onClick={() => setClaimModal(true)} className='cursor-pointer'  data-toggle="modal" >
                          <i className="material-icons">store</i>
                          Claim business
                        </span>
                      </li> */}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="list-bann">
            <img src={listing?.cover_image || '/listing-ban/7.jpg'} alt="banner-img" />
          </div>
        </section>
        <section className=" pg-list-1">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="pg-list-1-pro">
                  <img src={listing?.listing_image || '/listings/1.jpg'} alt="listing-img" />
                  <span className="stat">
                    <i className="material-icons">verified_user</i>
                  </span>
                </div>
                <div className="pg-list-1-left">
                  <h3>{listing?.listing_name}</h3>
                  <div className="list-rat-all">
                    <b>5.0</b>
                    <label className="rat">
                      <i className="material-icons">star</i>
                      <i className="material-icons">star</i>
                      <i className="material-icons">star</i>
                      <i className="material-icons">star</i>
                      <i className="material-icons">star</i>
                    </label>
                    <span>526 Reviews</span>
                  </div>
                  <p>
                    <b>Address:</b> {listing?.listing_address}
                  </p>
                  <div className="list-number pag-p1-phone">
                    <ul>
                      <Link href={`Tel:${listing?.phone_number}`}>
                        <li className="ic-php">{listing?.phone_number}</li>
                      </Link>
                      <Link href={`mailto:${listing?.email}`}>
                        <li className="ic-mai">{listing?.email}</li>
                      </Link>
                      <Link target="_blank" href={`${listing?.website}`}>
                        <li className="ic-web">{listing?.website}</li>
                      </Link>
                    </ul>
                  </div>
                </div>
                <div className="list-ban-btn">
                  <ul>
                    <li>
                      <a href="tel:87654567" className="cta cta-call">
                        Call now
                      </a>
                    </li>

                    <li>
                      <a
                        href="https://wa.me/98765657486"
                        className="cta cta-rev"
                      >
                        WhatsApp
                      </a>
                    </li>
                    <li>
                      <span
                        onClick={handleClaimModal}
                        data-toggle="modal"
                        data-target="#quote"
                        className="pulse cta cta-get"
                      >
                        Claim Listing
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className=" list-pg-bg">
          <div className="container">
            <div className="row">
              <div className="com-padd">
                <div
                  ref={aboutRef}
                  id="ld-abo"
                  className="list-pg-lt list-page-com-p"
                >
                  {/*                        */}
                  {/*LISTING DETAILS: LEFT PART 1*/}
                  <div className="pglist-bg pglist-p-com">
                    <div className="pglist-p-com-ti">
                      <h3>
                        <span>About</span> {listing?.listing_name}
                      </h3>
                    </div>
                    <div className="list-pg-inn-sp list-pg-inn-abo">
                      <div className="share-btn">
                        <ul>
                          <li>
                            <a
                              target="_blank"
                              href="https://www.facebook.com/sharer/sharer.html?u=listing/rolexo-villas-in-california?src=facebook&quote=Rolexo Villas in California"
                              className="so-fb"
                            >
                              <img
                                src="/social/3.png"
                                alt="Share on Facebook"
                                title="Share on Facebook"
                              />
                            </a>
                          </li>
                          <li>
                            <a
                              target="_blank"
                              href="http://twitter.com/share?text=Rolexo Villas in California&url=http%3A%2F%2Flocalhost%2Fdirectory%2Fbizbook%2Flisting%2Frolexo-villas-in-california%3Fsrc%3Dtwitter"
                              className="so-tw"
                            >
                              <img
                                src="/social/2.png"
                                alt="Share On Twitter"
                                title="Share On Twitter"
                              />
                            </a>
                          </li>
                          <li>
                            <a
                              target="_blank"
                              href="whatsapp://send?text=http%3A%2F%2Flocalhost%2Fdirectory%2Fbizbook%2Flisting%2Frolexo-villas-in-california%3Fsrc%3Dwhatsapp"
                              className="so-wa"
                            >
                              <img
                                src="/social/6.png"
                                alt="Share on WhatsApp"
                                title="Share on WhatsApp"
                              />
                            </a>
                          </li>
                          <li>
                            <a
                              target="_blank"
                              href="https://www.linkedin.com/sharing/share-offsite/?url=http%3A%2F%2Flocalhost%2Fdirectory%2Fbizbook%2Flisting%2Frolexo-villas-in-california%26%26src%3Dlinkedin"
                              className="so-li"
                            >
                              <img
                                src="/social/1.png"
                                alt="Share on LinkedIn"
                                title="Share on LinkedIn"
                              />
                            </a>
                          </li>
                          <li>
                            <a
                              target="_blank"
                              href="https://www.pinterest.com/pin/create/bookmarklet/?media=images/listings/43340pexels-photo-106399.jpeg&url=http%3A%2F%2Flocalhost%2Fdirectory%2Fbizbook%2Flisting%2Frolexo-villas-in-california%26%26src%3Dpinterest&description=Rolexo Villas in California"
                              className="so-pi"
                            >
                              <img
                                src="/social/9.png"
                                alt="Share on Pinterest"
                                title="Share on Pinterest"
                              />
                            </a>
                          </li>
                        </ul>
                      </div>
                      <p></p>
                      <p>{listing?.listing_detail}</p>
                      <p />
                    </div>
                  </div>
                  {/*                            */}
                  {/*END LISTING DETAILS: LEFT PART 1*/}
                  {/*LISTING DETAILS: LEFT PART 2*/}
                  <div
                    ref={serviceRef}
                    id="ld-ser"
                    className="pglist-bg pglist-p-com"
                  >
                    <div className="pglist-p-com-ti">
                      <h3>
                        <span>Services</span> Offered
                      </h3>
                    </div>
                    <div className="list-pg-inn-sp">
                      <div className="row pg-list-ser">
                        <ul>
                          <li className="col-md-3">
                            <div className="pg-list-ser-p1">
                              <img src="/services/13.jpg" alt="" />
                            </div>
                            <div className="pg-list-ser-p2">
                              <h4>Villa plots</h4>
                            </div>
                          </li>
                          <li className="col-md-3">
                            <div className="pg-list-ser-p1">
                              <img src="/services/14.jpg" alt="" />
                            </div>
                            <div className="pg-list-ser-p2">
                              <h4>Appartments</h4>
                            </div>
                          </li>
                          <li className="col-md-3">
                            <div className="pg-list-ser-p1">
                              <img src="/services/16.jpg" alt="" />
                            </div>
                            <div className="pg-list-ser-p2">
                              <h4>House constructions</h4>
                            </div>
                          </li>
                          <li className="col-md-3">
                            <div className="pg-list-ser-p1">
                              <img src="/services/17.jpeg" alt="" />
                            </div>
                            <div className="pg-list-ser-p2">
                              <h4>Plots</h4>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/*END LISTING DETAILS: LEFT PART 2*/}
                  {/*START SERVICE AREAS*/}
                  <div id="ld-ser" className="pglist-bg pglist-p-com">
                    <div className="pglist-p-com-ti">
                      <h3>
                        <span>Service</span> Areas
                      </h3>
                    </div>
                    <div className="list-pg-inn-sp">
                      <div className="row pg-list-ser-area">
                        <ul>
                          {listing?.service_location?.map((item, index) => (
                            <li key={index}>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/*END SERVICE AREAS*/}
                  {/*LISTING DETAILS: LEFT PART 3*/}
                  <div
                    ref={galleryRef}
                    id="ld-gal"
                    className="pglist-bg pglist-p-com"
                  >
                    <div className="pglist-p-com-ti">
                      <h3>
                        <span>Photo</span> Gallery
                      </h3>
                    </div>
                    {listing?.gallery_images && (
                      <div className="list-pg-inn-sp">
                        <div className="carousel slide">
                          <Slider {...settings}>
                            {listing?.gallery_images?.map((image, idx) => {
                              return (
                                <div key={idx} className="h-[380px] w-full ">
                                  <CldImage
                                    width="750"
                                    crop="fill"
                                    gravity="east"
                                    height="380"
                                    src={image}
                                    alt="Description of my image"
                                  />
                                </div>
                              );
                            })}
                          </Slider>
                        </div>
                      </div>
                    )}
                  </div>
                  {/*END LISTING DETAILS: LEFT PART 3*/}
                  {/*LISTING DETAILS: LEFT PART 4*/}
                  <div
                    ref={offerRef}
                    id="ld-off"
                    className="pglist-bg pglist-off-last pglist-p-com"
                  >
                    <div className="pglist-p-com-ti">
                      <h3>
                        <span>Special</span> Offers
                      </h3>
                    </div>
                    <div className="list-pg-inn-sp">
                      <div className="home-list-pop">
                        {/*LISTINGS IMAGE*/}
                        <div className="col-md-3">
                          {listing?.offer?.offer_image && (
                          <CldImage
                            width="150"
                            height="172"
                            src={listing?.offer?.offer_image}
                            alt="Description of my image"
                          />
                          )}
                        </div>
                        {/*LISTINGS: CONTENT*/}
                        <div className="col-md-9 home-list-pop-desc inn-list-pop-desc list-room-deta">
                          <a href="#!">
                            <h3>{listing?.offer?.offer_name}</h3>
                          </a>
                          <p>{listing?.offer?.offer_description}</p>
                          <span className="home-list-pop-rat list-rom-pric">
                            {listing?.offer?.offer_amount}
                            {listing?.offer?.offer_type === "percent"
                              ? "%"
                              : "₹"}
                          </span>
                          <div className="list-enqu-btn">
                            <ul>
                              <li>
                                <a href="#">View more</a>
                              </li>
                              <li>
                                <a
                                  href="#!"
                                  data-toggle="modal"
                                  data-target="#quote"
                                >
                                  Send enquiry
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*END 360 DEGREE MAP: LEFT PART 8*/}
                  <div
                    ref={mapRef}
                    className="pglist-bg pglist-p-com"
                    id="ld-360"
                  >
                    <div className="pglist-p-com-ti">
                      <h3>
                        <span>360 </span> Degree View
                      </h3>
                    </div>
                    <div className="list-pg-inn-sp list-360">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!4v1615094507523!6m8!1m7!1sCAoSLEFGMVFpcFAxZ0hoalZZU25Wb2xDbVVROWdZNlYxWnc2UGU1YjVDckVjeEYz!2m2!1d37.779626!2d-122.5134699!3f256.26044!4f13.954989999999995!5f0.7820865974627469"
                        width={600}
                        height={450}
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                      />
                    </div>
                  </div>
                  {/*END 360 DEGREE MAP: LEFT PART 8*/}
                  {/*LISTING DETAILS: LEFT PART 6*/}
                  {/*LISTING DETAILS: LEFT PART 6*/}
                  <div
                    ref={reviewRef}
                    className="pglist-bg pglist-p-com"
                    id="ld-rew"
                  >
                    <div className="pglist-p-com-ti">
                      <h3>
                        <span>Write Your</span> Reviews
                      </h3>
                    </div>
                    <div className="list-pg-inn-sp">
                      <div className="list-pg-write-rev">
                        <form
                          className="col"
                          name="review_form"
                          id="review_form"
                          method="post"
                        >
                          <input
                            type="hidden"
                            className="form-control"
                            name="listing_id"
                            defaultValue={385}
                          />
                          <input
                            type="hidden"
                            className="form-control"
                            name="listing_user_id"
                            defaultValue={325}
                          />
                          <input
                            name="review_user_id"
                            defaultValue={37}
                            type="hidden"
                          />
                          <p>
                            Writing great reviews may help others discover the
                            places that are just apt for them. Here are a few
                            tips to write a good review:
                          </p>
                          <div
                            id="review_success"
                            style={{
                              textAlign: "center",
                              display: "none",
                              color: "green",
                            }}
                          >
                            Thanks for your Review !! Your Review Is
                            Successful!!
                          </div>
                          <div
                            id="review_fail"
                            style={{
                              textAlign: "center",
                              display: "none",
                              color: "red",
                            }}
                          >
                            Something Went Wrong!!!
                          </div>
                          <div className="row">
                            <div>
                              <fieldset className="rating">
                                <input
                                  type="radio"
                                  id="star5"
                                  name="price_rating"
                                  className="price_rating"
                                  defaultValue={5}
                                />
                                <label
                                  className="full"
                                  htmlFor="star5"
                                  title="Awesome"
                                />
                                <input
                                  type="radio"
                                  id="star4"
                                  name="price_rating"
                                  className="price_rating"
                                  defaultValue={4}
                                />
                                <label
                                  className="full"
                                  htmlFor="star4"
                                  title="Excellent"
                                />
                                <input
                                  type="radio"
                                  defaultChecked="checked"
                                  id="star3"
                                  className="price_rating"
                                  name="price_rating"
                                  defaultValue={3}
                                />
                                <label
                                  className="full"
                                  htmlFor="star3"
                                  title="Good"
                                />
                                <input
                                  type="radio"
                                  id="star2"
                                  name="price_rating"
                                  className="price_rating"
                                  defaultValue={2}
                                />
                                <label
                                  className="full"
                                  htmlFor="star2"
                                  title="Average"
                                />
                                <input
                                  type="radio"
                                  id="star1"
                                  name="price_rating"
                                  className="price_rating"
                                  defaultValue={1}
                                />
                                <label
                                  className="full"
                                  htmlFor="star1"
                                  title="Poor"
                                />
                                <input
                                  type="radio"
                                  id="star0"
                                  name="price_rating"
                                  className="price_rating"
                                  defaultValue={0}
                                />
                                <label htmlFor="star0" title="Very Poor" />
                              </fieldset>
                              <div id="star-value">3 Star</div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="input-field col s6">
                              <input
                                id="review_name"
                                readOnly
                                name="review_name"
                                type="text"
                                defaultValue="Rn53 Themes"
                              />
                            </div>
                            <div className="input-field col s6">
                              <input
                                id="review_mobile"
                                readOnly
                                name="review_mobile"
                                type="text"
                                placeholder="Mobile number"
                                defaultValue={5522114422}
                              />
                            </div>
                          </div>
                          <div className="row">
                            <div className="input-field col s6">
                              <input
                                id="review_email"
                                readOnly
                                name="review_email"
                                type="email"
                                placeholder="Email Id"
                                defaultValue="rn53themes@gmail.com"
                              />
                            </div>
                            <div className="input-field col s6">
                              <input
                                id="review_city"
                                name="review_city"
                                placeholder="City"
                                type="text"
                              />
                            </div>
                          </div>
                          <div className="row">
                            <div className="input-field col s12">
                              <textarea
                                id="review_message"
                                placeholder="Write review"
                                name="review_message"
                                defaultValue={""}
                              />
                            </div>
                          </div>
                          <div className="row">
                            <div className="input-field col s12">
                              <input
                                type="submit"
                                id="review_submit"
                                name="review_submit"
                                defaultValue="Submit Review"
                              />
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                  {/*END LISTING DETAILS: LEFT PART 6*/}
                  {/*END LISTING DETAILS: LEFT PART 6*/}
                  {/*LISTING DETAILS: LEFT PART 5*/}
                  {/*LISTING DETAILS: LEFT PART 5*/}
                  <div className="pglist-p3 pglist-bg pglist-p-com" id="ld-rev">
                    <div className="pglist-p-com-ti">
                      <h3>
                        <span>User</span> Reviews
                      </h3>
                    </div>
                    <div className="list-pg-inn-sp">
                      <div className="lp-ur-all">
                        <div className="lp-ur-all-left">
                          <div className="lp-ur-all-left-1">
                            <div className="lp-ur-all-left-11">Excellent</div>
                            <div className="lp-ur-all-left-12">
                              <div className="lp-ur-all-left-13" />
                            </div>
                          </div>
                          <div className="lp-ur-all-left-1">
                            <div className="lp-ur-all-left-11">Good</div>
                            <div className="lp-ur-all-left-12">
                              <div className="lp-ur-all-left-13 lp-ur-all-left-Good" />
                            </div>
                          </div>
                          <div className="lp-ur-all-left-1">
                            <div className="lp-ur-all-left-11">
                              Satisfactory
                            </div>
                            <div className="lp-ur-all-left-12">
                              <div className="lp-ur-all-left-13 lp-ur-all-left-satis" />
                            </div>
                          </div>
                          <div className="lp-ur-all-left-1">
                            <div className="lp-ur-all-left-11">
                              Below Average
                            </div>
                            <div className="lp-ur-all-left-12">
                              <div className="lp-ur-all-left-13 lp-ur-all-left-below" />
                            </div>
                          </div>
                          <div className="lp-ur-all-left-1">
                            <div className="lp-ur-all-left-11">
                              Below Average
                            </div>
                            <div className="lp-ur-all-left-12">
                              <div className="lp-ur-all-left-13 lp-ur-all-left-poor" />
                            </div>
                          </div>
                        </div>
                        <div className="lp-ur-all-right">
                          <h5>Overall Ratings</h5>
                          <p>
                            <label className="rat">
                              <i className="material-icons">star</i>
                              <i className="material-icons">star</i>
                              <i className="material-icons">star</i>
                              <i className="material-icons">star</i>
                              <i className="material-icons">star</i>
                            </label>
                            <span>based on 1 reviews</span>
                          </p>
                        </div>
                      </div>
                      <div className="lp-ur-all-rat">
                        <h5>Reviews</h5>
                        <ul>
                          <li>
                            <div className="lr-user-wr-img">
                              <img src="/services/25.jpeg" alt="" />
                            </div>
                            <div className="lr-user-wr-con">
                              <h6>Rn53 Themes</h6>
                              <label className="rat">
                                <i className="material-icons">star</i>
                                <i className="material-icons">star</i>
                                <i className="material-icons">star</i>
                                <i className="material-icons">star</i>
                                <i className="material-icons">star</i>
                              </label>
                              <span className="lr-revi-date">07, Mar 2021</span>
                              <p>
                                verified_userRolexo Villas is well-known to all
                                as a premier builder of villas and apartments.
                                Even though they have various departments they
                                stay united in giving the customers the best
                                service. I really had a good service right from
                                on time delivery, quality of work, perfection in
                                work completion. The relationship does not end
                                in just in hand over but they stand strong in
                                all tuff times for the commitment given. After
                                3+ years of handover they addressed the compound
                                wall cracks which expanded and in a week
                                condition. They still respond to any queries /
                                faults on time and track it to closure.
                              </p>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/*END LISTING DETAILS: LEFT PART 5*/}
                  {/*ADS*/}
                  <div className="ban-ati-com ads-det-page">
                    <a href="#">
                      <span>Ad</span>
                      <img src="/ads/3.png" alt="ads-3" />
                    </a>
                  </div>
                  {/*ADS*/}
                  {/*RELATED PREMIUM LISTINGS*/}
                  <div className="list-det-rel-pre">
                    <h2>Related listings:</h2>
                    <ul>
                      <li>
                        <div className="land-pack-grid">
                          <div className="land-pack-grid-img">
                            <img src="/services/28.jpeg" alt="" />
                          </div>
                          <div className="land-pack-grid-text">
                            <h4>Core real estates</h4>
                            <div className="list-rat-all">
                              <b />
                            </div>
                          </div>
                          <a
                            target="_blank"
                            href="#"
                            className="land-pack-grid-btn"
                          />
                        </div>
                      </li>
                      <li>
                        <div className="land-pack-grid">
                          <div className="land-pack-grid-img">
                            <img src="/services/25.jpeg" alt="" />
                          </div>
                          <div className="land-pack-grid-text">
                            <h4>Museo Villas and Plots</h4>
                            <div className="list-rat-all">
                              <b />
                            </div>
                          </div>
                          <a
                            target="_blank"
                            href="#"
                            className="land-pack-grid-btn"
                          />
                        </div>
                      </li>
                      <li>
                        <div className="land-pack-grid">
                          <div className="land-pack-grid-img">
                            <img src="/services/30.jpg" alt="" />
                          </div>
                          <div className="land-pack-grid-text">
                            <h4>ccc</h4>
                            <div className="list-rat-all">
                              <b />
                            </div>
                          </div>
                          <a
                            target="_blank"
                            href="#"
                            className="land-pack-grid-btn"
                          />
                        </div>
                      </li>
                    </ul>
                  </div>
                  {/*RELATED PREMIUM LISTINGS*/}
                </div>
                <div className="list-pg-rt">
                  {/*LISTING DETAILS: LEFT PART 9*/}
                  <div className="list-rhs-form pglist-bg pglist-p-com">
                    <div className="quote-pop">
                      <h3>
                        <span>Get</span> Quote
                      </h3>
                      <div
                        id="detail_enq_success"
                        className="log"
                        style={{ display: "none" }}
                      >
                        <p>Your Enquiry Is Submitted Successfully</p>
                      </div>
                      <div
                        id="detail_enq_same"
                        className="log"
                        style={{ display: "none" }}
                      >
                        <p>You cannot make enquiry on your own listing</p>
                      </div>
                      <div
                        id="detail_enq_fail"
                        className="log"
                        style={{ display: "none" }}
                      >
                        <p>Something Went Wrong!!!</p>
                      </div>
                      <form onSubmit={handleEnquirySubmit}>
                        <div className="form-group ic-user">
                          <input
                            type="text"
                            name="enquirer_name"
                            value={enquiryFormData.enquirer_name}
                            onChange={handleEnquiryFormData}
                            required="required"
                            className="form-control"
                            placeholder="Enter name*"
                          />
                        </div>
                        <div className="form-group ic-eml">
                          <input
                            type="email"
                            className="form-control"
                            placeholder="Enter email*"
                            required="required"
                            value={enquiryFormData.enquirer_email}
                            onChange={handleEnquiryFormData}
                            name="enquirer_email"
                            pattern="^[\w]{1,}[\w.+-]{0,}@[\w-]{2,}([.][a-zA-Z]{2,}|[.][\w-]{2,}[.][a-zA-Z]{2,})$"
                            title="Invalid email address"
                          />
                        </div>
                        <div className="form-group ic-pho">
                          <input
                            type="text"
                            className="form-control"
                            value={enquiryFormData.enquirer_mobile}
                            onChange={handleEnquiryFormData}
                            name="enquirer_mobile"
                            placeholder="Enter mobile number *"
                            pattern="[7-9]{1}[0-9]{9}"
                            title="Phone number starting with 7-9 and remaing 9 digit with 0-9"
                            required
                          />
                        </div>
                        <div className="form-group">
                          <textarea
                            className="form-control"
                            rows={3}
                            name="message"
                            placeholder="Enter your query or message"
                            value={enquiryFormData.message}
                            onChange={handleEnquiryFormData}
                          />
                        </div>
                        <input type="hidden" id="source" />
                        <button
                          type="submit"
                          id="detail_enquiry_submit"
                          name="enquiry_submit"
                          className="btn btn-primary"
                        >
                          Submit
                        </button>
                      </form>
                    </div>
                  </div>
                  {/*END LISTING DETAILS: LEFT PART 9*/}
                  {/*LISTING DETAILS: LEFT PART 7*/}
                  <div className="lide-guar pglist-bg pglist-p-com">
                    <div className="pglist-p-com-ti pglist-p-com-ti-right">
                      <h3>
                        <span>Claim</span> Listing
                      </h3>
                    </div>
                    <div className="list-pg-inn-sp">
                      <div className="list-pg-guar">
                        <ul>
                          <li>
                            <div className="list-pg-guar-img">
                              <img src="/icon/g2.png" alt="" />
                            </div>
                            <h4>Claim this business</h4>
                            <span
                              data-toggle="modal"
                              data-target="#claim"
                              className="clim-edit"
                            >
                              Suggest an edit
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/*END LISTING DETAILS: LEFT PART 7*/}
                  {/*LISTING DETAILS: COMPANY BADGE*/}
                  <div className="ld-rhs-pro pglist-bg pglist-p-com">
                    <div className="lis-comp-badg">
                      <div className="s1">
                        <div>
                          <span className="by">Business profile</span>
                          <img className="proi" src="/user/1.png" alt="" />
                          <h4>Rn53 Themes net</h4>
                          <p>
                            Address: 28800 Orchard Lake Road, Suite 180
                            Farmington Hills, U.S.A
                          </p>
                          <ul>
                            <li>
                              <a
                                href="https://www.facebook.com/53themes"
                                target="_blank"
                              >
                                <img
                                  src="https://bizbookdirectorytemplate.com/images/social/3.png"
                                  alt="social-image-3"
                                />
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://twitter.com/53themes"
                                target="_blank"
                              >
                                <img
                                  src="https://bizbookdirectorytemplate.com/images/social/2.png"
                                  alt="social-image-2"
                                />
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.youtube.com/channel/UC3wN3O2GXTt7ZZniIoMZumg"
                                target="_blank"
                              >
                                <img
                                  src="https://bizbookdirectorytemplate.com/images/social/5.png"
                                  alt="social-image-5"
                                />
                              </a>
                            </li>
                            <li>
                              <a href="#" target="_blank">
                                <img
                                  src="https://bizbookdirectorytemplate.com/images/social/6.png"
                                  alt="social-image-6"
                                />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="s2">
                        <a
                          target="_blank"
                          href="company-profile.html"
                          className="use-fol"
                        >
                          View profile
                        </a>
                        <a
                          target="_blank"
                          href="company-profile.html#home_enquiry_form"
                        >
                          Get in touch with us
                        </a>
                      </div>
                    </div>
                  </div>
                  {/*END LISTING DETAILS: COMPANY BADGE*/}
                  {/*LISTING DETAILS: LEFT PART 8*/}
                  <div className="pglist-p3 pglist-bg pglist-p-com">
                    <div className="pglist-p-com-ti pglist-p-com-ti-right">
                      <h3>
                        <span>Our</span> Location
                      </h3>
                    </div>
                    <div className="list-pg-inn-sp">
                      <div className="list-pg-map">
                        <iframe
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100940.17087601054!2d-122.50781157529548!3d37.75767917396271!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2sin!4v1615094456570!5m2!1sen!2sin"
                          width={600}
                          height={450}
                          style={{ border: 0 }}
                          allowFullScreen
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </div>
                  {/*END LISTING DETAILS: LEFT PART 8*/}
                  {/*LISTING DETAILS: LEFT PART 9*/}
                  <div className="pglist-p3 pglist-bg pglist-p-com">
                    <div className="pglist-p-com-ti pglist-p-com-ti-right">
                      <h3>
                        <span>Company</span> Info
                      </h3>
                    </div>
                    <div className="list-pg-inn-sp">
                      <div className="list-pg-oth-info">
                        <ul>
                          <li>
                            <BusinessTimings
                              timingData={listing?.business_time}
                            />
                          </li>
                          <li>
                            Available villas <span>12</span>
                          </li>
                          <li>
                            Booking advance <span>$500</span>
                          </li>
                          <li>
                            Contact number <span>986516876516</span>
                          </li>
                          <li>
                            WhatsApp <span>65468764879</span>
                          </li>
                          <li>
                            Email id <span>booking@rolex.com</span>
                          </li>
                          <li>
                            Contact name <span>Bruce mecho</span>
                          </li>
                          <li>
                            Website <span>www.relexovillas.com</span>
                          </li>
                          <li>
                            Available plots <span>32</span>
                          </li>
                          <li>
                            Next project location <span>Losangles</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/*END LISTING DETAILS: LEFT PART 9*/}
                  {/*LISTING DETAILS: LEFT PART 7*/}
                  <div className="ld-rhs-pro pglist-bg pglist-p-com">
                    <div className="lis-pro-badg">
                      <div>
                        <span className="rat" alt="User rating">
                          4.2
                        </span>
                        <span className="by">Created by</span>
                        <img src="/user/3.jpg" alt="" />
                        <h4>
                          {listing?.user_name?.length > 0
                            ? listing?.user_name
                            : listing?.createdBy?.name}
                        </h4>
                        <p>Member since Feb 2021</p>
                      </div>
                      <Link
                        href={`/profile/${listing?.user?.id}`}
                        className="fclick"
                      >
                        &nbsp;
                      </Link>
                    </div>
                  </div>
                  {/*END LISTING DETAILS: LEFT PART 7*/}
                  {/*LISTING DETAILS: LEFT PART 10*/}
                  <div className="list-mig-like">
                    <div className="list-ri-peo-like">
                      <h3>Who all are like this</h3>
                      <ul>
                        <li>
                          <a href="profile.html" target="_blank">
                            <img src="/user/62736rn53themes.png" alt="" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/*END LISTING DETAILS: LEFT PART 10*/}
                  {/*ADS*/}
                  <div className="ban-ati-com ads-det-page">
                    <a href="#">
                      <span>Ad</span>
                      {/* This is giving error */}
                      {/* <img src="/ads/59040boat-728x90.png" alt="boat-ads" /> */}
                    </a>
                  </div>
                  {/*ADS*/}
                </div>
              </div>
            </div>
          </div>
        </section>

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
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour.
                    </p>
                  </div>
                  <div className="col-md-3 bb-link">
                    <Link href="/pricing-details">Add my business</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="pop-ups pop-quo">
            {/* The Modal */}
            <div className="modal fade" id="quote">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="log-bor">&nbsp;</div>
                  <span className="udb-inst">Send enquiry</span>
                  <button type="button" className="close" data-dismiss="modal">
                    ×
                  </button>
                  {/* Modal Header */}
                  <div className="quote-pop">
                    <h4>Get quote</h4>
                    <div
                      id="pop_enq_success"
                      className="log"
                      style={{ display: "none" }}
                    >
                      <p>Your Enquiry Is Submitted Successfully</p>
                    </div>
                    <div
                      id="pop_enq_same"
                      className="log"
                      style={{ display: "none" }}
                    >
                      <p>You cannot make enquiry on your own listing</p>
                    </div>
                    <div
                      id="pop_enq_fail"
                      className="log"
                      style={{ display: "none" }}
                    >
                      <p>Something Went Wrong!!!</p>
                    </div>
                    <form
                      method="post"
                      name="popup_enquiry_form"
                      id="popup_enquiry_form"
                    >
                      <input
                        type="hidden"
                        className="form-control"
                        name="listing_id"
                        defaultValue={381}
                        placeholder=""
                        required
                      />
                      <input
                        type="hidden"
                        className="form-control"
                        name="listing_user_id"
                        defaultValue={37}
                        placeholder=""
                        required
                      />
                      <input
                        type="hidden"
                        className="form-control"
                        name="enquiry_sender_id"
                        placeholder=""
                        required
                      />
                      <input
                        type="hidden"
                        className="form-control"
                        name="enquiry_source"
                        defaultValue="Website"
                        placeholder=""
                        required
                      />
                      <div className="form-group">
                        <input
                          type="text"
                          name="enquiry_name"
                          defaultValue
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
                          defaultValue
                          name="enquiry_email"
                          pattern="^[\w]{1,}[\w.+-]{0,}@[\w-]{2,}([.][a-zA-Z]{2,}|[.][\w-]{2,}[.][a-zA-Z]{2,})$"
                          title="Invalid email address"
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          defaultValue
                          name="enquiry_mobile"
                          placeholder="Enter mobile number *"
                          pattern="[7-9]{1}[0-9]{9}"
                          title="Phone number starting with 7-9 and remaing 9 digit with 0-9"
                          required
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
                        disabled="disabled"
                        type="submit"
                        id="popup_enquiry_submit"
                        name="popup_enquiry_submit"
                        className="btn btn-primary"
                      >
                        Log In To Submit
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            {/* The Modal */}
            <div
              className={`modal fade ${claimModal ? "show" : ""}`}
              style={{
                display: `${claimModal ? "block" : "none"}`,
                paddingRight: `${claimModal ? "15px" : "0"}`,
              }}
              id="claim"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="log-bor">&nbsp;</div>
                  <span className="udb-inst">Claim now</span>
                  <button
                    type="button"
                    onClick={() => setClaimModal(false)}
                    className="close"
                    data-dismiss="modal"
                  >
                    ×
                  </button>
                  {/* Modal Header */}
                  <div className="quote-pop">
                    <h4>Claim this business</h4>
                    <div
                      id="pop_claim_success"
                      className="log"
                      style={{ display: "none" }}
                    >
                      <p>Your Claim Request Submitted Successfully</p>
                    </div>
                    <div
                      id="pop_claim_same"
                      className="log"
                      style={{ display: "none" }}
                    >
                      <p>You cannot make enquiry on your own listing</p>
                    </div>
                    <div
                      id="pop_claim_fail"
                      className="log"
                      style={{ display: "none" }}
                    >
                      <p>Something Went Wrong!!!</p>
                    </div>
                    <form
                      name="popup_claim_form"
                      id="popup_claim_form"
                      onSubmit={handleSubmit}
                    >
                      <fieldset>
                        <div className="form-group">
                          <input
                            type="text"
                            name="name"
                            onChange={handleChange}
                            required="required"
                            className="form-control"
                            placeholder="Enter name*"
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="email"
                            onChange={handleChange}
                            className="form-control"
                            placeholder="Enter this business email id*"
                            required="required"
                            name="email"
                            title="Invalid email address"
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="text"
                            onChange={handleChange}
                            className="form-control"
                            name="phone_number"
                            placeholder="Enter mobile number *"
                            title="Phone number starting with 7-9 and remaining 9 digit with 0-9"
                            required
                          />
                        </div>
                        <div className="form-group">
                          <label>Identification Proofe *</label>
                          <div className="fil-img-uplo">
                            <span className="dumfil">Upload a file</span>
                            <CldUploadWidget
                              signatureEndpoint="/api/sign-cloudinary-params"
                              uploadPreset="listing_image"
                              onSuccess={(result, { widget }) => {
                                setFormData((prevFormData) => ({
                                  ...prevFormData,
                                  verification_image: result?.info?.secure_url,
                                }));
                                widget.close();
                              }}
                            >
                              {({ open }) => {
                                function handleOnClick() {
                                  open();
                                }
                                return (
                                  <button type="button" onClick={handleOnClick}>
                                    upload image
                                  </button>
                                );
                              }}
                            </CldUploadWidget>
                          </div>
                        </div>
                        <div className="form-group">
                          <textarea
                            onChange={handleChange}
                            className="form-control"
                            rows={3}
                            name="description"
                            placeholder="Enter your query and why claim this business"
                          />
                        </div>
                        <input type="hidden" id="source" />
                        <button
                          type="submit"
                          id="popup_claim_submit"
                          name="popup_claim_submit"
                          className="btn btn-primary cursor-pointer"
                          disabled={session?.user.id === listing?.user}
                        >
                          {session?.user.id === listing?.user
                            ? "You already claimed"
                            : "Claim now"}
                        </button>
                      </fieldset>
                    </form>
                    <div className="form-notes">
                      <p>
                        We send you the verification email to you provider the
                        email id. Once you done the verification process then
                        you can manage this business.
                      </p>
                    </div>
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
