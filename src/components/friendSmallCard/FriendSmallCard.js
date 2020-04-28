import React from "react";
import PropTypes from "prop-types";
import passport from "../../assets/images/passport.jpg";

import "./FriendSmallCard.css";

const FriendSmallCard = (props) => {
  return (
    <div className="row friend-small-card">
      <div className="mr-1">
        <img src={passport} className="view-event-profile-img" alt="card" />
      </div>
      <p>Damilola Adekoya</p>
      <span class="remove-friend-icon">×</span>
    </div>
  );
};

FriendSmallCard.propTypes = {};

export default FriendSmallCard;
