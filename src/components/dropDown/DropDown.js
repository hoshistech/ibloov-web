import React, { useState } from "react";
import PropTypes from "prop-types";

import "./DropDown.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DropDown = (props) => {
  const { toggleDropdownOption, showDropDown } = props;
  // const [showDropDown, setShowDropDown] = useState(false);

  // if (condition) {

  // }

  // const toggleDropdownOptionHandler = () => {
  //   setShowDropDown(!showDropDown);
  // };

  const dropdownToggle = showDropDown ? "open-dropdwon" : "close-dropdown";
  return (
    <div className="dropdown-container">
      <div
        className="dropdown-title"
        // onClick={() => toggleDropdownOptionHandler("dropdownId")}
        onClick={() => toggleDropdownOption("dropdownId")}
        name="dropdownId"
      >
        Sort:
        <div className="dropdown-selected" name="dropdownId">
          Most Popular
        </div>
        <span name="dropdownId">
          <FontAwesomeIcon className="dropdown-icon" icon="chevron-down" />
        </span>
      </div>
      <div className={`dropdown-option-container ${dropdownToggle}`}>
        <p className="dropdown-option">op 1</p>
        <p className="dropdown-option">op 2</p>
        <p className="dropdown-option">op 3</p>
        <p className="dropdown-option">op 4</p>
      </div>
    </div>
  );
};

DropDown.propTypes = {};

export default DropDown;
