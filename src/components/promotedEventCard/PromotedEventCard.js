import React from "react";

import cardImage from "../../assets/images/background.jpg";
import "./PromotedEventCard.css";

const PromotedEventCard = (props) => {
  return (
    <div className="promoted-event-card-container">
      <div className="promoted-image-container">
        <img src={cardImage} className="promoted-card-image" alt="card" />
        <p className="promoted-event-badge">Free</p>
      </div>

      <div className="event-body promoted-event">
        <h5>New Year Party</h5>
        <p>Saturday 28, April</p>
        <p>9:00PM</p>
      </div>
    </div>
  );
};


export default PromotedEventCard;
