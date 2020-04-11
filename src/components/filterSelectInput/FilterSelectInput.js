import React, { Fragment } from "react";
import PropTypes from "prop-types";
import SelectInput from "../selectInput/SelectInput";

const FilterSelectInput = (props) => {
  const { empty, placeHolder, label } = props;
  return (
    <div className="filter-input-container">
      {empty ? (
        ""
      ) : (
        <Fragment>
          <label htmlFor="date">{label}</label>
          <SelectInput placeHolder={placeHolder} />
        </Fragment>
      )}
    </div>
  );
};

FilterSelectInput.propTypes = {};

export default FilterSelectInput;
