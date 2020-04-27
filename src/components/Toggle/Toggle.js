import React from "react";
import PropTypes from "prop-types";
import "./Toggle.css";

const Toggle = () => {
  return (
    <label class="switch">
      <input className='slider-input' type="checkbox" />
      <span class="slider round"></span>
    </label>
  );
};

Toggle.propTypes = {
  classToggle: PropTypes.string,
  handleClick: PropTypes.func,
  handleClicker: PropTypes.func,
};

export default Toggle;
