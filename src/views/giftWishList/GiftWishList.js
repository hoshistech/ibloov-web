import React from "react";
import PropTypes from "prop-types";
import ProgressiveImage from "../../components/progressiveImage/ProgressiveImage";
import headset from "../../assets/images/headset.png";

import "./GiftWishList.css";

const GiftWishList = (props) => {
  return (
    <div className="wishlist-container">
      <div className="row">
        <div className="wishlist-header-text">
          <h2>Gift</h2>
          <h2>Wishlists</h2>
          <p>SELECT YOUR WISHLIST</p>
        </div>
        <div>
          <ProgressiveImage src={headset} customClass="wishlist-header-image" />
        </div>
      </div>
      <div className="wishlist-gift-container">
        <div className="row col-md-8 gift-wishlist-card">
          <div className="wishlist-gift-image-container">
            <ProgressiveImage
              src="https://source.unsplash.com/169x92/?xmas"
              customClass="wishlist-gift-image"
            />
          </div>
          <div className="wishlist-gift-details">
            <p className="wishlist-gift-date">11th Feb 2020</p>
            <h5 className="wishlist-gift-name">Xmas Gift</h5>
            <p className="wishlist-gift-count">10 Items</p>
          </div>
        </div>
        <div className="row col-md-8 gift-wishlist-card">
          <div className="wishlist-gift-image-container">
            <ProgressiveImage
              src="https://source.unsplash.com/169x92/?xmas"
              customClass="wishlist-gift-image"
            />
          </div>
          <div className="wishlist-gift-details">
            <p className="wishlist-gift-date">11th Feb 2020</p>
            <h5 className="wishlist-gift-name">Xmas Gift</h5>
            <p className="wishlist-gift-count">10 Items</p>
          </div>
        </div>
      </div>
    </div>
  );
};

GiftWishList.propTypes = {};

export default GiftWishList;
