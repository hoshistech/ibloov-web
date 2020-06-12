import React from "react";
import PropTypes from "prop-types";
import Button from "../button/Button";
import success from "../../assets/images/eventSuccess.png";

import "./EventSuccessSideBar.css";

const EventSuccessSideBar = (props) => {
  const { customClassName, closeSuccessMessage, message } = props;
  return (
    <div className={`event-success-container ${customClassName}`}>
      <div className="event-success">
        <div>
          <img src={success} alt="success" className="success-image" />
        </div>
        <div className="success-text mb-3">
          <p>{message}</p>
          <small>All you have to do next is spred the word</small>
        </div>
        <div>
          <Button
            customClassName="event-success-btn"
            btndisabled={false}
            onClick={closeSuccessMessage}
          >
            Continue
          </Button>
        </div>
      </div>
    </div>
  );
};

EventSuccessSideBar.propTypes = {
  customClassName: PropTypes.string,
  closeSuccessMessage: PropTypes.func,
};

export default EventSuccessSideBar;
