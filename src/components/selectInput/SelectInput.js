import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./SelectInput.css";

const SelectInput = props => {
  const { placeHolder, options, onSelectCategory } = props;
  return (
    <div className="select-container">
      <label className="filter-select-label">
        <FontAwesomeIcon className="card-icon" icon="chevron-down" />
      </label>
      <select id="cars" className="form-control filter-select" onChange={onSelectCategory}>
        <option value="all">{placeHolder}</option>
        {options
          ? options.map(option => (
              <option key={option} value={option}>
                {option}
              </option>
            ))
          : ""}
      </select>
    </div>
  );
};

SelectInput.propTypes = {
  placeHolder: PropTypes.string
};

export default SelectInput;
