import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import cardImage from "../../assets/images/background.jpg";
import passport from "../../assets/images/passport.jpg";
import "./Card.css";
import Button from "../button/Button";

const Card = (props) => {
  return (
    <div className="card-container">
      <div className="image-container">
        <img src={cardImage} className="card-image" alt="card" />
        <div className="event-icon-container">
          <div className="card-icon-container">
            <FontAwesomeIcon className="card-icon" icon="share-alt" />
          </div>
          <div className="card-icon-container">
            <FontAwesomeIcon className="card-icon heart" icon="heart" />
          </div>
        </div>
        <p className="image-text-first">Nightlive</p>
        <p className="image-text-second">Party</p>
      </div>
      <div className="event-body">
        <div className="event-info">
          <div>
            <p>APR</p>
            <p className="font-bold">28</p>
          </div>
          <div>
            <p className="bold-600">Association of Freelancers</p>
            <p>
              <small>Lagos, Nigeria</small>
            </p>
          </div>
        </div>
        <div className="event-stat mt-2">
          <div className="attending-event-container">
            <div className="attending-event">
              <img src={cardImage} className="stat-image" alt="card" />
              <img src={passport} className="stat-image" alt="card" />
              <img src={passport} className="stat-image" alt="card" />
            </div>
            <div className="ml-4 number-attending">
              <p>+42</p>
              <p>going</p>
            </div>
          </div>
          <div className="attend-button">
            <Button
              customClassName="event-button bold-600"
              // onclick={this.onButtonPress.bind(this)}
            >
              Bloov
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {};

export default Card;
