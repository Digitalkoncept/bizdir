'use client'
import React from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Headertwo from '@/components/Headertwo';
import BottomMenu from '@/components/BottomMenu';
import Footer from '@/components/Footer';
import "../../css/style4.css"
import Slider from 'react-slick';
import {BiSearch} from "react-icons/bi"
const page = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
      };
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
      <section className="news-top-menu">
  <div className="container">
    <div className="row">
      <div className="news-menu">
        <ul>
          <li>
            <a href="https://bizbookdirectorytemplate.com/news" className="act">
              Home
            </a>
          </li>
          <li>
            <a
              href="https://bizbookdirectorytemplate.com/news-all/tech"
              className=""
            >
              Tech
            </a>
          </li>
          <li>
            <a
              href="https://bizbookdirectorytemplate.com/news-all/entertainment"
              className=""
            >
              Entertainment
            </a>
          </li>
          <li>
            <a
              href="https://bizbookdirectorytemplate.com/news-all/lifestyle"
              className=""
            >
              Lifestyle
            </a>
          </li>
          <li>
            <a
              href="https://bizbookdirectorytemplate.com/news-all/politics"
              className=""
            >
              Politics
            </a>
          </li>
          <li>
            <a
              href="https://bizbookdirectorytemplate.com/news-all/world"
              className=""
            >
              World
            </a>
          </li>
          <li>
            <a
              href="https://bizbookdirectorytemplate.com/news-all/health"
              className=""
            >
              Health
            </a>
          </li>
          <li>
            <a
              href="https://bizbookdirectorytemplate.com/news-all/sports"
              className=""
            >
              Sports
            </a>
          </li>
          <li>
            <a
              href="https://bizbookdirectorytemplate.com/news-all/others"
              className=""
            >
              Others
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
    </section>
