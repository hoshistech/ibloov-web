import React from "react";

import "./RadioInput.css";
const RadioInput = (props) => {
  const { radioName, name, id, selectedClass, onSelectOption } = props;

  return (
    <div id={id} className="row restriction-container">
      <div
        className={selectedClass ? "form-check selected-option" : "form-check"}
        id={id}
      >
        <div
          className="container-circle"
          onClick={(e) => onSelectOption(e, name, id)}
        >
          <div className="inner-circle"></div>
        </div>
        <label
          className="form-check-label"
          htmlFor={id}
          onClick={(e) => onSelectOption(e, name)}
          id={id}
        >
          {radioName}
        </label>
      </div>
    </div>
  );
};

RadioInput.propTypes = {};

export default RadioInput;
