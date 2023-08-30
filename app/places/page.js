'use client'
import React from 'react'
import Headertwo from '@/components/Headertwo';
import BottomMenu from '@/components/BottomMenu';
import Footer from '@/components/Footer';
import "../../css/style4.css"
import {BiSearch} from "react-icons/bi"
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
      <style jsx>
        {`
        .hom-head .container {
            display: none
        }

        .hom-top {
            transition: all .5s ease;
            background: #000;
            box-shadow: none
        }

        .hom-head {
            background: none !important;
            padding: 0;
            margin: 0
        }

        .hom-head .hom-top .container {
            display: block
        }

        .hom-top {
            background: #292c2e;
        }
        
        `}
      </style>

      <section>
  <div className="plac-hom-ban">
    <div className="container">
      <div className="row">
        <div className="plac-hom-ban-inn">
          <h1>Explore your Travel</h1>
          <p>
            Plan your travel with <b>Bizbook</b>. Find your place and get the
            nearest Services &amp; Activities.
          </p>
          <div className="plac-hom-search">
            <div className="job-sear">
            <div className="flex items-end justify-center w-full p-2 rounded bg-white shadow-xl">
  <div className="relative w-4/4 mr-4 text-left lg:w-full  md:w-full rounded">
    <input
      type="text"
      id="hero-field"
      name="hero-field"
      placeholder="Find Your Place"
      className="w-full rounded-full px-3 py-1 text-base leading-8 text-gray-800 transition-colors duration-200 ease-in-out bg-gray-100 border border-gray-200  outline-none focus:border-indigo-500"
    />
  </div>
  <button className="inline-flex px-6 py-2 font-semibold text-white transition duration-500 ease-in-out transform  rounded-full mb-1   focus:outline-none bg-gradient-to-r from-pink-400 to-indigo-500 font-lg hover:from-pink-800 hover:to-indigo-900 focus:shadow-outline shadow-lg">
    <BiSearch/>
  </button>
</div>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<section>
  <div className="plac-hom-bd">
    <div className="container">
      <div className="row">
        <div className="plac-hom-tit plac-hom-tit-ic-pla">
          <h2>Travel places</h2>
          <p>
            Start planning your next trip with a little help from <b>Bizbook</b>
          </p>
        </div>
        <div className="plac-hom-all-pla">
          <ul>
            <li>
              <div className="plac-hom-box">
                <div className="plac-hom-box-im">
                  <img
                    src="https://bizbookdirectorytemplate.com/places/images/places/9177pexels-thorsten-technoman-338515-(1).jpg"
                    alt=""
                    loading="lazy"
                  />
                  <h4>Eiffel Tower</h4>
                </div>
                <div className="plac-hom-box-txt">
                  <span>Historical places</span>
                  <span>More details</span>
                </div>
                <a
                  href="https://bizbookdirectorytemplate.com/place/eiffel-tower"
                  className="fclick"
                />
              </div>
            </li>
            <li>
              <div className="plac-hom-box">
                <div className="plac-hom-box-im">
                  <img
                    src="https://bizbookdirectorytemplate.com/places/images/places/40692pexels-zhangeldy-beimish-1583339.jpg"
                    alt=""
                    loading="lazy"
                  />
                  <h4>Taj Mahal, India</h4>
                </div>
                <div className="plac-hom-box-txt">
                  <span>Historical places</span>
                  <span>More details</span>
                </div>
                <a
                  href="https://bizbookdirectorytemplate.com/place/taj-mahal--india"
                  className="fclick"
                />
              </div>
            </li>
            <li>
              <div className="plac-hom-box">
                <div className="plac-hom-box-im">
                  <img
                    src="https://bizbookdirectorytemplate.com/places/images/places/11075pexels-asad-photo-maldives-3601425.jpg"
                    alt=""
                    loading="lazy"
                  />
                  <h4>Bondi Beach, Sydney</h4>
                </div>
                <div className="plac-hom-box-txt">
                  <span>Beach</span>
                  <span>More details</span>
                </div>
                <a
                  href="https://bizbookdirectorytemplate.com/place/bondi-beach--sydney"
                  className="fclick"
                />
              </div>
            </li>
            <li>
              <div className="plac-hom-box">
                <div className="plac-hom-box-im">
                  <img
                    src="https://bizbookdirectorytemplate.com/places/images/places/77874pexels-brett-stone-2845013.jpg"
                    alt=""
                    loading="lazy"
                  />
                  <h4>Sydney Opera House</h4>
                </div>
                <div className="plac-hom-box-txt">
                  <span>Beach</span>
                  <span>More details</span>
                </div>
                <a
                  href="https://bizbookdirectorytemplate.com/place/sydney-opera-house"
                  className="fclick"
                />
              </div>
            </li>
            <li>
              <div className="plac-hom-box">
                <div className="plac-hom-box-im">
                  <img
                    src="https://bizbookdirectorytemplate.com/places/images/places/66408pexels-jess-loiterton-4602279.jpg"
                    alt=""
                    loading="lazy"
                  />
                  <h4>Goa beach</h4>
                </div>
                <div className="plac-hom-box-txt">
                  <span>Beach</span>
                  <span>More details</span>
                </div>
                <a
                  href="https://bizbookdirectorytemplate.com/place/goa-beach"
                  className="fclick"
                />
              </div>
            </li>
            <li>
              <div className="plac-hom-box">
                <div className="plac-hom-box-im">
                  <img
                    src="https://bizbookdirectorytemplate.com/places/images/places/344507.jpg"
                    alt=""
                    loading="lazy"
                  />
                  <h4>Niagara Falls North America</h4>
                </div>
                <div className="plac-hom-box-txt">
                  <span>Waterfalls</span>
                  <span>More details</span>
                </div>
                <a
                  href="https://bizbookdirectorytemplate.com/place/niagara-falls-north-america"
                  className="fclick"
                />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>
