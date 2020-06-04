import React from "react";
import "./WishlistCard.css";
import PromotedEventCard from "../promotedEventCard/PromotedEventCard";
import ProgressiveImage from "../progressiveImage/ProgressiveImage";

const WishlistCard = (props) => {
  return (
    <div className="wishlist-card-container">
      <ProgressiveImage
        src="https://source.unsplash.com/220x250/?gift"
        customClass="wishlist-card-image"
        alt="gift image"
      />
      <div className="wishlist-details-container">
        <div className="wishlist-details">
          <p>March 23, 2020</p>
          <h5>2020 Birthday Gifts</h5>
          <small>5 Items</small>
        </div>
        <div className="wishlist-profile">
          <ProgressiveImage
            src="https://source.unsplash.com/30x30/?lady"
            customClass="wishlist-profile-image"
            alt="gift user image"
          />
          <div className="wishlist-owner">
            <p>Damilola Adekoya</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishlistCard;
