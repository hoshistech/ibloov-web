import React from "react";
import PropTypes from "prop-types";
import "./Toggle.css";

const Toggle = (props) => {
  const { handleClick } = props;
  return (
    <label className="switch">
      <input className="slider-input" type="checkbox" onChange={handleClick} />
      <span className="slider round"></span>
    </label>
  );
};

Toggle.propTypes = {
  handleClick: PropTypes.func,
};

export default Toggle;
