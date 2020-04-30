import React from "react";
import PropTypes from "prop-types";
import Button from "../button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./PopularEvent.css";
const PopularEvent = (props) => {
  const {
    eventCategory,
    eventLocation,
    eventDate,
    eventTitle,
    eventDescription,
  } = props;
  return (
    <div className="popular-event">
      <div className='mb-1'>
        <Button
          customClassName="popular-event-btn bold-600"
          // onclick={this.onButtonPress.bind(this)}
        >
          <FontAwesomeIcon className="popular-event-icone" icon="music" />
          {eventCategory}
        </Button>
      </div>
      <div className="popular-event-text">
        <h4>{eventTitle}</h4>
        <span>{eventDescription}</span>
      </div>
      <div>
        <Button
          customClassName="popular-event-btn bold-600"
          // onclick={this.onButtonPress.bind(this)}
        >
          <FontAwesomeIcon
            className="popular-event-icone"
            icon="map-marker-alt"
          />
          {eventLocation}
        </Button>{" "}
        <Button
          customClassName="popular-event-btn bold-600"
          // onclick={this.onButtonPress.bind(this)}
        >
          <FontAwesomeIcon
            className="popular-event-icone"
            icon="calendar-alt"
          />
          {eventDate}
        </Button>
      </div>
    </div>
  );
};

PopularEvent.propTypes = {};

export default PopularEvent;
