import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./SelectInput.css";

const SelectInput = (props) => {
  const { placeHolder } = props;
  return (
    <div className="select-container">
      <label className="filter-select-label">
        <FontAwesomeIcon className="card-icon" icon="chevron-down" />
      </label>
      <select id="cars" className="form-control filter-select">
        <option value="volvo">{placeHolder}</option>
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="opel">Opel</option>
        <option value="audi">Audi</option>
      </select>
    </div>
  );
};

SelectInput.propTypes = {
  placeHolder: PropTypes.string
};

export default SelectInput;
