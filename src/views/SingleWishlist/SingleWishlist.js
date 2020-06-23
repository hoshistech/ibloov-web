import React, { useEffect, useState } from "react";
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
} from "react-share";

import "./SingleWishlist.css";
import Navbar from "../../components/navbar/Navbar";
import { useHistory, Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ItemCard from "../../components/itemCard/ItemCard";
import { chunkArray, genRandomNumber } from "../../utils/helper";
import { getWishlist } from "./singleWishlist.action";
import { useDispatch, useSelector } from "react-redux";
import SingleWishlistItems from "./templates/singleWishlistItems/SingleWishlistItems";

const shareText = "Hey, checkout this awesome gifts up for grabs";
const eventUrl = window.location.href;

const SingleWishlist = (props) => {
  const history = useHistory();
  const { wishlistId } = useParams();

  const dispatch = useDispatch();

  const { wishlist, wishlistItems, itemsLength } = useSelector(
    (state) => state.singleWishlist
  );

  useEffect(() => {
    dispatch(getWishlist(wishlistId));
  }, [dispatch, wishlistId]);

  const randomImage = () => {
    // const randomNumber = Math.floor(Math.random() * Math.floor(6));
    const randomNumber = genRandomNumber(0, 10);
    const image = [
      "https://source.unsplash.com/2250x2282/?concert",
      "https://source.unsplash.com/1250x882/?club",
      "https://source.unsplash.com/3250x1282/?party",
      "https://source.unsplash.com/850x782/?show",
      "https://source.unsplash.com/950x2182/?drinks",
      "https://source.unsplash.com/1350x1082/?beach",
      "https://source.unsplash.com/1250x382/?club",
      "https://source.unsplash.com/950x2182/?food",
      "https://source.unsplash.com/850x1782/?games",
      "https://source.unsplash.com/1950x820/?umbrella",
      "https://source.unsplash.com/550x1082/?plates",
    ];
    return image[randomNumber];
  };

  return (
    <div className="single-wishlist-container">
      <div>
        <Navbar />
      </div>
      <section>
        <div className="single-wishlist-header">
          <div className="goback wishlist-back">
            <FontAwesomeIcon className="navbar-icon" icon="arrow-left" />
            <span
              className="ml-2"
              onClick={() => {
                history.goBack();
              }}
            >
              Back to List
            </span>
          </div>
          <div className="single-wishlist-details">
            <div className="single-wishlist-create-date">
              Created on: March 23, 2020
            </div>
            <div className="single-wishlist-name">2020 Birthday Gifts</div>
            <div className="row single-wishlist-stat">
              <di className="single-wishlist-statistics-container">
                <div className="single-wishlist-statistics">
                  <p>{itemsLength}</p>
                  <label>Total Items</label>
                </div>
                <div className="single-wishlist-statistics">
                  <p>2</p>
                  <label>Items fulfilled</label>
                </div>
                <div className="single-wishlist-statistics">
                  <p>3</p>
                  <label>Items unfulfilled</label>
                </div>
              </di>
              <div className="single-wishlist-total-container">
                <div className="single-wishlist-total mr-2">Total:</div>{" "}
                <div className="single-wishlist-price">$1150.50</div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="row"> */}
        <div className="row">
          {wishlistItems ? (
            <div className="mt-3 col-md-9">
              <h4 className="single-event-header-title">Wishlist Items</h4>
              <SingleWishlistItems wishlistItems={wishlistItems} />
            </div>
          ) : (
            <div className="col-md-9">
              <p>No items on this wishlist</p>
            </div>
          )}

          <div className="col-md-3">
            <div className="mt-3 mb-3 single-event-second-col-container">
              <h4 className="single-event-header-title">Share with friends</h4>
              <div className="row share-icon-container">
                <FacebookShareButton
                  className="share-icon-facebook"
                  quote={shareText}
                  url={eventUrl}
                >
                  <FontAwesomeIcon
                    className="share-icon"
                    icon={["fab", "facebook-f"]}
                  />
                </FacebookShareButton>

                <TwitterShareButton
                  className="share-icon-twitter"
                  quote={shareText}
                  url={eventUrl}
                >
                  <FontAwesomeIcon
                    className="share-icon"
                    icon={["fab", "twitter"]}
                  />
                </TwitterShareButton>
                <LinkedinShareButton
                  className="share-icon-linkedin"
                  quote={shareText}
                  url={eventUrl}
                >
                  <FontAwesomeIcon
                    className="share-icon"
                    icon={["fab", "linkedin-in"]}
                  />
                </LinkedinShareButton>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SingleWishlist;
