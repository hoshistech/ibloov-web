import React from "react";
import PropTypes from "prop-types";
import Button from "../button/Button";

import "./PricingCounter.css";
const PricingCounter = (props) => {
  const {
    ticketNumber,
    increaseTicketType,
    decreaseTicketType,
  } = props;

  return (
    <div>
      <Button
        customClassName="pricing-counter-btn left-btn bold-600"
        onClick={decreaseTicketType}
        btndisabled={false}
      >
        -
      </Button>
      <input
        type="number"
        className="pricing-number"
        max="3"
        min="1"
        // defaultValue={ticketNumber}
        value={ticketNumber}
        onChange={() => {}}
      />
      <Button
        customClassName=" pricing-counter-btn right-btn  bold-600"
        onClick={increaseTicketType}
        btndisabled={false}
      >
        +
      </Button>
    </div>
  );
};

PricingCounter.propTypes = {
  ticketNumber: PropTypes.number,
  increaseTicketType: PropTypes.func.isRequired,
  decreaseTicketType: PropTypes.func.isRequired,
  changeTicketNumber: PropTypes.func.isRequired,
};

export default PricingCounter;