<>
  {/* START */}
  <section className="news-hom-ban">
    <div className="news-hom-ban-inn">
      <h1>
        <b>Bizbook</b> News &amp; Magazines
      </h1>
      <p>All news updates in one place.</p>
    </div>
  </section>
  {/*END*/}
  {/* START */}
  <section className="news-hom-top">
    <div className="news-hom-top-inn">
      <div className="container">
        <div className="row">
          <div className="news-hom-ban-ads">
            <a href="">
              <img
                src="https://bizbookdirectorytemplate.com/images/ads/ads1.png"
                alt=""
                loading="lazy"
              />
            </a>
          </div>
          <div className="news-com-tit">
            <h2>Trendings</h2>
          </div>
          <div className="col-md-3">
            <div className="news-home-box ">
              <div className="im">
                <img
                  src="https://bizbookdirectorytemplate.com//news/images/news/374279.jpg"
                  alt=""
                  loading="lazy"
                />
              </div>
              <div className="txt">
                <span className="news-cate">World</span>
                <h2>
                  U.S. Futures Rise as Traders Mull Virus, China Vow: Markets
                  Wrap
                </h2>
                <span className="news-date">27, Dec 2021</span>
              </div>
              <a
                href="https://bizbookdirectorytemplate.com/news-detail/u-s--futures-rise-as-traders-mull-virus--china-vow--markets-wrap"
                className="fclick"
              />
            </div>
            <div className="news-home-box ">
              <div className="im">
                <img
                  src="https://bizbookdirectorytemplate.com//news/images/news/26117pexels-kaboompics-com-6444.jpg"
                  alt=""
                  loading="lazy"
                />
              </div>
              <div className="txt">
                <span className="news-cate">Entertainment</span>
                <h2>Applee AirTags - &apos;A perfect tool for stalking&apos;</h2>
                <span className="news-date">22, Jan 2022</span>
              </div>
              <a
                href="https://bizbookdirectorytemplate.com/news-detail/applee-airtags-----a-perfect-tool-for-stalking"
                className="fclick"
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="news-home-box news-home-box-big">
              <div className="im">
                <img
                  src="https://bizbookdirectorytemplate.com//news/images/news/28270pexels-pixabay-164041.jpg"
                  alt=""
                  loading="lazy"
                />
              </div>
              <div className="txt">
                <span className="news-cate">Health</span>
                <h2>
                  Kiribatii goes into first lockdown after Covid flight cases
                </h2>
                <span className="news-date">22, Jan 2022</span>
              </div>
              <a
                href="https://bizbookdirectorytemplate.com/news-detail/kiribatii-goes-into-first-lockdown-after-covid-flight-cases"
                className="fclick"
              />
            </div>
          </div>
          <div className="col-md-3">
            <div className="news-home-box ">
              <div className="im">
                <img
                  src="https://bizbookdirectorytemplate.com//news/images/news/80044pexels-photo-1077785.jpeg"
                  alt=""
                  loading="lazy"
                />
              </div>
              <div className="txt">
                <span className="news-cate">World</span>
                <h2>What is the expected price of Teslaa Model 3?</h2>
                <span className="news-date">22, Jan 2022</span>
              </div>
              <a
                href="https://bizbookdirectorytemplate.com/news-detail/what-is-the-expected-price-of-teslaa-model-3"
                className="fclick"
              />
            </div>
            <div className="news-home-box ">
              <div className="im">
                <img
                  src="https://bizbookdirectorytemplate.com//news/images/news/90994pexels-josh-sorenson-378268.jpg"
                  alt=""
                  loading="lazy"
                />
              </div>
              <div className="txt">
                <span className="news-cate">Entertainment</span>
                <h2>Like a drone that you sit in – but would you feel safe?</h2>
                <span className="news-date">22, Jan 2022</span>
              </div>
              <a
                href="https://bizbookdirectorytemplate.com/news-detail/like-a-drone-that-you-sit-in-----but-would-you-feel-safe"
                className="fclick"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*END*/}
  {/* START */}
  <section className="news-hom-ban-sli">
    <div className="news-hom-ban-sli-inn">
      <ul className="multiple-items1">
      <Slider {...settings} >
        <li>
          <div className="news-hban-box">
            <div className="im">
              <img
                src="https://bizbookdirectorytemplate.com//news/images/news/374279.jpg"
                alt=""
                loading="lazy"
              />
            </div>
            <div className="txt">
              <span className="news-cate">World</span>
              <h2>
                U.S. Futures Rise as Traders Mull Virus, China Vow: Markets Wrap
              </h2>
              <span className="news-date">27, Dec 2021</span>
            </div>
            <a
              href="https://bizbookdirectorytemplate.com/news-detail/u-s--futures-rise-as-traders-mull-virus--china-vow--markets-wrap"
              className="fclick"
            />
          </div>
        </li>
        <li>
          <div className="news-hban-box">
            <div className="im">
              <img
                src="https://bizbookdirectorytemplate.com//news/images/news/80044pexels-photo-1077785.jpeg"
                alt=""
                loading="lazy"
              />
            </div>
            <div className="txt">
              <span className="news-cate">World</span>
              <h2>What is the expected price of Teslaa Model 3?</h2>
              <span className="news-date">22, Jan 2022</span>
            </div>
            <a
              href="https://bizbookdirectorytemplate.com/news-detail/what-is-the-expected-price-of-teslaa-model-3"
              className="fclick"
            />
          </div>
        </li>
        <li>
          <div className="news-hban-box">
            <div className="im">
              <img
                src="https://bizbookdirectorytemplate.com//news/images/news/21313pexels-pixabay-248021.jpg"
                alt=""
                loading="lazy"
              />
            </div>
            <div className="txt">
              <span className="news-cate">Tech</span>
              <h2>Amazan Alexa returns after morning snooze</h2>
              <span className="news-date">22, Jan 2022</span>
            </div>
            <a
              href="https://bizbookdirectorytemplate.com/news-detail/amazan-alexa-returns-after-morning-snooze"
              className="fclick"
            />
          </div>
        </li>
        <li>
          <div className="news-hban-box">
            <div className="im">
              <img
                src="https://bizbookdirectorytemplate.com//news/images/news/13439pexels-nadexriotic-3551498.jpg"
                alt=""
                loading="lazy"
              />
            </div>
            <div className="txt">
              <span className="news-cate">World</span>
              <h2>
                South Georgiea: The museum at the end of the world reopens for
                business
              </h2>
              <span className="news-date">22, Jan 2022</span>
            </div>
            <a
              href="https://bizbookdirectorytemplate.com/news-detail/south-georgiea--the-museum-at-the-end-of-the-world-reopens-for-business"
              className="fclick"
            />
          </div>
        </li>
        <li>
          <div className="news-hban-box">
            <div className="im">
              <img
                src="https://bizbookdirectorytemplate.com//news/images/news/16302pexels-markus-spiske-3970332.jpg"
                alt=""
                loading="lazy"
              />
            </div>
            <div className="txt">
              <span className="news-cate">Health</span>
              <h2>Covid: Face mask rules and Covid passes to end in World</h2>
              <span className="news-date">22, Jan 2022</span>
            </div>
            <a
              href="https://bizbookdirectorytemplate.com/news-detail/covid--face-mask-rules-and-covid-passes-to-end-in-world"
              className="fclick"
            />
          </div>
        </li>
        <li>
          <div className="news-hban-box">
            <div className="im">
              <img
                src="https://bizbookdirectorytemplate.com//news/images/news/28270pexels-pixabay-164041.jpg"
                alt=""
                loading="lazy"
              />
            </div>
            <div className="txt">
              <span className="news-cate">Health</span>
              <h2>
                Kiribatii goes into first lockdown after Covid flight cases
              </h2>
              <span className="news-date">22, Jan 2022</span>
            </div>
            <a
              href="https://bizbookdirectorytemplate.com/news-detail/kiribatii-goes-into-first-lockdown-after-covid-flight-cases"
              className="fclick"
            />
          </div>
        </li>
        <li>
          <div className="news-hban-box">
            <div className="im">
              <img
                src="https://bizbookdirectorytemplate.com//news/images/news/90994pexels-josh-sorenson-378268.jpg"
                alt=""
                loading="lazy"
              />
            </div>
            <div className="txt">
              <span className="news-cate">Entertainment</span>
              <h2>Like a drone that you sit in – but would you feel safe?</h2>
              <span className="news-date">22, Jan 2022</span>
            </div>
            <a
              href="https://bizbookdirectorytemplate.com/news-detail/like-a-drone-that-you-sit-in-----but-would-you-feel-safe"
              className="fclick"
            />
          </div>
        </li>
        </Slider>
      </ul>
    </div>
  </section>
  {/*END*/}
  {/* START */}
  <section className="news-hom-big">
    <div className="container">
      <div className="row">
        <div className="col-md-8">
          <div className="news-com-tit">
            <h2>Latest &amp; Popular</h2>
          </div>
          {/*BIG POST START*/}
          <div className="news-home-box ">
            <div className="im">
              <img
                src="https://bizbookdirectorytemplate.com//news/images/news/28270pexels-pixabay-164041.jpg"
                alt=""
                loading="lazy"
              />
            </div>
            <div className="txt">
              <span className="news-cate">Health</span>
              <h2>
                Kiribatii goes into first lockdown after Covid flight cases
              </h2>
              <p>
                The remote island nation of Kiribati has gone into lockdown
                after passengers on the first international...
              </p>
              <span className="news-date">22, Jan 2022</span>
              <span className="news-views">423 Views</span>
            </div>
            <a
              href="https://bizbookdirectorytemplate.com/news-detail/kiribatii-goes-into-first-lockdown-after-covid-flight-cases"
              className="fclick"
            />
          </div>
          {/*END BIG POST START*/}
          {/*BIG POST START*/}
          <div className="news-home-box ">
            <div className="im">
              <img
                src="https://bizbookdirectorytemplate.com//news/images/news/374279.jpg"
                alt=""
                loading="lazy"
              />
            </div>
            <div className="txt">
              <span className="news-cate">World</span>
              <h2>
                U.S. Futures Rise as Traders Mull Virus, China Vow: Markets Wrap
              </h2>
              <p>
                Asian stocks were mixed and U.S. equity futures were steady
                Monday amid a mood of caution as traders...
              </p>
              <span className="news-date">27, Dec 2021</span>
              <span className="news-views">417 Views</span>
            </div>
            <a
              href="https://bizbookdirectorytemplate.com/news-detail/u-s--futures-rise-as-traders-mull-virus--china-vow--markets-wrap"
              className="fclick"
            />
          </div>
          {/*END BIG POST START*/}
          {/*BIG POST START*/}
          <div className="news-home-box news-home-box1 ">
            <div className="im">
              <img
                src="https://bizbookdirectorytemplate.com//news/images/news/80044pexels-photo-1077785.jpeg"
                alt=""
                loading="lazy"
              />
            </div>
            <div className="txt">
              <span className="news-cate">World</span>
              <h2>What is the expected price of Teslaa Model 3?</h2>
              <p>
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical...
              </p>
              <span className="news-date">22, Jan 2022</span>
              <span className="news-views">328 Views</span>
            </div>
            <a
              href="https://bizbookdirectorytemplate.com/news-detail/what-is-the-expected-price-of-teslaa-model-3"
              className="fclick"
            />
          </div>
          {/*END BIG POST START*/}
          {/*BIG POST START*/}
          <div className="news-home-box news-home-box1 ">
            <div className="im">
              <img
                src="https://bizbookdirectorytemplate.com//news/images/news/21313pexels-pixabay-248021.jpg"
                alt=""
                loading="lazy"
              />
            </div>
            <div className="txt">
              <span className="news-cate">Tech</span>
              <h2>Amazan Alexa returns after morning snooze</h2>
              <p>
                Users of Amazon&apos;s Alexa complained that the voice assistant was
                not working on Friday morning. According...
              </p>
              <span className="news-date">22, Jan 2022</span>
              <span className="news-views">313 Views</span>
            </div>
            <a
              href="https://bizbookdirectorytemplate.com/news-detail/amazan-alexa-returns-after-morning-snooze"
              className="fclick"
            />
          </div>
          {/*END BIG POST START*/}
          {/*BIG POST START*/}
          <div className="news-home-box news-home-box1 ">
            <div className="im">
              <img
                src="https://bizbookdirectorytemplate.com//news/images/news/26117pexels-kaboompics-com-6444.jpg"
                alt=""
                loading="lazy"
              />
            </div>
            <div className="txt">
              <span className="news-cate">Entertainment</span>
              <h2>Applee AirTags - &apos;A perfect tool for stalking&apos;</h2>
              <p>
                Amber Norsworthy lives in Mississippi with her four children. It
                had just turned 3pm when she got...
              </p>
              <span className="news-date">22, Jan 2022</span>
              <span className="news-views">308 Views</span>
            </div>
            <a
              href="https://bizbookdirectorytemplate.com/news-detail/applee-airtags-----a-perfect-tool-for-stalking"
              className="fclick"
            />
          </div>
          {/*END BIG POST START*/}
          {/*BIG POST START*/}
          <div className="news-home-box news-home-box1 ">
            <div className="im">
              <img
                src="https://bizbookdirectorytemplate.com//news/images/news/90994pexels-josh-sorenson-378268.jpg"
                alt=""
                loading="lazy"
              />
            </div>
            <div className="txt">
              <span className="news-cate">Entertainment</span>
              <h2>Like a drone that you sit in – but would you feel safe?</h2>
              <p>
                &uoat;Absolutely, that has been an important inspiration for me&qoat;
                says Mr Ternstrom, who co-founded Swedish...
              </p>
              <span className="news-date">22, Jan 2022</span>
              <span className="news-views">303 Views</span>
            </div>
            <a
              href="https://bizbookdirectorytemplate.com/news-detail/like-a-drone-that-you-sit-in-----but-would-you-feel-safe"
              className="fclick"
            />
          </div>
          {/*END BIG POST START*/}
          {/*BIG POST START*/}
          <div className="news-home-box news-home-box1 ">
            <div className="im">
              <img
                src="https://bizbookdirectorytemplate.com//news/images/news/13439pexels-nadexriotic-3551498.jpg"
                alt=""
                loading="lazy"
              />
            </div>
            <div className="txt">
              <span className="news-cate">World</span>
              <h2>
                South Georgiea: The museum at the end of the world reopens for
                business
              </h2>
              <p>
                On the icy, southern edge of the Atlantic Ocean, just above the
                Antarctic circle, is a British island,...
              </p>
              <span className="news-date">22, Jan 2022</span>
              <span className="news-views">296 Views</span>
            </div>
            <a
              href="https://bizbookdirectorytemplate.com/news-detail/south-georgiea--the-museum-at-the-end-of-the-world-reopens-for-business"
              className="fclick"
            />
          </div>
          {/*END BIG POST START*/}
          {/*BIG POST START*/}
          <div className="news-home-box news-home-box1 ">
            <div className="im">
              <img
                src="https://bizbookdirectorytemplate.com//news/images/news/16302pexels-markus-spiske-3970332.jpg"
                alt=""
                loading="lazy"
              />
            </div>
            <div className="txt">
              <span className="news-cate">Health</span>
              <h2>Covid: Face mask rules and Covid passes to end in World</h2>
              <p></p>
              <p>
                The prime minister also said the government would immediately
                drop its advice for people to work from...
              </p>
              <span className="news-date">22, Jan 2022</span>
              <span className="news-views">284 Views</span>
            </div>
            <a
              href="https://bizbookdirectorytemplate.com/news-detail/covid--face-mask-rules-and-covid-passes-to-end-in-world"
              className="fclick"
            />
          </div>
          {/*END BIG POST START*/}
        </div>
        <div className="col-md-4">
          <div className="news-com-rhs">
            {/* SOCIAL MEDIA START*/}
            <div className="news-soci">
              <h4>Social media</h4>
              <ul>
                <li>
                  <a
                    target="_blank"
                    href="https://m.facebook.com/rn53themes/?locale2=fr_FR"
                    className="sm-fb-big"
                  >
                    <b>3k</b> Facebook
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://twitter.com/rn53_themes"
                    className="sm-tw-big"
                  >
                    <b>10K</b> Twitter
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://twitter.com/rn53_themes"
                    className="sm-li-big"
                  >
                    <b>1k</b> Linkedin
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://www.youtube.com/channel/UC3wN3O2GXTt7ZZniIoMZumg"
                    className="sm-yt-big"
                  >
                    <b>100K</b> Youtube
                  </a>
                </li>
              </ul>
            </div>
            {/* SOCIAL MEDIA END*/}
            {/* ADS START*/}
            <div className="news-rhs-cate">
              <h4>Category</h4>
              <ul>
                <li>
                  <a href="https://bizbookdirectorytemplate.com/news-all/tech">
                    <span>1</span>
                    <b>Tech</b>
                  </a>
                </li>
                <li>
                  <a href="https://bizbookdirectorytemplate.com/news-all/entertainment">
                    <span>2</span>
                    <b>Entertainment</b>
                  </a>
                </li>
                <li>
                  <a href="https://bizbookdirectorytemplate.com/news-all/lifestyle">
                    <span>0</span>
                    <b>Lifestyle</b>
                  </a>
                </li>
                <li>
                  <a href="https://bizbookdirectorytemplate.com/news-all/politics">
                    <span>0</span>
                    <b>Politics</b>
                  </a>
                </li>
                <li>
                  <a href="https://bizbookdirectorytemplate.com/news-all/world">
                    <span>3</span>
                    <b>World</b>
                  </a>
                </li>
                <li>
                  <a href="https://bizbookdirectorytemplate.com/news-all/health">
                    <span>2</span>
                    <b>Health</b>
                  </a>
                </li>
                <li>
                  <a href="https://bizbookdirectorytemplate.com/news-all/sports">
                    <span>0</span>
                    <b>Sports</b>
                  </a>
                </li>
                <li>
                  <a href="https://bizbookdirectorytemplate.com/news-all/others">
                    <span>0</span>
                    <b>Others</b>
                  </a>
                </li>
              </ul>
            </div>
            {/* ADS END*/}
            {/*TOP POSTS*/}
            <div className="hot-page2-hom-pre news-rhs-trends">
              <h4>Trending Posts</h4>
              <ul>
                <li>
                  <div className="hot-page2-hom-pre-1">
                    <img
                      src="https://bizbookdirectorytemplate.com//news/images/news/374279.jpg"
                      alt=""
                      loading="lazy"
                    />
                  </div>
                  <div className="hot-page2-hom-pre-2">
                    <h5>
                      U.S. Futures Rise as Traders Mull Virus, China Vow:
                      Markets Wrap
                    </h5>
                    <span className="news-date">27, Dec 2021</span>
                  </div>
                  <a
                    href="https://bizbookdirectorytemplate.com/news-detail/u-s--futures-rise-as-traders-mull-virus--china-vow--markets-wrap"
                    className="fclick"
                  />
                </li>
                <li>
                  <div className="hot-page2-hom-pre-1">
                    <img
                      src="https://bizbookdirectorytemplate.com//news/images/news/26117pexels-kaboompics-com-6444.jpg"
                      alt=""
                      loading="lazy"
                    />
                  </div>
                  <div className="hot-page2-hom-pre-2">
                    <h5>Applee AirTags - &apos;A perfect tool for stalking&apos;</h5>
                    <span className="news-date">22, Jan 2022</span>
                  </div>
                  <a
                    href="https://bizbookdirectorytemplate.com/news-detail/applee-airtags-----a-perfect-tool-for-stalking"
                    className="fclick"
                  />
                </li>
                <li>
                  <div className="hot-page2-hom-pre-1">
                    <img
                      src="https://bizbookdirectorytemplate.com//news/images/news/28270pexels-pixabay-164041.jpg"
                      alt=""
                      loading="lazy"
                    />
                  </div>
                  <div className="hot-page2-hom-pre-2">
                    <h5>
                      Kiribatii goes into first lockdown after Covid flight
                      cases
                    </h5>
                    <span className="news-date">22, Jan 2022</span>
                  </div>
                  <a
                    href="https://bizbookdirectorytemplate.com/news-detail/kiribatii-goes-into-first-lockdown-after-covid-flight-cases"
                    className="fclick"
                  />
                </li>
                <li>
                  <div className="hot-page2-hom-pre-1">
                    <img
                      src="https://bizbookdirectorytemplate.com//news/images/news/80044pexels-photo-1077785.jpeg"
                      alt=""
                      loading="lazy"
                    />
                  </div>
                  <div className="hot-page2-hom-pre-2">
                    <h5>What is the expected price of Teslaa Model 3?</h5>
                    <span className="news-date">22, Jan 2022</span>
                  </div>
                  <a
                    href="https://bizbookdirectorytemplate.com/news-detail/what-is-the-expected-price-of-teslaa-model-3"
                    className="fclick"
                  />
                </li>
                <li>
                  <div className="hot-page2-hom-pre-1">
                    <img
                      src="https://bizbookdirectorytemplate.com//news/images/news/90994pexels-josh-sorenson-378268.jpg"
                      alt=""
                      loading="lazy"
                    />
                  </div>
                  <div className="hot-page2-hom-pre-2">
                    <h5>
                      Like a drone that you sit in – but would you feel safe?
                    </h5>
                    <span className="news-date">22, Jan 2022</span>
                  </div>
                  <a
                    href="https://bizbookdirectorytemplate.com/news-detail/like-a-drone-that-you-sit-in-----but-would-you-feel-safe"
                    className="fclick"
                  />
                </li>
              </ul>
            </div>
            {/*TOP POSTS*/}
            {/* ADS START*/}
            <div className="news-rhs-ads-ban">
              <div className="ban-ati-com">
                <a href="">
                  <span>Ad</span>
                  <img src="https://bizbookdirectorytemplate.com/images/ads/ads2.jpg" alt='demo-image' />
                </a>
              </div>
            </div>
            {/* ADS END*/}
            {/* ADS START*/}
            <div className="news-rhs-ads-ban">
              <div className="ban-ati-com">
                <a href="">
                  <span>Ad</span>
                  <img src="https://bizbookdirectorytemplate.com/images/ads/ads1.jpg" alt='demo-image' />
                </a>
              </div>
            </div>
            {/* ADS END*/}
            {/* SUBSCRIBE START*/}
            <div className="news-subsc">
              <div className="ud-rhs-poin1">
                <div className="log-bor">&nbsp;</div>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/6349/6349282.png"
                  alt=""
                  loading="lazy"
                />
                <h5>
                  Subscribe <b>Newsletter</b>
                </h5>
                <p>
                  It is a long established fact that a reader will be
                  distracted.
                </p>
              </div>
              <div
                id="news_newsletter_success"
                className="log"
                style={{ display: "none" }}
              >
                <p>Your Newsletter Subscription Is Submitted Successfully!!!</p>
              </div>
              <div
                id="news_newsletter_fail"
                className="log"
                style={{ display: "none" }}
              >
                <p>Oops!! Something Went Wrong Try Later!!!</p>
              </div>
              <form
                name="news_newsletter_subscribe_form"
                id="news_newsletter_subscribe_form"
              >
                <ul>
                  <li>
                    <input
                      type="text"
                      name="news_newsletter_subscribe_name"
                      placeholder="Enter Email Id*"
                      className="form-control"
                      required=""
                    />
                  </li>
                  <li>
                    <input
                      type="submit"
                      id="news_newsletter_subscribe_submit"
                      name="news_newsletter_subscribe_submit"
                      className="form-control"
                    />
                  </li>
                </ul>
              </form>
            </div>
            {/* SUBSCRIBE END*/}
          </div>
        </div>
      </div>
    </div>
  </section>

  <>
  {/* START */}
  <section className="news-hom-all-lat">
    <div className="news-hom-all-lat-inn">
      <div className="container">
        <div className="row">
          <div className="news-com-tit">
            <h2>Latest Posts</h2>
          </div>
          <div className="col-md-4">
            <div className="news-home-box">
              <div className="im">
                <img
                  src="https://bizbookdirectorytemplate.com//news/images/news/16302pexels-markus-spiske-3970332.jpg"
                  alt=""
                  loading="lazy"
                />
              </div>
              <div className="txt">
                <span className="news-cate">Health</span>
                <h2>Covid: Face mask rules and Covid passes to end in World</h2>
                <span className="news-date">22, Jan 2022</span>
                <span className="news-views">284 Views</span>
              </div>
              <a
                href="https://bizbookdirectorytemplate.com/news-detail/covid--face-mask-rules-and-covid-passes-to-end-in-world"
                className="fclick"
              />
            </div>
          </div>
          <div className="col-md-4">
            <div className="news-home-box">
              <div className="im">
                <img
                  src="https://bizbookdirectorytemplate.com//news/images/news/13439pexels-nadexriotic-3551498.jpg"
                  alt=""
                  loading="lazy"
                />
              </div>
              <div className="txt">
                <span className="news-cate">World</span>
                <h2>
                  South Georgiea: The museum at the end of the world reopens for
                  business
                </h2>
                <span className="news-date">22, Jan 2022</span>
                <span className="news-views">296 Views</span>
              </div>
              <a
                href="https://bizbookdirectorytemplate.com/news-detail/south-georgiea--the-museum-at-the-end-of-the-world-reopens-for-business"
                className="fclick"
              />
            </div>
          </div>
          <div className="col-md-4">
            <div className="news-home-box">
              <div className="im">
                <img
                  src="https://bizbookdirectorytemplate.com//news/images/news/90994pexels-josh-sorenson-378268.jpg"
                  alt=""
                  loading="lazy"
                />
              </div>
              <div className="txt">
                <span className="news-cate">Entertainment</span>
                <h2>Like a drone that you sit in – but would you feel safe?</h2>
                <span className="news-date">22, Jan 2022</span>
                <span className="news-views">303 Views</span>
              </div>
              <a
                href="https://bizbookdirectorytemplate.com/news-detail/like-a-drone-that-you-sit-in-----but-would-you-feel-safe"
                className="fclick"
              />
            </div>
          </div>
          <div className="col-md-4">
            <div className="news-home-box">
              <div className="im">
                <img
                  src="https://bizbookdirectorytemplate.com//news/images/news/26117pexels-kaboompics-com-6444.jpg"
                  alt=""
                  loading="lazy"
                />
              </div>
              <div className="txt">
                <span className="news-cate">Entertainment</span>
                <h2>Applee AirTags - A perfect tool for stalking&apos;</h2>
                <span className="news-date">22, Jan 2022</span>
                <span className="news-views">308 Views</span>
              </div>
              <a
                href="https://bizbookdirectorytemplate.com/news-detail/applee-airtags-----a-perfect-tool-for-stalking"
                className="fclick"
              />
            </div>
          </div>
          <div className="col-md-4">
            <div className="news-home-box">
              <div className="im">
                <img
                  src="https://bizbookdirectorytemplate.com//news/images/news/21313pexels-pixabay-248021.jpg"
                  alt=""
                  loading="lazy"
                />
              </div>
              <div className="txt">
                <span className="news-cate">Tech</span>
                <h2>Amazan Alexa returns after morning snooze</h2>
                <span className="news-date">22, Jan 2022</span>
                <span className="news-views">313 Views</span>
              </div>
              <a
                href="https://bizbookdirectorytemplate.com/news-detail/amazan-alexa-returns-after-morning-snooze"
                className="fclick"
              />
            </div>
          </div>
          <div className="col-md-4">
            <div className="news-home-box">
              <div className="im">
                <img
                  src="https://bizbookdirectorytemplate.com//news/images/news/28270pexels-pixabay-164041.jpg"
                  alt=""
                  loading="lazy"
                />
              </div>
              <div className="txt">
                <span className="news-cate">Health</span>
                <h2>
                  Kiribatii goes into first lockdown after Covid flight cases
                </h2>
                <span className="news-date">22, Jan 2022</span>
                <span className="news-views">423 Views</span>
              </div>
              <a
                href="https://bizbookdirectorytemplate.com/news-detail/kiribatii-goes-into-first-lockdown-after-covid-flight-cases"
                className="fclick"
              />
            </div>
          </div>
          <div className="col-md-4">
            <div className="news-home-box">
              <div className="im">
                <img
                  src="https://bizbookdirectorytemplate.com//news/images/news/80044pexels-photo-1077785.jpeg"
                  alt=""
                  loading="lazy"
                />
              </div>
              <div className="txt">
                <span className="news-cate">World</span>
                <h2>What is the expected price of Teslaa Model 3?</h2>
                <span className="news-date">22, Jan 2022</span>
                <span className="news-views">328 Views</span>
              </div>
              <a
                href="https://bizbookdirectorytemplate.com/news-detail/what-is-the-expected-price-of-teslaa-model-3"
                className="fclick"
              />
            </div>
          </div>
          <div className="col-md-4">
            <div className="news-home-box">
              <div className="im">
                <img
                  src="https://bizbookdirectorytemplate.com//news/images/news/374279.jpg"
                  alt=""
                  loading="lazy"
                />
              </div>
              <div className="txt">
                <span className="news-cate">World</span>
                <h2>
                  U.S. Futures Rise as Traders Mull Virus, China Vow: Markets
                  Wrap
                </h2>
                <span className="news-date">27, Dec 2021</span>
                <span className="news-views">417 Views</span>
              </div>
              <a
                href="https://bizbookdirectorytemplate.com/news-detail/u-s--futures-rise-as-traders-mull-virus--china-vow--markets-wrap"
                className="fclick"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*END*/}
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
  
</>

  {/*END*/}
</>

 
  
  <Footer/>
<BottomMenu/>

    </div>
  )
}

export default page
