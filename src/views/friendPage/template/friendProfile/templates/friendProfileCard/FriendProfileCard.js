import React from "react";
import PropTypes from "prop-types";
import moment from "moment";

import "./FriendProfileCard.css";
import ProgressiveImage from "../../../../../../components/progressiveImage/ProgressiveImage";

const FriendProfileCard = (props) => {
  const { name, amount, isPaid, eventId, startDate, image } = props;


  let eventImg = "https://source.unsplash.com/250x182/?guy";

  if (image) {
    eventImg = image.url;
  }

  const time = moment(startDate).format("h:mmA");
  const date = moment(startDate).format("dddd, Do MMMM");



  return (
    <div className="friend-profile-card-container">
      <div className="friend-profile-card-image-container">
        <ProgressiveImage
          src={eventImg}
          customClass="friend-profile-card-image"
        />
        <div className="friend-card-price">{isPaid ? amount : "Free"}</div>
      </div>
      <div className="friend-profile-card-details">
        <h2>{name}</h2>
        <p>{date}</p>
        <p>{time}</p>
      </div>
    </div>
  );
};

FriendProfileCard.propTypes = {};

export default FriendProfileCard;
