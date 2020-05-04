import React from "react";
import PropTypes from "prop-types";
import Button from "../button/Button";

import "./PricingCounter.css";
const PricingCounter = (props) => {
  return (
    <div>
      <Button
        customClassName="pricing-counter-btn left-btn bold-600"
        onClick={() => {}}
        btndisabled={false}
      >
        -
      </Button>
      <input type="number" className="pricing-number" max="3" min="1" />
      <Button
        customClassName=" pricing-counter-btn right-btn  bold-600"
        onClick={() => {}}
        btndisabled={false}
      >
        +
      </Button>
    </div>
  );
};

PricingCounter.propTypes = {};

export default PricingCounter;
