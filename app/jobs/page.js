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
          <h1>Find your next job now</h1>
          <p>Over 100,000+ jobs are waiting for you</p>
        </div>
        <br />
        <div className="job-sear">
          <form
            name="job_filter_form"
            id="job_filter_form"
            className="job_filter_form"
          >
            <ul>
              <li className="sr-sea">
                <select
                  className="chosen-select"
                  id="job-select-search"
                  name="serjobs"
                >
                  <option value={54}>Software</option>
                  <option value={53}>Technology</option>
                  <option value={52}>Service Industry:</option>
                  <option value={51}>Medical</option>
                  <option value={50}>Media</option>
                  <option value={49}>Law Enforcement</option>
                  <option value={48}>Education</option>
                  <option value={47}>Business</option>
                  <option value={46}>Arts</option>
                  <option value={45}>Aviation</option>
                </select>
              </li>
              <li className="sr-loc">
                <select
                  className="chosen-select"
                  id="job-select-city"
                  name="serjobsloc"
                >
                  <option value={1}>Chennai</option>
                  <option value={4}>Bengaluru</option>
                  <option value={10}>Los Angeles</option>
                  <option value={18}>Delhi</option>
                </select>
              </li>
              <li className="sr-btn">
                <button id="job_filter_submit">
                  <i className="material-icons">search</i>
                </button>
              </li>
            </ul>
          </form>
        </div>
        <div className="job-pop-tag space-x-2">
          <a href="https://bizbookdirectorytemplate.com/all-jobs/software">
            Software
          </a>
          <a href="https://bizbookdirectorytemplate.com/all-jobs/aviation">
            Aviation
          </a>
          <a href="https://bizbookdirectorytemplate.com/all-jobs/business">
            Business
          </a>
          <a href="https://bizbookdirectorytemplate.com/all-jobs/service-industry">
            Service Industry:
          </a>
          <a href="https://bizbookdirectorytemplate.com/all-jobs/arts">Arts</a>
        </div>
        <div className="job-counts">
          <ul>
            <li>
              <span className="count1">05</span>
              <h4>Job Posted</h4>
            </li>
            <li>
              <span className="count1">04</span>
              <h4>Companies</h4>
            </li>
            <li>
              <span className="count1">06</span>
              <h4>Employees</h4>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
    </section>
    <section>
  <div className="jobs-cate">
    <div className="container">
      <div className="row">
        <div className="sub-tit">
          <h2>Popular Categories</h2>
          <p>Find jobs from various domain</p>
        </div>
        <div className="job-cate-main">
          <ul>
            <li>
              <div>
                <h4>Software</h4>
                <span>2 Jobs</span>
                <a
                  href="https://bizbookdirectorytemplate.com/all-jobs/software"
                  className="fcli"
                />
              </div>
            </li>
            <li>
              <div>
                <h4>Aviation</h4>
                <span>1 Jobs</span>
                <a
                  href="https://bizbookdirectorytemplate.com/all-jobs/aviation"
                  className="fcli"
                />
              </div>
            </li>
            <li>
              <div>
                <h4>Business</h4>
                <span>1 Jobs</span>
                <a
                  href="https://bizbookdirectorytemplate.com/all-jobs/business"
                  className="fcli"
                />
              </div>
            </li>
            <li>
              <div>
                <h4>Service Industry:</h4>
                <span>1 Jobs</span>
                <a
                  href="https://bizbookdirectorytemplate.com/all-jobs/service-industry"
                  className="fcli"
                />
              </div>
            </li>
            <li>
              <div>
                <h4>Arts</h4>
                <span>0 Jobs</span>
                <a
                  href="https://bizbookdirectorytemplate.com/all-jobs/arts"
                  className="fcli"
                />
              </div>
            </li>
            <li>
              <div>
                <h4>Education</h4>
                <span>0 Jobs</span>
                <a
                  href="https://bizbookdirectorytemplate.com/all-jobs/education"
                  className="fcli"
                />
              </div>
            </li>
            <li>
              <div>
                <h4>Law Enforcement</h4>
                <span>0 Jobs</span>
                <a
                  href="https://bizbookdirectorytemplate.com/all-jobs/law-enforcement"
                  className="fcli"
                />
              </div>
            </li>
            <li>
              <div>
                <h4>Media</h4>
                <span>0 Jobs</span>
                <a
                  href="https://bizbookdirectorytemplate.com/all-jobs/media"
                  className="fcli"
                />
              </div>
            </li>
            <li>
              <div>
                <h4>Medical</h4>
                <span>0 Jobs</span>
                <a
                  href="https://bizbookdirectorytemplate.com/all-jobs/medical"
                  className="fcli"
                />
              </div>
            </li>
            <li>
              <div>
                <h4>Technology</h4>
                <span>0 Jobs</span>
                <a
                  href="https://bizbookdirectorytemplate.com/all-jobs/technology"
                  className="fcli"
                />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>
