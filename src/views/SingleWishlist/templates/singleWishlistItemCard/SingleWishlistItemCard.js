import React from "react";
import "./SingleWishlistItemCard.css";
import moment from "moment";

import ProgressiveImage from "../../../../components/progressiveImage/ProgressiveImage";
import avatarPlaceHolder from "../../../../assets/images/profile_placeholder_small.gif";
import { Link } from "react-router-dom";
import { genRandomNumber } from "../../../../utils/helper";

const SingleWishlistItemCard = props => {
  const {
    wishlistId,
    title,
    price,
    pledges,
    quantity,
    currency,
    link,
    user
  } = props;

  //   let wishlistImage = "https://source.unsplash.com/220x250/?gift";

  //   if (image.length > 0) {
  //     wishlistImage = image[0].url;
  //   }

  const randomImage = () => {
    // const randomNumber = Math.floor(Math.random() * Math.floor(6));
    const randomNumber = genRandomNumber(0, 10);
    const image = [
      "https://source.unsplash.com/755x482/?concert",
      "https://source.unsplash.com/755x482/?club",
      "https://source.unsplash.com/755x482/?party",
      "https://source.unsplash.com/755x482/?show",
      "https://source.unsplash.com/755x482/?drinks",
      "https://source.unsplash.com/755x482/?beach",
      "https://source.unsplash.com/755x482/?club",
      "https://source.unsplash.com/755x482/?food",
      "https://source.unsplash.com/755x482/?games",
      "https://source.unsplash.com/755x482/?umbrella",
      "https://source.unsplash.com/755x482/?plates",
      "https://source.unsplash.com/220x450/?gift"
    ];
    return image[randomNumber];
  };

  return (
      <div className="wishlist-card-container">
        <ProgressiveImage
          src={randomImage()}
          customClass="wishlist-card-image"
          alt="gift image"
        />
        <div className="wishlist-details-container">
          <div className="wishlist-details">
            <h5>{title}</h5>
          </div>
          <div className="wishlist-profile mt-2">
            <div className="wishlist-owner">
              <p>
                {currency} {price}
              </p>
            </div>
          </div>
        </div>
      </div>
  );
};

export default SingleWishlistItemCard;
