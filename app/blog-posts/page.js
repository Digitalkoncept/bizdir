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
  <section className=" blog-head">
    <div className="container">
      <div className="blog-head-inn">
        <h1>Blog posts</h1>
        <p>Here submit your blogs and make your own audiance.</p>
      </div>
      <div className="ban-search">
        <form>
          <ul>
            <li className="sr-sea">
              <input
                type="text"
                id="blog-search"
                className="autocomplete"
                placeholder="Search blog posts..."
              />
            </li>
          </ul>
        </form>
      </div>
    </div>
  </section>
  {/*END*/}
  {/* START */}
  <section className=" blog-body">
    <div className="container">
      <div className="us-ppg-com us-ppg-blog">
        <ul id="intseres">
          <li>
            <div className="pro-eve-box">
              <div>
                <img src="/blogs/blog1.jpeg" alt="" />
              </div>
              <div>
                <p>10, Dec 2019</p>
                <h2>Source and URL tracking</h2>
              </div>{" "}
              <Link href="/blog-details" className="fclick">
                &nbsp;
              </Link>
            </div>
          </li>
          <li>
            <div className="pro-eve-box">
              <div>
                <img src="/blogs/blog2.jpg" alt="" />
              </div>
              <div>
                <p>10, Dec 2019</p>
                <h2>Source and URL tracking</h2>
              </div>{" "}
              <Link href="/blog-details" className="fclick">
                &nbsp;
              </Link>
            </div>
          </li>
          <li>
            <div className="pro-eve-box">
              <div>
                <img src="/blogs/blog3.jpg" alt="" />
              </div>
              <div>
                <p>10, Dec 2019</p>
                <h2>Source and URL tracking</h2>
              </div>{" "}
              <Link href="/blog-details" className="fclick">
                &nbsp;
              </Link>
            </div>
          </li>
          <li>
            <div className="pro-eve-box">
              <div>
                <img src="/blogs/blog4.jpg" alt="" />
              </div>
              <div>
                <p>10, Dec 2019</p>
                <h2>Source and URL tracking</h2>
              </div>{" "}
              <Link href="/blog-details" className="fclick">
                &nbsp;
              </Link>
            </div>
          </li>
          <li>
            <div className="pro-eve-box">
              <div>
                <img src="/blogs/blog5.jpg" alt="" />
              </div>
              <div>
                <p>10, Dec 2019</p>
                <h2>Source and URL tracking</h2>
              </div>{" "}
              <Link href="/blog-details" className="fclick">
                &nbsp;
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
  {/*END*/}
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
