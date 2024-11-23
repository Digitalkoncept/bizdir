"use client";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { GET_USER_LISTINGS } from "@/lib/query";
import { DELETE_LISTING } from "@/lib/mutation";
import { client } from "@/lib/apollo";
import { toast } from "react-toastify";
import { CldImage } from "next-cloudinary";
import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'

const Table = () => {
  const [listingData, setListingData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { data: session, status } = useSession();

  const getListingData = async () => {
    try {
      const { data, errors } = await client.query({
        query: GET_USER_LISTINGS,
        fetchPolicy:"no-cache",
        variables: { userId:session?.user.id },
        context: {
          headers: {
            Authorization: `Bearer ${session.jwt}`,
          },
        },
      });

      if (errors || data.getUserListings.code !== 200) {
        throw new Error("Something went wrong");
      }

      setListingData(data.getUserListings.listings);
      console.log(data);
      setLoading(false);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  useEffect(() => {
    if (status === "authenticated") getListingData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session]);

  const deleteListing = async (id) => {

    try {
      const { data, errors } = await client.mutate({
        mutation: DELETE_LISTING,
        variables: { id: id, user_id:session.user.id },
        context: {
          headers: {
            Authorization: `Bearer ${session.jwt}`,
          },
        },
      });

      if (errors || data.deleteListing.code !== 200) {
        throw new Error("Something went wrong");
      }
      getListingData();
      setLoading(false);
      toast.success("Listing deleted successfully");
      console.log(data);
    } catch (error) {
      toast.error("something went wrong");
      console.error("Error submitting form:", error);
    }
  };

  if (loading) return <>Loading</>;
  return (
    <div className="table-responsive">
      <table className="table bordered">
        <thead>
          <tr>
            <th>No.</th>
            <th>Listing Name</th>
            <th>Rating</th>
            <th>Views</th>
            <th>Status</th>
            <th>Edit</th>
            <th>Delete</th>
            <th>Preview</th>
          </tr>
        </thead>
        <tbody>
          {listingData.map((listing, idx) => {
            return (
              <tr key={idx}>
                <td
                  className={`${
                    listing.listing_status === "Disabled" ? "disabled" : ""
                  }`}
                >
                  {idx + 1}
                </td>
                <td
                  className={`${
                    listing.listing_status === "Disabled" ? "disabled" : ""
                  }`}
                >
                  <CldImage
                  width="50"
                  height="50"
                  gravity="east"
                  src={listing.listing_image.length > 0 ? listing.listing_image : 'https://res.cloudinary.com/dncikfz66/image/upload/v1719473731/bizdir/listing/defaultlisting.png'}
                  sizes="100vw"
                  alt={listing.listing_name}
                />


                  {listing.listing_name}
                  {/* <span>09, Apr 2021</span> */}
                </td>
                <td
                  className={`${
                    listing.listing_status === "Disabled" ? "disabled" : ""
                  }`}
                >
                  <span className="db-list-rat">
                    {listing.ratings?.$numberDecimal}
                  </span>
                </td>
                <td
                  className={`${
                    listing.listing_status === "Disabled" ? "disabled" : ""
                  }`}
                >
                  <span className="db-list-rat">{listing.views}</span>
                </td>
                
                {listing.listing_status !== 'Disabled'? (
                <td
                data-tooltip-id={listing._id}
                  className={`${
                    listing.listing_status === "Disabled" ? "disabled" : ""
                  } ${
                    listing.approval === "approved"
                      ? "approve"
                      : listing.approval === "rejected"
                      ? "reject"
                      : "pending"
                  } relative`}
                >
                  {listing?.approval}
                  <Tooltip 
                  id={listing._id}
                  place="bottom"
                  className="!top-6"
                  content={listing.approval_by?.message}
                  />
                </td>
                ):(
                <td>
                <span>{listing.listing_status}</span>
                </td>
                )}
                
                <td
                  className={` ${
                    listing.listing_status === "Disabled"
                      ? "disabled hidden"
                      : ""
                  }`}
                >
                  <Link
                    className="db-list-edit"
                    href={`/account/edit-listing/${listing._id}`}
                  >
                    Edit
                  </Link>
                </td>
                <td
                  className={`${
                    listing.listing_status === "Disabled"
                      ? "disabled hidden"
                      : ""
                  }`}
                >
                  <button
                    className="db-list-edit"
                    onClick={() => deleteListing(listing._id)}
                  >
                    Delete
                  </button>
                </td>
                <td
                  className={`${
                    listing.listing_status === "Disabled"
                      ? "disabled hidden"
                      : ""
                  }`}
                >
                  <button><Link href={`/all-listing/${listing._id}`}>Preview</Link></button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
