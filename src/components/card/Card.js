import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import moment from "moment";

import cardImage from "../../assets/images/background.jpg";
import passport from "../../assets/images/passport.jpg";
import "./Card.css";
import Button from "../button/Button";
import { Link } from "react-router-dom";

const Card = (props) => {
  const { name, startDate, location } = props;
  const month = moment(startDate).format("MMM");
  const day = moment(startDate).format("D");

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
      <Link to="/event/single-event">
        <div className="event-body">
          <div className="event-info">
            <div className="mr-2">
              <p>{month}</p>
              <p className="font-bold">{day || ""}</p>
            </div>
            <div>
              <div className="event-name">
                <p className="bold-600">{name || ""}</p>
              </div>
              <div className="event-card-location">
                <p>
                  <small>{location ? location.address : ""}</small>
                </p>
              </div>
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
                onClick={() => {}}
                btndisabled={false}
              >
                Bloov
              </Button>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

Card.propTypes = {
  name: PropTypes.string.isRequired,
  startDate: PropTypes.string.isRequired,
  isPaid: PropTypes.bool,
  amount: PropTypes.number,
  category: PropTypes.string,
  location: PropTypes.object,
};

export default Card;