<>
  <section>
    <div className="container">
      <div className="row">
        <div className="plac-hom-tit plac-hom-tit-ic-sugg">
          <h2>Start adding a new place</h2>
          <p>
            You can send the suggestion or request to the <b>Bizbook Admin</b>
          </p>
          <span data-toggle="modal" data-target="#addplacepop">
            Submit a place
          </span>
        </div>
      </div>
    </div>
  </section>
  {/* SHARE POPUP */}
  <div className="pop-ups pop-quo">
    {/* The Modal */}
    <div className="modal fade" id="addplacepop">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="log-bor">&nbsp;</div>
          <span className="udb-inst">New place adding request</span>
          <button type="button" className="close" data-dismiss="modal">
            ×
          </button>
          {/* Modal Header */}
          <div className="quote-pop">
            <h4>Place details</h4>
            <div
              id="place_pop_enq_success"
              className="log"
              style={{ display: "none" }}
            >
              <p>Your Place Add Request Is Submitted Successfully!!!</p>
            </div>
            <div
              id="place_pop_enq_fail"
              className="log"
              style={{ display: "none" }}
            >
              <p>Oops!! Something Went Wrong Try Later!!!</p>
            </div>
            <form
              method="post"
              name="place_add_request_form"
              id="place_add_request_form"
              className="place_add_request_form"
            >
              <input
                type="hidden"
                className="form-control"
                name="enquiry_sender_id"
                defaultValue={323}
                placeholder=""
                required=""
              />
              <div className="form-group">
                <input
                  type="text"
                  name="place_name"
                  className="form-control"
                  placeholder="Place name*"
                  required=""
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="place_address"
                  className="form-control"
                  placeholder="Address of the place*"
                  required=""
                />
              </div>
              <div className="form-group">
                <textarea
                  className="form-control"
                  rows={3}
                  name="place_description"
                  placeholder="Description"
                  defaultValue={""}
                />
              </div>
              <div className="form-group">
                <div className="fil-img-uplo">
                  <span className="dumfil">Place image *</span>
                  <input
                    type="file"
                    name="place_image"
                    accept="image/*,.jpg,.jpeg,.png"
                    className="form-control"
                    required=""
                  />
                </div>
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="enquiry_name"
                  className="form-control"
                  placeholder="Enter your name*"
                  required=""
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email*"
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
                  placeholder="Enter your mobile number*"
                  pattern="[7-9]{1}[0-9]{9}"
                  title="Phone number starting with 7-9 and remaining 9 digit with 0-9"
                  required=""
                />
              </div>
              <input type="hidden" id="source" />
              <button
                type="submit"
                id="place_add_request_submit"
                name="place_add_request_submit"
                className="place_add_request_submit btn btn-primary"
              >
                Submit{" "}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* START */}
  <span className="btn-ser-need-ani">
    <img
      src="https://bizbookdirectorytemplate.com/images/icon/help.png"
      alt=""
      loading="lazy"
    />
  </span>
  <div className="ani-quo-form">
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
        <p>Oops!! Something Went Wrong Try Later!!!</p>
      </div>
      <div id="home_slide_enq_same" className="log" style={{ display: "none" }}>
        <p>You cannot make enquiry on your own listing!!</p>
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
            title="Phone number starting with 7-9 and remaining 9 digit with 0-9"
            required=""
          />
        </div>
        <div className="form-group">
          <select
            name="enquiry_category"
            id="enquiry_category"
            className="form-control chosen-select"
          >
            <option value="">Select Category</option>
            <option value={20}>Restaurants</option>
            <option value={19}>Wedding halls</option>
            <option value={17}>Pet shop</option>
            <option value={16}>Technology</option>
            <option value={15}>Spa and Facial</option>
            <option value={10}>Real Estate</option>
            <option value={8}>Sports</option>
            <option value={7}>Education</option>
            <option value={6}>Electricals</option>
            <option value={5}>Automobiles</option>
            <option value={3}>Transportation</option>
            <option value={2}>Hospitals</option>
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
          Submit Requirements{" "}
        </button>
      </form>
    </div>
  </div>
  {/* END */}
  {/* START */}
  <Footer/>
<BottomMenu/>
</>


    </div>
  )
}

export default page
