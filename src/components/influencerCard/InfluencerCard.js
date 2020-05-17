import React from "react";

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
    image,
  } = props;
  //   const placesCard = false;

  const randomNumber = () => {
    const number = Math.floor(Math.random(25) * Math.floor(350));
    return number;
  };

  const followerNumber = () => {
    const number = Math.floor(Math.random(2500) * Math.floor(5000));
    return number;
  };

  const eventTy = randomNumber();
  const follNumber = followerNumber();
  let cardDetails = (
    <div className="most-influencer-details">
      <div>
        <p className="influencer-name font-bold">{cardTitle}</p>

        <small>@{userName}</small>
      </div>
      <div className="influencer-card-stat">
        <small>{follNumber} followers</small>
        <small>{eventTy} events promoted</small>
      </div>
    </div>
  );

  if (placesCard) {
    cardDetails = (
      <div className="most-influencer-details">
        <div>
          <p className="influencer-name">{cardTitle}</p>
          <small className="place-card-event">{eventTy} events</small>
        </div>
      </div>
    );
  }
  return (
    <div className={`${customClassName}  most-places-card `}>
      <img
        src={image || PlaceImage}
        alt="city"
        className="most-influencer-image"
      />
      {cardDetails}
    </div>
  );
};

export default InfluencerCard;
