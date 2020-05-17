import React from "react";

import "./SingleEventHeader.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useHistory } from "react-router-dom";
const SingleEventHeader = (props) => {
  const { category } = props;
  const history = useHistory();

  return (
    <div className="single-event-header">
      <div className="single-event-header-content">
        <div>
          <FontAwesomeIcon className="navbar-icon" icon="arrow-left" />
          <span
            className="ml-2"
            onClick={() => {
              history.goBack();
            }}
          >
            Back
          </span>
        </div>
        {category ? <p>{category}</p> : ""}
      </div>
    </div>
  );
};

export default SingleEventHeader;
