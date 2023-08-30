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
  <section className=" blog-head eve-head">
    <div className="container">
      <div className="blog-head-inn">
        <h1>Events</h1>
        <p>Here post your events, seminar, webinar, fetivals and more</p>
      </div>
      <div className="ban-search">
        <form>
          <ul>
            <li className="sr-sea">
              <input
                type="text"
                id="event-search"
                className="autocomplete"
                placeholder="Search event in your city..."
              />
            </li>
          </ul>
        </form>
      </div>
    </div>
  </section>
  {/*END*/}
  {/* START */}
  <section className=" event-body">
    <div className="container">
      <div className="us-ppg-com">
        <ul id="intseres">
          <li>
            <div className="eve-box">
              <div>
                <Link href="/event-details">
                  <img src="/events/1.png" alt="" />
                  <span>
                    Dec<b>28</b>
                  </span>
                </Link>
              </div>
              <div>
                <h4>
                  <Link href="/event-details">New year celebration 2020</Link>
                </h4>
                <span className="addr">
                  No:2, 4th Avenue, Newyork, USA, Near to Airport
                </span>
                <span className="pho">98765498465</span>
              </div>
              <div>
                <div className="auth">
                  <img src="/user/1.png" alt="" /> <b>Hosted by</b>
                  <br />
                  <h4>Directory Finder</h4>
                  <Link
                    target="_blank"
                    href="/event-details"
                    className="fclick"
                  />
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="eve-box">
              <div>
                <Link href="/event-details">
                  <img src="/events/2.jpg" alt="" />
                  <span>
                    Dec<b>28</b>
                  </span>
                </Link>
              </div>
              <div>
                <h4>
                  <Link href="/event-details">Online Marketers Meet-Up</Link>
                </h4>
                <span className="addr">
                  No:2, 4th Avenue, Newyork, USA, Near to Airport
                </span>
                <span className="pho">98765498465</span>
              </div>
              <div>
                <div className="auth">
                  <img src="/user/2.jpeg" alt="" /> <b>Hosted by</b>
                  <br />
                  <h4>Directory Finder</h4>
                  <Link
                    target="_blank"
                    href="/event-details"
                    className="fclick"
                  />
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="eve-box">
              <div>
                <Link href="/event-details">
                  <img src="/events/3.jpeg" alt="" />
                  <span>
                    Dec<b>28</b>
                  </span>
                </Link>
              </div>
              <div>
                <h4>
                  <Link href="/event-details">Lunar New Year 2020</Link>
                </h4>
                <span className="addr">
                  No:2, 4th Avenue, Newyork, USA, Near to Airport
                </span>
                <span className="pho">98765498465</span>
              </div>
              <div>
                <div className="auth">
                  <img src="/user/3.jpg" alt="" /> <b>Hosted by</b>
                  <br />
                  <h4>Directory Finder</h4>
                  <Link
                    target="_blank"
                    href="/event-details"
                    className="fclick"
                  />
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="eve-box">
              <div>
                <Link href="/event-details">
                  <img src="/events/4.jpg" alt="" />
                  <span>
                    Dec<b>28</b>
                  </span>
                </Link>
              </div>
              <div>
                <h4>
                  <Link href="/event-details">Poway Winter Festival</Link>
                </h4>
                <span className="addr">
                  No:2, 4th Avenue, Newyork, USA, Near to Airport
                </span>
                <span className="pho">98765498465</span>
              </div>
              <div>
                <div className="auth">
                  <img src="/user/4.jpeg" alt="" /> <b>Hosted by</b>
                  <br />
                  <h4>Directory Finder</h4>
                  <Link
                    target="_blank"
                    href="/event-details"
                    className="fclick"
                  />
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="eve-box">
              <div>
                <Link href="/event-details">
                  <img src="/events/5.jpg" alt="" />
                  <span>
                    Dec<b>28</b>
                  </span>
                </Link>
              </div>
              <div>
                <h4>
                  <Link href="/event-details">Car Fest 2020</Link>
                </h4>
                <span className="addr">
                  No:2, 4th Avenue, Newyork, USA, Near to Airport
                </span>
                <span className="pho">98765498465</span>
              </div>
              <div>
                <div className="auth">
                  <img src="/user/5.jpeg" alt="" /> <b>Hosted by</b>
                  <br />
                  <h4>Directory Finder</h4>
                  <Link
                    target="_blank"
                    href="/event-details"
                    className="fclick"
                  />
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="eve-box">
              <div>
                <Link href="/event-details">
                  <img src="/events/6.jpg" alt="" />
                  <span>
                    Dec<b>28</b>
                  </span>
                </Link>
              </div>
              <div>
                <h4>
                  <Link href="/event-details">Toyota Cars 20% Offer</Link>
                </h4>
                <span className="addr">
                  No:2, 4th Avenue, Newyork, USA, Near to Airport
                </span>
                <span className="pho">98765498465</span>
              </div>
              <div>
                <div className="auth">
                  <img src="/user/6.png" alt="" /> <b>Hosted by</b>
                  <br />
                  <h4>Directory Finder</h4>
                  <Link
                    target="_blank"
                    href="/event-details"
                    className="fclick"
                  />
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="eve-box">
              <div>
                <Link href="/event-details">
                  <img src="/events/7.jpg" alt="" />
                  <span>
                    Dec<b>28</b>
                  </span>
                </Link>
              </div>
              <div>
                <h4>
                  <Link href="/event-details">
                    Electrical Energy Saving Methods
                  </Link>
                </h4>
                <span className="addr">
                  No:2, 4th Avenue, Newyork, USA, Near to Airport
                </span>
                <span className="pho">98765498465</span>
              </div>
              <div>
                <div className="auth">
                  <img src="/user/7.jpg" alt="" /> <b>Hosted by</b>
                  <br />
                  <h4>Directory Finder</h4>
                  <Link
                    target="_blank"
                    href="/event-details"
                    className="fclick"
                  />
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="eve-box">
              <div>
                <Link href="/event-details">
                  <img src="/events/8.jpeg" alt="" />
                  <span>
                    Dec<b>28</b>
                  </span>
                </Link>
              </div>
              <div>
                <h4>
                  <Link href="/event-details">States Soccer World Cup 2022</Link>
                </h4>
                <span className="addr">
                  No:2, 4th Avenue, Newyork, USA, Near to Airport
                </span>
                <span className="pho">98765498465</span>
              </div>
              <div>
                <div className="auth">
                  <img src="/user/8.png" alt="" /> <b>Hosted by</b>
                  <br />
                  <h4>Directory Finder</h4>
                  <Link
                    target="_blank"
                    href="/event-details"
                    className="fclick"
                  />
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="eve-box">
              <div>
                <Link href="/event-details">
                  <img src="/events/1.png" alt="" />
                  <span>
                    Dec<b>28</b>
                  </span>
                </Link>
              </div>
              <div>
                <h4>
                  <Link href="/event-details">
                    College Volley Ball Tournaments 2021
                  </Link>
                </h4>
                <span className="addr">
                  No:2, 4th Avenue, Newyork, USA, Near to Airport
                </span>
                <span className="pho">98765498465</span>
              </div>
              <div>
                <div className="auth">
                  <img src="/user/1.png" alt="" /> <b>Hosted by</b>
                  <br />
                  <h4>Directory Finder</h4>
                  <Link
                    target="_blank"
                    href="/event-details"
                    className="fclick"
                  />
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="eve-box">
              <div>
                <Link href="/event-details">
                  <img src="/events/1.png" alt="" />
                  <span>
                    Dec<b>28</b>
                  </span>
                </Link>
              </div>
              <div>
                <h4>
                  <Link href="/event-details">New year celebration 2020</Link>
                </h4>
                <span className="addr">
                  No:2, 4th Avenue, Newyork, USA, Near to Airport
                </span>
                <span className="pho">98765498465</span>
              </div>
              <div>
                <div className="auth">
                  <img src="/user/1.png" alt="" /> <b>Hosted by</b>
                  <br />
                  <h4>Directory Finder</h4>
                  <Link
                    target="_blank"
                    href="/event-details"
                    className="fclick"
                  />
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="eve-box">
              <div>
                <Link href="/event-details">
                  <img src="/events/2.jpg" alt="" />
                  <span>
                    Dec<b>28</b>
                  </span>
                </Link>
              </div>
              <div>
                <h4>
                  <Link href="/event-details">Online Marketers Meet-Up</Link>
                </h4>
                <span className="addr">
                  No:2, 4th Avenue, Newyork, USA, Near to Airport
                </span>
                <span className="pho">98765498465</span>
              </div>
              <div>
                <div className="auth">
                  <img src="/user/2.jpeg" alt="" /> <b>Hosted by</b>
                  <br />
                  <h4>Directory Finder</h4>
                  <Link
                    target="_blank"
                    href="/event-details"
                    className="fclick"
                  />
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="eve-box">
              <div>
                <Link href="/event-details">
                  <img src="/events/3.jpeg" alt="" />
                  <span>
                    Dec<b>28</b>
                  </span>
                </Link>
              </div>
              <div>
                <h4>
                  <Link href="/event-details">Lunar New Year 2020</Link>
                </h4>
                <span className="addr">
                  No:2, 4th Avenue, Newyork, USA, Near to Airport
                </span>
                <span className="pho">98765498465</span>
              </div>
              <div>
                <div className="auth">
                  <img src="/user/3.jpg" alt="" /> <b>Hosted by</b>
                  <br />
                  <h4>Directory Finder</h4>
                  <Link
                    target="_blank"
                    href="/event-details"
                    className="fclick"
                  />
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="eve-box">
              <div>
                <Link href="/event-details">
                  <img src="/events/4.jpg" alt="" />
                  <span>
                    Dec<b>28</b>
                  </span>
                </Link>
              </div>
              <div>
                <h4>
                  <Link href="/event-details">Poway Winter Festival</Link>
                </h4>
                <span className="addr">
                  No:2, 4th Avenue, Newyork, USA, Near to Airport
                </span>
                <span className="pho">98765498465</span>
              </div>
              <div>
                <div className="auth">
                  <img src="/user/4.jpeg" alt="" /> <b>Hosted by</b>
                  <br />
                  <h4>Directory Finder</h4>
                  <Link
                    target="_blank"
                    href="/event-details"
                    className="fclick"
                  />
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="eve-box">
              <div>
                <Link href="/event-details">
                  <img src="/events/5.jpg" alt="" />
                  <span>
                    Dec<b>28</b>
                  </span>
                </Link>
              </div>
              <div>
                <h4>
                  <Link href="/event-details">Car Fest 2020</Link>
                </h4>
                <span className="addr">
                  No:2, 4th Avenue, Newyork, USA, Near to Airport
                </span>
                <span className="pho">98765498465</span>
              </div>
              <div>
                <div className="auth">
                  <img src="/user/5.jpeg" alt="" /> <b>Hosted by</b>
                  <br />
                  <h4>Directory Finder</h4>
                  <Link
                    target="_blank"
                    href="/event-details"
                    className="fclick"
                  />
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="eve-box">
              <div>
                <Link href="/event-details">
                  <img src="/events/6.jpg" alt="" />
                  <span>
                    Dec<b>28</b>
                  </span>
                </Link>
              </div>
              <div>
                <h4>
                  <Link href="/event-details">Toyota Cars 20% Offer</Link>
                </h4>
                <span className="addr">
                  No:2, 4th Avenue, Newyork, USA, Near to Airport
                </span>
                <span className="pho">98765498465</span>
              </div>
              <div>
                <div className="auth">
                  <img src="/user/6.png" alt="" /> <b>Hosted by</b>
                  <br />
                  <h4>Directory Finder</h4>
                  <Link
                    target="_blank"
                    href="/event-details"
                    className="fclick"
                  />
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="eve-box">
              <div>
                <Link href="/event-details">
                  <img src="/events/7.jpg" alt="" />
                  <span>
                    Dec<b>28</b>
                  </span>
                </Link>
              </div>
              <div>
                <h4>
                  <Link href="/event-details">
                    Electrical Energy Saving Methods
                  </Link>
                </h4>
                <span className="addr">
                  No:2, 4th Avenue, Newyork, USA, Near to Airport
                </span>
                <span className="pho">98765498465</span>
              </div>
              <div>
                <div className="auth">
                  <img src="/user/7.jpg" alt="" /> <b>Hosted by</b>
                  <br />
                  <h4>Directory Finder</h4>
                  <Link
                    target="_blank"
                    href="/event-details"
                    className="fclick"
                  />
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="eve-box">
              <div>
                <Link href="/event-details">
                  <img src="/events/8.jpeg" alt="" />
                  <span>
                    Dec<b>28</b>
                  </span>
                </Link>
              </div>
              <div>
                <h4>
                  <Link href="/event-details">States Soccer World Cup 2022</Link>
                </h4>
                <span className="addr">
                  No:2, 4th Avenue, Newyork, USA, Near to Airport
                </span>
                <span className="pho">98765498465</span>
              </div>
              <div>
                <div className="auth">
                  <img src="/user/8.png" alt="" /> <b>Hosted by</b>
                  <br />
                  <h4>Directory Finder</h4>
                  <Link
                    target="_blank"
                    href="/event-details"
                    className="fclick"
                  />
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="eve-box">
              <div>
                <Link href="/event-details">
                  <img src="/events/1.png" alt="" />
                  <span>
                    Dec<b>28</b>
                  </span>
                </Link>
              </div>
              <div>
                <h4>
                  <Link href="/event-details">
                    College Volley Ball Tournaments 2021
                  </Link>
                </h4>
                <span className="addr">
                  No:2, 4th Avenue, Newyork, USA, Near to Airport
                </span>
                <span className="pho">98765498465</span>
              </div>
              <div>
                <div className="auth">
                  <img src="/user/1.png" alt="" /> <b>Hosted by</b>
                  <br />
                  <h4>Directory Finder</h4>
                  <Link
                    target="_blank"
                    href="/event-details"
                    className="fclick"
                  />
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="eve-box">
              <div>
                <Link href="/event-details">
                  <img src="/events/1.png" alt="" />
                  <span>
                    Dec<b>28</b>
                  </span>
                </Link>
              </div>
              <div>
                <h4>
                  <Link href="/event-details">New year celebration 2020</Link>
                </h4>
                <span className="addr">
                  No:2, 4th Avenue, Newyork, USA, Near to Airport
                </span>
                <span className="pho">98765498465</span>
              </div>
              <div>
                <div className="auth">
                  <img src="/user/1.png" alt="" /> <b>Hosted by</b>
                  <br />
                  <h4>Directory Finder</h4>
                  <Link
                    target="_blank"
                    href="/event-details"
                    className="fclick"
                  />
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="eve-box">
              <div>
                <Link href="/event-details">
                  <img src="/events/2.jpg" alt="" />
                  <span>
                    Dec<b>28</b>
                  </span>
                </Link>
              </div>
              <div>
                <h4>
                  <Link href="/event-details">Online Marketers Meet-Up</Link>
                </h4>
                <span className="addr">
                  No:2, 4th Avenue, Newyork, USA, Near to Airport
                </span>
                <span className="pho">98765498465</span>
              </div>
              <div>
                <div className="auth">
                  <img src="/user/2.jpeg" alt="" /> <b>Hosted by</b>
                  <br />
                  <h4>Directory Finder</h4>
                  <Link
                    target="_blank"
                    href="/event-details"
                    className="fclick"
                  />
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="eve-box">
              <div>
                <Link href="/event-details">
                  <img src="/events/3.jpeg" alt="" />
                  <span>
                    Dec<b>28</b>
                  </span>
                </Link>
              </div>
              <div>
                <h4>
                  <Link href="/event-details">Lunar New Year 2020</Link>
                </h4>
                <span className="addr">
                  No:2, 4th Avenue, Newyork, USA, Near to Airport
                </span>
                <span className="pho">98765498465</span>
              </div>
              <div>
                <div className="auth">
                  <img src="/user/3.jpg" alt="" /> <b>Hosted by</b>
                  <br />
                  <h4>Directory Finder</h4>
                  <Link
                    target="_blank"
                    href="/event-details"
                    className="fclick"
                  />
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="eve-box">
              <div>
                <Link href="/event-details">
                  <img src="/events/4.jpg" alt="" />
                  <span>
                    Dec<b>28</b>
                  </span>
                </Link>
              </div>
              <div>
                <h4>
                  <Link href="/event-details">Poway Winter Festival</Link>
                </h4>
                <span className="addr">
                  No:2, 4th Avenue, Newyork, USA, Near to Airport
                </span>
                <span className="pho">98765498465</span>
              </div>
              <div>
                <div className="auth">
                  <img src="/user/4.jpeg" alt="" /> <b>Hosted by</b>
                  <br />
                  <h4>Directory Finder</h4>
                  <Link
                    target="_blank"
                    href="/event-details"
                    className="fclick"
                  />
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="eve-box">
              <div>
                <Link href="/event-details">
                  <img src="/events/5.jpg" alt="" />
                  <span>
                    Dec<b>28</b>
                  </span>
                </Link>
              </div>
              <div>
                <h4>
                  <Link href="/event-details">Car Fest 2020</Link>
                </h4>
                <span className="addr">
                  No:2, 4th Avenue, Newyork, USA, Near to Airport
                </span>
                <span className="pho">98765498465</span>
              </div>
              <div>
                <div className="auth">
                  <img src="/user/5.jpeg" alt="" /> <b>Hosted by</b>
                  <br />
                  <h4>Directory Finder</h4>
                  <Link
                    target="_blank"
                    href="/event-details"
                    className="fclick"
                  />
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="eve-box">
              <div>
                <Link href="/event-details">
                  <img src="/events/6.jpg" alt="" />
                  <span>
                    Dec<b>28</b>
                  </span>
                </Link>
              </div>
              <div>
                <h4>
                  <Link href="/event-details">Toyota Cars 20% Offer</Link>
                </h4>
                <span className="addr">
                  No:2, 4th Avenue, Newyork, USA, Near to Airport
                </span>
                <span className="pho">98765498465</span>
              </div>
              <div>
                <div className="auth">
                  <img src="/user/6.png" alt="" /> <b>Hosted by</b>
                  <br />
                  <h4>Directory Finder</h4>
                  <Link
                    target="_blank"
                    href="/event-details"
                    className="fclick"
                  />
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="eve-box">
              <div>
                <Link href="/event-details">
                  <img src="/events/7.jpg" alt="" />
                  <span>
                    Dec<b>28</b>
                  </span>
                </Link>
              </div>
              <div>
                <h4>
                  <Link href="/event-details">
                    Electrical Energy Saving Methods
                  </Link>
                </h4>
                <span className="addr">
                  No:2, 4th Avenue, Newyork, USA, Near to Airport
                </span>
                <span className="pho">98765498465</span>
              </div>
              <div>
                <div className="auth">
                  <img src="/user/7.jpg" alt="" /> <b>Hosted by</b>
                  <br />
                  <h4>Directory Finder</h4>
                  <Link
                    target="_blank"
                    href="/event-details"
                    className="fclick"
                  />
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="eve-box">
              <div>
                <Link href="/event-details">
                  <img src="/events/8.jpeg" alt="" />
                  <span>
                    Dec<b>28</b>
                  </span>
                </Link>
              </div>
              <div>
                <h4>
                  <Link href="/event-details">States Soccer World Cup 2022</Link>
                </h4>
                <span className="addr">
                  No:2, 4th Avenue, Newyork, USA, Near to Airport
                </span>
                <span className="pho">98765498465</span>
              </div>
              <div>
                <div className="auth">
                  <img src="/user/8.png" alt="" /> <b>Hosted by</b>
                  <br />
                  <h4>Directory Finder</h4>
                  <Link
                    target="_blank"
                    href="/event-details"
                    className="fclick"
                  />
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="eve-box">
              <div>
                <Link href="/event-details">
                  <img src="/events/1.png" alt="" />
                  <span>
                    Dec<b>28</b>
                  </span>
                </Link>
              </div>
              <div>
                <h4>
                  <Link href="/event-details">
                    College Volley Ball Tournaments 2021
                  </Link>
                </h4>
                <span className="addr">
                  No:2, 4th Avenue, Newyork, USA, Near to Airport
                </span>
                <span className="pho">98765498465</span>
              </div>
              <div>
                <div className="auth">
                  <img src="/user/1.png" alt="" /> <b>Hosted by</b>
                  <br />
                  <h4>Directory Finder</h4>
                  <Link
                    target="_blank"
                    href="/event-details"
                    className="fclick"
                  />
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
  {/*END*/}
  <section>
    <div className="pop-ups pop-quo">
      {/* The Modal */}
      <div className="modal fade" id="quote">
        <div className="modal-dialog">
          <div className="modal-content">
            <button type="button" className="close" data-dismiss="modal">
              ×
            </button>
            {/* Modal Header */}
            <div className="quote-pop">
              <h4>Get quote</h4>
              <form>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter name*"
                    required=""
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter email*"
                    pattern="^[\w]{1,}[\w.+-]{0,}@[\w-]{2,}([.][a-zA-Z]{2,}|[.][\w-]{2,}[.][a-zA-Z]{2,})$"
                    title="Invalid email address"
                    required=""
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter mobile number *"
                    pattern="[7-9]{1}[0-9]{9}"
                    title="Phone number starting with 7-9 and remaing 9 digit with 0-9"
                    required=""
                  />
                </div>
                <div className="form-group">
                  <textarea
                    className="form-control"
                    rows={3}
                    placeholder="Enter your query or message"
                    defaultValue={""}
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
            <div className="log-bor">&nbsp;</div>
          </div>
        </div>
      </div>
    </div>
  </section>
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
  <Footer/>
  <BottomMenu/>
</>

    </div>
  )
}

export default page
