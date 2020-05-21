import React from "react";
import PropTypes from "prop-types";

import "./FriendProfileCard.css";
import ProgressiveImage from "../../../../../../components/progressiveImage/ProgressiveImage";

const FriendProfileCard = (props) => {
  return (
    <div className="friend-profile-card-container">
      <div className="friend-profile-card-image-container">
        <ProgressiveImage
          src="https://source.unsplash.com/250x182/?guy"
          customClass="friend-profile-card-image"
        />
        <div className="friend-card-price">Free</div>
      </div>
      <div className="friend-profile-card-details">
        <h2>event title</h2>
        <p>Saturday, 28 April</p>
        <p>9.00PM</p>
      </div>
    </div>
  );
};

FriendProfileCard.propTypes = {};

export default FriendProfileCard;
