'use client'
import React from 'react'
import "../../css/style4.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Headertwo from '@/components/Headertwo';
import BottomMenu from '@/components/BottomMenu';
import Footer from '@/components/Footer';
import Slider from 'react-slick';
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
      .hom-head .container{display:none}
      .hom-top{transition:all .5s ease;background:#3d05c6;box-shadow:none}
      .hom-head{background:none!important;padding:0;margin:0}
      .hom-head .hom-top .container{display:block}
      .dmact .top-ser{display:block}
      .hm3-auto-ban{background:url(images/automobile-bg.jpg) no-repeat;background-size:100%;background-position:center right;padding-top:55px}
      .h2-ban-ql{display:table}
      .hm3-auto-ban .rhs .hom-col-req .log-bor{display:block}
      .caro-home{margin-top:90px;float:left;width:100%}
      .carousel-item:before{background:none}
      .ban-tit h1{font-weight:500;color:#fff;text-shadow:none}
      .ban-tit h1 b{font-weight:700;font-size:42px;line-height:49px;padding-bottom:15px;color:#fff;text-shadow:none}
      .h2-ban-ql ul li div{border:1px solid #d9d9da;background:#fff}
      .h2-ban-ql ul li div h5{font-weight:500;color:#383942}
      .h2-ban-ql ul li div h5 span{font-weight:700}
      .home-tit h2{font-weight:400;}
      .home-tit h2 span{font-weight:700;font-size:32px;color:#4a5e95;position:relative;z-index:2}
      .home-tit h2 span:before{content:'';position:absolute;width:40%;height:6px;background:#ff83bc;bottom:1px;left:30%;z-index:-1;transform:skew(51deg,0deg)}
      .home-tit p{color:#4e6d8d}
      .all-jobs-ban{margin-bottom:0}
      .job-sear ul li.sr-btn button{background:#8cc152}
      .all-jobs-ban h1{font-size: 50px;color: #fff;text-shadow: 0 1px 3px #333333f7;}
         
      .job-sear ul li.sr-sea:before{content:'people'}
      .all-jobs-ban p{color: #fff;}
      .all-jobs-ban{background:url(../images/ex2.jpg) #f3e5ff no-repeat;background-size:cover}
      .all-jobs-ban:before{content: '';position: absolute;width: 100%;height: 100%;left: 0px;right: 0px;top: 0px;bottom: 0px;background:linear-gradient(to top,#292930fa -6%,#f6f7f605 125%)}
      .h2-ban-ql ul li div:hover{background:#d3f0fb;box-shadow:0 14px 22px -13px #0b1017ba}
      .land-pack-grid-text{position:relative;-webkit-transition:all .5s ease;-moz-transition:all .5s ease;-o-transition:all .5s ease;transition:all .5s ease;position:absolute;top:0;bottom:0;left:0;right:0;width:100%;height:100%;z-index:2;background:linear-gradient(to top,#000000c7,#00000008)}
      .land-pack-grid-text h4{padding:15px;font-size:20px;font-weight:400;text-align:center;bottom:0;position:absolute;width:100%;text-align:center;color:#fff}
      .land-pack-grid-text h4 .dir-ho-cat{color:#f6f7f9;font-size:11px;position:relative;width:100%;display:inline-block}
      .land-pack-grid-img{background:#333}
      .home-tit{margin-bottom:20px;padding-top:60px}
      .hom2-hom-ban{float:left;width:46%;background-size:cover;margin:0 2%;background:#e6f6fb;padding:30px 100px 30px 30px;border-radius:5px;position:relative;}
      .hom2-hom-ban:hover a{background:#d6c607}
      .hom2-hom-ban h2{font-weight:600;font-size:22px;padding-bottom:5px}
      .hom2-hom-ban p{font-size:14px}
      .hom2-hom-ban a{background:#21d78d;color:#fff;padding:10px 20px;border-radius:5px;display:inline-block;cursor:pointer;font-size:13px;font-weight:400}
      .hom2-hom-ban p,.hom2-hom-ban h2,.hom2-hom-ban a{position:relative;color:#fff}
      .hom2-hom-ban:before{content:'';position:absolute;width:100%;height:100%;left:0;top:0;right:0;bottom:0;z-index:0;opacity:.8;background:#24C6DC;border-radius:5px}
      .hom2-hom-ban1:before{background-image:linear-gradient(140deg,#0c7ada 0%,#0761af 50%,#0f243e94 75%)}
      .hom2-hom-ban2:before{background-image:linear-gradient(140deg,#768404 0%,#768404 50%,#0f243e94 75%)}
      .hom2-hom-ban1{background-image:url(../images/home2-hand.jpg)}
      .hom2-hom-ban2{background-image:url(../images/home2-work.jpg)}
      .hom2-hom-ban-main{float:left;width:100%;padding-bottom:70px}
      .hom2-cus-sli{float:left;width:100%}
      .hom2-cus-sli ul li{float:left;width:25%;padding:12px 20px}
      .testmo{width:100%;background:#fff;box-shadow:0 1px 7px -3px #161d2926;border-radius:5px;padding:30px;position:relative}
      .testmo img{width:64px;height:64px;border-radius:50px;object-fit:cover;margin:-80px 0 0}
      .testmo h4{font-size:14px;font-weight:600;margin-bottom:2px;}
      .testmo span{font-size:11px;font-weight:400;color:#727688}
      .testmo span a{font-weight:500;color:#4caf50;display:block;font-size:12px}
      .testmo p{color:#727688;font-size:12px;line-height:20px;margin:0;font-weight:400;height:58px;overflow:hidden;border-top:1px solid #f1eeee;padding-top:15px;margin-top:15px}
      .testmo p:before{content:'format_quote';font-size:21px;margin:-25px 0 0;background:#fff}
      .hom2-cus{background:#f7f8f9;padding-bottom:70px}
      .testmo .rat{padding:2px 2px 2px 10px;display:inline-block;position:absolute;right:30px;top:50px}
      .testmo .rat i{color:#FF9800;font-size:13px;width:7px}
      .hom2-cus-sli ul{position:relative;overflow:hidden;padding:20px 20px 0}
      .slick-arrow{width:50px;height:50px;border-radius:50px;background:#fff;border:1px solid #ededed;color:#ffffff03;position:absolute;z-index:9;top:38%}
      .slick-arrow:before{content:'chevron_left';font-size:27px;top:4px;left:9px}
      .slick-prev{left:14px}
      .slick-next{right:14px}
      .slick-next:before{content:'chevron_right';font-size:27px}
      .hom4-prop-box{padding:0;background:#fff;box-shadow:0 1px 14px -4px #161d2926;border:1px solid #efefef}
      .hom4-prop-box img{width:100%;border-radius:2px;margin:0;height:120px}
      .hom4-prop-box div{padding:25px}
      .hom4-prop-box .rat{position:relative;top:initial;right:initial;padding:2px 2px 2px 0;display:block;margin:0;height:17px;left:-2px}
      .hom4-fea{background:#fff;padding-bottom:40px;float:left;width:100%}
      .str{float:left;width:100%}
      .hom4-fea .hom2-cus-sli ul li{padding:12px 20px}
      .hom4-fea .home-tit{margin-bottom:0;padding-top:70px}
      @media screen and (max-width: 767px) {
      .land-pack-grid-text h4{font-size:16px}
      }
      `}
      </style>
      <section>
  <div className="all-jobs-ban">
    <div className="container">
      <div className="row">
        <div className="jtit">
          <h1>Find Service Experts</h1>
          <p>We make it easy to hire the right professional for your Home</p>
        </div>
        <br />
        <div className="job-sear">
          <form
            name="expert_filter_form"
            id="expert_filter_form"
            className="expert_filter_form"
          >
            <ul>
              <li className="sr-sea">
                <select
                  className="chosen-select"
                  id="expert-select-search1"
                  name="expert-select-search"
                >
                  <option value="Plumbers">Plumbers</option>
                  <option value="LED Tv Services">LED Tv Services</option>
                  <option value="AC Services">AC Services</option>
                  <option value="Electrical service">Electrical service</option>
                  <option value="Car service">Car service</option>
                  <option value="Pest control service">
                    Pest control service
                  </option>
                  <option value="House Cleaning service">
                    House Cleaning service
                  </option>
                  <option value="Bike service">Bike service</option>
                  <option value="Home restoration services">
                    Home restoration services
                  </option>
                  <option value="House Decoration Services">
                    House Decoration Services
                  </option>
                  <option value="Laptop service">Laptop service</option>
                </select>
              </li>
              <li className="sr-loc">
                <select
                  className="chosen-select"
                  id="job-select-city"
                  name="serjobsloc"
                >
                  <option value={1}>Los Angeles</option>
                  <option value={2}>Chicago</option>
                  <option value={4}>New york</option>
                  <option value={7}>Phoenix</option>
                  <option value={8}>Dallas</option>
                  <option value={9}>San Jose</option>
                </select>
              </li>
              <li className="sr-btn">
                <button id="expert_filter_submit">
                  <i className="material-icons">search</i>
                </button>
              </li>
            </ul>
          </form>
        </div>
        <div className="job-pop-tag space-x-2">
          <a href="https://bizbookdirectorytemplate.com/all-service-experts/ac-services">
            AC Services
          </a>
          <a href="https://bizbookdirectorytemplate.com/all-service-experts/led-tv-services">
            LED Tv Services
          </a>
          <a href="https://bizbookdirectorytemplate.com/all-service-experts/car-service">
            Car service
          </a>
          <a href="https://bizbookdirectorytemplate.com/all-service-experts/electrical-service">
            Electrical service
          </a>
          <a href="https://bizbookdirectorytemplate.com/all-service-experts/plumbers">
            Plumbers
          </a>
        </div>
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
            <span>All Services</span>
          </h2>
          <p>
            lacinia viverra lectus. Fusce imperdiet ullamcorper metus eu
            fringilla.
          </p>
        </div>
        <div className="land-pack">
          <ul>
            <li>
              <div className="land-pack-grid">
                <div className="land-pack-grid-img">
                  <img
                    src="https://bizbookdirectorytemplate.com/service-experts/images/services/74990pexels-karolina-grabowska-4239123.jpg"
                    alt=""
                    loading="lazy"
                  />
                </div>
                <div className="land-pack-grid-text">
                  <h4>
                    Plumbers<span className="dir-ho-cat">Experts 3</span>
                  </h4>
                </div>
                <a
                  href="https://bizbookdirectorytemplate.com/all-service-experts/plumbers"
                  className="land-pack-grid-btn"
                >
                  View all experts
                </a>
              </div>
            </li>
            <li>
              <div className="land-pack-grid">
                <div className="land-pack-grid-img">
                  <img
                    src="https://bizbookdirectorytemplate.com/service-experts/images/services/43635samuel-regan-asante-sjjhbjhzhas-unsplash-(1).jpg"
                    alt=""
                    loading="lazy"
                  />
                </div>
                <div className="land-pack-grid-text">
                  <h4>
                    LED Tv Services<span className="dir-ho-cat">Experts 2</span>
                  </h4>
                </div>
                <a
                  href="https://bizbookdirectorytemplate.com/all-service-experts/led-tv-services"
                  className="land-pack-grid-btn"
                >
                  View all experts
                </a>
              </div>
            </li>
            <li>
              <div className="land-pack-grid">
                <div className="land-pack-grid-img">
                  <img
                    src="https://bizbookdirectorytemplate.com/service-experts/images/services/89759services-762103_640.jpg"
                    alt=""
                    loading="lazy"
                  />
                </div>
                <div className="land-pack-grid-text">
                  <h4>
                    AC Services<span className="dir-ho-cat">Experts 3</span>
                  </h4>
                </div>
                <a
                  href="https://bizbookdirectorytemplate.com/all-service-experts/ac-services"
                  className="land-pack-grid-btn"
                >
                  View all experts
                </a>
              </div>
            </li>
            <li>
              <div className="land-pack-grid">
                <div className="land-pack-grid-img">
                  <img
                    src="https://bizbookdirectorytemplate.com/service-experts/images/services/17124chirayu-trivedi-04e5zc6fxlg-unsplash.jpg"
                    alt=""
                    loading="lazy"
                  />
                </div>
                <div className="land-pack-grid-text">
                  <h4>
                    Electrical service
                    <span className="dir-ho-cat">Experts 2</span>
                  </h4>
                </div>
                <a
                  href="https://bizbookdirectorytemplate.com/all-service-experts/electrical-service"
                  className="land-pack-grid-btn"
                >
                  View all experts
                </a>
              </div>
            </li>
            <li>
              <div className="land-pack-grid">
                <div className="land-pack-grid-img">
                  <img
                    src="https://bizbookdirectorytemplate.com/service-experts/images/services/11728pexels-negative-space-97075.jpg"
                    alt=""
                    loading="lazy"
                  />
                </div>
                <div className="land-pack-grid-text">
                  <h4>
                    Car service<span className="dir-ho-cat">Experts 2</span>
                  </h4>
                </div>
                <a
                  href="https://bizbookdirectorytemplate.com/all-service-experts/car-service"
                  className="land-pack-grid-btn"
                >
                  View all experts
                </a>
              </div>
            </li>
            <li>
              <div className="land-pack-grid">
                <div className="land-pack-grid-img">
                  <img
                    src="https://bizbookdirectorytemplate.com/service-experts/images/services/97473timothy-l-brock-9s-_dwklji8-unsplash.jpg"
                    alt=""
                    loading="lazy"
                  />
                </div>
                <div className="land-pack-grid-text">
                  <h4>
                    Pest control service
                    <span className="dir-ho-cat">Experts 1</span>
                  </h4>
                </div>
                <a
                  href="https://bizbookdirectorytemplate.com/all-service-experts/pest-control-service"
                  className="land-pack-grid-btn"
                >
                  View all experts
                </a>
              </div>
            </li>
            <li>
              <div className="land-pack-grid">
                <div className="land-pack-grid-img">
                  <img
                    src="https://bizbookdirectorytemplate.com/service-experts/images/services/47346cdc-vrpjdw3wqqi-unsplash.jpg"
                    alt=""
                    loading="lazy"
                  />
                </div>
                <div className="land-pack-grid-text">
                  <h4>
                    House Cleaning service
                    <span className="dir-ho-cat">Experts 2</span>
                  </h4>
                </div>
                <a
                  href="https://bizbookdirectorytemplate.com/all-service-experts/house-cleaning-service"
                  className="land-pack-grid-btn"
                >
                  View all experts
                </a>
              </div>
            </li>
            <li>
              <div className="land-pack-grid">
                <div className="land-pack-grid-img">
                  <img
                    src="https://bizbookdirectorytemplate.com/service-experts/images/services/80193garin-chadwick-g2n5xvts1s8-unsplash.jpg"
                    alt=""
                    loading="lazy"
                  />
                </div>
                <div className="land-pack-grid-text">
                  <h4>
                    Bike service<span className="dir-ho-cat">Experts 2</span>
                  </h4>
                </div>
                <a
                  href="https://bizbookdirectorytemplate.com/all-service-experts/bike-service"
                  className="land-pack-grid-btn"
                >
                  View all experts
                </a>
              </div>
            </li>
            <li>
              <div className="land-pack-grid">
                <div className="land-pack-grid-img">
                  <img
                    src="https://bizbookdirectorytemplate.com/service-experts/images/services/10799pexels-ksenia-chernaya-5767926.jpg"
                    alt=""
                    loading="lazy"
                  />
                </div>
                <div className="land-pack-grid-text">
                  <h4>
                    Home restoration services
                    <span className="dir-ho-cat">Experts 0</span>
                  </h4>
                </div>
                <a
                  href="https://bizbookdirectorytemplate.com/all-service-experts/home-restoration-services"
                  className="land-pack-grid-btn"
                >
                  View all experts
                </a>
              </div>
            </li>
            <li>
              <div className="land-pack-grid">
                <div className="land-pack-grid-img">
                  <img
                    src="https://bizbookdirectorytemplate.com/service-experts/images/services/53609pexels-blue-bird-7218013.jpg"
                    alt=""
                    loading="lazy"
                  />
                </div>
                <div className="land-pack-grid-text">
                  <h4>
                    House Decoration Services
                    <span className="dir-ho-cat">Experts 3</span>
                  </h4>
                </div>
                <a
                  href="https://bizbookdirectorytemplate.com/all-service-experts/house-decoration-services"
                  className="land-pack-grid-btn"
                >
                  View all experts
                </a>
              </div>
            </li>
            <li>
              <div className="land-pack-grid">
                <div className="land-pack-grid-img">
                  <img
                    src="https://bizbookdirectorytemplate.com/service-experts/images/services/63410andras-vas-bd7gnnwjbku-unsplash.jpg"
                    alt=""
                    loading="lazy"
                  />
                </div>
                <div className="land-pack-grid-text">
                  <h4>
                    Laptop service<span className="dir-ho-cat">Experts 3</span>
                  </h4>
                </div>
                <a
                  href="https://bizbookdirectorytemplate.com/all-service-experts/laptop-service"
                  className="land-pack-grid-btn"
                >
                  View all experts
                </a>
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
    <div className="str">
      <div className="container">
        <div className="row">
          <div className="home-tit">
            <h2>
              <span>Join us Now</span>
            </h2>
            <p>
              We connect with targeted customers for greater business conversion
            </p>
          </div>
          <div className="hom2-hom-ban-main">
            <div className="hom2-hom-ban hom2-hom-ban1">
              <h2>Looking for a Service Expert?</h2>
              <p>
                Tell us your service needs, we help you to send best Service
                Experts
              </p>
              <a href="https://bizbookdirectorytemplate.com/login?login=register">
                Book Experts
              </a>
            </div>
            <div className="hom2-hom-ban hom2-hom-ban2">
              <h2>Are you a Service Expert?</h2>
              <p>
                Join us today and earn more money and move your business to next
                level
              </p>
              <a href="https://bizbookdirectorytemplate.com/login?login=register">
                Join now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* END */}
  {/* START */}
  <section>
    <div className="str hom2-cus">
      <div className="container">
        <div className="row">
          <div className="home-tit">
            <h2>
              <span>Our user reviews</span>
            </h2>
            <p>
              We connect with targeted customers for greater business conversion
            </p>
          </div>
          <div className="hom2-cus-sli">
            <ul className="multiple-items">
            <Slider {...settings} >
              <li className="mt-10">
                <div className="testmo">
                  <img
                    src="https://bizbookdirectorytemplate.com/images/user/70369backblue.gif"
                    alt=""
                    loading="lazy"
                  />
                  <h4>Rn53</h4>
                  <span>
                    Written a review to <a href="#">Brandon David</a>
                  </span>
                  <label className="rat">
                    <i className="material-icons">star</i>
                    <i className="material-icons">star</i>
                    <i className="material-icons">star</i>
                    <i className="material-icons">star</i>
                    <i className="material-icons">star</i>
                  </label>
                  <p>good service</p>
                </div>
              </li>
              <li className="mt-10">
                <div className="testmo">
                  <img
                    src="https://bizbookdirectorytemplate.com/images/user/970813.jpg"
                    alt=""
                    loading="lazy"
                  />
                  <h4 />
                  <span>
                    Written a review to <a href="#" />
                  </span>
                  <label className="rat"></label>
                  <p />
                </div>
              </li>
              <li className="mt-10">
                <div className="testmo">
                  <img
                    src="https://bizbookdirectorytemplate.com/images/user/70369backblue.gif"
                    alt=""
                    loading="lazy"
                  />
                  <h4>Rn53</h4>
                  <span>
                    Written a review to <a href="#">Tyler Joseph</a>
                  </span>
                  <label className="rat">
                    <i className="material-icons">star</i>
                    <i className="material-icons">star_border</i>
                    <i className="material-icons">star_border</i>
                    <i className="material-icons">star_border</i>
                    <i className="material-icons">star_border</i>
                  </label>
                  <p>jj</p>
                </div>
              </li>
              <li className="mt-10">
                <div className="testmo">
                  <img
                    src="https://bizbookdirectorytemplate.com/images/user/970813.jpg"
                    alt=""
                    loading="lazy"
                  />
                  <h4 />
                  <span>
                    Written a review to <a href="#" />
                  </span>
                  <label className="rat"></label>
                  <p />
                </div>
              </li>
              <li className="mt-10">
                <div className="testmo">
                  <img
                    src="https://bizbookdirectorytemplate.com/images/user/70369backblue.gif"
                    alt=""
                    loading="lazy"
                  />
                  <h4>Rn53</h4>
                  <span>
                    Written a review to <a href="#">Andrew Daniel</a>
                  </span>
                  <label className="rat">
                    <i className="material-icons">star</i>
                    <i className="material-icons">star</i>
                    <i className="material-icons">star</i>
                    <i className="material-icons">star</i>
                    <i className="material-icons">star</i>
                  </label>
                  <p>great service</p>
                </div>
              </li>
              <li className="mt-10">
                <div className="testmo">
                  <img
                    src="https://bizbookdirectorytemplate.com/images/user/70369backblue.gif"
                    alt=""
                    loading="lazy"
                  />
                  <h4>Rn53</h4>
                  <span>
                    Written a review to <a href="#">Robert Anthony</a>
                  </span>
                  <label className="rat">
                    <i className="material-icons">star</i>
                    <i className="material-icons">star</i>
                    <i className="material-icons">star</i>
                    <i className="material-icons">star</i>
                    <i className="material-icons">star</i>
                  </label>
                  <p>alibaba</p>
                </div>
              </li>
              <li className="mt-10">
                <div className="testmo">
                  <img
                    src="https://bizbookdirectorytemplate.com/images/user/70369backblue.gif"
                    alt=""
                    loading="lazy"
                  />
                  <h4>Rn53</h4>
                  <span>
                    Written a review to <a href="#">Samuel Dylan</a>
                  </span>
                  <label className="rat">
                    <i className="material-icons">star</i>
                    <i className="material-icons">star_border</i>
                    <i className="material-icons">star_border</i>
                    <i className="material-icons">star_border</i>
                    <i className="material-icons">star_border</i>
                  </label>
                  <p />
                </div>
              </li>
              <li className="mt-10">
                <div className="testmo">
                  <img
                    src="https://bizbookdirectorytemplate.com/images/user/70369backblue.gif"
                    alt=""
                    loading="lazy"
                  />
                  <h4>Rn53</h4>
                  <span>
                    Written a review to <a href="#">Richflayer</a>
                  </span>
                  <label className="rat">
                    <i className="material-icons">star</i>
                    <i className="material-icons">star_border</i>
                    <i className="material-icons">star_border</i>
                    <i className="material-icons">star_border</i>
                    <i className="material-icons">star_border</i>
                  </label>
                  <p>nvrunevhbdfjvh dhvhjdfvubvdsjhfv ydh</p>
                </div>
              </li>
              <li className="mt-10">
                <div className="testmo">
                  <img
                    src="https://bizbookdirectorytemplate.com/images/user/70369backblue.gif"
                    alt=""
                    loading="lazy"
                  />
                  <h4>Rn53</h4>
                  <span>
                    Written a review to <a href="#" />
                  </span>
                  <label className="rat">
                    <i className="material-icons">star</i>
                    <i className="material-icons">star</i>
                    <i className="material-icons">star</i>
                    <i className="material-icons">star</i>
                    <i className="material-icons">star</i>
                  </label>
                  <p>New seen before like him... World class service.</p>
                </div>
              </li>
              <li className="mt-10">
                <div className="testmo">
                  <img
                    src="https://bizbookdirectorytemplate.com/images/user/970813.jpg"
                    alt=""
                    loading="lazy"
                  />
                  <h4>John Smith</h4>
                  <span>
                    Written a review to <a href="#">Rn53</a>
                  </span>
                  <label className="rat">
                    <i className="material-icons">star</i>
                    <i className="material-icons">star</i>
                    <i className="material-icons">star</i>
                    <i className="material-icons">star</i>
                    <i className="material-icons">star</i>
                  </label>
                  <p>Perfect service every.. strongly recomended</p>
                </div>
              </li>
              <li className="mt-10">
                <div className="testmo">
                  <img
                    src="https://bizbookdirectorytemplate.com/images/user/70369backblue.gif"
                    alt=""
                    loading="lazy"
                  />
                  <h4>Rn53</h4>
                  <span>
                    Written a review to <a href="#">Samuel Dylan</a>
                  </span>
                  <label className="rat">
                    <i className="material-icons">star</i>
                    <i className="material-icons">star</i>
                    <i className="material-icons">star</i>
                    <i className="material-icons">star</i>
                    <i className="material-icons">star_border</i>
                  </label>
                  <p />
                </div>
              </li>
              <li className="mt-10">
                <div className="testmo">
                  <img
                    src="https://bizbookdirectorytemplate.com/images/user/970813.jpg"
                    alt=""
                    loading="lazy"
                  />
                  <h4>John Smith</h4>
                  <span>
                    Written a review to <a href="#">Rn53</a>
                  </span>
                  <label className="rat">
                    <i className="material-icons">star</i>
                    <i className="material-icons">star</i>
                    <i className="material-icons">star</i>
                    <i className="material-icons">star</i>
                    <i className="material-icons">star</i>
                  </label>
                  <p>Best AC Service ever.. I strongly recommended </p>
                </div>
              </li>
              <li className="mt-10">
                <div className="testmo">
                  <img
                    src="https://bizbookdirectorytemplate.com/images/user/970813.jpg"
                    alt=""
                    loading="lazy"
                  />
                  <h4 />
                  <span>
                    Written a review to <a href="#">Rn53</a>
                  </span>
                  <label className="rat">
                    <i className="material-icons">star</i>
                    <i className="material-icons">star</i>
                    <i className="material-icons">star</i>
                    <i className="material-icons">star</i>
                    <i className="material-icons">star</i>
                  </label>
                  <p>Perfect1</p>
                </div>
              </li>
              </Slider>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* END */}
  {/* START */}
  <section>
    <div className="str count">
      <div className="container">
        <div className="row">
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
                    <span>1</span>
                    <img
                      src="https://bizbookdirectorytemplate.com/images/icon/how1.png"
                      alt=""
                      loading="lazy"
                    />
                    <h4>Create an account</h4>
                    <p>
                      Fusce imperdiet ullamcorper metus eu fringilla. from
                      around the world from our partners and friends.
                    </p>
                  </div>
                </li>
                <li>
                  <div>
                    <span>2</span>
                    <img
                      src="https://bizbookdirectorytemplate.com/images/icon/how2.png"
                      alt=""
                      loading="lazy"
                    />
                    <h4>Add your business</h4>
                    <p>
                      Fusce imperdiet ullamcorper metus eu fringilla. from
                      around the world from our partners and friends.
                    </p>
                  </div>
                </li>
                <li>
                  <div>
                    <span>3</span>
                    <img
                      src="https://bizbookdirectorytemplate.com/images/icon/how3.png"
                      alt=""
                      loading="lazy"
                    />
                    <h4>Get more leads</h4>
                    <p>
                      Fusce imperdiet ullamcorper metus eu fringilla. from
                      around the world from our partners and friends.
                    </p>
                  </div>
                </li>
                <li>
                  <div>
                    <span>4</span>
                    <img
                      src="https://bizbookdirectorytemplate.com/images/icon/how4.png"
                      alt=""
                      loading="lazy"
                    />
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
          <div className="mob-app">
            <div className="lhs">
              <img
                src="https://bizbookdirectorytemplate.com/images/mobile.png"
                alt=""
                loading="lazy"
              />
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
              </ul>
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
              <a href="#">
                <img
                  src="https://bizbookdirectorytemplate.com/images/android.png"
                  alt=""
                  loading="lazy"
                />{" "}
              </a>
              <a href="#">
                <img
                  src="https://bizbookdirectorytemplate.com/images/apple.png"
                  alt=""
                  loading="lazy"
                />{" "}
              </a>
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
              <a href="">
                <span>Ad</span>
                <img
                  src="https://bizbookdirectorytemplate.com/images/ads/ads2.jpg"
                  alt=""
                  loading="lazy"
                />
              </a>
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
      <p>We connect you to service experts.</p>
      <span>Get experts</span>
    </div>
    <div className="ani-q2">
      <img
        src="https://bizbookdirectorytemplate.com/images/quote.png"
        alt=""
        loading="lazy"
      />
    </div>
  </div>
  {/* END */}
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
  <section>
  <div className="full-bot-book">
    <div className="container">
      <div className="row">
        <div className="bot-book">
          <div className="col-md-12 bb-text">
            <h4>List your business for FREE</h4>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour.
            </p>
            <a href="https://bizbookdirectorytemplate.com/pricing-details">
              Add my business <i className="material-icons">arrow_forward</i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<Footer/>
<BottomMenu/>
</>


    </div>
  )
}

export default page