<section>
  <div className="str hom2-cus hom4-fea">
    <div className="container">
      <div className="row">
        <div className="home-tit">
          <h2>
            <span>Trending Jobs</span>
          </h2>
          <p>
            lacinia viverra lectus. Fusce imperdiet ullamcorper metus eu
            fringilla.
          </p>
        </div>
        <div className="job-tre">
          <ul>
            <li>
              <div className="inn">
                <div className="jbtre-img">
                  <div className="jbtre-img1">
                    <img
                      src="https://bizbookdirectorytemplate.com/jobs/images/jobs/"
                      alt=""
                      loading="lazy"
                    />
                  </div>
                  <div className="jbtre-img2">
                    <h4>IT</h4>
                    <span>Bengaluru</span>
                    <div className="jbtre-days">
                      <span>1 Month ago</span>
                      <span>2 Applicants</span>
                    </div>
                  </div>
                </div>
                <div className="jbtre-con">
                  <span>Permanent</span>
                  <span>engineer</span>
                  <span>02 Openings</span>
                </div>
                <div className="jbtre-sale">
                  <span>Salary</span>
                  <span className="empsal">111111111K</span>
                </div>
                <div className="jbtre-apl">
                  <span className="job-box-cta">Apply now</span>
                  <span>More details</span>
                </div>
                <a
                  href="https://bizbookdirectorytemplate.com/job/it"
                  className="job-full-cta"
                />
              </div>
            </li>
            <li>
              <div className="inn">
                <div className="jbtre-img">
                  <div className="jbtre-img1">
                    <img
                      src="https://bizbookdirectorytemplate.com/jobs/images/jobs/"
                      alt=""
                      loading="lazy"
                    />
                  </div>
                  <div className="jbtre-img2">
                    <h4>doll</h4>
                    <span>Delhi</span>
                    <div className="jbtre-days">
                      <span>2 Months ago</span>
                      <span>0 Applicants</span>
                    </div>
                  </div>
                </div>
                <div className="jbtre-con">
                  <span>Freelance</span>
                  <span>,m,mm</span>
                  <span>55555 Openings</span>
                </div>
                <div className="jbtre-sale">
                  <span>Salary</span>
                  <span className="empsal">10K</span>
                </div>
                <div className="jbtre-apl">
                  <span className="job-box-cta">Apply now</span>
                  <span>More details</span>
                </div>
                <a
                  href="https://bizbookdirectorytemplate.com/job/doll"
                  className="job-full-cta"
                />
              </div>
            </li>
            <li>
              <div className="inn">
                <div className="jbtre-img">
                  <div className="jbtre-img1">
                    <img
                      src="https://bizbookdirectorytemplate.com/jobs/images/jobs/"
                      alt=""
                      loading="lazy"
                    />
                  </div>
                  <div className="jbtre-img2">
                    <h4>Operario de producción</h4>
                    <span>Los Angeles</span>
                    <div className="jbtre-days">
                      <span>4 Months ago</span>
                      <span>0 Applicants</span>
                    </div>
                  </div>
                </div>
                <div className="jbtre-con">
                  <span>Contract</span>
                  <span>Reclutador</span>
                  <span>40 Openings</span>
                </div>
                <div className="jbtre-sale">
                  <span>Salary</span>
                  <span className="empsal">2600K</span>
                </div>
                <div className="jbtre-apl">
                  <span className="job-box-cta">Apply now</span>
                  <span>More details</span>
                </div>
                <a
                  href="https://bizbookdirectorytemplate.com/job/operario-de-producci--n"
                  className="job-full-cta"
                />
              </div>
            </li>
          </ul>
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
            <span>Join us Now</span>
          </h2>
          <p>
            We connect with targeted customers for greater business conversion
          </p>
        </div>
        <div className="hom2-hom-ban-main">
          <div className="hom2-hom-ban hom2-hom-ban1">
            <h2>Are you looking for a job?</h2>
            <p>
              Tell us what kind of a job you are looking for and stay updated
              with latest opportunities.
            </p>
            <a href="https://bizbookdirectorytemplate.com/login?login=register">
              Register for free
            </a>
          </div>
          <div className="hom2-hom-ban hom2-hom-ban2">
            <h2>Post a Job &amp; Hire best candidates </h2>
            <p>Post your job openings and hire more professional candidates</p>
            <a href="https://bizbookdirectorytemplate.com/login?login=register">
              Post a Job
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<section>
  <div className="str hom2-cus hom4-fea">
    <div className="container">
      <div className="row">
        <div className="home-tit">
          <h2>
            <span>Premium Jobs</span>
          </h2>
          <p>
            lacinia viverra lectus. Fusce imperdiet ullamcorper metus eu
            fringilla.
          </p>
        </div>
        <div className="hom2-cus-sli job-list">
          <ul className="multiple-items1">
          <Slider {...settings} >
            <li>
              <div className="job-box">
                <div className="job-box-img">
                  <img
                    src="https://bizbookdirectorytemplate.com/jobs/images/jobs/"
                    alt=""
                    loading="lazy"
                  />
                </div>
                <div className="job-days">
                  <span className="day">Just now</span>
                  <span className="apl">0 Applicants</span>
                </div>
                <div className="job-box-con">
                  <h4 />
                  <span />
                  <span />
                  <span>0 Openings</span>
                </div>
                <div className="job-box-apl">
                  <span className="job-box-cta">Apply now</span>
                </div>
                <a
                  href="https://bizbookdirectorytemplate.com/job/"
                  className="job-full-cta"
                />
              </div>
            </li>
            <li>
              <div className="job-box">
                <div className="job-box-img">
                  <img
                    src="https://bizbookdirectorytemplate.com/jobs/images/jobs/"
                    alt=""
                    loading="lazy"
                  />
                </div>
                <div className="job-days">
                  <span className="day">Just now</span>
                  <span className="apl">0 Applicants</span>
                </div>
                <div className="job-box-con">
                  <h4 />
                  <span />
                  <span />
                  <span>0 Openings</span>
                </div>
                <div className="job-box-apl">
                  <span className="job-box-cta">Apply now</span>
                </div>
                <a
                  href="https://bizbookdirectorytemplate.com/job/"
                  className="job-full-cta"
                />
              </div>
            </li>
            <li>
              <div className="job-box">
                <div className="job-box-img">
                  <img
                    src="https://bizbookdirectorytemplate.com/jobs/images/jobs/"
                    alt=""
                    loading="lazy"
                  />
                </div>
                <div className="job-days">
                  <span className="day">Just now</span>
                  <span className="apl">0 Applicants</span>
                </div>
                <div className="job-box-con">
                  <h4 />
                  <span />
                  <span />
                  <span>0 Openings</span>
                </div>
                <div className="job-box-apl">
                  <span className="job-box-cta">Apply now</span>
                </div>
                <a
                  href="https://bizbookdirectorytemplate.com/job/"
                  className="job-full-cta"
                />
              </div>
            </li>
            <li>
              <div className="job-box">
                <div className="job-box-img">
                  <img
                    src="https://bizbookdirectorytemplate.com/jobs/images/jobs/"
                    alt=""
                    loading="lazy"
                  />
                </div>
                <div className="job-days">
                  <span className="day">Just now</span>
                  <span className="apl">0 Applicants</span>
                </div>
                <div className="job-box-con">
                  <h4 />
                  <span />
                  <span />
                  <span>0 Openings</span>
                </div>
                <div className="job-box-apl">
                  <span className="job-box-cta">Apply now</span>
                </div>
                <a
                  href="https://bizbookdirectorytemplate.com/job/"
                  className="job-full-cta"
                />
              </div>
            </li>
            <li>
              <div className="job-box">
                <div className="job-box-img">
                  <img
                    src="https://bizbookdirectorytemplate.com/jobs/images/jobs/"
                    alt=""
                    loading="lazy"
                  />
                </div>
                <div className="job-days">
                  <span className="day">Just now</span>
                  <span className="apl">0 Applicants</span>
                </div>
                <div className="job-box-con">
                  <h4 />
                  <span />
                  <span />
                  <span>0 Openings</span>
                </div>
                <div className="job-box-apl">
                  <span className="job-box-cta">Apply now</span>
                </div>
                <a
                  href="https://bizbookdirectorytemplate.com/job/"
                  className="job-full-cta"
                />
              </div>
            </li>
            <li>
              <div className="job-box">
                <div className="job-box-img">
                  <img
                    src="https://bizbookdirectorytemplate.com/jobs/images/jobs/"
                    alt=""
                    loading="lazy"
                  />
                </div>
                <div className="job-days">
                  <span className="day">Just now</span>
                  <span className="apl">0 Applicants</span>
                </div>
                <div className="job-box-con">
                  <h4 />
                  <span />
                  <span />
                  <span>0 Openings</span>
                </div>
                <div className="job-box-apl">
                  <span className="job-box-cta">Apply now</span>
                </div>
                <a
                  href="https://bizbookdirectorytemplate.com/job/"
                  className="job-full-cta"
                />
              </div>
            </li>
            <li>
              <div className="job-box">
                <div className="job-box-img">
                  <img
                    src="https://bizbookdirectorytemplate.com/jobs/images/jobs/"
                    alt=""
                    loading="lazy"
                  />
                </div>
                <div className="job-days">
                  <span className="day">Just now</span>
                  <span className="apl">0 Applicants</span>
                </div>
                <div className="job-box-con">
                  <h4 />
                  <span />
                  <span />
                  <span>0 Openings</span>
                </div>
                <div className="job-box-apl">
                  <span className="job-box-cta">Apply now</span>
                </div>
                <a
                  href="https://bizbookdirectorytemplate.com/job/"
                  className="job-full-cta"
                />
              </div>
            </li>
            <li>
              <div className="job-box">
                <div className="job-box-img">
                  <img
                    src="https://bizbookdirectorytemplate.com/jobs/images/jobs/"
                    alt=""
                    loading="lazy"
                  />
                </div>
                <div className="job-days">
                  <span className="day">Just now</span>
                  <span className="apl">0 Applicants</span>
                </div>
                <div className="job-box-con">
                  <h4 />
                  <span />
                  <span />
                  <span>0 Openings</span>
                </div>
                <div className="job-box-apl">
                  <span className="job-box-cta">Apply now</span>
                </div>
                <a
                  href="https://bizbookdirectorytemplate.com/job/"
                  className="job-full-cta"
                />
              </div>
            </li>
            <li>
              <div className="job-box">
                <div className="job-box-img">
                  <img
                    src="https://bizbookdirectorytemplate.com/jobs/images/jobs/"
                    alt=""
                    loading="lazy"
                  />
                </div>
                <div className="job-days">
                  <span className="day">Just now</span>
                  <span className="apl">0 Applicants</span>
                </div>
                <div className="job-box-con">
                  <h4 />
                  <span />
                  <span />
                  <span>0 Openings</span>
                </div>
                <div className="job-box-apl">
                  <span className="job-box-cta">Apply now</span>
                </div>
                <a
                  href="https://bizbookdirectorytemplate.com/job/"
                  className="job-full-cta"
                />
              </div>
            </li>
            <li>
              <div className="job-box">
                <div className="job-box-img">
                  <img
                    src="https://bizbookdirectorytemplate.com/jobs/images/jobs/"
                    alt=""
                    loading="lazy"
                  />
                </div>
                <div className="job-days">
                  <span className="day">Just now</span>
                  <span className="apl">0 Applicants</span>
                </div>
                <div className="job-box-con">
                  <h4 />
                  <span />
                  <span />
                  <span>0 Openings</span>
                </div>
                <div className="job-box-apl">
                  <span className="job-box-cta">Apply now</span>
                </div>
                <a
                  href="https://bizbookdirectorytemplate.com/job/"
                  className="job-full-cta"
                />
              </div>
            </li>
            </Slider>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>
<>
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
</>
<>
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
</>


<>
<Footer/>
<BottomMenu/>
</>


    </div>
  )
}

export default page
