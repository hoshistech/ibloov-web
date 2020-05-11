import React from "react";
import PropTypes from "prop-types";

import "./SingleEventHeader.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const SingleEventHeader = (props) => {
  return (
    <div className="single-event-header">
      <div className="single-event-header-content">
        <div>
          <FontAwesomeIcon className="navbar-icon" icon="arrow-left" />
          <span className="ml-2">Back</span>
        </div>
        <p>Conferences</p>
      </div>
    </div>
  );
};

SingleEventHeader.propTypes = {};

export default SingleEventHeader;
