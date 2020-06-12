import React from "react";
import "./WishlistCard.css";
import moment from "moment";

import ProgressiveImage from "../progressiveImage/ProgressiveImage";
import avatarPlaceHolder from "../../assets/images/profile_placeholder_small.gif";

const WishlistCard = (props) => {
  const { title, image, date, itemNumber, user } = props;

  let wishlistImage = "https://source.unsplash.com/220x250/?gift";

  if (image.length > 0) {
    wishlistImage = image[0].url;
  }

  const createdAt = moment(date).format("MMMM Do, YYYY");

  return (
    <div className="wishlist-card-container">
      <ProgressiveImage
        src={wishlistImage}
        customClass="wishlist-card-image"
        alt="gift image"
      />
      <div className="wishlist-details-container">
        <div className="wishlist-details">
          <p>{createdAt}</p>
          <h5>{title}</h5>
          <small>
            {itemNumber} {itemNumber === 1 ? "Item" : "Items"}
          </small>
        </div>
        <div className="wishlist-profile">
          <ProgressiveImage
            src={user.avatar ? user.avatar : avatarPlaceHolder}
            customClass="wishlist-profile-image"
            alt="gift user image"
          />
          <div className="wishlist-owner">
            <p>{user.fullName}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishlistCard;
