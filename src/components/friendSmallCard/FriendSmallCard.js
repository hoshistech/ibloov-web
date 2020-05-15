import React from "react";
import passport from "../../assets/images/passport.jpg";

import "./FriendSmallCard.css";

const FriendSmallCard = (props) => {
  const { name } = props;
  return (
    <div className="row friend-small-card">
      <div className="mr-1">
        <img src={passport} className="view-event-profile-img" alt="card" />
      </div>
      <p>{name}</p>
      <span className="remove-friend-icon">×</span>
    </div>
  );
};

export default FriendSmallCard;
