import React from "react";
import PropTypes from "prop-types";

import PlaceImage from "../../assets/images/bg3.jpg";

import "./InfluencerCard.css";

const InfluencerCard = (props) => {
  const {
    customClassName,
    placesCard,
    cardTitle,
    userName,
    followers,
    events,
  } = props;
  //   const placesCard = false;

  let cardDetails = (
    <div className="most-influencer-details">
      <div>
        <p className="influencer-name font-bold">{cardTitle}</p>

        <small>@{userName}</small>
      </div>
      <div className="influencer-card-stat">
        <small>{followers} followers</small>
        <small>{events} events promoted</small>
      </div>
    </div>
  );

  if (placesCard) {
    cardDetails = (
      <div className="most-influencer-details">
        <div>
          <p className="influencer-name">{cardTitle}</p>
          <small className="place-card-event">{events} events</small>
        </div>
      </div>
    );
  }
  return (
    <div className={`${customClassName}  most-places-card `}>
      <img src={PlaceImage} alt="image" className="most-influencer-image" />
      {cardDetails}
    </div>
  );
};

InfluencerCard.propTypes = {};

export default InfluencerCard;
