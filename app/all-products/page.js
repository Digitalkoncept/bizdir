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
  <section>
    <div className="all-list-bre all-pro-bre">
      <div className="container sec-all-list-bre">
        <div className="row">
          <h1>All Categories</h1>
          <ul>
            <li>
              <Link href="/index">Home</Link>
            </li>
            <li>
              <Link href="/all-products">All category</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  {/* END */}
  {/* START */}
  <section>
    <div className="all-listing all-products">
      {/*FILTER ON MOBILE VIEW*/}
      <div className="fil-mob fil-mob-act">
        <h4>
          Product filters <i className="material-icons">filter_list</i>
        </h4>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-3 fil-mob-view">
            <div className="all-filt">
              {" "}
              <span className="fil-mob-clo">
                <i className="material-icons">close</i>
              </span>
              {/*START*/}
              <div className="filt-com lhs-cate">
                <h4>Categories</h4>
                <div className="dropdown">
                  {/*                                <button id="dLabel" className="dropdown-select" type="button" data-toggle="dropdown"*/}
                  {/*                                        aria-haspopup="true" aria-expanded="false">*/}
                  {/*                                    All categories*/}
                  {/*                                </button>*/}
                  {/*                                <ul className="dropdown-menu" aria-labelledby="dLabel">*/}
                  {/*                                    */}
                  {/*                                    <li>*/}
                  {/*</li>*/}
                  {/*                                    */}
                  {/*                                </ul>*/}
                  <select
                    onchange="ProductSubcategoryFilter(this.value);"
                    className="cat_check"
                    name="cat_check"
                    id="cat_check"
                  >
                    <option value="">Select Category</option>?&gt;
                    <option value={15}>Clothings</option>?&gt;
                    <option value={16}>Footwear</option>?&gt;
                    <option value={17}>Shoes</option>?&gt;
                    <option value={18}>Jewellery</option>?&gt;
                    <option value={19}>Toys</option>?&gt;
                    <option value={20}>Baby care</option>?&gt;
                    <option value={21}>Fruits</option>?&gt;
                    <option value={22}>Mens</option>?&gt;
                    <option value={23}>Health</option>?&gt;
                    <option value={8}>Sports</option>?&gt;
                    <option value={7}>Education</option>?&gt;
                    <option value={6}>Electricals</option>?&gt;
                    <option value={5}>Automobilers</option>
                  </select>
                </div>
              </div>
              {/*END*/}
              {/*START*/}
              <div className="filt-com sub_cat_section pro-fil-sub">
                <h4>Sub category</h4>
                <ul>
                  <li>
                    <div className="chbox">
                      <input
                        type="checkbox"
                        className="sub_cat_check"
                        name="sub_cat_check"
                        defaultValue={44}
                        id="KRISHNA"
                      />
                      <label htmlFor="KRISHNA">KRISHNA</label>
                    </div>
                  </li>
                  <li>
                    <div className="chbox">
                      <input
                        type="checkbox"
                        className="sub_cat_check"
                        name="sub_cat_check"
                        defaultValue={43}
                        id="Electric toys"
                      />
                      <label htmlFor="Electric toys">Electric toys</label>
                    </div>
                  </li>
                  <li>
                    <div className="chbox">
                      <input
                        type="checkbox"
                        className="sub_cat_check"
                        name="sub_cat_check"
                        defaultValue={42}
                        id="Soft toys"
                      />
                      <label htmlFor="Soft toys">Soft toys</label>
                    </div>
                  </li>
                  <li>
                    <div className="chbox">
                      <input
                        type="checkbox"
                        className="sub_cat_check"
                        name="sub_cat_check"
                        defaultValue={41}
                        id="Diet food"
                      />
                      <label htmlFor="Diet food">Diet food</label>
                    </div>
                  </li>
                  <li>
                    <div className="chbox">
                      <input
                        type="checkbox"
                        className="sub_cat_check"
                        name="sub_cat_check"
                        defaultValue={40}
                        id="Health products"
                      />
                      <label htmlFor="Health products">Health products</label>
                    </div>
                  </li>
                  <li>
                    <div className="chbox">
                      <input
                        type="checkbox"
                        className="sub_cat_check"
                        name="sub_cat_check"
                        defaultValue={39}
                        id="Protein"
                      />
                      <label htmlFor="Protein">Protein</label>
                    </div>
                  </li>
                  <li>
                    <div className="chbox">
                      <input
                        type="checkbox"
                        className="sub_cat_check"
                        name="sub_cat_check"
                        defaultValue={38}
                        id="Food"
                      />
                      <label htmlFor="Food">Food</label>
                    </div>
                  </li>
                  <li>
                    <div className="chbox">
                      <input
                        type="checkbox"
                        className="sub_cat_check"
                        name="sub_cat_check"
                        defaultValue={37}
                        id="Tshirts"
                      />
                      <label htmlFor="Tshirts">Tshirts</label>
                    </div>
                  </li>
                  <li>
                    <div className="chbox">
                      <input
                        type="checkbox"
                        className="sub_cat_check"
                        name="sub_cat_check"
                        defaultValue={36}
                        id="Smart watches"
                      />
                      <label htmlFor="Smart watches">Smart watches</label>
                    </div>
                  </li>
                  <li>
                    <div className="chbox">
                      <input
                        type="checkbox"
                        className="sub_cat_check"
                        name="sub_cat_check"
                        defaultValue={35}
                        id="Camera lense"
                      />
                      <label htmlFor="Camera lense">Camera lense</label>
                    </div>
                  </li>
                  <li>
                    <div className="chbox">
                      <input
                        type="checkbox"
                        className="sub_cat_check"
                        name="sub_cat_check"
                        defaultValue={34}
                        id="Camera light"
                      />
                      <label htmlFor="Camera light">Camera light</label>
                    </div>
                  </li>
                  <li>
                    <div className="chbox">
                      <input
                        type="checkbox"
                        className="sub_cat_check"
                        name="sub_cat_check"
                        defaultValue={33}
                        id="Camera pouch"
                      />
                      <label htmlFor="Camera pouch">Camera pouch</label>
                    </div>
                  </li>
                  <li>
                    <div className="chbox">
                      <input
                        type="checkbox"
                        className="sub_cat_check"
                        name="sub_cat_check"
                        defaultValue={32}
                        id="Camera holder"
                      />
                      <label htmlFor="Camera holder">Camera holder</label>
                    </div>
                  </li>
                  <li>
                    <div className="chbox">
                      <input
                        type="checkbox"
                        className="sub_cat_check"
                        name="sub_cat_check"
                        defaultValue={31}
                        id="Fruits and vegitables"
                      />
                      <label htmlFor="Fruits and vegitables">
                        Fruits and vegitables
                      </label>
                    </div>
                  </li>
                  <li>
                    <div className="chbox">
                      <input
                        type="checkbox"
                        className="sub_cat_check"
                        name="sub_cat_check"
                        defaultValue={30}
                        id="Vegitables"
                      />
                      <label htmlFor="Vegitables">Vegitables</label>
                    </div>
                  </li>
                  <li>
                    <div className="chbox">
                      <input
                        type="checkbox"
                        className="sub_cat_check"
                        name="sub_cat_check"
                        defaultValue={29}
                        id="Fruits"
                      />
                      <label htmlFor="Fruits">Fruits</label>
                    </div>
                  </li>
                  <li>
                    <div className="chbox">
                      <input
                        type="checkbox"
                        className="sub_cat_check"
                        name="sub_cat_check"
                        defaultValue={28}
                        id="Digital products"
                      />
                      <label htmlFor="Digital products">Digital products</label>
                    </div>
                  </li>
                  <li>
                    <div className="chbox">
                      <input
                        type="checkbox"
                        className="sub_cat_check"
                        name="sub_cat_check"
                        defaultValue={27}
                        id="Digital books"
                      />
                      <label htmlFor="Digital books">Digital books</label>
                    </div>
                  </li>
                  <li>
                    <div className="chbox">
                      <input
                        type="checkbox"
                        className="sub_cat_check"
                        name="sub_cat_check"
                        defaultValue={26}
                        id="Books"
                      />
                      <label htmlFor="Books">Books</label>
                    </div>
                  </li>
                  <li>
                    <div className="chbox">
                      <input
                        type="checkbox"
                        className="sub_cat_check"
                        name="sub_cat_check"
                        defaultValue={25}
                        id="Jeans"
                      />
                      <label htmlFor="Jeans">Jeans</label>
                    </div>
                  </li>
                  <li>
                    <div className="chbox">
                      <input
                        type="checkbox"
                        className="sub_cat_check"
                        name="sub_cat_check"
                        defaultValue={24}
                        id="Shirts"
                      />
                      <label htmlFor="Shirts">Shirts</label>
                    </div>
                  </li>
                  <li>
                    <div className="chbox">
                      <input
                        type="checkbox"
                        className="sub_cat_check"
                        name="sub_cat_check"
                        defaultValue={23}
                        id="T-shirts"
                      />
                      <label htmlFor="T-shirts">T-shirts</label>
                    </div>
                  </li>
                  <li>
                    <div className="chbox">
                      <input
                        type="checkbox"
                        className="sub_cat_check"
                        name="sub_cat_check"
                        defaultValue={22}
                        id="PC games"
                      />
                      <label htmlFor="PC games">PC games</label>
                    </div>
                  </li>
                  <li>
                    <div className="chbox">
                      <input
                        type="checkbox"
                        className="sub_cat_check"
                        name="sub_cat_check"
                        defaultValue={21}
                        id="Playstations games"
                      />
                      <label htmlFor="Playstations games">
                        Playstations games
                      </label>
                    </div>
                  </li>
                  <li>
                    <div className="chbox">
                      <input
                        type="checkbox"
                        className="sub_cat_check"
                        name="sub_cat_check"
                        defaultValue={20}
                        id="Drone toys"
                      />
                      <label htmlFor="Drone toys">Drone toys</label>
                    </div>
                  </li>
                  <li>
                    <div className="chbox">
                      <input
                        type="checkbox"
                        className="sub_cat_check"
                        name="sub_cat_check"
                        defaultValue={19}
                        id="Brain games"
                      />
                      <label htmlFor="Brain games">Brain games</label>
                    </div>
                  </li>
                  <li>
                    <div className="chbox">
                      <input
                        type="checkbox"
                        className="sub_cat_check"
                        name="sub_cat_check"
                        defaultValue={18}
                        id="Educations toys"
                      />
                      <label htmlFor="Educations toys">Educations toys</label>
                    </div>
                  </li>
                  <li>
                    <div className="chbox">
                      <input
                        type="checkbox"
                        className="sub_cat_check"
                        name="sub_cat_check"
                        defaultValue={17}
                        id="Puma"
                      />
                      <label htmlFor="Puma">Puma</label>
                    </div>
                  </li>
                  <li>
                    <div className="chbox">
                      <input
                        type="checkbox"
                        className="sub_cat_check"
                        name="sub_cat_check"
                        defaultValue={16}
                        id="Nike"
                      />
                      <label htmlFor="Nike">Nike</label>
                    </div>
                  </li>
                  <li>
                    <div className="chbox">
                      <input
                        type="checkbox"
                        className="sub_cat_check"
                        name="sub_cat_check"
                        defaultValue={15}
                        id="Adidas"
                      />
                      <label htmlFor="Adidas">Adidas</label>
                    </div>
                  </li>
                  <li>
                    <div className="chbox">
                      <input
                        type="checkbox"
                        className="sub_cat_check"
                        name="sub_cat_check"
                        defaultValue={14}
                        id="Smart Tech"
                      />
                      <label htmlFor="Smart Tech">Smart Tech</label>
                    </div>
                  </li>
                  <li>
                    <div className="chbox">
                      <input
                        type="checkbox"
                        className="sub_cat_check"
                        name="sub_cat_check"
                        defaultValue={13}
                        id="Tablets"
                      />
                      <label htmlFor="Tablets">Tablets</label>
                    </div>
                  </li>
                  <li>
                    <div className="chbox">
                      <input
                        type="checkbox"
                        className="sub_cat_check"
                        name="sub_cat_check"
                        defaultValue={12}
                        id="Camera"
                      />
                      <label htmlFor="Camera">Camera</label>
                    </div>
                  </li>
                  <li>
                    <div className="chbox">
                      <input
                        type="checkbox"
                        className="sub_cat_check"
                        name="sub_cat_check"
                        defaultValue={11}
                        id="Speakers"
                      />
                      <label htmlFor="Speakers">Speakers</label>
                    </div>
                  </li>
                  <li>
                    <div className="chbox">
                      <input
                        type="checkbox"
                        className="sub_cat_check"
                        name="sub_cat_check"
                        defaultValue={10}
                        id="Laptop"
                      />
                      <label htmlFor="Laptop">Laptop</label>
                    </div>
                  </li>
                  <li>
                    <div className="chbox">
                      <input
                        type="checkbox"
                        className="sub_cat_check"
                        name="sub_cat_check"
                        defaultValue={9}
                        id="Smart TV"
                      />
                      <label htmlFor="Smart TV">Smart TV</label>
                    </div>
                  </li>
                  <li>
                    <div className="chbox">
                      <input
                        type="checkbox"
                        className="sub_cat_check"
                        name="sub_cat_check"
                        defaultValue={8}
                        id="Mobiles"
                      />
                      <label htmlFor="Mobiles">Mobiles</label>
                    </div>
                  </li>
                </ul>
              </div>
              {/*END*/}
              {/*START*/}
              <div className="filt-com pro-fil-pri">
                <h4>Price</h4>
                <ul>
                  <li>
                    <div className="chbox">
                      <input
                        type="checkbox"
                        name="price_check"
                        defaultValue={10000}
                        className="price_check"
                        id="price_check5"
                      />
                      <label htmlFor="price_check5">Above $1000</label>
                    </div>
                  </li>
                  <li>
                    <div className="chbox">
                      <input
                        type="checkbox"
                        name="price_check"
                        defaultValue={1000}
                        className="price_check"
                        id="price_check4"
                      />
                      <label htmlFor="price_check4">$501 - $1000</label>
                    </div>
                  </li>
                  <li>
                    <div className="chbox">
                      <input
                        type="checkbox"
                        name="price_check"
                        defaultValue={500}
                        className="price_check"
                        id="price_check3"
                      />
                      <label htmlFor="price_check3">$251 - $500</label>
                    </div>
                  </li>
                  <li>
                    <div className="chbox">
                      <input
                        type="checkbox"
                        name="price_check"
                        defaultValue={250}
                        className="price_check"
                        id="price_check2"
                      />
                      <label htmlFor="price_check2">$101 - $250</label>
                    </div>
                  </li>
                  <li>
                    <div className="chbox">
                      <input
                        type="checkbox"
                        name="price_check"
                        defaultValue={100}
                        className="price_check"
                        id="price_check1"
                      />
                      <label htmlFor="price_check1">Below $100</label>
                    </div>
                  </li>
                </ul>
              </div>
              {/*END*/}
              <div className="filt-com pro-fil-dis">
                <h4>Discounts</h4>
                <ul>
                  <li>
                    <div className="chbox">
                      <input
                        type="checkbox"
                        name="discount_check"
                        defaultValue={100}
                        className="discount_check"
                        id="discount_check5"
                      />
                      <label htmlFor="discount_check5">Above 70%</label>
                    </div>
                  </li>
                  <li>
                    <div className="chbox">
                      <input
                        type="checkbox"
                        name="discount_check"
                        defaultValue={70}
                        className="discount_check"
                        id="discount_check4"
                      />
                      <label htmlFor="discount_check4">51% - 70%</label>
                    </div>
                  </li>
                  <li>
                    <div className="chbox">
                      <input
                        type="checkbox"
                        name="discount_check"
                        defaultValue={50}
                        className="discount_check"
                        id="discount_check3"
                      />
                      <label htmlFor="discount_check3">26% - 50%</label>
                    </div>
                  </li>
                  <li>
                    <div className="chbox">
                      <input
                        type="checkbox"
                        name="discount_check"
                        defaultValue={25}
                        className="discount_check"
                        id="discount_check2"
                      />
                      <label htmlFor="discount_check2">11% - 25%</label>
                    </div>
                  </li>
                  <li>
                    <div className="chbox">
                      <input
                        type="checkbox"
                        name="discount_check"
                        defaultValue={10}
                        className="discount_check"
                        id="discount_check1"
                      />
                      <label htmlFor="discount_check1">Below 10%</label>
                    </div>
                  </li>
                </ul>
              </div>
              {/*START*/}
              <div className="filt-com lhs-ads">
                <ul>
                  <li>
                    <div className="ads-box">
                      <Link href="/https://themeforest.net/item/bizbook-directory-listings-template/25391222">
                        {" "}
                        <span>Ad</span>
                        <img src="/ads/ads1.jpg" alt="" />
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div className="ads-box">
                      <Link href="/https://themeforest.net/item/bizbook-directory-listings-template/25391222">
                        {" "}
                        <span>Ad</span>
                        <img src="/ads/ads2.jpg" alt="" />
                      </Link>
                    </div>
                  </li>
                </ul>
              </div>
              {/*END*/}
            </div>
          </div>
          <div className="col-md-9">
            <div className="all-list-sh all-product-total">
              <ul>
                <li>
                  <div className="all-pro-box">
                    <div className="all-pro-img">
                      <img src="/products/1.jpg" alt='product'  />
                    </div>
                    <div className="all-pro-txt">
                      <h4>Audi q3</h4>
                      <span className="pri">
                        <b className="pro-off">$32400</b>0% off{" "}
                      </span>
                      <div className="links">
                        {" "}
                        <Link href="/#" data-toggle="modal" data-target="#quote">
                          Get quote
                        </Link>
                      </div>
                    </div>
                    <Link href="/product-details" className="pro-view-full" />
                  </div>
                </li>
                <li>
                  <div className="all-pro-box">
                    <div className="all-pro-img">
                      <img src="/products/2.jpeg" alt='product' />
                    </div>
                    <div className="all-pro-txt">
                      <h4>Audi q3</h4>
                      <span className="pri">
                        <b className="pro-off">$32400</b>0% off{" "}
                      </span>
                      <div className="links">
                        {" "}
                        <Link href="/#" data-toggle="modal" data-target="#quote">
                          Get quote
                        </Link>
                      </div>
                    </div>
                    <Link href="/product-details" className="pro-view-full" />
                  </div>
                </li>
                <li>
                  <div className="all-pro-box">
                    <div className="all-pro-img">
                      <img src="/products/4.jpeg" alt='product' />
                    </div>
                    <div className="all-pro-txt">
                      <h4>Audi q3</h4>
                      <span className="pri">
                        <b className="pro-off">$32400</b>0% off{" "}
                      </span>
                      <div className="links">
                        {" "}
                        <Link href="/#" data-toggle="modal" data-target="#quote">
                          Get quote
                        </Link>
                      </div>
                    </div>
                    <Link href="/product-details" className="pro-view-full" />
                  </div>
                </li>
                <li>
                  <div className="all-pro-box">
                    <div className="all-pro-img">
                      <img src="/products/5.jpeg" alt='product' />
                    </div>
                    <div className="all-pro-txt">
                      <h4>Audi q3</h4>
                      <span className="pri">
                        <b className="pro-off">$32400</b>0% off{" "}
                      </span>
                      <div className="links">
                        {" "}
                        <Link href="/#" data-toggle="modal" data-target="#quote">
                          Get quote
                        </Link>
                      </div>
                    </div>
                    <Link href="/product-details" className="pro-view-full" />
                  </div>
                </li>
                <li>
                  <div className="all-pro-box">
                    <div className="all-pro-img">
                      <img src="/products/6.jpeg" alt='product' />
                    </div>
                    <div className="all-pro-txt">
                      <h4>Audi q3</h4>
                      <span className="pri">
                        <b className="pro-off">$32400</b>0% off{" "}
                      </span>
                      <div className="links">
                        {" "}
                        <Link href="/#" data-toggle="modal" data-target="#quote">
                          Get quote
                        </Link>
                      </div>
                    </div>
                    <Link href="/product-details" className="pro-view-full" />
                  </div>
                </li>
                <li>
                  <div className="all-pro-box">
                    <div className="all-pro-img">
                      <img src="/products/7.jpeg" alt='product' />
                    </div>
                    <div className="all-pro-txt">
                      <h4>Audi q3</h4>
                      <span className="pri">
                        <b className="pro-off">$32400</b>0% off{" "}
                      </span>
                      <div className="links">
                        {" "}
                        <Link href="/#" data-toggle="modal" data-target="#quote">
                          Get quote
                        </Link>
                      </div>
                    </div>
                    <Link href="/product-details" className="pro-view-full" />
                  </div>
                </li>
                <li>
                  <div className="all-pro-box">
                    <div className="all-pro-img">
                      <img src="/products/7.jpg" alt='product' />
                    </div>
                    <div className="all-pro-txt">
                      <h4>Audi q3</h4>
                      <span className="pri">
                        <b className="pro-off">$32400</b>0% off{" "}
                      </span>
                      <div className="links">
                        {" "}
                        <Link href="/#" data-toggle="modal" data-target="#quote">
                          Get quote
                        </Link>
                      </div>
                    </div>
                    <Link href="/product-details" className="pro-view-full" />
                  </div>
                </li>
                <li>
                  <div className="all-pro-box">
                    <div className="all-pro-img">
                      <img src="/products/8.jpg" alt='product' />
                    </div>
                    <div className="all-pro-txt">
                      <h4>Audi q3</h4>
                      <span className="pri">
                        <b className="pro-off">$32400</b>0% off{" "}
                      </span>
                      <div className="links">
                        {" "}
                        <Link href="/#" data-toggle="modal" data-target="#quote">
                          Get quote
                        </Link>
                      </div>
                    </div>
                    <Link href="/product-details" className="pro-view-full" />
                  </div>
                </li>
                <li>
                  <div className="all-pro-box">
                    <div className="all-pro-img">
                      <img src="/products/1.jpg" alt='product' />
                    </div>
                    <div className="all-pro-txt">
                      <h4>Audi q3</h4>
                      <span className="pri">
                        <b className="pro-off">$32400</b>0% off{" "}
                      </span>
                      <div className="links">
                        {" "}
                        <Link href="/#" data-toggle="modal" data-target="#quote">
                          Get quote
                        </Link>
                      </div>
                    </div>
                    <Link href="/product-details" className="pro-view-full" />
                  </div>
                </li>
                <li>
                  <div className="all-pro-box">
                    <div className="all-pro-img">
                      <img src="/products/2.jpeg" alt='product' />
                    </div>
                    <div className="all-pro-txt">
                      <h4>Audi q3</h4>
                      <span className="pri">
                        <b className="pro-off">$32400</b>0% off{" "}
                      </span>
                      <div className="links">
                        {" "}
                        <Link href="/#" data-toggle="modal" data-target="#quote">
                          Get quote
                        </Link>
                      </div>
                    </div>
                    <Link href="/product-details" className="pro-view-full" />
                  </div>
                </li>
                <li>
                  <div className="all-pro-box">
                    <div className="all-pro-img">
                      <img src="/products/4.jpeg" alt='product' />
                    </div>
                    <div className="all-pro-txt">
                      <h4>Audi q3</h4>
                      <span className="pri">
                        <b className="pro-off">$32400</b>0% off{" "}
                      </span>
                      <div className="links">
                        {" "}
                        <Link href="/#" data-toggle="modal" data-target="#quote">
                          Get quote
                        </Link>
                      </div>
                    </div>
                    <Link href="/product-details" className="pro-view-full" />
                  </div>
                </li>
                <li>
                  <div className="all-pro-box">
                    <div className="all-pro-img">
                      <img src="/products/5.jpeg " alt='product' />
                    </div>
                    <div className="all-pro-txt">
                      <h4>Audi q3</h4>
                      <span className="pri">
                        <b className="pro-off">$32400</b>0% off{" "}
                      </span>
                      <div className="links">
                        {" "}
                        <Link href="/#" data-toggle="modal" data-target="#quote">
                          Get quote
                        </Link>
                      </div>
                    </div>
                    <Link href="/product-details" className="pro-view-full" />
                  </div>
                </li>
                <li>
                  <div className="all-pro-box">
                    <div className="all-pro-img">
                      <img src="/products/6.jpeg" alt='product' />
                    </div>
                    <div className="all-pro-txt">
                      <h4>Audi q3</h4>
                      <span className="pri">
                        <b className="pro-off">$32400</b>0% off{" "}
                      </span>
                      <div className="links">
                        {" "}
                        <Link href="/#" data-toggle="modal" data-target="#quote">
                          Get quote
                        </Link>
                      </div>
                    </div>
                    <Link href="/product-details" className="pro-view-full" />
                  </div>
                </li>
                <li>
                  <div className="all-pro-box">
                    <div className="all-pro-img">
                      <img src="/products/7.jpeg" alt='product' />
                    </div>
                    <div className="all-pro-txt">
                      <h4>Audi q3</h4>
                      <span className="pri">
                        <b className="pro-off">$32400</b>0% off{" "}
                      </span>
                      <div className="links">
                        {" "}
                        <Link href="/#" data-toggle="modal" data-target="#quote">
                          Get quote
                        </Link>
                      </div>
                    </div>
                    <Link href="/product-details" className="pro-view-full" />
                  </div>
                </li>
                <li>
                  <div className="all-pro-box">
                    <div className="all-pro-img">
                      <img src="/products/7.jpg" alt='product' />
                    </div>
                    <div className="all-pro-txt">
                      <h4>Audi q3</h4>
                      <span className="pri">
                        <b className="pro-off">$32400</b>0% off{" "}
                      </span>
                      <div className="links">
                        {" "}
                        <Link href="/#" data-toggle="modal" data-target="#quote">
                          Get quote
                        </Link>
                      </div>
                    </div>
                    <Link href="/product-details" className="pro-view-full" />
                  </div>
                </li>
                <li>
                  <div className="all-pro-box">
                    <div className="all-pro-img">
                      <img src="/products/8.jpg" alt='product' />
                    </div>
                    <div className="all-pro-txt">
                      <h4>Audi q3</h4>
                      <span className="pri">
                        <b className="pro-off">$32400</b>0% off{" "}
                      </span>
                      <div className="links">
                        {" "}
                        <Link href="/#" data-toggle="modal" data-target="#quote">
                          Get quote
                        </Link>
                      </div>
                    </div>
                    <Link href="/product-details" className="pro-view-full" />
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* END */}
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
</>
<Footer/>
<BottomMenu/>
    </div>
  )
}

export default page
