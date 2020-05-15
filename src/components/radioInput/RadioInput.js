import React, { useState } from "react";
import PropTypes from "prop-types";

import "./RadioInput.css";
const RadioInput = (props) => {
  const [checkedCategory, setCheckedCategory] = useState(false);
  const {
    radioName,
    customClass,
    name,
    id,
    selectedClass,
    onSelectOption,
  } = props;


  const toggleInput = () => {
    setCheckedCategory(!checkedCategory);
  };

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
