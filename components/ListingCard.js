import React from "react";
import Link from "next/link";
const ListingCard = ({ item, id }) => {

  return (
    <li key={id}>
      <div className="eve-box">
        {/*-LISTING IMAGE-*/}
        <div className="al-img">
          {item?.isClaimed?.length > 0 && (
          <span className="open-stat">{item?.isClaimed}</span>
          )}
          <Link href={`/all-listing/${item._id}`}>
            <img src={item.listing_image} alt="" />
          </Link>
        </div>
        {/*-END LISTING IMAGE-*/}
        {/*-LISTING NAME-*/}
        <div>
          <h4>
            <Link href="/all-listing">{item._id}</Link>
            <i className="li-veri">
              <img src="/icon/svg/verified.png" alt="" />
            </i>
          </h4>
          <label className="rat">
            <i className="material-icons">star</i>
            <i className="material-icons">star</i>
            <i className="material-icons">star</i>
            <i className="material-icons">star</i>
            <i className="material-icons">star</i>
          </label>
          <span className="addr">{item.listing_address}</span>
          <span className="pho">{item.phone_number}</span>
          <span className="mail">{item.email}</span>
          <div className="links">
            
            <Link href={`/all-listing/${item._id}`}>View more</Link>
            <Link href={`tel:${item.phone_number}`}>Call Now</Link>
            <Link
              href={`https://wa.me/${item.phone_number}`}
              className="what"
              target="_blank"
            >
              WhatsApp
            </Link>
          </div>
        </div>
        {/*-END LISTING NAME-*/}
        {/*-SAVE-*/}
        <span
          className="enq-sav"
          data-toggle="tooltip"
          title=" Click to like this listing"
        >
          <i className="l-like sav-act">
            <img src="/icon/svg/like.svg" alt="" />
          </i>
        </span>
        {/*-END SAVE-*/}
      </div>
    </li>
  );
};

export default ListingCard;
