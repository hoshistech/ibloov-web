import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import passport from "../../assets/images/passport.jpg";
import heart from "../../assets/images/heart-2.png";
import "./ViewEventProfileCard.css";
import Button from "../button/Button";

const ViewEventProfileCard = (props) => {
  return (
    <div>
      <div className="row view-event-profile-container">
        <div className="mr-2">
          <img src={passport} className="view-event-profile-img" alt="card" />
        </div>
        <div className="view-event-profile-detail">
          <p>Damilola Adekoya</p>
          <small>View Profile</small>
        </div>
      </div>
      <div className="mt-3 view-event-stat-container">
        <div className="view-event-profile-button-container">
          <Button customClassName="view-event-btn bloove-event-now-btn">
            BLOOV EVENT NOW
          </Button>
          <Button customClassName="mt-2 view-event-btn bloove-promote-event-btn">
            PROMOTE EVENT
          </Button>
        </div>
        <div>
          <div className="mt-4 attending-event-container">
            <div className="attending-event">
              <img src={passport} className="stat-image" alt="card" />
              <img src={passport} className="stat-image" alt="card" />
              <img src={passport} className="stat-image" alt="card" />
            </div>
            <div className="ml-4 mr-4 number-attending">
              <p className="no-margin-p">+42 going</p>
            </div>
            <div className="view-event-card-icon-container">
              <FontAwesomeIcon
                className="view-event-card-icon heart"
                icon="heart"
              />
              {/* <img src={heart} className="view-event-card-icon heart" /> */}
              <span className="no-margin-p">120</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ViewEventProfileCard.propTypes = {};

export default ViewEventProfileCard;
