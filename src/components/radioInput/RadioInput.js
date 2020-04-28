import React from "react";
import PropTypes from "prop-types";

import "./RadioInput.css";
const RadioInput = (props) => {
  const {
    radioName,
    customClass,
    name,
    id,
    selectedClass,
    onSelectOption,
  } = props;
  return (
    <div onClick={(e) => onSelectOption(e, name)}>
      <div
        className={selectedClass ? "form-check selected-option" : "form-check"}
      >
        <input
          className={customClass}
          type="radio"
          name={name}
          id={id}
          checked={selectedClass}
        />
        <label
          className="form-check-label"
          htmlFor={id}
          onClick={(e) => onSelectOption(e, name)}
        >
          {radioName}
        </label>
      </div>
    </div>
  );
};

RadioInput.propTypes = {};

export default RadioInput;
